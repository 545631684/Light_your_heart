// components/testStyle2/testStyle2.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        name:{
            type:String,
            value:'test'
        },
        titles:{
            type:String,
            value:''
        },
        answer:{
            type:Number,
            value:0
        },
        index:{
            type:Number,
            value:1
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        currentIndex:3,
        tip:'轻度受损'
    },

    /**
     * 组件的方法列表
     */
    methods: {
        change(e){     
            console.log(this.data.answer,'类型  如果为1的话就是4个选项')  
            var index = e.detail.current
            if(index >= 8){
                index = index+3 -11
            }else{
                index=  index +3
            }            
            // console.log(index)
            // 提示信息
            var tip ;
            if(index == 0){
                tip = '完全没有'
            }else if(index >=1 && index <=3){
                tip = '轻度受损'
            }else if(index >=4 && index <=6){
                tip = '中度受损'
            }else if(index >=7 && index <=9){
                tip = '显著受损'
            }else if(index == 10){
                tip = '严重受损'
            }
            this.setData({
                currentIndex:index,
                tip:tip
            })            
               
            this.set()       
            
        },
        change2(e){          
            
            var index = e.detail.current
            if(index >= 4){
                index = index+1- 5
            }else{
                index=  index +1
            }            
            // console.log(index)
            // 提示信息
            var tip ;
            if(index == 0){
                tip = '无'
            }
            if(index == 1){
                tip = '轻度'
            }
            if(index == 2){
                tip = '中度'
            }
            if(index == 3){
                tip = '重度'
            }

            if(index == 4){
                tip = '极重度'
            }
            this.setData({
                currentIndex:index,
                tip:tip
            })      
            console.log("1的index",index)      
               
            this.set()       
            
        },
        set(){            
            var index = this.data.currentIndex;
            var name = this.properties.name
            console.log(this.data.answer,'如果')
            this.triggerEvent('myevent', {name,index});
        }    
    },
    lifetimes: {
        attached: function() {
          // 在组件实例进入页面节点树时执行
         
          if(this.data.answer==1){
            this.setData({
                currentIndex:1,
                tip:'轻度'
            })
         }    
         console.log(this.data.answer,'类型')
        this.set()
        },
        ready(){
            console.log(this.data.answer,'ready')
        },
        detached: function() {
          // 在组件实例被从页面节点树移除时执行
        }
    }
})
