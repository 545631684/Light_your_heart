// sleep-testPages/pages/MyTest/MyTest.js
import request from "../../../network/request"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 第6次调整逻辑
    lists:[]
  //   questions:{}
  //   ,
  //   list:[
  //     {
  //         url:'/sleep-testPages/pages/TestResult2/index?type=1&pro_index=0',
  //         title:'席汉氏功能障碍量表SDS',
  //         type:1,
  //         info:'以下问题针对近一周情况 请在每一个表格中一个最合适的数字进行选择'
  //     },
  //     {   
  //         url:'/sleep-testPages/pages/TestQuestion2/TestQuestion2?type=2&pro_index=1',
  //         title:'失眠严重指数ISI',
  //         type:2,
  //         info:'对于以下问题,请您圈出近1个月以来最符合您的睡眠情况的数字'
  //     },
  //     {   
  //         url:'/sleep-testPages/pages/TestResult1/index?type=3&pro_index=2',
  //         title:'广泛性焦虑障碍量表GAD7',
  //         type:3,
  //         info:'根据过去两周的状况 请您回答是否存在下列描述的状况及频率 请看清楚问题后在符合您的选项的数字上面选择'
  //     },
  //     {   
  //         url:'/sleep-testPages/pages/TestResult1/index?type=4&pro_index=3',
  //         title:'PHQ-9抑郁症筛查量表',
  //         type:4,
  //         info:'在过去的两周里, 你生活中以下症状出现的频率有多少？'
  //     },
  //     {   
  //         url:'/sleep-testPages/pages/TestResult1/index?type=5&pro_index=4',
  //         title:'功能评估测验简版FAST',
  //         type:5,
  //         info:'您在下列方面遇到困难的程度怎么样? 请根据下面的问题选择合适的答案'
  //     }
  // ]
  },

  /**
   * 生命周期函数--监听页面加载
   */

 
  onLoad: function (options) {
    var token = wx.getStorageSync('token')
    var MemberCode = wx.getStorageSync('MemberCode')
    // request("/masterhypnotist/getmemberproblem?memberCode="+MemberCode,"get",token).then(res=>{
    //     if(res.statusCode==200){
    //        var questions = {
    //            type:[]
    //        };
    //        console.log(res,"测评列表====");
    //        res.data.data.Problem.forEach(item => {
    //             if(item.PAFID){
    //               if(questions.type.indexOf(item.Type)>-1){
    //                 return;
    //               }else{
    //                 questions.type.push(item.Type);
    //               } 
    //             }   
    //        });
    //        console.log(questions);
    //        var quetionList = this.data.list.filter(item=>{
    //           return questions.type.indexOf(item.type)>-1
    //        })
    //        console.log(quetionList);
    //        this.setData({
    //          list:quetionList
    //        })
    //     }
        
    // })

    // 测评第五次调整
    request("/masterhypnotist/getgaugerecord?memberCode="+MemberCode,"get",token).then(res=>{
      console.log(res,"测评列表",MemberCode);
      // console.log(token);
      if(res.statusCode==200){
        this.setData({
          lists:[...res.data.data]
        })
      }
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

  sendToResult(e){
     // 跳转页面需要的数据
  // wx.navigateTo({
  //   url: `/sleep-testPages/pages/TestResult1/index?type=${this.data.type}&result=${JSON.stringify(e.detail.result)}&title=${this.data.titles}&time=${this.data.time}`,
  // })
    console.log(e.currentTarget.dataset.mydata);
    var testResult = e.currentTarget.dataset.mydata;
    var token = wx.getStorageSync('token')
        var MemberCode = wx.getStorageSync('MemberCode')
        request("/masterhypnotist/getscore?memberCode="+MemberCode+"&problemType="+testResult.ProblemType+"&GaugeFID="+testResult.FId,"get",token).then(res=>{
          console.log(res);
          if(res.statusCode==200){
              console.log(res,"测评结果!");
              wx.navigateTo({
                url: '/sleep-testPages/pages/Myresult/Myresult?data='+JSON.stringify(res.data.data)+"&problemType="+testResult.ProblemType
              })
          }
        })
      }
})