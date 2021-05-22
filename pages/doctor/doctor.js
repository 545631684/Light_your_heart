// pages/doctor/doctor.js
import request from "../../network/request"
Page({
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getDoctorInfo(options.id)
  },
  getDoctorInfo(id) {
    var token = wx.getStorageSync('token');
    request("/doctor/doctor_time", "POST", {id:id},token).then(res => {
      console.log('医生排期', res)
      this.setData({
        doctorTime: res.data
      })
    });
  },
  chooseDate(e) {
    var index = e.currentTarget.dataset.index;
    console.log(index)
    this.setData({
      current: index
    })
  },
  chooseTime(e) {
    var timeid = e.currentTarget.dataset.timeid;
    this.setData({
      timeid: timeid
    })
  },
  submit() {
    if (!this.data.timeid) {
      wx.showToast({
        title: '请先选择预约时段',
        icon: 'none'
      })
      return
    } else {
      var token = wx.getStorageSync('token');
      var subData = {
        id: this.data.timeid,
        MemberCode: wx.getStorageSync('MemberCode')
      }
      console.log('提交排期的数据',subData)
      request("/doctor/schedule_order_create", "POST", subData, token).then(res => {
        console.log('提交排期的结果', res)
        wx.requestPayment({
          nonceStr: res.data.nonceStr,
          package: res.data.package,
          paySign: res.data.paySign,
          signType: res.data.signType,
          timeStamp: res.data.timeStamp,
          success:res=>{
            console.log('支付结果',res);
            wx.redirectTo({
              url: '/sleep-mainPages/pages/my/secondPage/interviewList',
            })
          },
          fail:err=>{
            console.log('支付失败',err)
          }
        })
      });
    }
  }
})