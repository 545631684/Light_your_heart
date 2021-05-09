// sleep-testPages/pages/TestBox/TestBox.js
import request from "../../../network/request"
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  toTestList(e) {
    wx.navigateTo({
      url: '/sleep-testPages/pages/TestList/TestList?id=' + e.currentTarget.dataset.id,
    })
  },
  getList() {
    var token = wx.getStorageSync('token')
    request("/test/course_category", "get", token).then(res => {
      console.log("获取测试模块列表", res)
      this.setData({
        list: res.data.data,
        current: res.data.data[0].id
      })
      this.getTestList(res.data.data[0].id)
    })
  },
  getTestList(id) {
    var token = wx.getStorageSync('token')
    request("/test/courses?cateid=" + id, "get", token).then(res => {
      console.log("获取测试题目列表", res)
      this.setData({
        testList: res.data.data,
      })
    })
  },
  navTab(e) {
    this.setData({
      current: e.currentTarget.dataset.index
    });
    this.getTestList(e.currentTarget.dataset.index)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getList()
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