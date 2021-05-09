// pages/myCourses/myCourses.js
import request from "../../../network/request"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    wc:"去完成",
    ywc:"已完成",
    lb:[
      
    ],
    index:6,
    time:"",
    state:true,
    jindu:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      starid:options.starid
    })
  },
  wjs(){
    wx.showToast({
      title: "请您先完成睡眠日志再来听课",
      icon: 'none'
    })
  },
  shuaxin(){
    // var time = wx.getStorageSync('startTime');
    var date = new Date();
    // console.log(Math.floor((new Date(date).getTime()-new Date(time).getTime())/86400000));
    // time = time==''?0:(Math.floor((new Date(date).getTime()-new Date(time).getTime())/86400000));
    // if(time>=7){
      // wx.showToast({
        // title: '您已完成所有课程!',
        // icon: 'none'
      // })
      // time = 0;
    // }
    date = date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate()
    console.log(date);
    var token = wx.getStorageSync('token');
    var MemberCode = wx.getStorageSync('MemberCode');
    console.log({"MemberCode":MemberCode,"dt": date});
    request('/masterhypnotist/schedulelist?star_id='+this.data.starid,'post',{
      "MemberCode":MemberCode,
      "dt": date
    },token).then(res=>{
      console.log(res);
      if(res.data.code==0){
        var jindu = 0;
        for(var i = 0; i < res.data.data.res.length; i++){
          var obj = {
            "FId":res.data.data.res[i].FId,
            "src":res.data.data.res[i].Image,
            "title":res.data.data.res[i].Titil,
            "con":res.data.data.res[i].Introduce,
            "state":res.data.data.res[i].IsFinished,
            "audio":res.data.data.res[i].AudioFrequency,
            "RecordCode":res.data.data.res[i].RecordCode,
            "SameDayCode":res.data.data.res[i].SameDayCode
          }
          this.data.lb[i] = obj;
          if(res.data.data.res[i].IsFinished==1){
            jindu++;
          }
        }
        console.log(i,jindu);
        this.data.xiabiaoi = jindu;
        this.data.jindu = jindu*(100/i).toFixed(2);
        this.setData({
          xiabiaoi:this.data.xiabiaoi,
          lb:this.data.lb,
          jindu:this.data.jindu,
          habitcount:res.data.data.habitcount
        })
        console.log(this.data.lb);
      }else{
        wx.showToast({
          title: res.data.msg,
          icon: 'none'
        })
      }
    })
  },
  pause(){
    if(this.data.video){
      this.setData({
        state:true
      })
      this.data.video.pause();
    }
  },
  ontime(e){
    console.log(e);
  },
  navtz(e){
    if(this.data.lb[e.currentTarget.dataset.index].state!=1&&!this.data.lb[e.currentTarget.dataset.index].SameDayCode){
      this.wjs();
      return;
    }
    console.log(e.currentTarget.dataset.index);
    wx.navigateTo({
      url: '../../pages/coursesCon/coursesCon?FId='+this.data.lb[e.currentTarget.dataset.index].FId+'&RecordCode='+this.data.lb[e.currentTarget.dataset.index].RecordCode,
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
    this.shuaxin();
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