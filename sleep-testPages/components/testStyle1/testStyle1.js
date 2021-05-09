// components/testStyle1/testStyle1.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        question:{
            type:Array,
            value:[]
        },
        answer:{
          type:Array,
          value:[]
        },
        title:{
          type:String,
          value:''
        }
    },
    lifetimes: {
        
    },
    pageLifetimes: {
      
    },
    
    /**
     * 组件的初始数据
     */
    data: {
        result:{}
    },

    /**
     * 组件的方法列表
     */
    methods: {
      result(e){
        var result = this.data.result
        result[e.detail.name] = e.detail.result
        this.setData({
          result:result
        })
        console.log(result)
      },
      tijiao(){
        var result = this.data.result;
        var n = 0
        for(var i in result){         
          n++;
        }
        //判断是否全部都填上了        
        if(n == this.properties.question.length){
          var questions = this.properties.question;
            console.log(questions,"最终结果"); 
            this.triggerEvent("myEvent",{
              result:this.data.result,
              questions:questions
          })
        }else{       
           
           wx.showToast({
            // 提示内容
            title: "尚未填写完整哦 !",
            icon: "none"
           })
        }
      }
    }
})
