// sleep-testPages/pages/TestList/TestList.js
import request from "../../../network/request"
Page({

    /**
     * 页面的初始数据
     */
    data: {
        list: [{
                url: '/sleep-testPages/pages/TestQuestion2/TestQuestion2?type=1&pro_index=0',
                title: '席汉氏功能障碍量表SDS',
                info: '以下问题针对近一周情况 请在每一个表格中一个最合适的数字进行选择'
            },
            {
                url: '/sleep-testPages/pages/TestQuestion2/TestQuestion2?type=2&pro_index=1',
                title: '失眠严重指数ISI',
                info: '对于以下问题,请您圈出近1个月以来最符合您的睡眠情况的数字'
            },
            {
                url: '/sleep-testPages/pages/TestQuestion1/TestQuestion1?type=3&pro_index=2',
                title: '广泛性焦虑障碍量表GAD7',
                info: '根据过去两周的状况 请您回答是否存在下列描述的状况及频率 请看清楚问题后在符合您的选项的数字上面选择'
            },
            {
                url: '/sleep-testPages/pages/TestQuestion1/TestQuestion1?type=4&pro_index=3',
                title: 'PHQ-9抑郁症筛查量表',
                info: '在过去的两周里, 你生活中以下症状出现的频率有多少？'
            },
            {
                url: '/sleep-testPages/pages/TestQuestion1/TestQuestion1?type=5&pro_index=4',
                title: '功能评估测验简版FAST',
                info: '您在下列方面遇到困难的程度怎么样? 请根据下面的问题选择合适的答案'
            }
        ]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        this.setData({
            id: options.id
        })
        this.getList()
    },
    getList() {
        var token = wx.getStorageSync('token')
        var MemberCode = wx.getStorageSync('MemberCode')
        request("/test/my_test_record?MemberCode=" + MemberCode, "get", token).then(res => {
            console.log(res, '获取测评记录')
            this.setData({
                list:res.data.data
            })
        })
    },
})