// pages/coursesCon/coursesCon.js
import request from "../../../network/request"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    video:"",
    state:true,
    currentTime:"00:00",
    duration:"00:00",
    jd:0,
    img:'',
    type:'',
    FId:'',
    title:'',
    js:'',
    p:'',
    seveLock:false,
    RecordCode:'',
    Sort:'',
    SameDayCode:'',
    state1:true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.data.RecordCode = options.RecordCode;
    wx.setInnerAudioOption({
      obeyMuteSwitch:false
     })
    console.log(options);
    this.sxyemian(options.FId);
  },
  back(){
    wx.navigateBack()
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },
  onSeve(e){
    this.setData({
      seveLock:false
    })
    // wx.pageScrollTo({
    //   scrollTop: 0
    // })
    wx.navigateBack()
//     var time = new Date();
//     var token = wx.getStorageSync('token');
//     var MemberCode = wx.getStorageSync('MemberCode');
//     var data = {
//         "memberCode":MemberCode,
//         "dt":time.getFullYear()+"-"+(time.getMonth()+1)+"-"+(time.getDate())
//         // "dt":"2020-7-7"
//     }
//     request("/masterhypnotist/homeinfo",'post',data,token).then(res=>{
//       console.log(res);
//       this.sxyemian(res.data.data.Schedule.RecordCode);
//       this.data.RecordCode = res.data.data.Schedule.RecordCode;
//       this.data.Sort = res.data.data.Schedule.Sort;
//       this.data.SameDayCode = res.data.data.Schedule.SameDayCode;
//     })
  },
  sxyemian(FId){
    var token = wx.getStorageSync('token');
    request('/masterhypnotist/scheduleinfo','get',{'FId':FId},token).then(res=>{
      console.log(res);
      console.log(res.data.data.Explain.split('。'));
      if(res.data.data.IsFinished==0){
        this.setData({
          state1:true
        })
      }else{
        this.setData({
          state1:false
        })
      }
      this.data.p = res.data.data.Explain.split('。');
      this.data.video = wx.createInnerAudioContext();
      this.data.video.title = '课程音乐'
      this.data.video.src = res.data.data.AudioFrequency;
      this.data.video.autoplay = false;
      this.setData({
        video:this.data.video,
        img:res.data.data.Image,
        type:res.data.data.Type,
        FId:res.data.data.FId,
        title:res.data.data.Titil,
        js:res.data.data.Introduce,
        p:this.data.p,
        Sort:res.data.data.Sort,
        SameDayCode:res.data.data.SameDayCode,
      })
      console.log('*************')
      console.log(this.data.p)
    })
  },
  play(){
    var video = this.data.video;
    if(this.data.state){
      video.onTimeUpdate(()=>{
        var fz = Math.floor(video.duration/60)>=10?Math.floor(video.duration/60):("0"+Math.floor(video.duration/60));
        var mm = Math.floor(video.duration%60)>=10?Math.floor(video.duration%60):("0"+Math.floor(video.duration%60));
        var jd = Math.floor(video.currentTime);
        if(jd<10){
          jd = "00:0"+jd;
        }else if(jd>59){
          var hh = Math.floor(jd/60);
          if(hh<10){
            hh = "0"+hh;
          }
          var ms = (Math.floor(jd%60))>=10?(Math.floor(jd%60)):"0"+(Math.floor(jd%60))
          jd = hh+":"+ms;
        }else{
          jd = "00:"+jd
        }
        this.data.currentTime = jd;
        this.data.duration = fz+":"+mm;
        this.setData({
          currentTime:this.data.currentTime,
          duration:this.data.duration,
          jd:video.currentTime/video.duration*100+"%"
        })
      });
      this.data.video.play();
    }else{
      this.data.video.pause();
    }
    this.setData({
      state:!this.data.state
    })
  },
  end(){
    this.setData({
      state:true
    })
  },
  touch(e){
    var touch = e.touches[0];
    var pageX = touch.pageX;
    this.data.video.seek(this.data.video.duration*(pageX/wx.getSystemInfoSync().windowWidth));
    this.setData({
      jd:Math.ceil(pageX/wx.getSystemInfoSync().windowWidth*100)+'%'
    })
  },
  wanc(){
    // if(!this.data.SameDayCode){
    //   wx.showToast({
    //     title: "请您先完成睡眠日志再来听课",
    //     icon: 'none'
    //   })
    //   return;
    // }
    this.data.video.stop();
    var token = wx.getStorageSync('token');
    var ActivityCode = wx.getStorageSync('ActivityCode');
    var MemberCode = wx.getStorageSync('MemberCode');
    var time = new Date();
    time = time.getFullYear()+"-"+(time.getMonth()+1)+"-"+time.getDate();
    if(!wx.getStorageSync('startTime')){
      wx.setStorageSync('startTime',time);
      console.log(wx.getStorageSync('startTime'));
    }
    var obj = {
      'FId':this.data.FId,
      "ActivityCode": ActivityCode,
      "MemberCode": MemberCode,
      "ScheduleCode": this.data.FId,
      "ScheduleType": this.data.type,
      "IsFinished":1,
      "Createtime": time,
      // "SameDayCode":this.data.SameDayCode,
      "Sort":this.data.Sort
    }
    console.log(typeof this.data.type,'数据类型')
    request('/masterhypnotist/finishschedule','post',obj,token).then(res=>{
      console.log(res);
      if(res.data.code==0){
        console.log(res);
        this.setData({
          seveLock:true
        })
      }else{
        console.log(res.data.msg);
      }
    })
    console.log(obj);
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
    this.data.video.stop();
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

})