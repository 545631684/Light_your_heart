// components/Early.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    day:[
      {src:"../../assets/images/daytime/day1.png",con:"茶水",active:"../../assets/images/daytime/day1_active.png",state:false},
      {src:"../../assets/images/daytime/day2.png",con:"咖啡",active:"../../assets/images/daytime/day2_active.png",state:false},
      {src:"../../assets/images/daytime/day3.png",con:"酒精",active:"../../assets/images/daytime/day3_active.png",state:false},
      {src:"../../assets/images/daytime/day4.png",con:"药物",active:"../../assets/images/daytime/day4_active.png",state:false},
      {src:"../../assets/images/daytime/day5.png",con:"饱餐",active:"../../assets/images/daytime/day5_active.png",state:false},
      {src:"../../assets/images/daytime/day6.png",con:"运动",active:"../../assets/images/daytime/day6_active.png",state:false}
    ],
    select:[]
  },
  
  /**
   * 组件的方法列表
   */
  methods: {
    cik(event){
      // console.log(event,this.data.select.indexOf(event.currentTarget.dataset.index));
      this.data.day[event.currentTarget.dataset.index].state = !this.data.day[event.currentTarget.dataset.index].state;
      
        if(this.data.select.indexOf(event.currentTarget.dataset.index)=== -1){
          // console.log(11);
          this.data.select.push(event.currentTarget.dataset.index);
          
        }else{
          // console.log(this.data.select,event.currentTarget.dataset.index)
          this.data.select.splice(this.data.select.indexOf(event.currentTarget.dataset.index),1);
        }
      this.setData({
        day:this.data.day,
        select:this.data.select
      })
      console.log(this.data.select)
    },
    checkbox(event){
      this.triggerEvent('onCheckbox', this.data.select);
    }
  }
})
