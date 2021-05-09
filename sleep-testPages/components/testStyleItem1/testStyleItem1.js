// components/testStyleItem1/testStyleItem1.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        titles:{
            type:String,
            value:''
        },
        name:{
            type:String,
            value:''
        },
        answer:{
            type:Array,
            value:[]
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
        sel:[
            {'s':'A','title':'完全不会'},
            {'s':'B','title':'好几天'},
            {'s':'C','title':'超过一周'},
            {'s':'D','title':'几乎每天'}            
        ],
        currentSel:""
    },
    lifetimes: {
        created: function() {
          // 在组件实例进入页面节点树时执行
         
        },
        detached: function() {
          // 在组件实例被从页面节点树移除时执行
        },
    },       

     
    methods: {
        radioChange(e){  
            console.log(this.data.answer,e.detail.value,this.properties.name)         
            this.setData({
                currentSel:e.detail.value
            })
            var name = this.properties.name;
            this.triggerEvent("myEvent",{name,result:e.detail.value})
        }
    }
})
