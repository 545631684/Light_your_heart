// pages/addtime/addtime.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num:0,
    value:[],
    hours:[],
    fz:[],
    index1:["0","0","0"]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var hours = [];
    var fz = [];
    for(var i = 0; i <= 23; i++){
      if(i<10){
        i = "0"+i;
      }
      hours.push(i)
    }
    for(var i = 0; i <= 59; i++){
      if(i<10){
        i = "0"+i;
      }
      fz.push(i)
    }
    this.setData({
      hours:hours,
      fz:fz
    })
  },
  bindChange(e) {
    console.log(e);
    this.setData({
      index1:e.detail.value
    })
    console.log(this.data.index1,this.data.value);
  },
  subtract(){
    console.log(this.data.num)
    var num = --this.data.num;
    if(num<=0){
      num=0;
    }
    this.setData({
      num:num
    })
  },
  add(){
    console.log(this.data.num)
    var num = ++this.data.num;
    this.setData({
      num:num
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
  seve(){
    let pages = getCurrentPages();
    let prevPage = pages[pages.length - 2];
    var time = this.data.index1;
    time = (time[1]>=10?time[1]:"0"+time[1])+":"+(time[2]>=10?time[2]:"0"+time[2]);
    prevPage.data.arry.push({
      time:time,
      fz:this.data.num
    });
    prevPage.setData({
      arry:prevPage.data.arry
    })
    console.log(prevPage.data.arry);
    wx.navigateBack({
      delta: 1,
    })
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