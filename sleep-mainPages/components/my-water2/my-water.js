// components/my-water/my-water.js
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        size:{
            type:String,
            value:'20'
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        cirsize:265,
        reg1:180,
        reg2:-50
    },

    /**
     * 组件的方法列表
     */
    methods: {

    },
    lifetimes: {
        ready() {
            var self = this;
            wx.getSystemInfo({
                complete: (res) => {
                    var rpx = res.windowWidth/375/2;  
                    self.setData({
                        cirsize:self.data.cirsize*rpx
                    })  
                },
              })

           
            var reg1 = this.properties.size*3.6 //right的角度
            var reg2;
            if(reg1 >=180){
                reg2 = reg1 - 180; // left
                reg1 = 180
            }else{
                reg2 = 0;            
            }
            console.log(reg1,reg2)
            this.setData({
                reg1,
                reg2
            })
            console.log(this.data.reg1,this.data.reg2)
        }
            
       
      }
})
