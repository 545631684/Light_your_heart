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
      var type = options.type;
      console.log(options)
      var data = JSON.parse(options.data).result
      var title = options.title;
      console.log(data)
      var times = options.time
        var min = Math.floor(times/60)
        if(min >=99){
            min = 99
        }
        if(min <10){
            min = '0'+min
        }
        var s = times%60
        if(s <10){
            s = "0"+s
        }
        var time= min+":"+s

    var num = 0;
    for(let k in data){
        num -= -data[k]
    }
    var info1 = ''
    var info2 = ''
    var info3 = ''
    var tips;
      if(type == 1){


            if(data.test1 == 0){
                info1 = '无'
            }else if(data.test1 >=1 && data.test1 <=3){
                info1 = '轻度受损'
            }else if(data.test1 >=4 && data.test1 <=6){
                info1 = '中度受损'
            }else if(data.test1 >=7 && data.test1 <=9){
                info1 = '显著受损'
            }else if(data.test1 == 10){
                info1 = '严重受损'
            }
            if(data.test1 == 0){
                info1 = '无'
            }else if(data.test1 >=1 && data.test1 <=3){
                info1 = '轻度受损'
            }else if(data.test1 >=4 && data.test1 <=6){
                info1 = '中度受损'
            }else if(data.test1 >=7 && data.test1 <=9){
                info1 = '显著受损'
            }else if(data.test1 == 10){
                info1 = '严重受损'
            }

            if(data.test2 == 0){
                info2 = '无'
            }else if(data.test2 >=1 && data.test2 <=3){
                info2 = '轻度受损'
            }else if(data.test2 >=4 && data.test2 <=6){
                info2 = '中度受损'
            }else if(data.test2 >=7 && data.test2 <=9){
                info2 = '显著受损'
            }else if(data.test2 == 10){
                info2 = '严重受损'
            }

            if(data.test3 == 0){
                info3 = '无'
            }else if(data.test3 >=1 && data.test3 <=3){
                info3 = '轻度受损'
            }else if(data.test3 >=4 && data.test3 <=6){
                info3 = '中度受损'
            }else if(data.test3 >=7 && data.test3 <=9){
                info3 = '显著受损'
            }else if(data.test3 == 10){
                info3 = '严重受损'
            }



            

      }else if(type ==2){
            if(num <=7 ){
                tips = '没有临床上显著的失眠症'
            }else if(num>= 8 && num <=14){
                tips = '阈下失眠症'
            }else if(num>= 15 && num <=21){
                tips = '临床失眠症(中重度)'
            }else if(num>= 22 && num <=28){
                tips = '临床失眠症(重度)'
            }
      }

      this.setData({
        title:title,
        num:num,
        info1,info2,info3,
        tips,
        type,
        time:options.time
      })

    },
    rtn(){
        wx.navigateTo({
            url: '/sleep-testPages/pages/TestList/TestList'
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
        wx.navigateBack()
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