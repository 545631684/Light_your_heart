// pages/TestQuestion/TestQuestion.js
import request from "../../../network/request"
Page({

    /**
     * 页面的初始数据
     */
    data: {
        question: [

        ]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        var title = ''
        var titles;
        // this.getDetail(options.type)
        // if(options.type ==3 ) {
        //     title = '根据过去两周的状况 请您回答是否存在下列描述的状况及频率 请看清楚问题后在符合您的选项的数字上面选择'
        //     titles = '广泛性焦虑障碍量表GAD'
        // }else if(options.type == 5){
        //     title = '您在下列方面遇到困难的程度怎么样? 请根据下面的问题选择合适的答案'
        //     titles = '功能评估测验简版FAST'
        // }else if(options.type ==4){
        //     title = '在过去的两周里, 你生活中以下症状出现的频率有多少？'
        //     titles = 'PHQ-9抑郁症筛查量表'
        // }
        // this.setData({
        //     type:options.type,
        //     title:title,
        //     titles:titles
        // })

        this.setData({
            type: options.type
        })
    },
    getFormatDate() {
        // 时间
        var date = new Date();
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var day = date.getDate();
        var hour = date.getHours();
        var minute = date.getMinutes();
        var second = date.getSeconds();
        var time = year + "-" + this.zeroFormat(month) + "-" + this.zeroFormat(day) + " " + this.zeroFormat(hour) + ":" + this.zeroFormat(minute) + ":" + this.zeroFormat(second);
        return time;
    },
    zeroFormat(num) {
        return num < 10 ? num = ("0" + num) : (num = num);
    },
    onShow: function () {
        var token = wx.getStorageSync('token')
        request("/test/courseinfo?type=" + this.data.type, "get", token).then(res => {
            console.log(res, "==========")
            // var a = res.data.data.questions.filter(e => {
            //     return e.Type == this.data.type
            // })
            // var b = res.data.data.Answer.filter(e => {
            //     return e.ProblemType == this.data.type
            // })
            // console.log(b)
            this.setData({
                title: res.data.data.course.CourseDesc,
                list: res.data.data.questions
            })
            console.log('title', this.data.title)
        })

        this.setData({
            startTime: this.getFormatDate()
        })
    },
    result(e) {
        var data = e.detail;
        // console.log(e.detail,"----")
        // wx.showToast({
        //     title: '正在努力开发中...',
        //     icon: 'none'
        //   }) 
        // clearInterval(this.data.timer)
        var token = wx.getStorageSync('token');
        var MemberCode = wx.getStorageSync('MemberCode')
        var userId = wx.getStorageSync('userId');
        var FId = wx.getStorageSync('FId');

        // 分数
        let type = this.data.type;
        let result = data.result;

        // console.log();
        if (type == 3) {
            // num = 0;
            for (let j in result)
                switch (result[j]) {
                    case 'A':
                        // num += 0
                        result[j] = 0;
                        break;
                    case 'B':
                        // num+= 1
                        result[j] = 1;
                        break;
                    case 'C':
                        // num+= 1
                        result[j] = 1;
                        break;
                    case 'D':
                        // num+= 1
                        result[j] = 1;
                        break;
                }

            // console.log(num)


        } else if (type == 4) {
            // num = 0;
            for (let j in result)
                switch (result[j]) {
                    case 'A':
                        // num += 0
                        result[j] = 0;
                        break;
                    case 'B':
                        // num+= 1
                        result[j] = 1;
                        break;
                    case 'C':
                        // num+= 2
                        result[j] = 2;
                        break;
                    case 'D':
                        // num+= 3
                        result[j] = 3;
                        break;
                }
            // console.log(num)

        } else if (type == 5) {
            // num = 0;
            for (let j in result)
                switch (result[j]) {
                    case 'A':
                        // num += 0
                        result[j] = 0;
                        break;
                    case 'B':
                        // num+= 1
                        result[j] = 1;
                        break;
                    case 'C':
                        // num+= 2
                        result[j] = 2;
                        break;
                    case 'D':
                        // num+= 3
                        result[j] = 3;
                        break;
                }

            // console.log(num);
        }
        // console.log(result,"重新整理后的分数-----");
        // FId: "0c9c5b4284e39b00d4a0b9fb4a18cae2"
        // Problem: "工作*/学习:
        // ↵症状对你工作/学习的干扰"
        // Type: 1
        // Classify: 0
        // IsDelete: 0
        // Sort: 1
        // score: 3
        var params = [];
        var endTime = this.getFormatDate();
        for (var i = 0; i < data.questions.length; i++) {
            var item = data.questions[i];
            var time;
            if (i == 1) {
                time = endTime;
            } else {
                time = this.data.startTime;
            }
            var obj = {
                FId: item.PAFID,
                ProblemCode: item.FId,
                MemberCode: MemberCode,
                ProblemType: item.Type,
                ProblemLevel: result["test" + (i + 1)],
                CreateTime: time
            }
            params.push(obj);
        }
        var subData = {
            result: data.result
        }
        console.log("提交时间", params);
        subData = JSON.stringify(subData);
        request("/Test/new_submittest", "post", params, token).then(res => {
            if (res.statusCode == 200) {
                console.log(res, "-------提交结果");
                wx.redirectTo({
                    url: `/sleep-testPages/pages/TestResult1/index?id=${res.data}`,
                    // url: `/sleep-testPages/pages/TestResult1/index?type=${this.data.type}&result=${JSON.stringify(e.detail.result)}&title=${this.data.titles}&time=${res.data.data}`,
                })
            }
        })


    },
    chooseAnswer(e) {
        console.log(e)
        var index = e.currentTarget.dataset.index;
        var answerId = e.currentTarget.dataset.answerid;
        var testScore = e.currentTarget.dataset.testscore;
        var list = this.data.list
        list[index].answerId = answerId;
        list[index].testScore = testScore;
        console.log(list)
        this.setData({
            list: list
        })
    },
    tijiao() {
        var token = wx.getStorageSync('token');
        var MemberCode = wx.getStorageSync('MemberCode')
        var endTime = this.getFormatDate();
        var list = this.data.list;
        var answerArr = [];
        var count = 0;
        list.forEach(item => {
            console.log(item.testScore)
            // return
            if (item.testScore > -1) {
                console.log('yes')
                // answerArr.push(123)
                answerArr.push({
                    CreateTime: endTime,
                    FId: item.Fid,
                    MemberCode: MemberCode,
                    ProblemCode: item.QuestionNum,
                    ProblemLevel: item.testScore,
                    ProblemType: this.data.type,
                    answerId: item.answerId,
                    testScore: item.testScore
                })

                console.log(answerArr)

            } else {
                console.log('no')
                count++

            }
        })
        if (count > 0) {
            wx.showToast({
                title: '请填写完整',
                icon: 'none',
                mask: true,
            })
            return
        } else {
            var answerArrString = JSON.stringify(answerArr)
            wx.requestSubscribeMessage({
                tmplIds: ['KDP4N31qNbrQ-3oK2oVFNg0ZyIxCMymlYYly0qlw1yI'],
                success: (res) => {

                    request("/Test/new_submittest", "post", answerArrString, token).then(res => {
                        if (res.statusCode == 200) {
                            console.log(res, "-------提交结果");
                            wx.redirectTo({
                                url: `/sleep-testPages/pages/TestResult1/index?id=${res.data}`,
                                // url: `/sleep-testPages/pages/TestResult1/index?type=${this.data.type}&result=${JSON.stringify(e.detail.result)}&title=${this.data.titles}&time=${res.data.data}`,
                            })
                        }
                    })
                }
            })
        }

    }
})