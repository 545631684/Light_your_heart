// pages/WeeklySleepRecord/WeeklySleepRecord.js
import request from "../../../network/request"
Page({

    /**
     * 页面的初始数据
     */
    data: {
        info:{
            Alcohol:'喝酒',
            Coffee:'咖啡',
            Feast:'饱餐',
            Medicinal:'药物',
            Sport:'运动',
            Tea:'茶水'
        }
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.getData()
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
        this.getData()
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

    getData(){
        var time = new Date()
        var now = time.getFullYear()+"-"+(time.getMonth()+1)+"-"+time.getDate();
        var lasttime = new Date(time.getTime()-86400000*7)
        var last = lasttime.getFullYear()+"-"+(lasttime.getMonth()+1)+"-"+lasttime.getDate();
       this.setData({
           now,
           last
       })
        var token = wx.getStorageSync('token')
        var MemberCode = wx.getStorageSync('MemberCode')
        request('/masterhypnotist/dayandnight',"post",{                    
                "memberCode": MemberCode, //LM-83608264
                "BeginDate": last, //2020-7-2
                "EndDate": now     //2020-7-6
        },token).then(res=>{
            console.log(res,'一周的记录')
            res.data.data.forEach(e=>{
                // console.log(e)
                var arr = []
                if(e.Behavior.FId){
                    for(var key in e.Behavior){
                        if(e.Behavior[key] === true ){                           
                            arr.push(key.substr(1,key.length))                         
                        }
                    }
                }         
                var newArr = []
                for(var k in this.data.info){
                    arr.forEach((e,index)=>{
                        if(e == k){                           
                            newArr.push(this.data.info[k])                          
                        }
                    })
                }  
                console.log(newArr)
                // newArr = ['11','22']
                if(newArr.length == 3){
                    newArr[3] = '暂未记录'
                }  
                if(newArr[0] == undefined){
                    newArr[0] = '暂未记录'
                } 
                if(newArr[1] == undefined){
                    newArr[1] = '暂未记录'
                } 
                if(newArr[2] == undefined){
                    newArr[2] = '暂未记录'
                }    
                if(newArr[3] == undefined){
                    newArr[3] = '暂未记录'
                }     
                e.Behavior.msg = '早上'+newArr[0]+",中午"+newArr[1]+",下午"+newArr[2]+",晚上"+newArr[3]
             
            })
            var list = res.data.data
            var yest = new Date(time.getTime()-86400000*1)
            var yest2 = new Date(time.getTime()-86400000*2)
            var yesttime = yest.getFullYear()+"-"+(yest.getMonth()+1)+"-"+yest.getDate();
            var yest2time = yest2.getFullYear()+"-"+(yest2.getMonth()+1)+"-"+yest2.getDate();
            console.log(yesttime,yest2time)
            // if(list.length < 3 && list.length >= 0){
                // for(var i = 0; i < 7 ;i ++){
                //     if(!list[i]){
                //         var times = new Date(time.getTime()-86400000*i)
                //         list[i] = {
                //             sleep: {
                //                 CreateTime: times.getFullYear()+"-"+(times.getMonth()+1)+"-"+times.getDate()+" 00:00:00",
                //                 FId:false
                //             } 
                //         }
                //     }
                var itemlist = []
                for(var i = 0; i < 7 ;i ++){
                    var lock = false
                    for(var j = 0 ; j < list.length ;j ++){
                        if(list[j].sleep.CreateTime == this.getDate(i) ){
                            itemlist.push(list[j])
                            lock = true
                            break
                        }else{
                            lock = false
                        }                        
                    }
                    if(lock == false){
                        itemlist.push({
                            sleep: {
                                CreateTime: this.getDate(i),
                                FId:false
                            } 
                        })
                    }
                    
                }
             
                console.log(itemlist)
                // }
                // if(!list[1]){
                //     list[1] = {
                //         sleep: {
                //             CreateTime:yesttime,
                //             FId:false
                //         } 
                //     }
                //     list[2] = {
                //         sleep: {
                //             CreateTime:yest2time,
                //             FId:false
                //         } 
                //     }
                // }else if(!list[2]){
                //     list[2] = {
                //         sleep: {
                //             CreateTime:yest2time,
                //             FId:false
                //         } 
                //     }
                // }
            // }
            // console.log(list,'一周的记录')
            this.setData({
                list:itemlist
            })
        })
    },
    getDate(num){
        var time = new Date()
        var now = time.getFullYear()+"-"+(time.getMonth()+1)+"-"+time.getDate();
        var lasttime = new Date(time.getTime()-86400000*num)
        var yue = lasttime.getMonth()+1
        if(yue <10){
            yue = "0"+yue
        }
        var ri = lasttime.getDate();
        if(ri <10){
            ri = "0"+ri
        }
        return lasttime.getFullYear()+"-"+yue+"-"+ri+" 00:00:00";
    }
})