// pages/TestQuestion2/TestQuestion2.js
import request from "../../../network/request"
Page({

    /**
     * 页面的初始数据
     */
    data: {
        question: [

        ],
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
    result(e) {
        console.log(e.detail, "-----")
        var data = e.detail;
        var titles = ''
        // var time = this.data.num;
        // clearInterval(this.data.timer)
        if (this.data.type == 1) {
            titles = '席汉氏功能障碍量表SDS'
        } else {
            titles = '失眠严重指数ISI'
        }
        var token = wx.getStorageSync('token');
        var MemberCode = wx.getStorageSync('MemberCode')
        var userId = wx.getStorageSync('userId');
        var FId = wx.getStorageSync('FId');

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
                ProblemLevel: item.score,
                CreateTime: time
            }
            params.push(obj);
        }
        console.log("提交时间", params);
        var subData = {
            result: data.result
        }
        subData = JSON.stringify(subData);

        wx.requestSubscribeMessage({
            tmplIds: ['KDP4N31qNbrQ-3oK2oVFNg0ZyIxCMymlYYly0qlw1yI'],
            success(res) {

                request("/masterhypnotist/submittest", "post", params, token).then(res => {
                    console.log(res, params, token, "测试提交量表---");
                    if (res.statusCode == 200) {
                        // console.log(res,"9090");
                        wx.redirectTo({
                            url: `/sleep-testPages/pages/TestResult1/index?id=${res.data}`,
                        })
                    }
                });
            }
        })





        // wx.showToast({
        //     title: '正在努力开发中...',
        //     icon: 'none'
        //   })

    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

        var title;
        if (options.type == 1) {
            title = '以下问题针对近一周情况 请在每一个表格中一个最合适的数字进行选择'
        } else if (options.type == 2) {
            title = '对于以下问题,请您圈出近1个月以来最符合您的睡眠情况的数字'
        }
        this.setData({
            type: options.type,
            title: title,
            pro_index: options.pro_index
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
        var token = wx.getStorageSync('token')
        var MemberCode = wx.getStorageSync('MemberCode')
        request("/masterhypnotist/getmemberproblem?memberCode=" + MemberCode, "get", token).then(res => {
            // console.log(res.data.data.Problem)
            console.log(res.data, "0000")
            var a = res.data.data.Problem.filter(e => {
                return e.Type == this.data.type
            })
            var b = res.data.data.Answer.filter(e => {
                return e.Type == this.data.type
            })
            var answer;
            if (this.data.type != 1) {
                answer = 1
            } else {
                answer = 0
            }
            this.setData({
                question: a,
                answer: answer,
                startTime: this.getFormatDate()
            })
        })
        // var timer ;
        // var num = 0
        // timer = setInterval(()=>{
        //     num += 1
        //     this.setData({
        //         num:num
        //     })
        // },1000)
        // this.setData({
        //     timer
        // })
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

})