// pages/myInfoTest/myInfoTest.js
import request from "../../network/request"
var numCount = 4;
var numSlot = 5;
var mW = 300;
var mH = 300;
var mCenter = mW / 2; //中心点
var mAngle = Math.PI * 2 / numCount; //角度
var mRadius = mCenter - 60; //半径(减去的值用于给绘制的文本留空间)
//获取Canvas
var radCtx = wx.createCanvasContext("radarCanvas")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    questionNumber: 1,
    showResult: false,
    array: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    index: null,
    showTipsAlert: false,

    //.js  模拟对战两方的数据
    chanelArray1: [
      ["入睡困难", 8],
      ["睡眠时间短", 4],
      ["睡眠障碍多", 11],
      ["日间功能差", 0],
    ],
    chanelArray2: [
      ["战绩", 0],
      ["生存", 0],
      ["团战", 0],
      ["发育", 0],
    ]
  },
  chooseAnswer(e) {
    var questionNumber = e.currentTarget.dataset.questionnumber;
    var answerNumber = e.currentTarget.dataset.answernumber;
    this.setData({
      ["questionNumber" + questionNumber]: answerNumber,
    })
    if (questionNumber == 4) {
      this.submitInfo()
      this.setData({
        showTipsAlert: true,
        currentQuesIdx: 0,
        percent: ((0 + 5) / 27 * 100).toFixed(2) + '%'
      })
    }
    setTimeout(() => {
      this.setData({
        questionNumber: Number(questionNumber) + 1,
      })
    }, 300)
    console.log('选择结果', this.data)
  },
  submitInfo() {
    var data = this.data;
    var infoAnswer = [];
    infoAnswer.push({
      questionNumber1: data.questionNumber1
    })
    infoAnswer.push({
      questionNumber2: data.questionNumber2
    })
    infoAnswer.push({
      questionNumber3: data.questionNumber3
    })
    infoAnswer.push({
      questionNumber4: data.questionNumber4
    })

    console.log('前四题答案', infoAnswer)
    var token = wx.getStorageSync('token');
    var subData = {
      MemberCode: wx.getStorageSync('MemberCode'),
      nfoAnswer: infoAnswer
    }
    subData = JSON.stringify(subData);
    console.log(subData)
    request("/member/submit_memberinfo", "post", subData, token).then(res => {
      console.log(res);
      if (res.statusCode == 200) {
        // console.log(res,"9090");
        // wx.navigateTo({
        //   url: `/sleep-testPages/pages/TestResult2/index?data=${subData}&type=${this.data.type}&time=${res.data.data}`,
        // })
      }
    });
  },
  chooseAnswerPzb(e) {
    var questionNumber = e.currentTarget.dataset.questionnumber;
    var answerNumber = e.currentTarget.dataset.answernumber;
    var testScore = e.currentTarget.dataset.testscore;
    var test = this.data.test;
    console.log(test, questionNumber)
    test[questionNumber].answerId = answerNumber;
    test[questionNumber].testScore = testScore;
    var currentQuesIdx = questionNumber >= 22 ? questionNumber : questionNumber + 1
    setTimeout(() => {
      this.setData({
        test: test,
        currentQuesIdx: currentQuesIdx,
        percent: ((currentQuesIdx + 5) / 27 * 100).toFixed(2) + '%'
      })
    }, 300)
  },
  nextQuestion(e){
    var test = this.data.test;
    var questionNumber = e.currentTarget.dataset.questionnumber;
    var currentQuesIdx = questionNumber >= 22 ? questionNumber : questionNumber + 1
    setTimeout(() => {
      this.setData({
        test: test,
        currentQuesIdx: currentQuesIdx,
        percent: ((currentQuesIdx + 5) / 27 * 100).toFixed(2) + '%'
      })
    }, 300)
  },
  backQuestion(e) {
    var questionNumber = e.currentTarget.dataset.questionnumber;
    this.setData({
      questionNumber: Number(questionNumber) - 1,
    })
  },
  backQuestionPzb(e) {
    var questionNumber = e.currentTarget.dataset.questionnumber;
    this.setData({
      currentQuesIdx: questionNumber == 0 ? questionNumber : questionNumber - 1,
      questionNumber: questionNumber == 0 ? Number(this.data.questionNumber) - 1 : this.data.questionNumbe,
    })
  },
  submit() {
    var test = this.data.test;
    var answerArr = [];
    if (!test[22].answerId) {
      wx.showToast({
        title: '请选择答案',
      })
      return
    }
    test.forEach(item => {
      answerArr.push({
        quesId: item.id,
        answerId: item.answerId,
        testScore: item.testScore
      })
    })
    console.log('提交测试题数据', answerArr)
    var token = wx.getStorageSync('token');
    var testAnswer = {
      MemberCode: wx.getStorageSync('MemberCode'),
      answerArr: answerArr,
      ProblemType: 9, //匹兹堡的type
      is_ship: 1
    }
    testAnswer = JSON.stringify(testAnswer);
    console.log(testAnswer)
    wx.requestSubscribeMessage({
      tmplIds: ['KDP4N31qNbrQ-3oK2oVFNg0ZyIxCMymlYYly0qlw1yI'],
      success: (res) => {

        request("/test/submittest", "post", testAnswer, token).then(res => {
          console.log(res);
          if (res.statusCode == 200) {
            this.getStore(res.data)
            wx.setNavigationBarTitle({
              title: '测评结果',
            })
          }
        });

      }
    })
    this.setData({
      showResult: true
    })
  },
  closeTips() {
    this.setData({
      showTipsAlert: false
    })
  },
  getTest() {
    var token = wx.getStorageSync('token')
    var MemberCode = wx.getStorageSync('MemberCode')
    request("/test/psqi_questions?MemberCode=" + MemberCode, "get", token).then(res => {
      console.log("获取飞船匹兹堡测试题", res)
      this.setData({
        test: res.data.question,
        questionNumber1: res.data.nfoAnswer.length>0?res.data.nfoAnswer[0].questionNumber1 : '',
        questionNumber2: res.data.nfoAnswer.length>0?res.data.nfoAnswer[1].questionNumber2 : '',
        questionNumber3: res.data.nfoAnswer.length>0?res.data.nfoAnswer[2].questionNumber3 : '',
        questionNumber4: res.data.nfoAnswer.length>0?res.data.nfoAnswer[3].questionNumber4 : '',
      })
    })
  },
  onLoad: function (options) {
    this.getTest()

    // this.drawRadar()
  },
  drawRadar: function () {
    var sourceData1 = this.data.chanelArray1
    var sourceData2 = this.data.chanelArray2

    //调用
    this.drawEdge() //画六边形
    //this.drawArcEdge() //画圆
    this.drawLinePoint()
    //设置数据
    this.drawRegion(sourceData1, 'rgba(34, 154, 247, 0.54)') //第一个人的
    this.drawRegion(sourceData2, 'rgba(34, 154, 247, 0.54)') //第二个人
    //设置文本数据
    this.drawTextCans(sourceData1)
    //设置节点
    this.drawCircle(sourceData1, '#229AF7')
    this.drawCircle(sourceData2, 'rgba(34, 154, 247, 0)')
    //开始绘制
    radCtx.draw()
  },
  // 绘制6条边
  drawEdge: function () {
    radCtx.setStrokeStyle("#f1f1f1")
    radCtx.setLineWidth(1) //设置线宽
    for (var i = 0; i < numSlot; i++) {
      //计算半径
      radCtx.beginPath()
      var rdius = mRadius / numSlot * (i + 1)
      //画6条线段
      for (var j = 0; j < numCount; j++) {
        //坐标
        var x = mCenter + rdius * Math.cos(mAngle * j);
        var y = mCenter + rdius * Math.sin(mAngle * j);
        radCtx.lineTo(x, y);
      }
      radCtx.closePath()
      radCtx.stroke()
    }
  },
  // 绘制连接点
  drawLinePoint: function () {
    radCtx.beginPath();
    for (var k = 0; k < numCount; k++) {
      var x = mCenter + mRadius * Math.cos(mAngle * k);
      var y = mCenter + mRadius * Math.sin(mAngle * k);

      radCtx.moveTo(mCenter, mCenter);
      radCtx.lineTo(x, y);
    }
    radCtx.stroke();
  },
  //绘制数据区域(数据和填充颜色)
  drawRegion: function (mData, color) {

    radCtx.beginPath();
    for (var m = 0; m < numCount; m++) {
      var x = mCenter + mRadius * Math.cos(mAngle * m) * mData[m][1] / 3;
      var y = mCenter + mRadius * Math.sin(mAngle * m) * mData[m][1] / 3;

      radCtx.lineTo(x, y);
    }
    radCtx.closePath();
    radCtx.setFillStyle(color)
    radCtx.fill();
  },
  //绘制文字
  drawTextCans: function (mData) {

    radCtx.setFillStyle("#333333")
    radCtx.font = '14px PingFang SC' //设置字体
    for (var n = 0; n < numCount; n++) {
      var x = (mCenter) + mRadius * Math.cos(mAngle * n);
      var y = (mCenter) + mRadius * Math.sin(mAngle * n);
      // radCtx.fillText(mData[n][0], x, y);
      //通过不同的位置，调整文本的显示位置
      if (mAngle * n >= 0 && mAngle * n <= Math.PI / 2) {
        console.log(1, mData[n][0])
        radCtx.fillText(mData[n][0], x, y + 5);
      } else if (mAngle * n > Math.PI / 2 && mAngle * n <= Math.PI) {
        console.log(2, mData[n][0])
        radCtx.fillText(mData[n][0], x - radCtx.measureText(mData[n][0]).width+10, y + 20);
      } else if (mAngle * n > Math.PI && mAngle * n <= Math.PI * 3 / 2) {
        console.log(3, mData[n][0])
        radCtx.fillText(mData[n][0], x - radCtx.measureText(mData[n][0]).width - 5, y + 5);
      } else {
        console.log(4, mData[n][0])
        radCtx.fillText(mData[n][0], x + 7, y);
      }

    }
  },
  //画点
  drawCircle: function (mData, color) {
    var r = 0; //设置节点小圆点的半径
    for (var i = 0; i < numCount; i++) {
      var x = mCenter + mRadius * Math.cos(mAngle * i) * mData[i][1] / 10;
      var y = mCenter + mRadius * Math.sin(mAngle * i) * mData[i][1] / 10;

      radCtx.beginPath();
      radCtx.arc(x, y, r, 0, Math.PI * 2);
      radCtx.fillStyle = color;
      radCtx.fill();
    }

  },
  getStore(id) {
    // id = 163
    var token = wx.getStorageSync('token')
    request("/Masterhypnotist/getscore?GaugeFID=" + id, "get", token).then(res => {
      console.log(res, '测评分数接口')
      this.setData({
        score: res.data.Score,
        chanelArray1: Object.entries(res.data.chanelArray1) || this.data.chanelArray1,
        // chanelArray1: this.data.chanelArray1,
      })
      console.log(this.data.chanelArray1)
      this.drawRadar()
    })
  }


})