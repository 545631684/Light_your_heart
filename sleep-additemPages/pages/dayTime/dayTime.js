// pages/dayTime/dayTime.js
import request from "../../../network/request"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    daijilu: 3,
    xssj: true,
    date1: '',
    seveLock: false,
    date: "",
    arry: [],
    sz: [{
      zzw: "上午(6:00-11:00)",
      src: "../../assets/images/daytime/morning.png",
      con: ""
    }, {
      zzw: "中午(11:00-13:00)",
      src: "../../assets/images/daytime/evening.png",
      con: ""
    }, {
      zzw: "下午(13:00-18:00)",
      src: "../../assets/images/daytime/nooning.png",
      con: ""
    }, {
      zzw: "晚上(18:00-24:00)",
      src: "../../assets/images/daytime/nooning.png",
      con: ""
    }],
    lock: true,
    day: [],
    num: 0,
    value: [],
    hours: [],
    fz: ['00', '05', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55'],
    index1: ["0", "0", "0"],
    start: '',
    end: '',
    showtime: false,
    gengxin: true,
    xiabiao: '',
    num1: -1,
    num2: -1,
    ztz: [{
      'zt': false
    }, {
      'zt': false
    }, {
      'zt': false
    }, {
      'zt': false
    }],
    shuz: 0,
    dto: {
      "Behavior": {
        "FId": "",
        "ActivityCode": "",
        "MemberCode": "",
        "IsGood": -1,
        "IsEnergy": -1,
        "MTea": false,
        "MCoffee": false,
        "MAlcohol": false,
        "MMedicinal": false,
        "MFeast": false,
        "MSport": false,
        "NTea": false,
        "NCoffee": false,
        "NAlcohol": false,
        "NMedicinal": false,
        "NFeast": false,
        "NSport": false,
        "ATea": false,
        "ACoffee": false,
        "AAlcohol": false,
        "AMedicinal": false,
        "AFeast": false,
        "ASport": false,
        "ETea": false,
        "ECoffee": false,
        "EAlcohol": false,
        "EMedicinal": false,
        "EFeast": false,
        "ESport": false,
        "Createtime": ""
      },
      "Nap": [

      ],
      "Action": "Insert",
      // start:''
    },
    day: [{
        src: "../../assets/images/daytime/day2.png",
        con: "茶/咖啡",
        active: "../../assets/images/daytime/day2_active.png",
        state: false,
        name: 'teaOrCoffee'
      },
      {
        src: "../../assets/images/daytime/day3.png",
        con: "酒精",
        active: "../../assets/images/daytime/day3_active.png",
        state: false,
        name: 'alcohol'
      },
      {
        src: "../../assets/images/daytime/day4.png",
        con: "助眠药物",
        active: "../../assets/images/daytime/day4_active.png",
        state: false,
        name: 'sleepMed'
      },
      // {
      //   src: "../../assets/images/daytime/day4.png",
      //   con: "其他药物",
      //   active: "../../assets/images/daytime/day4_active.png",
      //   state: false,
      //   name: 'otherMed'
      // },
      {
        src: "../../assets/images/daytime/day5.png",
        con: "饱餐",
        active: "../../assets/images/daytime/day5_active.png",
        state: false,
        name: 'feast'
      },
      {
        src: "../../assets/images/daytime/day6.png",
        con: "剧烈运动",
        active: "../../assets/images/daytime/day6_active.png",
        state: false,
        name: 'sport'
      }
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(this.data.dto.Behavior.IsGood, this.data.dto.Behavior.IsEnergy);
    var hours = [];
    var fz = [];
    for (var i = 0; i <= 23; i++) {
      if (i < 10) {
        i = "0" + i;
      }
      hours.push(i)
    }
    this.setData({
      hours: hours
    })
    var time = new Date();
    var arry = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
    var token = wx.getStorageSync('token');
    var MemberCode = wx.getStorageSync('MemberCode');
    var ActivityCode = wx.getStorageSync('ActivityCode');
    var FId = wx.getStorageSync('FId');
    this.data.dto.Behavior.MemberCode = MemberCode;
    this.data.dto.Behavior.ActivityCode = ActivityCode;
    this.data.date1 = time.getFullYear() + "-" + ((time.getMonth() + 1) >= 10 ? (time.getMonth() + 1) : "0" + (time.getMonth() + 1)) + "-" + (time.getDate() >= 10 ? time.getDate() : "0" + time.getDate());
    var datex = time.getFullYear() + "年" + (time.getMonth() + 1) + "月" + time.getDate() + "日" + arry[time.getDay()];
    if (options.UpData == "true") {
      this.data.dto.Action = "Update";
      this.data.dto.Behavior.FId = FId;
      this.data.dto.Behavior.Createtime = time.getFullYear() + "-" + ((time.getMonth() + 1) >= 10 ? (time.getMonth() + 1) : "0" + (time.getMonth() + 1)) + "-" + (time.getDate() >= 10 ? time.getDate() : "0" + time.getDate());
      this.updateTime(this.data.dto.Behavior.Createtime);
    } else {
      this.data.dto.Action = "Insert";
      if (options.date) {
        // request('/masterhypnotist/homeinfo','POST',{"memberCode":MemberCode,"dt":options.date},token).then(res=>{
        //   console.log(res,'补填')
        this.data.dto.Behavior.ActivityCode = options.code;
        // })
        console.log(new Date(options.date).getFullYear() != NaN, new Date(options.date).getMonth() != NaN, new Date(options.date).getDate() != NaN, arry[new Date(options.date).getDay()] != undefined);
        if (new Date(options.date).getFullYear() != NaN && new Date(options.date).getMonth() != NaN && new Date(options.date).getDate() != NaN && arry[new Date(options.date).getDay()] != undefined) {
          datex = new Date(options.date);
          datex = datex.getFullYear() + "年" + (datex.getMonth() + 1) + "月" + datex.getDate() + "日" + arry[datex.getDay()];
          // this.data.dto.Behavior.Createtime = options.date.substr(0,10);
          this.data.date1 = options.date.substr(0, 10);
        }
      } else {}
      this.data.dto.Behavior.Createtime = time.getFullYear() + "-" + ((time.getMonth() + 1) >= 10 ? (time.getMonth() + 1) : "0" + (time.getMonth() + 1)) + "-" + (time.getDate() >= 10 ? time.getDate() : "0" + time.getDate());
    }
    this.setData({
      dto: this.data.dto,
      date1: this.data.date1,
      // start: this.data.date1 + ' 00:00',
      // end: this.data.date1 + ' 00:00'
    })
    this.setData({
      date: datex
    })
  },
  updateTime(time) {
    this.setData({
      arry: []
    })
    var MemberCode = wx.getStorageSync('MemberCode');
    var token = wx.getStorageSync('token');
    request('/masterhypnotist/dayandnight', 'POST', {
      "memberCode": MemberCode,
      "BeginDate": time,
      "EndDate": time
    }, token).then(res => {
      console.log(res);
      // this.data.dto.Behavior.FId = res.data.data[0].sleep.FId;
      for (var i = 0; i < res.data.data[0].Nap.length; i++) {
        this.data.arry.push({
          time: res.data.data[0].Nap[i].BeginTime,
          endtime: res.data.data[0].Nap[i].EndTime,
          fz: res.data.data[0].Nap[i].Duration
        })
      }
      var zzxw = [{
          "id": []
        },
        {
          "id": []
        },
        {
          "id": []
        },
        {
          "id": []
        },
      ]
      var zaos = [];
      if (res.data.data[0].Behavior.MTea == true) {
        zaos.push('茶水');
        zzxw[0].id.push("0");
      }
      if (res.data.data[0].Behavior.MCoffee == true) {
        zaos.push('咖啡');
        zzxw[0].id.push("1");
      }
      if (res.data.data[0].Behavior.MAlcohol == true) {
        zaos.push('酒精');
        zzxw[0].id.push("2");
      }
      if (res.data.data[0].Behavior.MMedicinal == true) {
        zaos.push('药物');
        zzxw[0].id.push("3");
      }
      if (res.data.data[0].Behavior.MFeast == true) {
        zaos.push('饱餐');
        zzxw[0].id.push("4");
      }
      if (res.data.data[0].Behavior.MSport == true) {
        zaos.push('剧烈运动');
        zzxw[0].id.push("5");
      }
      var zhongw = [];
      if (res.data.data[0].Behavior.NTea == true) {
        zhongw.push('茶水');
        zzxw[1].id.push("0");
      }
      if (res.data.data[0].Behavior.NCoffee == true) {
        zhongw.push('咖啡');
        zzxw[1].id.push("1");
      }
      if (res.data.data[0].Behavior.NAlcohol == true) {
        zhongw.push('酒精');
        zzxw[1].id.push("2");
      }
      if (res.data.data[0].Behavior.NMedicinal == true) {
        zhongw.push('药物');
        zzxw[1].id.push("3");
      }
      if (res.data.data[0].Behavior.NFeast == true) {
        zhongw.push('饱餐');
        zzxw[1].id.push("4");
      }
      if (res.data.data[0].Behavior.NSport == true) {
        zhongw.push('剧烈运动');
        zzxw[1].id.push("5");
      }
      var xiaw = [];
      if (res.data.data[0].Behavior.ATea == true) {
        xiaw.push('茶水');
        zzxw[2].id.push("0");
      }
      if (res.data.data[0].Behavior.ACoffee == true) {
        xiaw.push('咖啡');
        zzxw[2].id.push("1");
      }
      if (res.data.data[0].Behavior.AAlcohol == true) {
        xiaw.push('酒精');
        zzxw[2].id.push("2");
      }
      if (res.data.data[0].Behavior.AMedicinal == true) {
        xiaw.push('药物');
        zzxw[2].id.push("3");
      }
      if (res.data.data[0].Behavior.AFeast == true) {
        xiaw.push('饱餐');
        zzxw[2].id.push("4");
      }
      if (res.data.data[0].Behavior.ASport == true) {
        xiaw.push('剧烈运动');
        zzxw[2].id.push("5");
      }
      var wans = [];
      if (res.data.data[0].Behavior.ETea == true) {
        wans.push('茶水');
        zzxw[3].id.push("0");
      }
      if (res.data.data[0].Behavior.ECoffee == true) {
        wans.push('咖啡');
        zzxw[3].id.push("1");
      }
      if (res.data.data[0].Behavior.EAlcohol == true) {
        wans.push('酒精');
        zzxw[3].id.push("2");
      }
      if (res.data.data[0].Behavior.EMedicinal == true) {
        wans.push('药物');
        zzxw[3].id.push("3");
      }
      if (res.data.data[0].Behavior.EFeast == true) {
        wans.push('饱餐');
        zzxw[3].id.push("4");
      }
      if (res.data.data[0].Behavior.ESport == true) {
        wans.push('剧烈运动');
        zzxw[3].id.push("5");
      }
      console.log(zaos, zhongw, xiaw, wans);
      var zaoshang = '';
      var zhongwu = '';
      var xiawu = '';
      var wanshang = '';
      for (var i = 0; i < zaos.length; i++) {
        if (i == zaos.length - 1) {
          zaoshang += zaos[i];
        } else {
          zaoshang += zaos[i] + '/';
        }
      }
      for (var i = 0; i < zhongw.length; i++) {
        if (i == zhongw.length - 1) {
          zhongwu += zhongw[i];
        } else {
          zhongwu += zhongw[i] + '/';
        }
      }
      for (var i = 0; i < xiaw.length; i++) {
        if (i == xiaw.length - 1) {
          xiawu += xiaw[i];
        } else {
          xiawu += xiaw[i] + '/';
        }
      }
      for (var i = 0; i < wans.length; i++) {
        if (i == wans.length - 1) {
          wanshang += wans[i];
        } else {
          wanshang += wans[i] + '/';
        }
      }
      this.data.sz[0].con = zaoshang;
      this.data.sz[1].con = zhongwu;
      this.data.sz[2].con = xiawu;
      this.data.sz[3].con = wanshang;
      this.setData({
        num1: res.data.data[0].Behavior.IsGood,
        num2: res.data.data[0].Behavior.IsEnergy,
        arry: this.data.arry,
        dto: {
          "Behavior": res.data.data[0].Behavior,
          "Nap": res.data.data[0].Nap,
          "Action": "Update"
        },
        lock: false,
        zzxw: zzxw,
        ztz: [{
          'zt': false
        }, {
          'zt': false
        }, {
          'zt': false
        }, {
          'zt': false
        }],
        shuz: 0,
        sz: this.data.sz
      })
      this.daijilu();
      console.log(this.data.lock, 4 - this.data.shuz, this.data.sz, this.data.dto.Behavior.IsGood, this.data.dto.Behavior.IsEnergy, this.data.arry, this.data.ztz);
    })
  },
  daijilu() {
    this.setData({
      shuz: 0
    })
    if (this.data.dto.Behavior.IsGood == 0 || this.data.dto.Behavior.IsGood == 1 || this.data.dto.Behavior.IsGood == 2 || this.data.dto.Behavior.IsGood == 3 || this.data.dto.Behavior.IsGood == 4 || this.data.dto.Behavior.IsGood == 5) {
      this.data.ztz[0].zt = true;
    } else {
      this.data.ztz[0].zt = false;
    }
    if (this.data.dto.Behavior.IsEnergy == 0 || this.data.dto.Behavior.IsEnergy == 1 || this.data.dto.Behavior.IsEnergy == 2 || this.data.dto.Behavior.IsEnergy == 3 || this.data.dto.Behavior.IsEnergy == 4 || this.data.dto.Behavior.IsEnergy == 5) {
      this.data.ztz[1].zt = true;
    } else {
      this.data.ztz[1].zt = false;
    }
    if (this.data.arry.length >= 1) {
      this.data.ztz[2].zt = true;
    } else {
      this.data.ztz[2].zt = false;
    }
    if (!this.data.lock) {
      this.data.ztz[3].zt = true;
    } else {
      this.data.ztz[3].zt = false;
    }
    for (var i = 0; i < this.data.ztz.length; i++) {
      if (this.data.ztz[i].zt == true) {
        this.setData({
          shuz: this.data.shuz + 1
        })
      }
    }
    console.log(this.data.lock, this.data.arry, this.data.dto.Behavior);
  },
  onTime(e) {
    console.log(e.detail);
    // var token = wx.getStorageSync('token');
    // var MemberCode = wx.getStorageSync('MemberCode');
    // request('/masterhypnotist/homeinfo','POST',{"memberCode":MemberCode,"dt":e.detail},token).then(res=>{
    //   console.log(res);
    // })
    // if(new Date(e.detail).getTime()>new Date(this.data.dto.Behavior.Createtime).getTime()+(24*60*60*1000)){
    //   console.log(new Date(e.detail).getTime()-new Date(this.data.dto.Behavior.Createtime).getTime())
    //   wx.showToast({
    //     title: '不能修改以后的记录',
    //     icon: 'none'
    //   })
    // }else{
    //   this.data.dto.Behavior.Createtime = e.detail;
    //   this.data.date1 = e.detail;
    //   this.data.dto.Action = "Update";
    //   this.updateTime(e.detail);
    // }
  },
  hiddenxssj() {
    this.setData({
      xssj: true
    })
  },
  bindChange(e) {
    this.setData({
      index1: e.detail.value
    })
    this.setData({
      start: this.data.date1 + ' ' + this.data.hours[this.data.index1[1]] + ':' + this.data.fz[this.data.index1[2]]
    })
    this.daijilu();
  },
  startTime() {
    this.setData({
      showtime: false
    })
    this.daijilu();
  },
  endTime() {
    this.setData({
      showtime: true
    })
    this.daijilu();
  },
  bindChange1(e) {
    this.setData({
      index1: e.detail.value
    })
    this.setData({
      end: this.data.date1 + ' ' + this.data.hours[this.data.index1[1]] + ':' + this.data.fz[this.data.index1[2]]
    })
    this.daijilu();
  },
  subtract() {
    var num = --this.data.num;
    if (num <= 0) {
      num = 0;
    }
    this.setData({
      num: num
    })
    this.daijilu();
  },
  add() {
    var num = ++this.data.num;
    this.setData({
      num: num
    })
    this.daijilu();
  },
  subtract(event) {
    this.data.arry[event.currentTarget.dataset.index].fz--;
    if (this.data.arry[event.currentTarget.dataset.index].fz <= 0) {
      this.data.arry[event.currentTarget.dataset.index].fz = 0;
    }
    this.setData({
      arry: this.data.arry
    })
    this.daijilu();
  },
  add(event) {
    this.data.arry[event.currentTarget.dataset.index].fz++;
    this.setData({
      arry: this.data.arry
    })
    this.daijilu();
  },
  updata(event) {
    this.setData({
      xssj: false,
      gengxin: false,
      xiabiao: event.currentTarget.dataset.index,
      start: this.data.arry[event.currentTarget.dataset.index].time,
      end: this.data.arry[event.currentTarget.dataset.index].endtime
    })
    this.daijilu();
  },
  del(event) {
    this.data.arry.splice(event.currentTarget.dataset.index, 1);
    this.setData({
      arry: this.data.arry
    })
    this.daijilu();
  },
  back() {
    console.log(11);
    wx.navigateTo({
      url: '../dayBehavior/dayBehavior'
    })
  },
  addTime() {
    this.setData({
      xssj: false
    })
  },
  addxssj(event) {
    // if (this.data.start != '' && this.data.end != '') {
      console.log(this.data.start, this.data.end);
      var start = this.data.start ? this.data.start : this.data.date1 + ' 00:00';
      var end = this.data.end ? this.data.end : this.data.date1 + ' 00:00';
      var startxs = Number(start.split(' ')[1].split(':')[0]);
      var startfz = Number(start.split(' ')[1].split(':')[1]);
      var endxs = Number(end.split(' ')[1].split(':')[0]);
      var endfz = Number(end.split(' ')[1].split(':')[1]);
      console.log((endxs - startxs) * 60 + (endfz - startfz));
      if ((endxs - startxs) * 60 + (endfz - startfz) >= 0) {
        if (this.data.gengxin) {
          this.data.arry.push({
            time: start,
            endtime: end,
            fz: (endxs - startxs) * 60 + (endfz - startfz)
          });
        } else {
          this.data.arry[this.data.xiabiao].time = this.data.start;
          this.data.arry[this.data.xiabiao].endtime = this.data.end;
          this.data.arry[this.data.xiabiao].fz = (endxs - startxs) * 60 + (endfz - startfz);
        }
      } else {
        console.log("请合理安排时间");
        wx.showToast({
          title: '请合理安排时间',
          icon: 'none'
        })
        return;
      }
    // } else {
    //   wx.showToast({
    //     title: '请选中开始时间和结束时间',
    //     icon: 'none'
    //   })
    //   return;
    // }
    this.setData({
      xssj: true,
      arry: this.data.arry,
      gengxin: true
    })
    this.daijilu();
  },
  onCheced(e) {
    console.log(e.detail, e);
    if (e.currentTarget.dataset.id == 0) {
      this.data.dto.Behavior.IsGood = e.detail;
    } else if (e.currentTarget.dataset.id == 1) {
      this.data.dto.Behavior.IsEnergy = e.detail;
    }
    this.setData({
      dto: this.data.dto
    })
    this.daijilu();
  },
  onSeve(e) {
    this.setData({
      seveLock: false
    })
    wx.redirectTo({
      url: '/sleep-mainPages/pages/college/college',
    })
  },
  seve() {
    var IsGood = this.data.dto.Behavior.IsGood;
    var behArr = '';
    for (var i = 0; i < this.data.day.length; i++) {
      console.log(i)
      if (this.data.day[i].state) {
        // behArr.push({
        //   [this.data.day[i].name]: this.data.day[i].state
        // })
        behArr += this.data.day[i].con + '-' + this.data.day[i].state + ','
      }
    }
    console.log(behArr)
    this.data.dto.behArr = behArr
    if (IsGood == 0 || IsGood == 1 || IsGood == 2 || IsGood == 3 || IsGood == 4 || IsGood == 5) {
      console.log(this.data.arry);
      var MemberCode = wx.getStorageSync('MemberCode');
      this.data.dto.Nap = [];
      for (var i = 0; i < this.data.arry.length; i++) {
        this.data.dto.Nap[i] = {
          "FId": "",
          "MemberCode": MemberCode,
          "BehaviorCode": "",
          "BeginTime": this.data.arry[i].time,
          "EndTime": this.data.arry[i].endtime,
          "Duration": this.data.arry[i].fz
        }
      }
      var time = new Date()
      var year = time.getFullYear();
      var month = time.getMonth() + 1;
      month = month > 9 ? month : '0' + month;
      var day = time.getDate();
      var Createtime = year + "-" + month + "-" + day + " " + "00:00:00"
      this.data.dto.Behavior.Createtime = Createtime
      console.log(this.data.dto);
      var token = wx.getStorageSync('token');
      // return
      request('/masterhypnotist/daytimebehavior', 'POST', JSON.stringify(this.data.dto), token).then(res => {
        console.log(res);
        if (res.data.code == "0") {
          this.setData({
            seveLock: true
          })
        } else {
          wx.showToast({
            title: res.data.msg,
            icon: 'none'
          })
        }
      })
      // }else{
      //   wx.showToast({
      //     title: '请添加白天活动',
      //     icon: 'none'
      //   })
      //   return;
      // }
      // }else{
      //   // wx.showToast({
      //   //   title: '我今日白天的精神状态?',
      //   //   icon: 'none'
      //   // })
      //   // return;
      // }
    } else {
      wx.showToast({
        title: '我今天的整体感受?',
        icon: 'none'
      })
      return;
    }
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
    for (var i = 0; i < this.data.sz.length; i++) {
      if (this.data.sz[0].con != "" || this.data.sz[1].con != "" || this.data.sz[2].con != "" || this.data.sz[3].con != "") {
        this.setData({
          lock: false
        })
      } else {
        this.setData({
          lock: true
        })
      }
    }
    console.log(this.data.day, this.data.dto.Behavior);
    this.data.dto.Behavior.MTea = false;
    this.data.dto.Behavior.MCoffee = false;
    this.data.dto.Behavior.MAlcohol = false;
    this.data.dto.Behavior.MMedicinal = false;
    this.data.dto.Behavior.MFeast = false;
    this.data.dto.Behavior.MSport = false;

    this.data.dto.Behavior.NTea = false;
    this.data.dto.Behavior.NCoffee = false;
    this.data.dto.Behavior.NAlcohol = false;
    this.data.dto.Behavior.NMedicinal = false;
    this.data.dto.Behavior.NFeast = false;
    this.data.dto.Behavior.NSport = false;

    this.data.dto.Behavior.ATea = false;
    this.data.dto.Behavior.ACoffee = false;
    this.data.dto.Behavior.AAlcohol = false;
    this.data.dto.Behavior.AMedicinal = false;
    this.data.dto.Behavior.AFeast = false;
    this.data.dto.Behavior.ASport = false;

    this.data.dto.Behavior.ETea = false;
    this.data.dto.Behavior.ECoffee = false;
    this.data.dto.Behavior.EAlcohol = false;
    this.data.dto.Behavior.EMedicinal = false;
    this.data.dto.Behavior.EFeast = false;
    this.data.dto.Behavior.ESport = false;
    for (var i = 0; i < this.data.day.length; i++) {
      console.log("出错数据",this.data.day[i].zzw)
      for (var j = 0; j < this.data.day[i].zzw.length; j++) {
        console.log(this.data.lock);
        if (i == 0) {
          if (this.data.day[i].zzw[j] == 0) {
            console.log("茶水");
            this.data.dto.Behavior.MTea = true;
          } else if (this.data.day[i].zzw[j] == 1) {
            console.log("咖啡");
            this.data.dto.Behavior.MCoffee = true;
          } else if (this.data.day[i].zzw[j] == 2) {
            console.log("酒精");
            this.data.dto.Behavior.MAlcohol = true;
          } else if (this.data.day[i].zzw[j] == 3) {
            console.log("药物");
            this.data.dto.Behavior.MMedicinal = true;
          } else if (this.data.day[i].zzw[j] == 4) {
            console.log("饱餐");
            this.data.dto.Behavior.MFeast = true;
          } else if (this.data.day[i].zzw[j] == 5) {
            console.log("剧烈运动");
            this.data.dto.Behavior.MSport = true;
          }
        } else if (i == 1) {
          if (this.data.day[i].zzw[j] == 0) {
            console.log("茶水");
            this.data.dto.Behavior.NTea = true;
          } else if (this.data.day[i].zzw[j] == 1) {
            console.log("咖啡");
            this.data.dto.Behavior.NCoffee = true;
          } else if (this.data.day[i].zzw[j] == 2) {
            console.log("酒精");
            this.data.dto.Behavior.NAlcohol = true;
          } else if (this.data.day[i].zzw[j] == 3) {
            console.log("药物");
            this.data.dto.Behavior.NMedicinal = true;
          } else if (this.data.day[i].zzw[j] == 4) {
            console.log("饱餐");
            this.data.dto.Behavior.NFeast = true;
          } else if (this.data.day[i].zzw[j] == 5) {
            console.log("剧烈运动");
            this.data.dto.Behavior.NSport = true;
          }
        } else if (i == 2) {
          if (this.data.day[i].zzw[j] == 0) {
            console.log("茶水");
            this.data.dto.Behavior.ATea = true;
          } else if (this.data.day[i].zzw[j] == 1) {
            console.log("咖啡");
            this.data.dto.Behavior.ACoffee = true;
          } else if (this.data.day[i].zzw[j] == 2) {
            console.log("酒精");
            this.data.dto.Behavior.AAlcohol = true;
          } else if (this.data.day[i].zzw[j] == 3) {
            console.log("药物");
            this.data.dto.Behavior.AMedicinal = true;
          } else if (this.data.day[i].zzw[j] == 4) {
            console.log("饱餐");
            this.data.dto.Behavior.AFeast = true;
          } else if (this.data.day[i].zzw[j] == 5) {
            console.log("剧烈运动");
            this.data.dto.Behavior.ASport = true;
          }
        } else if (i == 3) {
          if (this.data.day[i].zzw[j] == 0) {
            console.log("茶水");
            this.data.dto.Behavior.ETea = true;
          } else if (this.data.day[i].zzw[j] == 1) {
            console.log("咖啡");
            this.data.dto.Behavior.ECoffee = true;
          } else if (this.data.day[i].zzw[j] == 2) {
            console.log("酒精");
            this.data.dto.Behavior.EAlcohol = true;
          } else if (this.data.day[i].zzw[j] == 3) {
            console.log("药物");
            this.data.dto.Behavior.EMedicinal = true;
          } else if (this.data.day[i].zzw[j] == 4) {
            console.log("饱餐");
            this.data.dto.Behavior.EFeast = true;
          } else if (this.data.day[i].zzw[j] == 5) {
            console.log("剧烈运动");
            this.data.dto.Behavior.ESport = true;
          }
        }
      }
    }
    this.setData({
      dto: this.data.dto
    })
    this.daijilu();
    console.log(this.data.dto.Behavior);
  },
  cik(e) {
    var index = e.currentTarget.dataset.index;
    var day = this.data.day;
    day[index].state = false;
    this.setData({
      day: day
    })
    // var stateArr = ['day', 'night', 'both', false]
    var stateArr = ['白天', '晚上', '都有'];
    console.log(day);
    wx.showActionSheet({
      itemList: ['白天', '晚上', '都有'],
      success: (res) => {
        console.log(res)
        day[index].state = stateArr[res.tapIndex];
        this.setData({
          day: day
        })
      }
    })
  }
})