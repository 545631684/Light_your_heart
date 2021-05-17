// const cons = require("consolidate");
import request from "../../../network/request"
//index.js
//获取应用实例


Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    arr:[],
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    isShow:false,   
    num:0,
    selArr:[]
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },

  //列表数据
  getListData: function () {
        var token = wx.getStorageSync('token')
        request("/publics/geticon",'get',{
          ItemType: 0
        },token).then(res=>{
          console.log(res)
          this.setData({
            list:res.data.data
          })
          var arr = [];
            for (let index = 0; index < res.data.data.length; index++) {
              arr.push(false)
            };
            this.setData({
              arr
            })

        //获取已经选择的
        var MemberCode = wx.getStorageSync('MemberCode')
        var ActivityCode = wx.getStorageSync('ActivityCode')
        var options = {
          "MemberCode": MemberCode,
          "ActivityCode": ActivityCode
        }
        var selArr = [];
        request("/masterhypnotist/getmemberhabit",'post',options,token).then(res=>{         
          if(res.data.data){
            res.data.data.map(e=>{
              selArr.push(e.ItemName)
            })
          }      
          console.log(selArr,this.data.list)
          var  selectArr = [false,false,false,false,false,false,false,false,false,false] 
          var all = this.data.list ;
          
            all.map((ev,index)=>{
                selArr.forEach((es,ind)=>{
                  if(es == ev.ItemName){
                    selectArr[index] = true                    
                  }
                })
            })
            this.setData({
              arrs:selectArr
            })
            console.log(selectArr,'已经选择过的')
          
    })
        



        })
      },
  onLoad: function () {   
    this.getListData();
    
  },
  onShow:function(){
    this.getListData()
    
  },
  on: function (e) {
    console.log(e);
    var arr = this.data.arr;
    var index= e.target.dataset.idx
    var name= e.target.dataset.name
    if(arr[index] == name){
      arr[index] = ""
    }else{
      arr[index] = name;
    }
    var num = 0
    var list = [];
    arr.forEach(ev=>{
      if(ev != false){
        num ++
        list.push(ev)
      }
    })
    console.log(list)
    console.log(arr,num,'当前index',index)    
    this.setData({
      arr,
      num
    })    
    
    
    
  },
  commit(){
    var num = this.data.num
    var MemberCode = wx.getStorageSync('MemberCode')
    var token = wx.getStorageSync('token')
    var FId = wx.getStorageSync('FId')
    if(num < 1){
      wx.showToast({
        title: '请至少选择一项',
        icon:'none'
      })
    }else{
      var time = new Date();
      var day = time.getDate()
      console.log(this.data.arr,'提交时选择的数据')
      var arr = this.data.arr;
      console.log(arr,'提交时选择的数据')
     var indexArr = []
     arr.map((e,index)=>{
       if(e && e!=""){
         indexArr.push(index)
       }
     })
     console.log(indexArr)
     
     var options = [];
     var MemberCode = wx.getStorageSync('MemberCode')
     indexArr.map((e,index)=>{
        options.push({
          "FId": "",
          "IconCode": this.data.list[e].FId,
          "MemberCode": MemberCode,
          "IsEffective": true
        }) 
     })    
      
        request("/masterhypnotist/memberhabit","post",JSON.stringify(options),token).then(res=>{
          console.log(res)
          if(res.data.code == 0){
            this.setData({
              isShow:true
            })
          }else{
            wx.showToast({
              title: '网络错误,请重试',
              icon:'none'
            })
          }
        })
    }

  },
  close(){
    wx.redirectTo({
      url: '/sleep-clockinPages/pages/adhereclockin/adhereclockin?back=2'
    })
  },
  of(){
    wx.showToast({
      title: '已经选过了,请选择提其他项',
      icon:'none'
    })
  }

})