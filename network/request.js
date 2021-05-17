var baseUrl = "https://manage.shrlxl.com/index.php/api"
export default function (url,method,data,token){
  if(data.constructor==Object) data.MemberCode = wx.getStorageSync('MemberCode')
  return new Promise((resolve,reject) => {
    wx.request({
      url: baseUrl+url,
      data: data,
      header: {
          Authorization:token
      },
      method: method,
      dataType: 'json',
      responseType: 'text',
      success: (res) => {
        resolve(res);               
      },
      fail: (res) => { },
    })
  })
}