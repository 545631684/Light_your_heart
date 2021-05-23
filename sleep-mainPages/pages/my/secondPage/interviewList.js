// sleep-mainPages/pages/my/secondPage/interviewList.js
import request from "../../../../network/request"
Page({

    /**
     * 页面的初始数据
     */
    data: {
        interviewData:[],
        token:wx.getStorageSync('token')
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        var _this = this;
        var data = {
            'MemberCode': 'LM-bLBIrolr'
        };
        request("/member/get_all_consult", 'post', data, _this.data.token).then(res => {
            console.log('访谈数据',res)
            if(res.data.list.length != 0) _this.setData({interviewData:res.data.list})
        })
    },

    /**
     * 
     * 电话咨询
     */
    dialTel:function(e){
        request("/member/get_number", 'get', {id:e.currentTarget.dataset.id}, this.data.token).then(res => {
            console.log('获取咨询电话',res)
            if(res.data.code == 0){
                wx.makePhoneCall({
                    phoneNumber: res.data.msg.toString()
                }).catch((e)=>{
                    console.log('电话拨打报错',e)
                })
            } else if(res.data.code == 1){
                wx.showToast({
                    title: '咨询不存在',
                    icon: 'none'
                })
            } else if(res.data.code == 2){
                wx.showToast({
                    title: '还没到预约时间',
                    icon: 'none'
                })
            } else if(res.data.code == 3){
                wx.showToast({
                    title: '咨询已经结束',
                    icon: 'none'
                })
            }
        })
    },

    /**
     * 
     * 留言跳转
     */
    mySaveInfo(e) {
        wx.navigateTo({
            url: '/sleep-mainPages/pages/my/secondPage/saveInfo?user_id=' + e.currentTarget.dataset.user_id + '&doctor_id=' + e.currentTarget.dataset.doctor_id,
        })
    },
    /**
     * 
     * 查看回复跳转
     */
    mySeeReply(e) {
        wx.navigateTo({
            url: '/sleep-mainPages/pages/my/secondPage/seeReply?user_id=' + e.currentTarget.dataset.user_id + '&doctor_id=' + e.currentTarget.dataset.doctor_id,
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