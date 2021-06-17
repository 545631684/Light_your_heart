// sleep-mainPages/pages/my/secondPage/secondPage.js
import request from "../../../../network/request"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    email:'',
    textarea:'',
    ti: ['','']
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: options.title,
    })
    this.setData({
      title:options.title
    })
    // 获取后台提示语句
    let _this = this
    request("/feedback/config",'post',"",wx.getStorageSync('token')).then(res=>{
      let ti = res.data.data.content.split("\r\n"), tidata = []
      ti.map(s=>{
        tidata.push(s.replace(/\s/g,""))
      })
      _this.setData({
        ti:tidata
      })
    })
  },
  clearStorage(){
    wx.clearStorageSync();
    wx.reLaunch({
      url: '/pages/openIndex/openIndex',
    })
  },
  textareaBlur(e){
    this.setData({
      textarea:e.detail.value
    })
  },
  inputBlur(e){
    this.setData({
      email:e.detail.value
    })
  },
  submit(){
    console.log('意见内容',this.data.textarea)
    console.log('邮箱',this.data.email)
    let _this = this
    setTimeout(function(){
      if(!_this.data.textarea){
        wx.showModal({
          title: '提示',
          content: '请填写反馈内容',
          showCancel:false,
          success (res) {
          }
        })
        return
      }
      if(!_this.data.email || !(/^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(_this.data.email))){
        wx.showModal({
          title: '提示',
          content: '邮箱不能为空或邮箱格式不正确',
          showCancel:false,
          success (res) {
          }
        })
        return
      }
      wx.showLoading({})
      request("/feedback/record",'post',{MemberCode:wx.getStorageSync('MemberCode'),content:_this.data.textarea,email:_this.data.email},wx.getStorageSync('token')).then(res=>{
        wx.hideLoading({})
        wx.showModal({
          title: '提示',
          content: res.data.data,
          showCancel:false,
          success (res) {
            // 提交成功后清空提交内容
            _this.setData({
              email:'',
              textarea:'',
            })
          }
        })
      })
    },500)
    
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

  
})