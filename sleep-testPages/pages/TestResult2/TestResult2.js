// pages/TestQuestion2/TestQuestion2.js
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
      console.log(options,'答案类型2')
      var data = JSON.parse(options).result;
      console.log(data)
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