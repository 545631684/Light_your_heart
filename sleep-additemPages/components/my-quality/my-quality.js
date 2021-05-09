// components/my-quality/my-quality.js
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
    faceList:[
      {
        "lximage": "../../assets/images/sleepimg/fenzu1.svg",
        "lximage1": "../../assets/images/daytime/bq_1.png",
        "text":"非常差",
        "id": 0
      },
      {
        "lximage": "../../assets/images/sleepimg/cha.png",
        "lximage1": "../../assets/images/sleepimg/cha_a.svg",
        "text":"差",
        "id": 1
      },
      {
        "lximage": "../../assets/images/sleepimg/fenzu2.svg",
        "lximage1": "../../assets/images/sleepimg/zhengchang_a.png",
        "text":"一般",
        "id": 2
      },
      {
        "lximage": "../../assets/images/sleepimg/bijiaohao.svg",
        "lximage1": "../../assets/images/sleepimg/bijiaohao_a.png",
        "text":"好",
        "id": 3
      }, {
        "lximage": "../../assets/images/sleepimg/feichangbang.svg",
        "lximage1": "../../assets/images/sleepimg/feichangbang_a.png",
        "text":"非常好",
        "id": 4
      }],
    isFaceChecked: null,
  },
lifetimes:{
  ready(){
    setTimeout(() => {
      console.log(this.properties.collection);
      if(this.properties.collection.length <= 1){
        this.setData({
          isFaceChecked:null
        })
      }else{
        this.setData({
          isFaceChecked:this.properties.collection[6]
        })
      }
    },700)
  }
},
  /**
   * 组件的方法列表
   */
  methods: {
    facehandler(e){
      var id = e.currentTarget.id;
      console.log(e);
      console.log(id);
      if(id == 0){
        this.triggerEvent("facehandler",id);
      }
      if(id == 1){
        this.triggerEvent("facehandler",id);
      }
      if(id == 2){
        this.triggerEvent("facehandler",id);
      }
      if(id == 3){
        this.triggerEvent("facehandler",id);
      }
      if(id == 4){
        this.triggerEvent("facehandler",id);
      }
      this.setData({
        isFaceChecked: id,
      })
    }
  }
})
