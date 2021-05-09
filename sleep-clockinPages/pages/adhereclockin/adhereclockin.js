// pages/adhereclockin/adhereclockin.js
import request from "../../../network/request"
Page({

    /**
     * 页面的初始数据
     */
    data: {
        imgList: [

        ],
        currentIndex: 0,
        clickIndex: 1,
        isShow: false,
        arr: [],
        isClock: false,
        back: 1,
        lastIndex: 0,
        state: 3,
        infolist: [
            "临睡前常使用手机或看电视，会刺激大脑兴奋，不仅会延长入睡时间，也会影响到深度睡眠质量缩短深度睡眠时间。长此以往会形成条件反射，导致睡觉前就习惯性的玩手机而不是马上入睡。可以调整上床前活动的次序，比如先玩手机，结束了把手机放一边，再进行洗脸刷牙铺床等后上床睡觉",
            "睡前不宜大量喝水，大量饮水会造成频繁的起夜，会影响睡眠。可以在睡前半个小时前喝一杯水，睡前再去一次厕所，这样不仅仅可以补充身体所缺失的水分还能够保证晚上不起夜，不会影响睡眠",
            "长期赖床会使原有的生物钟被打破，导致睡眠时间没有规律性，进而会影响到入睡。赖床也会影响到消化、血压、呼吸等各个脏器功能，而脏器功能不好又会影响睡眠。控制赖床时间，5分钟内为宜。",
            "烟草中的尼古丁有刺激神经、兴奋大脑的作用，如果你无法戒烟，至少在睡觉前不要吸烟，以免影响睡眠。睡前喝酒虽能缩短入睡时间，但使睡眠变浅，浅睡眠时间延长，中途醒转次数也增多，表面上似乎对睡眠有益，实际上却可能干扰睡眠，使总的睡眠质量下降。咖啡因类饮料和食物（咖啡、茶、可乐、巧克力）会引起入睡困难、夜间觉醒及浅睡眠。即使是白天使用咖啡因也会影响夜间睡眠。改善睡眠，做到午后不喝茶和咖啡。",
            "安静、安全、光线、温度都适宜的环境，是理想的就寝环境。如果感觉清晨透过来的光线太刺眼而导致早醒，可以换成遮光窗帘或者戴眼罩；感觉卧室太黑，不敢入睡，可以通过小夜灯把光线调整到合适的程度。 易被卧室外的噪音吵醒，可以加装双层玻璃，更换隔音的门，或者带舒适的海绵耳塞。有研究表明，32分贝的背景噪音，更适合深度睡眠，所以无需把卧室打造为一个绝对静音的空间。",
            "一周内持续在固定的时间起床和睡觉，周末也是如此，这样有助于建立稳定的生物钟",
            "睡前2小时内不要做激烈的体育锻炼，适当的放松性运动可帮助减轻入睡困难并加深睡眠。睡前不宜暴饮暴食，避免摄入过于油腻或难消化的食物；同时，尽量不要空腹上床。",
            "就寝的时间在白天，会导致夜晚来临时困意不足。可以做一些自己感兴趣的事情来保持清醒，例如看书，找朋友聊天、散步等等",
            "躯体紧张和担忧过度是相伴随而出现的，与失眠息息相关。可以在睡前做一些放松训练和听听有助于睡眠的音乐，调整呼吸、放下思想包袱、放松心情，帮助自己达到放松、平和，不再那么纠结与失眠相关的担忧念头的状态",
            "困意不足，只是因为担心过了某个时间再不睡就睡不着了所以早早的上床，反而导致入睡困难。可以去做一些动手动脚，不动脑的事情，比如可以看杂志，做家务、织毛衣、练瑜伽等等，一定要根据你自己的实际情况以及爱好来进行选择。感觉困倦之后再上床睡觉。"
        ]
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

        console.log(options.back)
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
        //获取已经选择的\v
        var MemberCode = wx.getStorageSync('MemberCode')
        var token = wx.getStorageSync('token')
        var ActivityCode = wx.getStorageSync('ActivityCode')
        var options = {
            "MemberCode": MemberCode,
            "ActivityCode": ActivityCode
        }
        var selArr = [];
        request("/masterhypnotist/getmemberhabit", 'post', options, token).then(res => {
            console.log(res)
            if (res.data.data) {
                this.setData({
                    imgList: res.data.data
                })
            }
            console.log(this.data.imgList)
            this.setData({
                state: this.data.imgList.length < 3 ? this.data.imgList.length : 3
            })
        })
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

    change(e) {
        var index = e.detail.current;
        this.setData({
            currentIndex: index
        })

    },
    changeClick(e) {
        var index = e.currentTarget.dataset.index
        var name = e.currentTarget.dataset.name
        var obj = this.data.clickIndex;


        // arr[index] = true;
        console.log(obj)
        this.setData({
            clickIndex: index,
            lastIndex: index
        })

    },
    btnclick() {
        var that = this;
        var token = wx.getStorageSync('token')
        var ActivityCode = wx.getStorageSync('ActivityCode')
        var FId = wx.getStorageSync('FId')
        var habit = wx.getStorageSync('habit')
        var MemberCode = wx.getStorageSync('MemberCode')
        var time = new Date()
        var now = time.getFullYear() + "-" + (time.getMonth() + 1) + "-" + time.getDate();
        var data = {
            "FId": "",
            "HabitCode": this.data.imgList[this.data.lastIndex].HabitCode,
            "MemberCode": MemberCode,
            "ActivityCode": ActivityCode,
            "IsClockIn": true,
            "Createtime": now

        }
        console.log(data, this.data.imgList[this.data.lastIndex])

        // console.log(data)
        // var self = this;

        wx.requestSubscribeMessage({
            tmplIds: ['ilqe8LFit_iwBANKYq3rn7DoDDCdFqXxVBv7Skrwp6Q'],
            success(res) {

                request("/masterhypnotist/clockinhabit", 'post', data, token).then(res => {
                    console.log(res, '打卡')
                    if (res.data.code == 0) {
                        that.setData({
                            isShow: true
                        })
                    } else {
                        wx.showToast({
                            title: res.data.msg,
                            icon: 'none'
                        })
                    }
                })

            }
        })








    },
    close() {
        // wx.navigateTo({
        //   url: '/sleep-mainPages/pages/college/college'
        // })
        wx.navigateBack()
    },
    xiguan() {
        wx.navigateTo({
            url: '../somnus/somnus',
        })
    }

})