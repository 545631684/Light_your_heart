// components/my-record/my-record.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    collection: {
      type: Array,
      value: []
    },
    timesDay: {
      type: String,
      value: ""
    },
    bedDate: {
      type: String,
      value: ""
    }
  },
  /**
   * 组件的初始数据
   */
  lifetimes: {
    ready() {
      setTimeout(() => {
        if (this.properties.timesDay == "") {
          var time = new Date();
        } else {
          var time = new Date(this.properties.timesDay);
        }

        var month1 = time.getMonth() + 1;
        var day1 = time.getDate();
        if (month1 < 10) {
          month1 = "0" + month1
        }
        if (day1 < 10) {
          day1 = "0" + day1
        }
        var timeDay = month1 + "-" + day1;

        var yes = new Date(time.getTime() - 84600000);

        var month2 = yes.getMonth() + 1;
        var day2 = yes.getDate();
        if (month2 < 10) {
          month2 = "0" + month2
        }
        if (day2 < 10) {
          day2 = "0" + day2
        }
        var timeYes = month2 + "-" + day2;


        var objectMultiArrays = [...this.data.objectMultiArray];

        objectMultiArrays[0] = [{
          date_id: 0,
          name: timeYes
        }, {
          date_id: 1,
          name: timeDay
        }]

        this.setData({
          objectMultiArray: [...objectMultiArrays]
        })

        if (this.properties.collection.length <= 1) {
          this.setData({
            newTimes: ['', '待记录', ''],
            newTimes1: ['', '待记录', ''],
            newTimes2: ['', '待记录', ''],
            newTimes3: ['', '待记录', '']
          })

        } else {
          this.setData({
            newTimes: ['', '待记录', ''],
            newTimes1: ['', '待记录', ''],
            newTimes2: ['', '待记录', ''],
            newTimes3: ['', '待记录', '']
          })
          this.triggerEvent("setTips", 4);
        }
        console.log(this.properties, "李辉-----");
      }, 1)
    }
  },
  data: {
    isShow: true,
    isShow1: true,
    isShow2: true,
    isShow3: true,
    newTimes: ['', '待记录', ''],
    newTimes1: ['', '待记录', ''],
    newTimes2: ['', '待记录', ''],
    newTimes3: ['', '待记录', ''],
    objectMultiArray: [
      [

      ],
      [{
          date_id: 0,
          name: '00'
        },
        {
          date_id: 1,
          name: '01'
        },
        {
          date_id: 2,
          name: '02'
        },
        {
          date_id: 3,
          name: '03'
        },
        {
          date_id: 4,
          name: '04'
        },
        {
          date_id: 5,
          name: '05'
        },
        {
          date_id: 6,
          name: '06'
        },
        {
          date_id: 7,
          name: '07'
        },
        {
          date_id: 8,
          name: '08'
        },
        {
          date_id: 9,
          name: '09'
        },
        {
          date_id: 10,
          name: '10'
        },
        {
          date_id: 11,
          name: '11'
        },
        {
          date_id: 12,
          name: '12'
        },
        {
          date_id: 13,
          name: '13'
        },
        {
          date_id: 14,
          name: '14'
        },
        {
          date_id: 15,
          name: '15'
        },
        {
          date_id: 16,
          name: '16'
        },
        {
          date_id: 17,
          name: '17'
        },
        {
          date_id: 18,
          name: '18'
        },
        {
          date_id: 19,
          name: '19'
        },
        {
          date_id: 20,
          name: '20'
        },
        {
          date_id: 21,
          name: '21'
        },
        {
          date_id: 22,
          name: '22'
        },
        {
          date_id: 23,
          name: '23'
        }
      ],
      [{
          date_id: 0,
          name: '00'
        },
        {
          date_id: 1,
          name: '05'
        },
        {
          date_id: 2,
          name: '10'
        },
        {
          date_id: 3,
          name: '15'
        },
        {
          date_id: 4,
          name: '20'
        },
        {
          date_id: 5,
          name: '25'
        },
        {
          date_id: 6,
          name: '30'
        },
        {
          date_id: 7,
          name: '35'
        },
        {
          date_id: 8,
          name: '40'
        },
        {
          date_id: 9,
          name: '45'
        },
        {
          date_id: 10,
          name: '50'
        },
        {
          date_id: 11,
          name: '55'
        }
      ]
    ],
    multiIndex: [0, 22, 0],
    multiIndex1: [0, 0, 0],
    multiIndex2: [0, 0],
    multiIndex3: [0, 0],
    defaultWek: false,
    selectDate1: {
      day: [],
      hourse: [],
      minutes: []
    },
    selectDate2: {
      day: [],
      hourse: [],
      minutes: []
    },
    selectDate3: {
      day: [],
      hourse: [],
      minutes: []
    },
    selectDate4: {
      day: [],
      hourse: [],
      minutes: []
    },
    helpData: [
      [{
          date_id: 0,
          name: '00'
        },
        {
          date_id: 1,
          name: '01'
        },
        {
          date_id: 2,
          name: '02'
        },
        {
          date_id: 3,
          name: '03'
        },
        {
          date_id: 4,
          name: '04'
        },
        {
          date_id: 5,
          name: '05'
        },
        {
          date_id: 6,
          name: '06'
        },
        {
          date_id: 7,
          name: '07'
        },
        {
          date_id: 8,
          name: '08'
        },
        {
          date_id: 9,
          name: '09'
        },
        {
          date_id: 10,
          name: '10'
        },
        {
          date_id: 11,
          name: '11'
        },
        {
          date_id: 12,
          name: '12'
        },
        {
          date_id: 13,
          name: '13'
        },
        {
          date_id: 14,
          name: '14'
        },
        {
          date_id: 15,
          name: '15'
        },
        {
          date_id: 16,
          name: '16'
        },
        {
          date_id: 17,
          name: '17'
        },
        {
          date_id: 18,
          name: '18'
        },
        {
          date_id: 19,
          name: '19'
        },
        {
          date_id: 20,
          name: '20'
        },
        {
          date_id: 21,
          name: '21'
        },
        {
          date_id: 22,
          name: '22'
        },
        {
          date_id: 23,
          name: '23'
        }
      ],
      [{
          date_id: 0,
          name: '00'
        },
        {
          date_id: 1,
          name: '05'
        },
        {
          date_id: 2,
          name: '10'
        },
        {
          date_id: 3,
          name: '15'
        },
        {
          date_id: 4,
          name: '20'
        },
        {
          date_id: 5,
          name: '25'
        },
        {
          date_id: 6,
          name: '30'
        },
        {
          date_id: 7,
          name: '35'
        },
        {
          date_id: 8,
          name: '40'
        },
        {
          date_id: 9,
          name: '45'
        },
        {
          date_id: 10,
          name: '50'
        },
        {
          date_id: 11,
          name: '55'
        }

      ]
    ],
    isFirstDefault: true,
    sleeplessNights: false
  },
  /**
   * 组件的方法列表
   */

  methods: {
    // 整夜无眠逻辑
    sleeplessFn() {
      console.log("整夜无眠!");
      this.setData({
        newTimes1: [...this.data.newTimes],
        newTimes2: [...this.data.newTimes],
        sleeplessNights: true
      })
      this.hidePick1();
      // var time = new Date();
      // var month1 = time.getMonth() + 1;
      // var day1 = time.getDate();
      // if (month1 < 10) {
      //   month1 = "0" + month1
      // }
      // if (day1 < 10) {
      //   day1 = "0" + day1
      // }
      // var timeDates = month1 + "-" + day1;

      // this.setData({
      //   newTimes2: [timeDates, "06", ":00"]
      // })
      this.triggerEvent("bindTimeChange2", this.data.newTimes2);
      this.triggerEvent("setTips", 1);
    },
    hidePick() {
      console.log(this.data.newTimes, '---1');
      this.setData({
        isShow: !this.data.isShow,
        sleeplessNights: false
        // isShow1:true
      })
      this.triggerEvent("bindTimeChange", this.data.newTimes);
    },
    hidePick1() {
      console.log(this.data.newTimes1, '---2');
      this.setData({
        isShow1: !this.data.isShow1
      })
      this.triggerEvent("bindTimeChange1", this.data.newTimes1);
    },
    hidePick2() {
      if (!this.data.defaultWek) {
        var time = new Date();
        var month1 = time.getMonth() + 1;
        var day1 = time.getDate();
        if (month1 < 10) {
          month1 = "0" + month1
        }
        if (day1 < 10) {
          day1 = "0" + day1
        }
        var timeDates = month1 + "-" + day1;

        this.setData({
          newTimes2: [timeDates, "06", ":00"]
        })
      }
      console.log(this.data.newTimes2, '---3');
      this.setData({
        isShow2: !this.data.isShow2
      })
      this.triggerEvent("bindTimeChange2", this.data.newTimes2);
    },
    hidePick3() {
      console.log(this.data.newTimes3, '---4');
      this.setData({
        isShow3: !this.data.isShow3
      })
      this.triggerEvent("bindTimeChange3", this.data.newTimes3);
    },
    // 微信小程序bug调整
    changeDate(dataObj) {
      console.log(dataObj)
      if (dataObj.day) {
        var day = dataObj.day;
        day.forEach((item, index) => {
          item.date_id = index;
        })
      }

      var hourse = dataObj.hourse;
      hourse.forEach((item, index) => {
        item.date_id = index;
      })
      var minutes = dataObj.minutes;
      minutes.forEach((item, index) => {
        item.date_id = index;
      })
    },
    isShowClick() {
      this.changeDate(this.data.selectDate1);
      this.setData({
        isShow: !this.data.isShow,
        selectDate1: {
          day: [...this.data.objectMultiArray][0],
          hourse: [...this.data.objectMultiArray][1],
          minutes: [...this.data.helpData][1]
        }
      })
      // 第一次进来默认10点以后选几点默认几点
      if (this.data.newTimes[1] === '待记录') {
        var defaultOne = [...this.data.objectMultiArray][0][0].name;
        this.setData({
          multiIndex: [0, 22, 0],
          newTimes: [defaultOne, '22', ':00']
        })
      } else {
        // 两种情况：
        // 第一:修改睡眠
        // 获取上次记录时间设置是多少就显示多少
        // 第二:重新选择
        // 第二种情况

        if (this.properties.collection.length <= 1) {
          this.triggerEvent("setTips", 5);
        }
        // 第一种情况
        else {
          this.triggerEvent("setTips", 4);
          var firstDefaultArry = this.properties.collection[0].split(":");
          var index0;
          this.data.selectDate1.day.forEach((item, index) => {
            console.log(item.name, this.data.bedDate.substr(5, 5), "000000");
            if (item.name == this.data.bedDate.substr(5, 5)) {
              index0 = index;
            }
          });
          var index1;
          this.data.selectDate1.hourse.forEach((item, index) => {
            if (item.name == firstDefaultArry[0]) {
              index1 = index;
            }
          });
          var index2;
          this.data.selectDate1.minutes.forEach((item, index) => {
            if (item.name == firstDefaultArry[1]) {
              index2 = index;
            }
          });

          console.log(this.properties.collection, '第二种', index0, index1, index2);
          if (this.data.isFirstDefault) {
            this.setData({
              multiIndex: [index0, index1, index2],
              newTimes: [this.data.bedDate.substr(5, 5), firstDefaultArry[0], ":" + firstDefaultArry[1]]
            })

          }
          this.triggerEvent("setTips", 4);
        }

      }


      this.setData({
        newTimes1: ['', '待记录', ''],
        newTimes2: ['', '待记录', ''],
        newTimes3: ['', '待记录', '']
      })

    },
    formatArry(arry, target) {
      var index;
      for (var i = 0; i < arry.length; i++) {
        if (arry[i].name === target) {
          index = i;
        }
      }
      var newArry = [...arry.slice(index)];
      newArry.forEach((item, index) => {
        return item.date_id = index;
      })
      return newArry;
    },
    isShowClick1() {
      if (this.properties.collection.length <= 1) {
        this.triggerEvent("setTips", 4);
      }
      // 第一种情况
      else {
        this.triggerEvent("setTips", 3);
      }
      this.changeDate(this.data.selectDate2);
      if (this.data.newTimes[1] === '待记录') {
        console.log('待记录')
        return;
      }
      // if (this.data.sleeplessNights) {
      //   console.log('sleeplessNights')
      //   return;
      // }

      // if(this.data.newTimes1[1] === '待记录'){
      this.setData({
        newTimes1: [...this.data.newTimes]
      })
      // }

      var day = this.data.newTimes[0];
      var hourse = this.data.newTimes[1];
      var min = this.data.newTimes[2].slice(1);
      var dayArry = [...this.data.objectMultiArray[0]];
      var hourseArry = [...this.data.objectMultiArray[1]];
      var minArry = [...this.data.objectMultiArray[2]];

      var newdayArry = this.formatArry(dayArry, day);
      var newhourseArry = this.formatArry(hourseArry, hourse);
      var newminArry = this.formatArry(minArry, min);
      if (newdayArry.length == 1 && newhourseArry.length == 1) {
        newminArry.pop();
        this.setData({
          isShow1: !this.data.isShow1,
          multiIndex1: [0, 0, 0],
          selectDate2: {
            day: newdayArry,
            hourse: newhourseArry,
            minutes: newminArry,
          }
        })
      } else {
        this.setData({
          isShow1: !this.data.isShow1,
          multiIndex1: [0, 0, 0],
          selectDate2: {
            day: newdayArry,
            hourse: newhourseArry,
            minutes: newminArry,
          }
        })
      }
      this.setData({
        newTimes2: ['', '待记录', ''],
        newTimes3: ['', '待记录', '']
      })

    },
    isShowClick2() {
      this.changeDate(this.data.selectDate3);
      console.log(this.data.selectDate3, "lihui----");
      if (this.data.newTimes1[1] === '待记录') {
        return;
      }

      if (this.properties.collection.length <= 1) {
        this.triggerEvent("setTips", 3);
      }
      // 第一种情况
      else {
        this.triggerEvent("setTips", 2);
      }
      if (this.data.sleeplessNights) {
        console.log('(this.data.sleeplessNights)')
        return;
      }

      //  if(this.data.newTimes2[1] === '待记录'){
      //  this.setData({
      //   newTimes2:[...this.data.newTimes1]
      //  })
      //  }

      var time = new Date();
      var month1 = time.getMonth() + 1;
      var day1 = time.getDate();
      if (month1 < 10) {
        month1 = "0" + month1
      }
      if (day1 < 10) {
        day1 = "0" + day1
      }
      var timeDates = month1 + "-" + day1;
      console.log(this.data.newTimes1[0], timeDates, '---lihui');
      if (this.data.newTimes1[0] != timeDates) {
        this.setData({
          isShow2: !this.data.isShow2,
          selectDate3: {
            day: [],
            hourse: [...this.data.helpData[0]],
            minutes: [...this.data.helpData[1]],
          }
        })
        this.changeDate(this.data.selectDate3);
        //  pickView设置默认值需要先设置数据再设置默认值
        this.setData({
          newTimes2: ["", "06", ":00"],
          multiIndex2: [6, 0]
        })
        this.changeDate(this.data.selectDate3);
      } else {
        this.changeDate(this.data.selectDate3);
        var day = this.data.newTimes1[0];
        var hourse = this.data.newTimes1[1];
        var min = this.data.newTimes1[2].slice(1);
        var dayArry = [...this.data.objectMultiArray[0]];
        var hourseArry = [...this.data.objectMultiArray[1]];
        var minArry = [...this.data.objectMultiArray[2]];

        var newdayArry = this.formatArry(dayArry, day);
        var newhourseArry = this.formatArry(hourseArry, hourse);
        var newminArry = this.formatArry(minArry, min);

        this.setData({
          isShow2: !this.data.isShow2,
          multiIndex2: [0, 0],
          selectDate3: {
            day: newdayArry,
            hourse: newhourseArry,
            minutes: newminArry,
          },
          newTimes2: [newdayArry[0].name, newhourseArry[0].name, ":" + newminArry[0].name]
        })

      }
      this.setData({
        newTimes3: ['', '待记录', '']
      })
      this.changeDate(this.data.selectDate3);

    },
    isShowClick3() {
      this.changeDate(this.data.selectDate4);
      if (this.data.newTimes2[1] === '待记录') {
        return;
      }
      if (this.properties.collection.length <= 1) {
        this.triggerEvent("setTips", 2);
      }
     
      console.log(this.data.selectDate4);
      if (this.data.sleeplessNights) {
        console.log(this.data.selectDate4);
        var selectDate4 = {
          hourse: [{
            date_id: 0,
            name: "06"
          },{
            date_id: 1,
            name: "07"
          }, {
            date_id: 2,
            name: "08"
          }, {
            date_id: 3,
            name: "09"
          }, {
            date_id: 4,
            name: "10"
          }, {
            date_id: 5,
            name: "11"
          }, {
            date_id: 6,
            name: "12"
          }, {
            date_id: 7,
            name: "13"
          }, {
            date_id: 8,
            name: "14"
          }, {
            date_id: 9,
            name: "15"
          }, {
            date_id: 10,
            name: "16"
          }, {
            date_id: 11,
            name: "17"
          }, {
            date_id: 12,
            name: "18"
          }, {
            date_id: 13,
            name: "19"
          }, {
            date_id: 14,
            name: "20"
          }, {
            date_id: 15,
            name: "21"
          }, {
            date_id: 16,
            name: "22"
          }, {
            date_id: 17,
            name: "23"
          }],
          minutes: [{
            date_id: 0,
            name: "00"
          },{
            date_id: 1,
            name: "05"
          }, {
            date_id: 2,
            name: "10"
          }, {
            date_id: 3,
            name: "15"
          }, {
            date_id: 4,
            name: "20"
          }, {
            date_id: 5,
            name: "25"
          }, {
            date_id: 6,
            name: "30"
          }, {
            date_id: 7,
            name: "35"
          }, {
            date_id: 8,
            name: "40"
          }, {
            date_id: 9,
            name: "45"
          }, {
            date_id: 10,
            name: "50"
          }, {
            date_id: 11,
            name: "55"
          }]
        }
        this.setData({
          isShow3: !this.data.isShow3,
          multiIndex3: [0, 0],
          selectDate4: selectDate4
        })
        // this.setData({
        //   newTimes3: [...this.data.newTimes2]
        // })
      } else {
        var hourse = this.data.newTimes2[1];
        var min = this.data.newTimes2[2].slice(1);
        var hourseArry = [...this.data.helpData[0]];
        var minArry = [...this.data.helpData[1]];
        var newhourseArry = this.formatArry(hourseArry, hourse);
        var newminArry = this.formatArry(minArry, min);
        this.setData({
          isShow3: !this.data.isShow3,
          multiIndex3: [0, 0],
          selectDate4: {
            hourse: newhourseArry,
            minutes: newminArry,
          }
        })
        this.setData({
          newTimes3: [...this.data.newTimes2]
        })
        console.log(this.data.selectDate4);
      }

    },
    bindTimeChange: function (e) {
      if (!e.detail.value) {
        return;
      }

      if (e.detail.value[0] > 0 && e.detail.value[1] > 22) {
        var newArry = [...this.data.objectMultiArray[2]];
        newArry.pop();
        this.setData({
          selectDate1: {
            day: [...this.data.objectMultiArray[0]],
            hourse: [...this.data.objectMultiArray[1]],
            minutes: newArry
          }
        })

      } else {

        this.setData({
          selectDate1: {
            day: [...this.data.objectMultiArray[0]],
            hourse: [...this.data.objectMultiArray[1]],
            minutes: [...this.data.objectMultiArray[2]]
          }
        })

      }

      this.setData({
        multiIndex: e.detail.value,
        isFirstDefault: false
      })


      var names = this.data.selectDate1.day[e.detail.value[0]].name;
      var names1 = this.data.selectDate1.hourse[e.detail.value[1]].name;
      var names2 = ":" + this.data.selectDate1.minutes[e.detail.value[2]].name;
      this.setData({
        newTimes: [names, names1, names2]
      })
      if (this.properties.timesDay == "") {
        var time = new Date();
      } else {
        var time = new Date(this.properties.timesDay);
      }

      var month1 = time.getMonth() + 1;
      var day1 = time.getDate();
      if (month1 < 10) {
        month1 = "0" + month1
      }
      if (day1 < 10) {
        day1 = "0" + day1
      }
      var timeDay = month1 + "-" + day1;
      if (names == timeDay) {
        this.setData({
          multiIndex1: [0, 0, 0]
        })
      }
      this.triggerEvent("setTips", 4);
      this.triggerEvent("bindTimeChange", this.data.newTimes);

    },
    bindTimeChange1: function (e) {

      if (!e.detail.value || this.data.isShow1) {

        return;
      }

      // 第二天的显示逻辑
      if (e.detail.value[0] === 1) {
        this.setData({
          selectDate2: {
            day: [...this.data.selectDate2.day],
            hourse: [...this.data.helpData[0]],
            minutes: [...this.data.helpData[1]]
          }
        })

      } else {
        var day = this.data.newTimes[0];
        var hourse = this.data.newTimes[1];
        var min = this.data.newTimes[2].slice(1);
        var dayArry = [...this.data.objectMultiArray[0]];
        var hourseArry = [...this.data.objectMultiArray[1]];
        var minArry = [...this.data.objectMultiArray[2]];

        var newdayArry = this.formatArry(dayArry, day);
        var newhourseArry = this.formatArry(hourseArry, hourse);
        var newminArry = this.formatArry(minArry, min);
        if (e.detail.value[1] >= 1) {
          this.setData({
            selectDate2: {
              day: newdayArry,
              hourse: newhourseArry,
              minutes: [...this.data.helpData[1]]
            }
          })

        } else {
          this.setData({
            selectDate2: {
              day: newdayArry,
              hourse: newhourseArry,
              minutes: newminArry
            }
          })

        }
      }
      this.setData({
        multiIndex1: e.detail.value
      })
      var names = this.data.selectDate2.day[e.detail.value[0]].name;
      var names1 = this.data.selectDate2.hourse[e.detail.value[1]].name;
      var names2 = ":" + this.data.selectDate2.minutes[e.detail.value[2]].name;
      this.setData({
        newTimes1: [names, names1, names2]
      })
      this.triggerEvent("bindTimeChange1", this.data.newTimes1);
    },

    bindTimeChange2: function (e) {
      console.log(e.detail.value, "youbug");
      if (!e.detail.value || this.data.isShow2) {
        console.log("能进来？？？");
        return;
      }
      var time = new Date();
      var month1 = time.getMonth() + 1;
      var day1 = time.getDate();
      if (month1 < 10) {
        month1 = "0" + month1
      }
      if (day1 < 10) {
        day1 = "0" + day1
      }
      var timeDates = month1 + "-" + day1;
      if (this.data.newTimes1[0] != timeDates) {
        this.setData({
          selectDate3: {
            day: [],
            hourse: [...this.data.helpData[0]],
            minutes: [...this.data.helpData[1]],
          }
        })
        //  pickView设置默认值需要先设置数据再设置默认值
        this.setData({
          multiIndex2: [0, 0]
        })
      } else {
        if (e.detail.value[0] > 0) {
          this.setData({
            selectDate3: {
              day: [],
              hourse: [...this.data.selectDate3.hourse],
              minutes: [...this.data.helpData[1]],
            }
          })
        } else {
          var day = this.data.newTimes1[0];
          var hourse = this.data.newTimes1[1];
          var min = this.data.newTimes1[2].slice(1);
          var dayArry = [...this.data.objectMultiArray[0]];
          var hourseArry = [...this.data.objectMultiArray[1]];
          var minArry = [...this.data.objectMultiArray[2]];

          var newdayArry = this.formatArry(dayArry, day);
          var newhourseArry = this.formatArry(hourseArry, hourse);
          var newminArry = this.formatArry(minArry, min);
          this.setData({
            selectDate3: {
              day: newdayArry,
              hourse: newhourseArry,
              minutes: newminArry,
            }
          })
        }


      }



      this.setData({
        multiIndex2: e.detail.value,
        defaultWek: true
      })
      if (this.properties.timesDay == "") {
        var time = new Date();
      } else {
        var time = new Date(this.properties.timesDay);
      }
      var month1 = time.getMonth() + 1;
      var day1 = time.getDate();
      if (month1 < 10) {
        month1 = "0" + month1
      }
      if (day1 < 10) {
        day1 = "0" + day1
      }
      var timeDates = month1 + "-" + day1;
      console.log(e.detail.value, "此处有bug!");

      var names1 = this.data.selectDate3.hourse[e.detail.value[0]].name;
      var names2 = ":" + this.data.selectDate3.minutes[e.detail.value[1]].name;
      this.setData({
        newTimes2: [timeDates, names1, names2]
      })


      // var time = new Date();
      // var month1 = time.getMonth() + 1;
      // var day1 = time.getDate();
      // if (month1 < 10) {
      //   month1 = "0" + month1
      // }
      // if (day1 < 10) {
      //   day1 = "0" + day1
      // }
      // var timeDates = month1 + "-" + day1;

      // this.setData({
      //   newTimes2: [timeDates, "06", ":00"]
      // })


      console.log(this.data.newTimes2, "------lihui");
      this.triggerEvent("bindTimeChange2", this.data.newTimes2);
    },
    bindTimeChange3: function (e) {
      console.log('11221123',e)
      this.changeDate(this.data.selectDate3);
      this.changeDate(this.data.selectDate4);
      if (!e.detail.value || this.data.isShow3) {
        e.detail.value = [0,0]
        this.setData({
          multiIndex3: e.detail.value
        })
      }
      this.setData({
        multiIndex3: e.detail.value
      })
      // if (e.detail.value[0] > 0) {
        this.setData({
          selectDate4: {
            day: [],
            hourse: [...this.data.selectDate4.hourse],
            minutes: [...this.data.helpData[1]],
          }
        })
      // } else {
      //   var day = this.data.newTimes2[0];
      //   var hourse = this.data.newTimes2[1];
      //   var min = this.data.newTimes2[2].slice(1);
      //   var dayArry = [...this.data.objectMultiArray[0]];
      //   var hourseArry = [...this.data.objectMultiArray[1]];
      //   var minArry = [...this.data.objectMultiArray[2]];

      //   var newdayArry = this.formatArry(dayArry, day);
      //   var newhourseArry = this.formatArry(hourseArry, hourse);
      //   var newminArry = this.formatArry(minArry, min);
      //   this.setData({
      //     selectDate4: {
      //       hourse: newhourseArry,
      //       minutes: newminArry,
      //     }
      //   })
      // }

      if (this.properties.timesDay == "") {
        var time = new Date();
      } else {
        var time = new Date(this.properties.timesDay);
      }
      console.log((time.getMonth() + 1) + "-" + time.getDate(), "今天");
      var month1 = time.getMonth() + 1;
      var day1 = time.getDate();
      if (month1 < 10) {
        month1 = "0" + month1
      }
      if (day1 < 10) {
        day1 = "0" + day1
      }
      var timeDates = month1 + "-" + day1;
      var names1 = this.data.selectDate4.hourse[e.detail.value[0]].name;
      var names2 = ":" + this.data.selectDate4.minutes[e.detail.value[1]].name;
      this.setData({
        newTimes3: [timeDates, names1, names2]
      })
      console.log(this.data.newTimes3, "------lihui");
      this.triggerEvent("bindTimeChange3", this.data.newTimes3);
    },
  },
})