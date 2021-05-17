// sleep-testPages/pages/TestResult1/index.js
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
        console.log(options)
        // var tip;
        // var arry = []
        // var num;
        // var type = options.type;
        // // 时间被修改
        // var time = options.time;
        // var min = Math.floor(time/60);
        // if(min < 10){
        //     min = "0"+min
        // }
        // if(num >= 99 ){
        //     num = 99
        // }
        // this.setData({
        //     type:options.type
        // })
        // var s = time%60;
        // if(s < 10 ){
        //     s = '0'+s
        // }
        // var times = min+":"+s
        // var result = JSON.parse(options.result);
        // console.log(result);
        // let score = 0;
        // if(type == 3){
        //     score = 0;
        //     for(let j in result){
        //         score+=result[j];
        //     }
        //     console.log(score);
        //     if(score <=4){
        //         tip = '恭喜你没有广泛性焦虑障碍'
        //     }else if(score>4&& score<=9){
        //         tip = '有轻度广泛性焦虑障碍'
        //     }else if(score>9&& score<=14){
        //         tip = '有中度广泛性焦虑障碍'
        //     }else if(score>14&& score<=21){
        //         tip = '有重度广泛性焦虑障碍'
        //     }

        //     arry = [
        //         "(1)总分小于4 :恭喜你没有广泛性焦虑障碍",
        //         "(2)总分在5-9 :有轻度广泛性焦虑障碍",
        //         "(3)总分在10-14 :有中度广泛性焦虑障碍",
        //         "(4)总分在15-21 :有重度广泛性焦虑障碍",
        //     ]

        // }else if(type == 4){
        //     score = 0;
        //     for(let j in result){
        //         score+=result[j];
        //     }               
           
        //     console.log(score)
        //     if(score <=4){
        //         tip = '没有抑郁症'
        //     }else if(score>4&& score<=9){
        //         tip = '可能有轻微抑郁症'
        //     }else if(score>9&& score<=14){
        //         tip = '可能有中度抑郁症'
        //     }else if(score>14&& score<=19){
        //         tip = '可能有中重度抑郁症'
        //     }else if(score>19){
        //         tip = "可能有重度抑郁症"
        //     }

        //     arry = [
        //         "(1)总分小于4 :没有抑郁症 注意自我保重",
        //         "(2)总分在5-9 :可能有轻微抑郁症 建议咨询心理医生或心理医学工作者",
        //         "(3)总分在10-14 :可能有中度抑郁症 最好咨询心理医生或心理医学工作者",
        //         "(4)总分在15-19 :可能有中重度抑郁症 建议咨询心理医生或精神科医生",
        //         "(5)总分在20-27 :可能有重度抑郁症 一定要看心理医生或精神科医生",
        //     ]
        // }else if(type == 5){
        //     score = 0;
        //     for(let j in result){
        //         score+=result[j];
        //     }           
           
        //     console.log(score)
        //     if(score <=24){
        //         tip = '无困难'
        //     }else if(score>24&& score<=45){
        //         tip = '轻度困难'
        //     }else if(score>45&& score<=60){
        //         tip = '中度困难'
        //     }else if(score>60&& score<=72){
        //         tip = '重度困难'
        //     }

        //     arry = [
        //         "(1)总分小于24 :无困难",
        //         "(2)总分在25-45 :轻度困难",
        //         "(3)总分在46-60 :中度困难",
        //         "(4)总分在61-72 :重度困难"               
        //     ]
        // }
    
        // this.setData({
        //     tip,
        //     arry,
        //     score,
        //     title:options.title,
        //     time:options.time
        // })

        this.getStore(options.id)
    },
    getStore(id){
        var token = wx.getStorageSync('token')
        var MemberCode = wx.getStorageSync('MemberCode')
        request("/Masterhypnotist/getscore?GaugeFID=" + id, "get", token).then(res => {
            console.log(res, '测评分数接口')
            var array = res.data.Analyse.split(';')
            var Answer = res.data.Answer.split(';')
            console.log(array)
            this.setData({
                title:res.data.Problem,
                score:res.data.Score,
                time:res.data.HL,
                tip:Answer,
                array:array,
                array2:res.data.array
            })
        })
    }
})