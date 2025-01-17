// sleep-mainPages/pages/my/secondPage/saveInfo.js
import request from "../../../../network/request"
Page({

    /**
     * 页面的初始数据
     */
    data: {
        MemberCode:wx.getStorageSync('MemberCode')
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        let _this = this
        wx.showLoading({
            title: '加载中',
          })
        request("/member/get_message_list", 'get', {MemberCode:_this.data.MemberCode}).then(res => {
            console.log('留言列表数据',res)
            if(res.data.list.length !== 0){
                res.data.list.map(o=>{
                    if(Object.keys(o.message_detail).length != 0){
                        let date = new Date(o.message_detail.add_time)
                        o.xiaoxi = true
                        o.message_detail.rq = (date.getMonth() + 1) + '月' + date.getDate() + '日'
                        o.message_detail.time =date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()
                    } else {
                        o.xiaoxi = false
                    }
                    
                })
            }
            _this.setData({
                listData:res.data.list,
                role:res.data.role
            })
            wx.hideLoading()
        })
        this.setData({
            doctor_id:options.doctor_id,
            user_id:options.user_id,
        })
    },
    /**
     * 留言对话页跳转
     */
    stayInfo(e){
        let userid = e.currentTarget.dataset.userid;
        let doctorid = e.currentTarget.dataset.doctorid;
        wx.navigateTo({
        url: '/sleep-mainPages/pages/my/secondPage/seeReply?user_id=' + userid + '&doctor_id=' + doctorid,
        })
    },
    /**
     * 复选框切换
     */
    radioChange:function(e){
        console.log(e.currentTarget.dataset.index)
        this.setData({
            tab_index:e.currentTarget.dataset.index,
            type:e.currentTarget.dataset.index,
            mycontent:''
        })
    },

    /**
     * 文本框赋值
     */
    bindTextAreaBlur: function(e) {
        this.setData({
            mycontent:e.detail.value
        })
    },

    /**
     * 上传文件
     */
    uploadImg:function(){
        var that = this;
        // 上传是检测是否有值
        if(this.data.mycontent.length != 0){
            wx.showToast({
                title: '您已上传图片，如需要重新上传退出此页重新进入即可',
                icon: 'none'
            })
            return
        }
        wx.chooseImage({
            count: 1,
            sizeType: ['original', 'compressed'],
            sourceType: ['album', 'camera'],
            success(res) {
                const tempFilePaths = res.tempFilePaths[0]
        
                wx.uploadFile({
                    url: 'https://manage.shrlxl.com/index.php/api/Publics/wxappuploadimg', //开发者服务器的 url
                    filePath: tempFilePaths, // 要上传文件资源的路径 String类型！！！
                    name: 'file', // 文件对应的 key ,(后台接口规定的关于图片的请求参数)
                    header: {
                        'mycontent-type': 'multipart/form-data',
                        'token': wx.getStorageSync('token')
                    }, // 设置请求的 header
                    formData: {}, // HTTP 请求中其他额外的参数
                    success: function (res) {
                        console.log('上传文件返回数据',res.data);
                        var ob = JSON.parse(res.data);
                        that.setData({
                            mycontent: ob.info
                        })
                    },
                    fail: function (res) {
                    }
                })
            }
        })
    },
    
    // 提交留言
    saveinfo_submit:function(){
        let _this = this
        // 订阅消息
        wx.requestSubscribeMessage({
            tmplIds: ['C4tFmUVFKYFVzC1kgbgXA7K8QI75kK0Kj4J6BliDme8'],
            success (res) { 
                console.log('订阅消息状态',res)
                // 延迟一秒执行，给文本框赋值争取时间
                setTimeout(function(){
                    if(_this.data.doctor_id != '' && _this.data.user_id != '' && _this.data.mycontent != ''){
                        request("/member/submit_message", 'get', {MemberCode:_this.data.MemberCode,doctor_id:_this.data.doctor_id,user_id:_this.data.user_id,mycontent:_this.data.mycontent,type:_this.data.type}, _this.data.token).then(res => {
                            console.log('提交留言返回数据',res)
                            if(res.data.code == 0 && res.data.msg == '添加成功'){
                                wx.showToast({
                                    title: res.data.msg,
                                    icon: 'none'
                                })
                                wx.navigateTo({
                                    url: '/sleep-mainPages/pages/my/secondPage/interviewList',
                                })
                                
                            }
                        })
                    } else {
                        wx.showToast({
                            title: '请填写留言信息后在提交',
                            icon: 'none'
                        })
                    }
                },1000)
            }
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