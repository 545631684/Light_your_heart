// pages/day/day.js
import request from "../../../network/request"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    circlesize:200,
    // tab 切换
    tabArr: {
      curHdIndex: 1,
      curBdIndex: 1
    },
    Efficiency1:0
  },
  //tab切换
  tab: function (e) {
    //var dataId = e.currentTarget.dataset.id;
    var dataId = e.currentTarget.id;
    var obj = {};
    obj.curHdIndex = dataId;
    obj.curBdIndex = dataId;
    
    var self = this;
    if(dataId == 2){
      this.getWeek()
      if(this.data.GetUpAnalyse.length < 7){
        //出来一个确定取消框
        wx.showModal({
          title: '需要记录一周的睡眠才可以分析哦!',
          content: '快去记录中补填睡眠吧!',
          success (res) {
            if (res.confirm) {
                wx.navigateTo({
                  url: '/sleep-clockinPages/pages/WeeklySleepRecord/WeeklySleepRecord',
                })
            } else if (res.cancel) {
                         
                obj= {
                  curHdIndex:1,
                  curBdIndex:1                          
              }
            }
          }
        })
        return
      }
    }
    this.setData({
      tabArr: obj
    })
    console.log(obj);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getWeek()
    //判断是否记录睡眠,如果没有 弹出提示框, 并且进入记录睡眠
    var token = wx.getStorageSync('token');
    var MemberCode = wx.getStorageSync('MemberCode');  
    var time = new Date()  
    var Indexdata = {
        "memberCode":MemberCode,
        "dt":time.getFullYear()+"-"+(time.getMonth()+1)+"-"+(time.getDate())      
      } 

      var last7  = new Date(time.getTime()-86400000*7)
      var longtime = last7.getFullYear()+"年"+(last7.getMonth()+1)+"月"+(last7.getDate())+"日至"+ time.getDate()+"日"
      this.setData({
        longtime:longtime
      })
      request("/masterhypnotist/homeinfo",'post',Indexdata,token).then(res=>{
          console.log('获取是否记录睡眠',res);
          if(res.data.data.Efficiency == "0%" || res.data.data.Efficiency == null){
            // wx.showToast({
            //   title: '记录睡眠之后才可以分析哦!',
            //   icon: 'none'
            // })
            this.setData({
              isNull:true
            })
            wx.showModal({
              title: '记录睡眠后才可以分析睡眠哦!',
              content: '快回到首页记录睡眠吧!',
              showCancel:false,
              success (res) {
                if (res.confirm) {
                        wx.redirectTo({
                          url: '/sleep-mainPages/pages/college/college',
                        })
                  console.log('快去首页记录睡眠吧')
                } 
              }
            })
            // wx.navigateTo({
            //   url: '/sleep-additemPages/pages/RecordSleep/RecordSleep'
            // })
        }
      })


     // 获取系统信息
     wx.getSystemInfo({
      success: (res) => {
        console.log(res);
        this.setData({
          // 25:顶部控制切换的view高度
          contentHeight:res.windowHeight-25
        })
      }
    });
    var token = wx.getStorageSync('token');
    var MemberCode = wx.getStorageSync('MemberCode');
    // var time = new Date()
    var nowtime = time.getFullYear()+'-'+(time.getMonth()+1)+'-'+(time.getDate())
    console.log(nowtime,'今天日期')
    request("/masterhypnotist/getsleepinfobyday","GET",{"date":nowtime,"memberCode":MemberCode},token).then(res=>{
      console.log(res,"日分析");
      
     var allDate = this.getFormatDate(res.data.data.SleepingTime, res.data.data.WakeUpTime);
     console.log(allDate,"时间");
      var allFen = (allDate.day * 24 * 60 + allDate.hours * 60) - res.data.data.Duration;

     
      var liHours = Math.floor(allFen/60);
      var liFen = allFen%60;
  
      console.log(liHours,liFen,"结果");

      var haoshi = this.getFormatDate(res.data.data.Bedtime, res.data.data.SleepingTime);
    var haoshifen =  haoshi.hours*60+haoshi.minut;









      var DBedtime = (res.data.data.Bedtime).slice(10,16);
      var DSleepingTime = (res.data.data.SleepingTime).slice(10,16);
      var DWakeUpTime = (res.data.data.WakeUpTime).slice(10,16)
      var xiaolv = Math.floor(parseFloat(res.data.data.Efficiency))
      if(xiaolv >= 100){
        xiaolv =99
      }
      var S1 = DBedtime.slice(0,3);
      var S2 = DBedtime.slice(4,6);
      // console.log(DBedtime,S1,S2,);
      var S11 = DSleepingTime.slice(0,3);
      var S12 = DSleepingTime.slice(4,6);
      // console.log(DSleepingTime,S11,S12,);
      var S21 = DWakeUpTime.slice(0,3);
      var S22 = DWakeUpTime.slice(4,6);
      var SBedtime = [S1,S2];
      var SSleepingTime = [S11,S12];
      console.log(SBedtime,SSleepingTime);
      var rushuia = SSleepingTime[0]*60-SSleepingTime[1];
      var rushuib = SBedtime[0]*60-SBedtime[1];
      var rushui = rushuia - rushuib;
      if(rushui<=0 ){
        rushui =0
      }
      var nian = nowtime.slice(0,4);
      var yue = nowtime.slice(5,6);
      var ri = nowtime.slice(7,9);
    console.log(xiaolv)

        var durations =S21*60  - -S22  - -(24-S11)*60 -S12;
        console.log(durations)
        var hhh = Math.floor(durations/60)
        var mmm = durations%60
      var dus = liHours+'h'+liFen+'min'
        
        console.log(dus,'睡眠时长')
    this.setData({
        Bedtime:DBedtime,
        Tquantum:DSleepingTime + "-" + DWakeUpTime,
        SleepingTime:res.data.SleepingTime,
        SleepQuality:res.data.SleepQuality,
        Duration:dus,
        Efficiency1:xiaolv,
      asleep: haoshifen,
        NumberOfWakes:res.data.data.NumberOfWakes,
        Analyse:res.data.data.Analyse,
        dateline:nian + "年" + yue + "月" + ri + "日"
       })         




    });
    
  },
  getDay(){
   
  },
  getFormatDate(d1,d2){
    //d1作为一个变量传进来
    //如果时间格式是正确的，那下面这一步转化时间格式就可以不用了
    let dateBegin = new Date(d1.replace(/-/g, "/"));//将-转化为/，使用new Date
    let dateEnd = new Date(d2);//获取当前时间
    let dateDiff = dateEnd.getTime() - dateBegin.getTime();//时间差的毫秒数
    let dayDiff = Math.floor(dateDiff / (24 * 3600 * 1000));//计算出相差天数
    let leave1 = dateDiff % (24 * 3600 * 1000) //计算天数后剩余的毫秒数
    let hours = Math.floor(leave1 / (3600 * 1000))//计算出小时数
    //计算相差分钟数
    let leave2 = leave1 % (3600 * 1000) //计算小时数后剩余的毫秒数
    let minutes = Math.floor(leave2 / (60 * 1000))//计算相差分钟数
    //计算相差秒数
    let leave3 = leave2 % (60 * 1000) //计算分钟数后剩余的毫秒数
    let seconds = Math.round(leave3 / 1000)
    var obj = {
      day: dayDiff,
      hours:hours,
      minut: minutes
    }
    return obj;
    // console.log(" 相差 " + dayDiff + "天 " + hours + "小时 " + minutes + " 分钟" + seconds + " 秒")
  },
  getWeek(){
    var token = wx.getStorageSync('token');
    var MemberCode = wx.getStorageSync('MemberCode');
    console.log(token,MemberCode);
    var time = new Date()
    var now = time.getFullYear()+"-"+(time.getMonth()+1)+"-"+time.getDate();
    var lasttime = new Date(time.getTime()-86400000*7)
    var last = lasttime.getFullYear()+"-"+(lasttime.getMonth()+1)+"-"+lasttime.getDate();

   
    request("/masterhypnotist/getsleepinfobyweek","get",{beginDate:last,endDate:now,memberCode:MemberCode},token).then(res=>{
      console.log(res,'周分析')
      if(res.data.code>0){
        wx.showToast({
          title: res.data.msg,
          icon:'none'
        })
        return
      }
      var xiaolv = Math.floor(parseFloat(res.data.data.Efficiency))
      if(xiaolv >= 100){
        xiaolv =99
      }
      if(xiaolv <= 0){
        xiaolv = 75
      }
      this.setData({
        Efficiency2:xiaolv,
        Speed:res.data.data.Speed,
        Wake:res.data.data.Wake,
        GetUpAnalyse:res.data.data.GetUpAnalyse
      })
    })

  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

    // //  tab切换
    // swichNav: function( e ) {
    //   var that = this;
    //   if( this.data.currentTab === e.target.dataset.current ) {
    //       return false;
    //   } else {
    //       that.setData( {
    //           currentTab: e.target.dataset.current
    //       })
    //   }
    // },
    // bindChange: function( e ) {
    //   var that = this;
    //   that.setData( { currentTab: e.detail.current });
    // },
    // toChange: function() {
    //   let that = this;
    //   that.setData({
    //       isShow: !that.data.isShow
    //   })
    // },
})