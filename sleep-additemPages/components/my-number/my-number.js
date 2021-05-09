// pages/components/my-number/my-number.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    collection:{
      type:Array,
      value:[]
    }
  },
  /**
   * 组件的初始数据
   */
  data: {
    newTimes:[0,0],
    isShow:true,
    multiArray: [['0次','1次', '2次','3次','4次','5次','6次','7次','8次','9次','10次'], ['0分钟','5分钟', '10分钟', '15分钟', '20分钟', '25分钟', '30分钟', '35分钟', '40分钟', '45分钟', '50分钟']],
    objectMultiArray: [
      [
        {
          id: 0,
          name: '0次'
        },
        {
          id: 1,
          name: '1次'
        },
        {
          id: 2,
          name: '2次'
        },
        {
          id: 3,
          name: '3次'
        },
        {
          id: 4,
          name: '4次'
        },
        {
          id: 5,
          name: '5次'
        },
        {
          id: 6,
          name: '6次'
        },
        {
          id: 7,
          name: '7次'
        },
        {
          id: 8,
          name: '8次'
        },
        {
          id: 9,
          name: '9次'
        },
        {
          id: 10,
          name: '10次'
        },
      ],
      [
        {
          id: 0,
          name: '0分钟'
        },
        {
          id: 1,
          name: '5分钟'
        },
        {
          id: 2,
          name: '10分钟'
        },
        {
          id: 3,
          name: '15分钟'
        },
        {
          id: 4,
          name: '20分钟'
        },
        {
          id: 5,
          name: '25分钟'
        },
        {
          id: 6,
          name: '30分钟'
        },
        {
          id: 7,
          name: '35分钟'
        },
        {
          id: 8,
          name: '40分钟'
        },
        {
          id: 9,
          name: '45分钟'
        },
        {
          id: 10,
          name: '50分钟'
        }
      ]
    ],
    multiIndex: [0, 0],
  },
  /**
   * 组件的方法列表
   */
  methods: {
    isShowClick(){
      if(this.data.newTimes[0] == this.properties.collection[4] || this.data.newTimes[1] == this.properties.collection[5]){
        this.setData({
          newTimes:[0,0]
        })
      }
      this.setData({
        isShow:!this.data.isShow
      })
      console.log(this.data.isShow);
     },
    bindMultiPickerColumnChange: function (e) {
      console.log('picker发送选择改变，携带值为', e.detail.value)
      this.setData({
        multiIndex: e.detail.value
      })
      var names1 = this.data.objectMultiArray[0][e.detail.value[0]].name;
      var names2 = this.data.objectMultiArray[1][e.detail.value[1]].name;
      var newTime = (names1).slice(-(names1).length,-1);
      var newTime1 = (names2).slice(-(names2).length,-2);
      this.setData({
        newTimes:[newTime,newTime1]
      })
      console.log(this.data.newTimes);
      this.triggerEvent("bindPickerChange",this.data.newTimes);
    },
  },
  lifetimes:{
    ready(){
      setTimeout(() => {
        console.log(this.properties.collection);
        if(this.properties.collection.length <= 1){
          this.setData({
            newTimes:[0,0]
          })
        }else{
          this.setData({
            newTimes:[this.properties.collection[4],this.properties.collection[5]]
          })
        }
      }, 700);
    }
  },
})
