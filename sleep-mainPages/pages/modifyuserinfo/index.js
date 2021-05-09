// sleep-mainPages/pages/modifyuserinfo/index.js
import request from "../../../network/request"
Page({

    /**
     * 页面的初始数据
     */
    data: {

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        //获取个人资料
        var http = "https://manage.shrlxl.com/index.php/api/";
        var token = wx.getStorageSync('token')
        var MemberCode = wx.getStorageSync('MemberCode')
        var userId = wx.getStorageSync('userId')
         request("/member/info","get",{userId:userId},token).then(res=>{
                console.log(res,'获取个人信息')
                if(res.data.data){
                    var sex = res.data.data.Sex;
                    if(sex==0 && sex != null){
                        sex = sex ==0 ?'男' : '女'
                    }
                    var img  = res.data.data.HeadImg;
                    var age = (res.data.data.BirthDay=="string")?"10":res.data.data.BirthDay;
                    this.setData({
                        img:img,
                        name:res.data.data.NickName,
                        sex:sex,
                        age:age,
                        phone:res.data.data.Mobile,
                        id:res.data.data.UserId,
                        showid:res.data.data.UserId.substr(0,10)+'...'                  
                    })
                 }
        })
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {
        var arr = []
        for(var i = 10;i<100 ;i++){
            arr.push(i)
        }
        this.setData({
            ageArr:arr
        })
    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },
    chooseImageTap(){
        var that = this;
        wx.showActionSheet({
        itemList: ['从相册中选择', '拍照'],
        itemColor: "#00000",
        success: function (res) {
            if (!res.cancel) {
            if (res.tapIndex == 0) {
                that.chooseWxImage('album')
            } else if (res.tapIndex == 1) {
                that.chooseWxImage('camera')
            }
            }
        }
        })
    },
    // 图片本地路径
    chooseWxImage: function (type) {
        var that = this;
        var imgsPaths = that.data.imgs;
        wx.chooseImage({
        sizeType: ['original', 'compressed'],
        sourceType: [type],
        success: function (res) {
            const tempFilePaths = res.tempFilePaths
            
            that.setData({
                img:tempFilePaths[0]
            })
            that.upImgs() //调用上传方法
            
            // wx.getFileSystemManager().readFile({
            //     filePath: res.tempFilePaths[0], //选择图片返回的相对路径
            //     encoding: 'base64', //编码格式
            //     success: res => { //成功的回调
            //         that.setData({
            //             img:'data:image/png;base64,' + res.data
            //         })
            //         that.upImgs() //调用上传方法
            //     }
            //   })
            
        }
        }) 
    },
    //上传服务器
    upImgs: function () {
        var token = wx.getStorageSync('token')
        var data = {
            base64Str:this.data.img
        }
        // console.log(data,token)
        // request("/public/wxappuploadimg","post",data,token).then(res=>{
        //           console.log(res,'上传图片')
        // })

        wx.uploadFile({
            url: "https://manage.shrlxl.com/index.php/api/publics/wxappuploadimg",
            data: data,
            filePath:this.data.img,
            header: {
                Authorization:token
            },
            method: "post",
            dataType: 'json',
            responseType: 'text',
            success: (res) => {
                console.log(res,'上传图片')           
            }
          })
    },
    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {

    },
    submit(){
        var token = wx.getStorageSync('token')
        var MemberCode = wx.getStorageSync('MemberCode')
        var userId = wx.getStorageSync('userId')
        var openid = wx.getStorageSync('openid')
        var FId = wx.getStorageSync('SFId')
        console.log(FId,"--0000");
        // return
        var sex = this.data.sex=="男"?0:1;
        var params = {      
            "FId":FId,     
            "OpenId": openid,
            "HeadImg": this.data.img,
            "NickName": this.data.name,
            "UserName": this.data.name,
            "Sex": sex,
            "Birthday": this.data.age
          }
          console.log(params)
         request("/member/update","post",params,token).then(res=>{
        //         console.log(token,res,'保存图片')
        if(res.data.code==0){
            wx.navigateBack();
        }

        })


       
    },
    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },
    slectSex(e){
        this.setData({
            sex:e.detail.value == 0 ? '男' : '女'
        })
    },
    slectAge(e){
        console.log(e,"------");
        this.setData({
            age:e.detail.value - -10
        })
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