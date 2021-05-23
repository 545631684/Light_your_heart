// sleep-mainPages/pages/my/secondPage/seeReply.js
import request from "../../../../network/request"
Page({

    /**
     * 页面的初始数据
     */
    data: {
        listData:[],
        speakNav:false,
        doctor_id:0,
        user_id:0,
        mycontent:'',
        type:1,
        token:wx.getStorageSync('token')
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        let _this = this
        this.setData({
            doctor_id:options.doctor_id,
            user_id:options.user_id,
        })
        this.getMessage()
        // 延时1秒后滑动最底部
        setTimeout(function(){
            _this.speakHide()
            _this.scrollTopBottom()
        },1000)
    },

    /**
     * 获取对话数据
     */
    getMessage:function(){
        let _this = this
        request("/member/get_all_message", 'post', {MemberCode:'LM-bLBIrolr',doctorid:_this.data.doctor_id,user_id:_this.data.user_id}, _this.data.token).then(res => {
            console.log('咨询回复数据',res)
            _this.setData({
                listData:res.data.list,
            })
            _this.speakHide()
            // if(res.data.list.length != 0) _this.setData({interviewData:res.data.list})
        })
        
    },

    /**
     * 输入菜单显示
     */
    speakShow:function(){
        this.setData({
            speakNav:!this.data.speakNav
        })
        // this.scrollTopBottom()
    },
    /**
     * 输入菜单隐藏
     */
    speakHide:function(){
        this.setData({
            speakNav:false
        })
        // this.scrollTopBottom()
    },

    /**
     * 滚动到底部
     */
    scrollTopBottom:function(){
        // 默认打开直接在最底部查看最新消息
        wx.createSelectorQuery().select('#j_page').boundingClientRect(function(rect){
            console.log(rect.bottom)
            // 使页面滚动到底部
            wx.pageScrollTo({
            scrollTop: rect.bottom,
            duration: 300 
            })
        }).exec()
    },
    /**
     * 上传文件
     */
    uploadImg:function(){
        var that = this;
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
                            mycontent2: ob.info,
                            type:2
                        })
                        that.saveinfo_submit()
                    },
                    fail: function (res) {

                    }
                })
            }
        })
    },

    /**
     * 文本框赋值
     */
    bindTextAreaBlur: function(e) {
        this.setData({
            mycontent:e.detail.value,
            type:1
        })
    },

    // 提交留言
    saveinfo_submit:function(){
        console.log('tijiao')
        let _this = this
        if(_this.data.doctor_id != '' && _this.data.user_id != '' && (_this.data.mycontent != '' || _this.data.mycontent2 != '')){
            // 订阅消息
            wx.requestSubscribeMessage({
                tmplIds: ['C4tFmUVFKYFVzC1kgbgXA7K8QI75kK0Kj4J6BliDme8'],
                complete (res) { 
                    console.log('订阅消息状态',res)
                    // 延迟一秒执行，给文本框赋值争取时间
                    setTimeout(function(){
                        request("/member/submit_message", 'get', {MemberCode:'LM-bLBIrolr',doctor_id:_this.data.doctor_id,user_id:_this.data.user_id,mycontent:_this.data.type == 2 ?_this.data.mycontent2:_this.data.mycontent,type:_this.data.type}, _this.data.token).then(res => {
                            console.log('提交留言返回数据',res)
                            if(res.data.code == 0 && res.data.msg == '添加成功'){
                                wx.showToast({
                                    title: res.data.msg,
                                    icon: 'none'
                                })
                                _this.setData({
                                    mycontent:''
                                })
                                // 提交成功后刷新对话数据
                                _this.getMessage()
                            }
                        })
                    },1000)
                }
            })
        } else {
            wx.showToast({
                title: '请输入内容',
                icon: 'none'
            })
        }
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {
        this.scrollTopBottom()
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