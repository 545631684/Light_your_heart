// sleep-mainPages/pages/doctor/doctor.js
import request from "../../../network/request"
Page({
  data: {

  },
  onLoad: function (options) {
    this.getDoctorList()
  },
  getDoctorList(){
    var token = wx.getStorageSync('token');
    request("/doctor/doctor_list", "GET",token).then(res => {
      console.log('医生列表',res)
      this.setData({
        doctorList:res.data.data
      })
    });
  },
  preview(e){
    var id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '/pages/doctor/doctor?id=' + id,
    })
  }
})