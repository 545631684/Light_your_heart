// components/my-record/my-record.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    collection:{
      type:Array,
      value:[]
    },
    timesDay:{
      type:String,
      value:""
    }
  },
  /**
   * 组件的初始数据
   */
  lifetimes:{
    ready(){
     
      setTimeout(() => {
        if(this.properties.timesDay == ""){
          var time = new Date();
        }else{
          var time = new Date(this.properties.timesDay);
        }
       
        var month1 = time.getMonth()+1;
        var day1 = time.getDate();
        if(month1 < 10){
          month1 = "0"+ month1
        }
        if(day1 < 10){
          day1 = "0" + day1
        }
        var timeDay = month1 +"-"+day1;
  
        var yes = new Date(time.getTime()-84600000);
       
        var month2 = yes.getMonth()+1;
        var day2 = yes.getDate();
        if(month2 < 10){
          month2 = "0"+ month2
        }
        if(day2 < 10){
          day2 = "0" + day2
        }
        var timeYes = month2+"-"+day2;
  
        var multiArrays = this.data.multiArray;
        var objectMultiArrays = this.data.objectMultiArray;
  
        objectMultiArrays[0] = [{id:0,name:timeYes},{id:1,name:timeDay}]
        multiArrays[0] = [timeYes,timeDay]
        this.setData({
          multiArray:multiArrays,
          objectMultiArray:objectMultiArrays
        })
     
        if(this.properties.collection.length <= 1){
          this.setData({
            newTimes:['','待记录',''],
            newTimes1:['','待记录',''],
            newTimes2:['','待记录',''],
            newTimes3:['','待记录',''],
          })
          
        }else{
         
          this.setData({
            newTimes:["",this.properties.collection[0],''],
            newTimes1:["",this.properties.collection[1],''],
            newTimes2:["",this.properties.collection[2],''],
            newTimes3:["",this.properties.collection[3],'']
          })
        }
      },1)
    }
  },
  data: {
    isShow:true,
    isShow1:true,
    isShow2:true,
    isShow3:true,
    dateTime:null,
    dateYes:null,
    newTimes:['','待记录',''],
    newTimes1:['','待记录',''],
    newTimes2:['','待记录',''],
    newTimes3:['','待记录',''],
    multiArray: [[],['00','01', '02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23'], ['00','01', '02','03','04','05','06','07','08','09','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26', '27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60']],
    objectMultiArray: [
      [
      
      ],
      [
        {
          id: 0,
          name: '00'
        },
        {
          id: 1,
          name: '01'
        },
        {
          id: 2,
          name: '02'
        },
        {
          id: 3,
          name: '03'
        },
        {
          id: 4,
          name: '04'
        },
        {
          id: 5,
          name: '05'
        },
        {
          id: 6,
          name: '06'
        },
        {
          id: 7,
          name: '07'
        },
        {
          id: 8,
          name: '08'
        },
        {
          id: 9,
          name: '09'
        },
        {
          id: 10,
          name: '10'
        },
        {
          id: 11,
          name: '11'
        },
        {
          id: 12,
          name: '12'
        },
        {
          id: 13,
          name: '13'
        },
        {
          id: 14,
          name: '14'
        },
        {
          id: 15,
          name: '15'
        },
        {
          id: 16,
          name: '16'
        },
        {
          id: 17,
          name: '17'
        },
        {
          id: 18,
          name: '18'
        },
        {
          id: 19,
          name: '19'
        },
        {
          id: 20,
          name: '20'
        },
        {
          id: 21,
          name: '21'
        },
        {
          id: 22,
          name: '22'
        },
        {
          id: 23,
          name: '23'
        }
      ],
      [
        {
          id: 0,
          name: '00'
        },
        {
          id: 1,
          name: '01'
        },
        {
          id: 2,
          name: '02'
        },
        {
          id: 3,
          name: '03'
        },
        {
          id: 4,
          name: '04'
        },
        {
          id: 5,
          name: '05'
        },
        {
          id: 6,
          name: '06'
        },
        {
          id: 7,
          name: '07'
        },
        {
          id: 8,
          name: '08'
        },
        {
          id: 9,
          name: '09'
        },
        {
          id: 10,
          name: '10'
        },
        {
          id: 11,
          name: '11'
        },
        {
          id: 12,
          name: '12'
        },
        {
          id: 13,
          name: '13'
        },
        {
          id: 14,
          name: '14'
        },
        {
          id: 15,
          name: '15'
        },
        {
          id: 16,
          name: '16'
        },
        {
          id: 17,
          name: '17'
        },
        {
          id: 18,
          name: '18'
        },
        {
          id: 19,
          name: '19'
        },
        {
          id: 20,
          name: '20'
        },
        {
          id: 21,
          name: '21'
        },
        {
          id: 22,
          name: '22'
        },
        {
          id: 23,
          name: '23'
        },
        {
          id: 24,
          name: '24'
        },
        {
          id: 25,
          name: '25'
        },
        {
          id: 26,
          name: '26'
        },
        {
          id: 27,
          name: '27'
        },
        {
          id: 28,
          name: '28'
        },
        {
          id: 29,
          name: '29'
        },
        {
          id: 30,
          name: '30'
        },
        {
          id: 31,
          name: '31'
        },
        {
          id: 32,
          name: '32'
        },
        {
          id: 33,
          name: '33'
        },
        {
          id: 34,
          name: '34'
        },
        {
          id: 35,
          name: '35'
        },
        {
          id: 36,
          name: '36'
        },
        {
          id: 37,
          name: '37'
        },
        {
          id: 38,
          name: '38'
        },
        {
          id: 39,
          name: '39'
        },
        {
          id: 40,
          name: '40'
        },
        {
          id: 41,
          name: '41'
        },
        {
          id: 42,
          name: '42'
        },
        {
          id: 43,
          name: '43'
        },
        {
          id: 44,
          name: '44'
        },
        {
          id: 45,
          name: '45'
        },
        {
          id: 46,
          name: '46'
        },
        {
          id: 47,
          name: '47'
        },
        {
          id: 48,
          name: '48'
        },
        {
          id: 49,
          name: '49'
        },
        {
          id: 50,
          name: '50'
        },
        {
          id: 51,
          name: '51'
        },
        {
          id: 52,
          name: '52'
        },
        {
          id: 53,
          name: '53'
        },
        {
          id: 54,
          name: '54'
        },
        {
          id: 55,
          name: '55'
        },
        {
          id: 56,
          name: '56'
        },
        {
          id: 57,
          name: '57'
        },
        {
          id: 58,
          name: '58'
        },
        {
          id: 59,
          name: '59'
        },
        {
          id: 60,
          name: '60'
        },
      ]
    ],
    multiIndex: [0,22, 0],
    multiIndex1: [0,0, 0],
    multiIndex2: [6, 0],
    multiIndex3: [0, 0],
    helpArry:[],
    dayArry:[],
    hourseArry:[],
    minArray:[]
  },
  /**
   * 组件的方法列表
   */
  
  methods: {
    hidePick(){
      this.setData({
        isShow:!this.data.isShow
      })
    },
    isShowClick(){
      console.log("lihui");
      if(this.data.newTimes[1] === '待记录'){
        var defaultOne = this.data.objectMultiArray[0][0].name;
        this.setData({
          newTimes: [defaultOne, '22', ':00'],
          dayArry:this.data.objectMultiArray[0],
          hourseArry:this.data.objectMultiArray[1],
          minArray:this.data.objectMultiArray[2]
        })
      }
      this.setData({
        isShow:!this.data.isShow
      })
      
     },
     isShowClick1(){
       if (this.data.newTimes[1] === '待记录'){
        return;
      }
       console.log(this.data.newTimes,"李辉李辉---");
       var defaultOne = this.data.newTimes[0];

       var twoMonuthDay = [{ id: 0, name: defaultOne}];
      
       var newDataArry = [...this.data.objectMultiArray];
       newDataArry[0] = twoMonuthDay;
       var defaultTwo = this.data.newTimes[1];
       var hourseArry = newDataArry[1];
       var newHourseArry = hourseArry.filter((item,index)=>{
         return parseInt(item.name) >= parseInt(defaultTwo);
       })
       newDataArry[1] = newHourseArry;
     
       var minuteArry = newDataArry[2];
       var defaultThree = this.data.newTimes[2].slice(1);
       var newMinuteArry = minuteArry.filter((item, index) => {
         return parseInt(item.name) > parseInt(defaultThree);
       })
       newDataArry[2] = newMinuteArry;


      

      
      if(this.data.newTimes1[1] === '待记录'){
        this.setData({
          newTimes1: [defaultOne, defaultTwo, ':' +( parseInt(defaultThree) > 10 ? parseInt(defaultThree) : "0" + (parseInt(defaultThree)+1))]
        })
        
      }
      this.setData({
        isShow1:!this.data.isShow1,
        helpArry: newDataArry
      })
     },
     isShowClick2(){
       if (this.data.newTimes1[1] === '待记录') {
         return;
       }
       
      if(this.data.newTimes2[1] === '待记录'){
        this.setData({
          newTimes2:["",'06',':00']
        })
      }
      this.setData({
        isShow2:!this.data.isShow2
      })
       
     },
     isShowClick3(){
       if (this.data.newTimes2[1] === '待记录') {
         return;
       }
       console.log(this.data.objectMultiArray, this.data.newTimes2, "明明+++++++");

       var defalutHourse = this.data.newTimes2[1];
       var defalutMin = this.data.newTimes2[1].slice(1);
       console.log(defalutMin,"-=-=-=-=-");
       
      if(this.data.newTimes3[1] === '待记录'){
        this.setData({
          newTimes3: ["", defalutHourse, ':' + (parseInt(defalutMin) > 10 ? parseInt(defalutMin) : ("0" + (parseInt(defalutMin) + 1)))]
        })
      }
      this.setData({
        isShow3:!this.data.isShow3
      })
       
     },
     bindTimeChange: function (e) {
      console.log("lihui22");
      this.setData({
        multiIndex: e.detail.value
      })
       
      var names = this.data.objectMultiArray[0][e.detail.value[0]].name;
      var names1 = this.data.objectMultiArray[1][e.detail.value[1]].name;
      var names2 = ":"+this.data.objectMultiArray[2][e.detail.value[2]].name;
      this.setData({
        newTimes:[names,names1,names2]
      })
      if(this.properties.timesDay == ""){
        var time = new Date();
      }else{
        var time = new Date(this.properties.timesDay);
      }
      
      var month1 = time.getMonth()+1;
      var day1 = time.getDate();
      if(month1 < 10){
        month1 = "0"+ month1
      }
      if(day1 < 10){
        day1 = "0" + day1
      }
      var timeDay = month1 +"-"+day1;
      if(names == timeDay){
        this.setData({
          multiIndex1: [1,0, 0]
        })
      }
     
      this.triggerEvent("bindTimeChange",this.data.newTimes);
    },


    bindTimeChange1: function (e) {
      if(this.data.isShow1)
      {
         return;
      }
      console.log('picker发送选择改变，携带值为', e.detail.value);
      this.setData({
        multiIndex1: e.detail.value
      })
      var names = this.data.helpArry[0][e.detail.value[0]].name;
console.log();
      var names1 = this.data.helpArry[1][e.detail.value[1]].name;
      var names2 = ":" + this.data.helpArry[2][e.detail.value[2]].name;
      this.setData({
        newTimes1:[names,names1,names2]
      })
      console.log(this.data.newTimes1);
      this.triggerEvent("bindTimeChange1",this.data.newTimes1);
    },




    bindTimeChange2: function (e) {
      console.log('picker发送选择改变，携带值为', e.detail.value)
      this.setData({
        multiIndex2: e.detail.value
      })
      if(this.properties.timesDay == ""){
        var time = new Date();
      }else{
        var time = new Date(this.properties.timesDay);
      }
      console.log((time.getMonth()+1)+"-"+time.getDate(),"今天");
      var month1 = time.getMonth()+1;
      var day1 = time.getDate();
      if(month1 < 10){
        month1 = "0"+ month1
      }
      if(day1 < 10){
        day1 = "0" + day1
      }
      var timeDates = month1 +"-"+ day1;
      var names1 = this.data.objectMultiArray[1][e.detail.value[0]].name;
      var names2 = ":"+this.data.objectMultiArray[2][e.detail.value[1]].name;
      this.setData({
        newTimes2:[timeDates,names1,names2]
      })
      console.log(this.data.newTimes2);
      this.triggerEvent("bindTimeChange2",this.data.newTimes2);
    },
    bindTimeChange3: function (e) {
      console.log('picker发送选择改变，携带值为', e.detail.value)
      this.setData({
        multiIndex3: e.detail.value
      })
      if(this.properties.timesDay == ""){
        var time = new Date();
      }else{
        var time = new Date(this.properties.timesDay);
      }
      console.log((time.getMonth()+1)+"-"+time.getDate(),"今天");
      var month1 = time.getMonth()+1;
      var day1 = time.getDate();
      if(month1 < 10){
        month1 = "0"+ month1
      }
      if(day1 < 10){
        day1 = "0" + day1
      }
      var timeDates = month1 +"-"+ day1;
      var names1 = this.data.objectMultiArray[1][e.detail.value[0]].name;
      var names2 = ":"+this.data.objectMultiArray[2][e.detail.value[1]].name;
      this.setData({
        newTimes3:[timeDates,names1,names2]
      })
      console.log(this.data.newTimes3);
      this.triggerEvent("bindTimeChange3",this.data.newTimes3);
    },
  },
})
