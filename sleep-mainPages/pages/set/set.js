// sleep-mainPages/pages/set/set.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        show:false
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },
    share(){
        // this.onShareTimeline()
        this.setData({
            show:true
        })
        // wx.showShareMenu({
        //     menus: ['shareAppMessage', 'shareTimeline'],
        //     success(res) {
        //       console.log(res)
        //     },
        //     fail(e) {
        //       console.log(e)
        //     }
        //   })
      
    },
    onClose(){
        this.setData({
            show:false
        })
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
    pengyouquan(){
        wx.showToast({
          title: '正在开发中...',
          icon:'none'
        })
        this.setData({
            show:false
        })
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

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {
        this.setData({
            show:false
        })
        return {
            title: '好梦之旅',
            imageUrl:'https://manage.shrlxl.com//public/lightmindfile/image/schedule/sleepstress.png',
            path: '/pages/openIndex/openIndex'
          }
    },
    onShareTimeline() {
        let _this = this;
        return {
          title:"好梦之旅",
          query: "/pages/index/index"
        };
      },
})