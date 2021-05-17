// sleep-additemPages/components/seve/seve.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
      title:{
        type:String,
        value:' 操作成功 !'
      }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    onSeve(){
      this.triggerEvent('onSeve',{});
    }
  }
})
