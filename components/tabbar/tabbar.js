import Toast from '@vant/weapp/toast/toast'
Component({
  /* 开启全局样式使用 */
  options: {
    addGlobalClass: true,
  },

  /* 组件的属性列表 */
  properties: {
    current:{
      type:String,
      value:'1'
    }
  },

  /* 组件的初始数据 */
  data: {

  },

  /* 生命周期函数 */
  lifetimes: {
    attached: function () { },
    moved: function () { },
    detached: function () { },
  },

  /* 组件的方法列表 */
  methods: {
    nav1(){
      wx.redirectTo({
        url:'/sleep-mainPages/pages/college/college'
      })
    },
    nav2(){
      wx.redirectTo({
        url:'/sleep-mainPages/pages/day/day'
      })
    },
    nav3(){
      wx.redirectTo({
        url:'/sleep-mainPages/pages/my/my'
      })
    },
    nav4(){
      let is_support_consulting_service = wx.getStorageSync('is_support_consulting_service')
      if(is_support_consulting_service == '0'){
        Toast('功能正在开发~');
      } else {
        wx.redirectTo({
          url:'/sleep-mainPages/pages/doctor/doctor'
        })
      }
    }
  },
})