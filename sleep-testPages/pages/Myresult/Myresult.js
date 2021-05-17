// sleep-testPages/pages/Myresult/Myresult.js
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
      console.log(JSON.parse(options.data));
      var data = JSON.parse(options.data);
      var Analyse = data.Analyse.split(";");
      var answers;
    if(options.problemType=="1"){
      answers = data.Answer.split(";");
      this.setData({
        info1:answers[0].split(":")[1],
        info2:answers[1].split(":")[1],
        info3:answers[2].split(":")[1],
      })
    }
    this.setData({
      tips:data.Answer,
      score:data.Score,
      title:data.Problem,
      time:data.HL,
      arry:Analyse,
      type:options.problemType
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

})