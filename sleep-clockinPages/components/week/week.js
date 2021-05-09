// components/week/week.js
Component({
  /**
   * 组件的属性列表
   */
  options: {
    multipleSlots: true
  },
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    week:['周日','周一','周二','周三','周四','周五','周六'],
    rq:[],
    day:60*60*24*1000,
    index1:"",
    index2:Number,
    rq2:[]
  },
  /**
   * 组件的方法列表
   */
  methods: {
    xuanz(event){
      this.setData({
        index2:event.currentTarget.dataset.index
      })
      this.triggerEvent('ontime',this.data.rq2[this.data.index2]);
    }
  },
  attached(){
    var date = new Date();
    var rq1 = [];
    var rq2 = [];
    var j = date.getDay();
    for(var i = 0; i < this.data.week.length; i++){
      if(date.getDay()==i){
        rq1[i] = date.getDate()>=10?date.getDate():"0"+date.getDate();
        rq2[i] = date.getFullYear()+'-'+((date.getMonth()+1)>=10?(date.getMonth()+1):"0"+(date.getMonth()+1))+"-"+(date.getDate()>=10?date.getDate():"0"+date.getDate());
        this.data.week[i] = "今日";
        this.setData({
          rq:rq1,
          week:this.data.week,
          index1:i
        })
      }else if(date.getDay()<i){
        j++;
        rq1[i] = new Date(date.getTime()+this.data.day*j).getDate()>=10?new Date(date.getTime()+this.data.day*j).getDate():"0"+new Date(date.getTime()+this.data.day*j).getDate();
        rq2[i] = new Date(date.getTime()+this.data.day*j).getFullYear()+'-'+((new Date(date.getTime()+this.data.day*j).getMonth()+1)>=10?(new Date(date.getTime()+this.data.day*j).getMonth()+1):"0"+(new Date(date.getTime()+this.data.day*j).getMonth()+1))+"-"+(new Date(date.getTime()+this.data.day*j).getDate()>=10?new Date(date.getTime()+this.data.day*j).getDate():"0"+new Date(date.getTime()+this.data.day*j).getDate());
      }else if(date.getDay()>i){
        rq1[i] = new Date(date.getTime()-(this.data.day*j)).getDate()>=10?new Date(date.getTime()-(this.data.day*j)).getDate():"0"+new Date(date.getTime()-(this.data.day*j)).getDate();
        rq2[i] = new Date(date.getTime()-this.data.day*j).getFullYear()+'-'+((new Date(date.getTime()-this.data.day*j).getMonth()+1)>=10?(new Date(date.getTime()-this.data.day*j).getMonth()+1):"0"+(new Date(date.getTime()-this.data.day*j).getMonth()+1))+"-"+(new Date(date.getTime()-this.data.day*j).getDate()>=10?new Date(date.getTime()-this.data.day*j).getDate():"0"+new Date(date.getTime()-this.data.day*j).getDate());
        j--;
      }
    }
    this.setData({
      rq:rq1,
      rq2:rq2
    })
  }
})
