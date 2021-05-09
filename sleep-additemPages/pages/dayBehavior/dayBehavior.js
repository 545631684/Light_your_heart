// pages/dayBehavior/dayBehavior.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    zzwArry:["茶水","咖啡","酒精","药物","饱餐","运动"],
    day:[{
      "id":0,
      "zzw":[]
    },{
      "id":1,
      "zzw":[]
    },{
      "id":2,
      "zzw":[]
    },{
      "id":3,
      "zzw":[]
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  onCheckbox(e){
    console.log(e);
    for(var i = 0; i < this.data.day.length; i++){
      if(e.currentTarget.dataset.id==this.data.day[i].id){
        this.data.day[i].zzw = e.detail;
      }
      this.setData({
        day:this.data.day
      })
    }
    console.log(this.data.day);
  },
  rtn(){
    let pages = getCurrentPages();
    let prevPage = pages[pages.length - 2];
    for(var i = 0; i < this.data.day.length; i++){
      var str = "";
      prevPage.data.sz[i].con = str;
    }
    prevPage.setData({
      sz:prevPage.data.sz,
      day:this.data.day
    })
    wx.navigateBack()
  },
  seve(){
    console.log(this.data.day[0].zzw.length,this.data.day[1].zzw.length,this.data.day[2].zzw.length,this.data.day[3].zzw.length)
    if(this.data.day[0].zzw.length==0&&this.data.day[1].zzw.length==0&&this.data.day[2].zzw.length==0&&this.data.day[3].zzw.length==0){
      wx.showToast({
        title: '至少选中一个选项',
        icon: 'none'
      })
      console.log(11);
      return;
    }
    let pages = getCurrentPages();
    let prevPage = pages[pages.length - 2];
    for(var i = 0; i < this.data.day.length; i++){
      var str = "";
      for(var j = 0; j < this.data.day[i].zzw.length; j++){
        if(j == this.data.day[i].zzw.length-1){
          str+=this.data.zzwArry[this.data.day[i].zzw[j]]
        }else{
          str+=this.data.zzwArry[this.data.day[i].zzw[j]]+"/"
        }
      }
      console.log(str);
      str = str==''?'未选择':str;
      prevPage.data.sz[i].con = str;
    }
    prevPage.setData({
      sz:prevPage.data.sz,
      day:this.data.day
    })
    console.log(prevPage.data.sz,prevPage.data.day);
    wx.navigateBack({
      delta: 1,
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