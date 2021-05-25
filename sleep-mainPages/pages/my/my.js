// pages/my/my.js
import request from "../../../network/request"
Page({

  /**
   * 页面的初始数据
   */
  data: {},
  onLoad: function (options) {
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
  },
  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认
    // 开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    var MemberCode = wx.getStorageSync('MemberCode')
    var token = wx.getStorageSync('token')
    wx.getUserProfile({
      desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log('用于完善会员资料',res)
        this.setData({
          nickName: res.userInfo.nickName,
          avatarUrl: res.userInfo.avatarUrl,
        })
        wx.setStorageSync('nickName', res.userInfo.nickName)
        wx.setStorageSync('avatarUrl', res.userInfo.avatarUrl)
        request("/index/update_user_info", "get", {
          MemberCode: MemberCode,
          NickName: res.userInfo.nickName,
          HeadImg: res.userInfo.avatarUrl
        }, token).then(res => {
          console.log(res, '更新头像昵称')
        })
        console.log('头像',this.data.nickName)
        console.log('昵称',this.data.avatarUrl)
      }
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var token = wx.getStorageSync('token')
    var userId = wx.getStorageSync('userId')
    request("/member/info", "get", {
      userId: userId
    }, token).then(res => {
      console.log(res, '获取个人信息')
      var userinfor = res.data.data;
      var that = this;
      if (userinfor) {
        that.setData({
          nickName: userinfor.NickName || wx.getStorageSync('nickName'),
          avatarUrl: userinfor.HeadImg || wx.getStorageSync('avatarUrl'),
          interview_count:userinfor.interview_count||0,
          test_count:userinfor.test_count||0,
          message_count:userinfor.message_count||0
        })
      }
    })
    
  },
  // 修改个人信息
  goSet() {
    wx.navigateTo({
      url: '/sleep-mainPages/pages/set/set',
    })
  },
  // 我的量表
  myMeasurement() {
    wx.navigateTo({
      url: '/sleep-testPages/pages/TestList/TestList',
    })
  },
  // 我的访谈记录
  myInterview() {
    wx.navigateTo({
      url: '/sleep-mainPages/pages/my/secondPage/interviewList',
    })
  },
  // 我的留言列表
  myStayInfo() {
    wx.navigateTo({
      url: '/sleep-mainPages/pages/my/secondPage/stayInfoList',
    })
  },
  goModify() {
    wx.navigateTo({
      url: '/sleep-mainPages/pages/modifyuserinfo/index',
    })
  },
  onShareAppMessage: function () {
    return {
      title: '好梦之旅',
      imageUrl:'https://manage.shrlxl.com//public/lightmindfile/image/schedule/sleepstress.png',
      path: '/pages/openIndex/openIndex'
    }
  },
  toSecondPage(e) {
    var title = e.currentTarget.dataset.title;
    wx.navigateTo({
      url: '/sleep-mainPages/pages/my/secondPage/secondPage?title=' + title,
    })
  }
})