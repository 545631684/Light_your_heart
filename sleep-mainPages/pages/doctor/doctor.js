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
        doctorList:res.data.data,
        userId: wx.getStorageSync('userId')
      })
    });
  },
  preview(e){
    var id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '/pages/doctor/doctor?id=' + id,
    })
  },
  /**
   * 留言对话页跳转
   */
  stayInfo(e){
    let userid = e.currentTarget.dataset.userid;
    let doctorid = e.currentTarget.dataset.doctorid;
    console.log(e.currentTarget.dataset)
    wx.navigateTo({
      url: '/sleep-mainPages/pages/my/secondPage/seeReply?user_id=' + userid + '&doctor_id=' + doctorid,
    })
  },
})