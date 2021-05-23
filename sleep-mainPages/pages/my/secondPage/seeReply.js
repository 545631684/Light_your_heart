// sleep-mainPages/pages/my/secondPage/seeReply.js
import request from "../../../../network/request"
Page({

    /**
     * 页面的初始数据
     */
    data: {
        listData:[]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        let _this = this
        // 默认打开直接在最底部查看最新消息
        wx.pageScrollTo({ scrollTop: 100, duration: 100 });
        request("/member/get_all_message", 'post', {MemberCode:'LM-bLBIrolr',doctorid:options.doctor_id,user_id:options.user_id}, _this.data.token).then(res => {
            console.log('咨询回复数据',res)
            _this.setData({
                listData:res.data.list
            })
            // if(res.data.list.length != 0) _this.setData({interviewData:res.data.list})
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

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})