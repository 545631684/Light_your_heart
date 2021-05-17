// components/day_con/day_con.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    'show':{
      type:Number,
      value:'',
      observer: function (newVal, oldVal) {
         console.log(newVal)
         this.setData({
           num:newVal
         })
       }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    num:Number,
    biaoqing:[
      {src:"../../assets/images/daytime/bq1.png",src1:"../../assets/images/daytime/bq_1.png",py:"非常差"},
      {src:"../../assets/images/daytime/bq2.png",src1:"../../assets/images/daytime/bq_2.png",py:"差"},
      {src:"../../assets/images/daytime/bq3.png",src1:"../../assets/images/daytime/bq_3.png",py:"一般"},
      {src:"../../assets/images/daytime/bq4.png",src1:"../../assets/images/daytime/bq_4.png",py:"好"},
      {src:"../../assets/images/daytime/bq5.png",src1:"../../assets/images/daytime/bq_5.png",py:"非常好"}
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    pj(event){
      console.log(event);
      this.setData({
        num:event.currentTarget.dataset.index
      })
      this.triggerEvent('onCheced', this.data.num);
    }
  }
})
