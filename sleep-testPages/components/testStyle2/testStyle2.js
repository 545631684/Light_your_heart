// pages/testStyle2/testStyle2.js
import request from "../../../network/request"
Component({

    /**
     * 页面的初始数据
     */
    properties: {
        type:Number,
        question:{
            type:Array,
            value:[]
        },
        answer:{
            type:Number,
            value:0
        },
        title:{
            type:String,
            value:''
        }
    },
    data: {
        result:{}
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

    methods:{
        result(e){
            var res = e.detail     
            var result = this.data.result
            result[res.name] = res.index
            this.setData({
                result:result
            })
            console.log(this.data.result)
        },
        tijiao(){
            console.log(this.properties.question,this.properties.answer,this.data.result,"---------");
            var questions = this.properties.question;
            var answers = this.data.result;
            for(var i=0;i<questions.length;i++){
                questions[i].score = answers["test"+(i+1)];
            }
            console.log(questions,"最终结果");
            this.triggerEvent("result",{
                result:this.data.result,
                questions:questions
            })    
        }

    }
})