// pages/openIndex/openIndex.js
import request from "../../network/request"
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  now() {
    // https://manage.shrlxl.com/index.php/api/index/get_config
    var token = wx.getStorageSync('token')
    request("/index/get_config", "get", token).then(res => {
      console.log("获取配置", res)
      wx.setStorageSync('test_membercode', res.data.test_membercode)
      wx.setStorageSync('is_support_consulting_service', res.data.is_support_consulting_service)
      if (!res.data.is_phone_auth) {
        wx.redirectTo({
          url: '/pages/starIndex/starIndex',
        })
      } else {
        wx.navigateTo({
          url: '/pages/login/index',
        })
      }
    })
  },
  onShareAppMessage: function () {
    return {
      title: '好梦之旅',
      imageUrl:'https://manage.shrlxl.com//public/lightmindfile/image/schedule/sleepstress.png',
      path: '/pages/openIndex/openIndex'
    }
  }
})