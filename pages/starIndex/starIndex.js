// pages/starIndex/starIndex.js
import request from "../../network/request"
Page({
  data: {

  },
  onLoad: function (options) {
    let menuButtonObject = wx.getMenuButtonBoundingClientRect();
    wx.getSystemInfo({
      success: res => {
        let statusBarHeight = res.statusBarHeight,
          navTop = menuButtonObject.top, //胶囊按钮与顶部的距离
          navHeight = statusBarHeight + menuButtonObject.height + (menuButtonObject.top - statusBarHeight) * 2; //导航高度
        this.setData({
          navHeight: navHeight,
          navTop: navTop,
          windowHeight: res.windowHeight
        })
      },
      fail(err) {
        console.log(err);
      }
    })
    this.getStars();
  },
  getStars() {
    var token = wx.getStorageSync('token')
    request("/index/stars?uid=" + wx.getStorageSync('userId'), "get", token).then(res => {
      console.log("获取星球列表", res)
      res.data.stars.forEach((item)=>{
        item.content = item.content.split('[star]')
        item.content.shift()
      })
      this.setData({
        stars: res.data.stars,
        user: res.data.user,
      })
      console.log(this.data.stars)
    })
  },
  unlockStars(e) {
    var that = this;
    var id = e.currentTarget.dataset.id;
    var name = that.data.stars[id - 1].name;
    var waitStar = that.data.user.wait_star || 1;
    var isOpen = that.data.user.is_open
    var token = wx.getStorageSync('token')
    var test_membercode = wx.getStorageSync('test_membercode');
    var count = 0;
    test_membercode.forEach((item)=>{
      if(item == wx.getStorageSync('MemberCode')){
        count++
      }
    })
    if(count < 1){
      if ((id > waitStar) || ((id == waitStar) && !isOpen)) {
        wx.showToast({
          title: '请先完成上一星球连续7天的睡眠日志',
          icon: 'none'
        })
      } else {
        console.log('可以开启')
        if (that.data.stars[id - 1].price > 0) {
          console.log('需要支付')
          request("/pay/Pay_config?Membercode=" + wx.getStorageSync('MemberCode'), "get", token).then(res => {
            console.log("获取支付参数", res)
            wx.requestPayment({
              nonceStr: res.data.nonceStr,
              package: res.data.package,
              paySign: res.data.paySign,
              timeStamp: res.data.timeStamp,
              appId: res.data.appId,
              signType: res.data.signType,
              success:(paySuc)=>{
                this.setData({
                  canIndex: waitStar - 1 || 0,
                  showAlert: true,
                  starName: name,
                  id:id,
                  price: that.data.stars[id - 1].price
                })
              }
            })
          })
        } else {
          if (id == waitStar && isOpen) {
            this.setData({
              canIndex: waitStar - 1 || 0,
              showAlert: true,
              starName: name,
              id:id,
              price: that.data.stars[id - 1].price
            })
          } else {
            		wx.requestSubscribeMessage({
            tmplIds: ['6q_3I1Wp3p3wktaTmPZm5ebmT0WhXNSTLW0u_Pv99zA','-Rmo6FYg0zI0Evovyy_jPiB9MseSLRPiaMtE1RI70iI'],
            success(res) {
				wx.navigateTo({
              url: '/sleep-mainPages/pages/college/college?name=' + name + "&id=" + id,
            })

            }
        })
          }
        }
      }
    }else{
      // if (id == waitStar && isOpen) {
        this.setData({
          canIndex: id - 1 || 0,
          showAlert: true,
          starName: name,
          id:id,
          price: that.data.stars[id - 1].price
        })
      // } else {
      //   wx.navigateTo({
      //     url: '/sleep-mainPages/pages/college/college?name=' + name + "&id=" + id,
      //   })
      // }
    }
    
  },
  closeAlert() {
    this.setData({
      showAlert: false
    })
  },
  openNow() {
	  var that=this;
    if (that.data.price > 0) {
      console.log('需要支付')
    } else {
      that.setData({
        showAlert: false,
      })
      wx.requestSubscribeMessage({
            tmplIds: ['6q_3I1Wp3p3wktaTmPZm5ebmT0WhXNSTLW0u_Pv99zA','-Rmo6FYg0zI0Evovyy_jPiB9MseSLRPiaMtE1RI70iI'],
            success(res) {
				wx.navigateTo({
              url: '/sleep-mainPages/pages/college/college?name=' + that.data.starName + "&id=" + that.data.id,
            })

            }
        })
    }

  },
  shapeTest() {
    wx.navigateTo({
      url: "/pages/myInfoTest/myInfoTest",
    })
  },
})