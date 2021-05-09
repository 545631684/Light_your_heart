// components/my-f1/my-f1.js
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
    collections:[],
    goods:[
      {
        "text":"光亮",
        "id":0,
        "checked":false
      },
      {
        "text":"噪音",
        "id":1,
        "checked":false
      },
      {
        "text":"温度",
        "id":2,
        "checked":false
      },
      {
        "text":"不适",
        "id":3,
        "checked":false
      },
      {
        "text":"压力",
        "id":4,
        "checked":false
      },
      {
        "text":"认床",
        "id":5,
        "checked":false
      },
      {
        "text":"饱餐",
        "id":6,
        "checked":false
      },
      {
        "text":"床伴",
        "id":7,
        "checked":false
      }
    ],
  },
  lifetimes:{
    ready(){
      setTimeout(() => {
        console.log(this.properties.collection);
        if(this.properties.collection.length <= 1){
          this.setData({
            ['goods[0].checked']:false,
            ['goods[1].checked']:false,
            ['goods[2].checked']:false,
            ['goods[3].checked']:false,
            ['goods[4].checked']:false,
            ['goods[5].checked']:false,
            ['goods[6].checked']:false,
            ['goods[7].checked']:false,
          })
        }else{
          this.setData({
            ['goods[0].checked']:this.properties.collection[7],
            ['goods[1].checked']:this.properties.collection[8],
            ['goods[2].checked']:this.properties.collection[9],
            ['goods[3].checked']:this.properties.collection[10],
            ['goods[4].checked']:this.properties.collection[11],
            ['goods[5].checked']:this.properties.collection[12],
            ['goods[6].checked']:this.properties.collection[13],
            ['goods[7].checked']:this.properties.collection[14],
          })
        }
      },700)
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    choose(e) {
      console.log(e)
      let index = e.currentTarget.id
      var bool = this.data.goods[index].checked
	    this.setData({
        ['goods[' + index + '].checked']: !bool,
      })
      this.triggerEvent("choose",bool);
    },
    choose1(e) {
      console.log(e)
	    let index = e.currentTarget.id
      var bool = this.data.goods[index].checked
	    this.setData({
        ['goods[' + index + '].checked']: !bool,
      })
      this.triggerEvent("choose1",bool);
    },
    choose2(e) {
      console.log(e)
	    let index = e.currentTarget.id
      var bool = this.data.goods[index].checked
	    this.setData({
        ['goods[' + index + '].checked']: !bool,
      })
      this.triggerEvent("choose2",bool);
    },
    choose3(e) {
      console.log(e)
	    let index = e.currentTarget.id
      var bool = this.data.goods[index].checked
	    this.setData({
        ['goods[' + index + '].checked']: !bool,
      })
      this.triggerEvent("choose3",bool);
    },
    choose4(e) {
      console.log(e)
	    let index = e.currentTarget.id
      var bool = this.data.goods[index].checked
	    this.setData({
        ['goods[' + index + '].checked']: !bool,
      })
      this.triggerEvent("choose4",bool);
    },
    choose5(e) {
      console.log(e)
	    let index = e.currentTarget.id
      var bool = this.data.goods[index].checked
	    this.setData({
        ['goods[' + index + '].checked']: !bool,
      })
      this.triggerEvent("choose5",bool);
    },
    choose6(e) {
      console.log(e)
	    let index = e.currentTarget.id
      var bool = this.data.goods[index].checked
	    this.setData({
        ['goods[' + index + '].checked']: !bool,
      })
      this.triggerEvent("choose6",bool);
    },
    choose7(e) {
      console.log(e)
	    let index = e.currentTarget.id
      var bool = this.data.goods[index].checked
	    this.setData({
        ['goods[' + index + '].checked']: !bool,
      })
      this.triggerEvent("choose7",bool);
    }
  }
})
