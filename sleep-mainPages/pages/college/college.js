// pages/college/college.js
import Toast from '@vant/weapp/toast/toast'
import request from "../../../network/request"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    lunbo: [],
    recordYestereve: false,
    recordToday: false,
    amendYestereve: false,
    HealthHabit: false,
    currentIndex: 0,
    data: null,
    Bedtime: null,
    GetUpTime: null,
    cardList: [],
    showModal: false,
    name: "cc",
    none: "none",
    kong: true
  },
  swiperChange: function (e) {
    let {
      current
    } = e.detail;
    this.setData({
      currentIndex: current
    })
  },
  xqtz() {
    if (!this.data.Schedule.SameDayCode) {
      wx.showToast({
        title: "请您先完成睡眠日志再来听课",
        icon: 'none'
      })
      return;
    }
    wx.navigateTo({
      url: '/sleep-contentPages/pages/coursesCon/coursesCon?FId=' + this.data.Schedule.FId + '&RecordCode=' + this.data.Schedule.RecordCode,
    })
  },
  preventTouchMove: function () {},
  hideModal: function () {
    var that = this
    that.setData({
      showModal: false
    });
  },
  onConfirm: function () {
    this.setData({
      showModal: true
    })
    wx.navigateTo({
      url: '/sleep-testPages/pages/TestList/TestList',
    })
  },
  toolClick: function () {
    Toast('功能正在开发~');
  },
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: options.name || '好梦之旅',
    })
    this.setData({
      starid:options.id
    })
    //获取MemerCode 保存到storage
    this.login()

    var token = wx.getStorageSync('token');
    console.log(token)
    request("/publics/geticon", "GET", {
      ItemType: 2
    }, token).then(res => {
      this.setData({
        lunbo: res.data.data
      })
      if (res.data.data == "") {
        console.log("轮播图请求成功，暂无数据")
      }
    });
    // this.onLoad()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

    var token = wx.getStorageSync('token')
    // console.log(token)
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.getDaka()
    // this.login()
    var time = new Date()

    var token = wx.getStorageSync('token');
    var MemberCode = wx.getStorageSync('MemberCode');
    var Dt = wx.getStorageSync('Dt');
    var starid = this.data.starid
    // console.log(MemberCode)
    var data = {
      "memberCode": MemberCode,
      "dt": time.getFullYear() + "-" + (time.getMonth() + 1) + "-" + (time.getDate()),
      "starid":starid
      // "dt":"2020-7-7"
    }
    console.log(data, '请求首页的参数')
    request("/masterhypnotist/homeinfo", 'post', data, token).then(res => {
      console.log('请求数据lihui===', res);
      if (res.data.data && res.data.data.Schedule) {
        this.setData({
          Schedule: res.data.data.Schedule
        })
        console.log(res.data.data.Schedule, '课程')
      }
      if (res.data.data && res.data.data.Train) {
        this.setData({
          Train: res.data.data.Train
        })
        console.log(res.data.data.Train, '训练')
      }
      if (res.data.data && res.data.data.Sleep) {
        wx.setStorageSync('SFId', res.data.data.Sleep.FId)
      }
      if (res.data.data && res.data.data.Activity) {
        wx.setStorageSync('ActivityCode', res.data.data.Activity.ActivityCode);
      }

      if (res.data.data && res.data.data.Sleep == null) {
        this.setData({
          // 记录昨晚睡眠
          recordYestereve: true,
          // showModal: true
        })
      } else {
        this.setData({
          // 记录昨晚睡眠
          recordYestereve: false,
          // showModal: true
        })
      }


      if (res.data.data && res.data.data.Sleep) {

        wx.setStorageSync('FId', res.data.data.Activity.FId);
        var Bedtime = (res.data.data.Bedtime)
        var GetUpTime = (res.data.data.GetUpTime)
        console.log(Bedtime, GetUpTime)
        // console.log(res.data.data.Efficiency)
        var xiaolv = res.data.data.Efficiency;
        var sss = Math.floor(xiaolv.substr(0, xiaolv.length - 1))
        var xiaolvs = sss >= 99 ? xiaolvs = 99 : xiaolvs = sss;
        if (xiaolvs < 0) {
          xiaolvs = 0;
          GetUpTime = "0min";
        }
        console.log(xiaolvs)
        this.setData({
          // 记录白天行为
          recordToday: true,
          recordYestereve: false,
          Bedtime: Bedtime,
          GetUpTime: GetUpTime,
          data: xiaolvs

        })
      }

      if (res.data.data && res.data.data.Activity.IsDaytimeBehavior) {
        // 修改白天，昨晚
        this.setData({
          amendYestereve: true,
          recordToday: false,
          recordYestereve: false,
        })

        // }else if(res.data.data.Activity.IsHealthHabit){
        //   // 修改睡眠记录
        //     this.setData({
        //       HealthHabit:true
        //     })
      }

      var habitArry = wx.getStorageSync('habitArry')
      if (habitArry) {
        habitArry = JSON.parse(habitArry)
        // wx.setStorageSync('habit', res.data.data.Habit.Habit)
        this.setData({
          none: "block"
        })
      }
      // if( res.data.data && res.data.data.Habit != null){
      // 选择卫生习惯后
      // }
    })






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
  xuanze() {

    wx.navigateTo({
      url: '/sleep-clockinPages/pages/somnus/somnus',
    })

  },
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  weishengxiguan() {
    wx.navigateTo({
      url: '/sleep-clockinPages/pages/adhereclockin/adhereclockin'
    })
  },
  tishi() {
    wx.showToast({
      title: '请先记录今天的睡眠 !',
      icon: 'none'
    })
  },
  login() {
    wx.login({
      success: (res) => {
        // console.log(res);
        var code = res.code;
        request("/login/wxlogin", "get", {
          code: code
        }).then(res => {
          console.log('mem',mem)
          // console.log(res.data.data.member.MemberCode,res.data.data.member.LastLoginTime)
          // var time = res.data.data.member.LastLoginTime;
          var mem = res.data.data.member.MemberCode;
          wx.setStorageSync('MemberCode', mem);
          // wx.setStorageSync('Dt', time);
          this.onShow()
        })
      }
    })
  },
  getDaka() {
    var token = wx.getStorageSync('token')
    var MemberCode = wx.getStorageSync('MemberCode')
    var ActivityCode = wx.getStorageSync('ActivityCode')
    var data = {
      "MemberCode": MemberCode,
      "ActivityCode": ActivityCode
    }
    request("/masterhypnotist/getmemberhabit", "post", data, token).then(res => {
      console.log("获取轮播图的数据", res)
      if (res.data.data && res.data.data.length > 0) {
        this.setData({
          kong: false,
          lunboArr: res.data.data
        })
      } else {
        this.setData({
          kong: true
        })
      }
    })
  },
  toTestList(){
    wx.navigateTo({
      url: '/sleep-testPages/pages/TestBox/TestBox',
    })
  },
  toTrainDetail(e){
    wx.navigateTo({
      url: '/sleep-contentPages/pages/coursesCon2/coursesCon2?FId=' + e.currentTarget.dataset.id,
    })
  },
  toMyCourses(){
    wx.navigateTo({
      url: '/sleep-contentPages/pages/myCourses/myCourses?starid=' + this.data.starid,
    })
  }
})