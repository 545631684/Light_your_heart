// pages/SelectDefaultTraining/SelectDefaultTraining.js
import request from "../../../network/request"
Page({
    data: {

    },
    onLoad: function (options) {
        this.getList()
    },
    getList() {
        var token = wx.getStorageSync('token')
        request("/Masterhypnotist/gettainlist", "get", token).then(res => {
            console.log("获取训练列表", res)
            if (res.data.data && res.data.data.Train.length > 0) {
                this.setData({
                    list: res.data.data.Train,
                })
            } else {
                this.setData({
                    kong: true
                })
            }
        })
    },
    toTrainDetail(e) {
        wx.navigateTo({
            url: '/sleep-contentPages/pages/coursesCon2/coursesCon2?FId=' + e.currentTarget.dataset.id,
        })
    },
})