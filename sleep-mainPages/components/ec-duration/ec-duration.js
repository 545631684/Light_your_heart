// components/ec-out/ec-out.js
import request from "../../../network/request"
import * as echarts from '../ec-canvas/echarts';

function initChart(canvas, width, height) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height
  });
  canvas.setChart(chart);

  function getDate(num) {
    var time = new Date()
    var now = time.getFullYear() + "-" + (time.getMonth() + 1) + "-" + time.getDate();
    var lasttime = new Date(time.getTime() - 86400000 * num)
    var yue = lasttime.getMonth() + 1
    if (yue < 10) {
      yue = "0" + yue
    }
    var ri = lasttime.getDate();
    if (ri < 10) {
      ri = "0" + ri
    }
    return yue + "/" + ri;
  }
  var token = wx.getStorageSync('token');
  var MemberCode = wx.getStorageSync('MemberCode');
  // console.log(token,MemberCode);
  var time = new Date()
  var now = time.getFullYear() + "-" + (time.getMonth() + 1) + "-" + time.getDate();
  var lasttime = new Date(time.getTime() - 86400000 * 7)
  var last = lasttime.getFullYear() + "-" + (lasttime.getMonth() + 1) + "-" + lasttime.getDate();
  request("/masterhypnotist/getsleepinfobyweek", "get", {
    beginDate: last,
    endDate: now,
    memberCode: MemberCode
  }, token).then(res => {
    // console.log(res,'周分析')
    // 起床时间分析 
    var data = res.data.data.HowLong;
    var listX = [];
    var list = []
    var datalist = []
    for (var i = 0; i < 7; i++) {
      //  console.log(getDate(i))
      for (var j = 0; j < data.length; j++) {
         if (data[j].X == getDate(i)) {
          datalist[i] = data[j]
          break
         }
      }
    }
    console.log('datalist',datalist)
	datalist = datalist.reverse()//数组反转下
    var lists = []
    datalist.forEach((e) => {
      listX.push(e.X)
      // listX.push(e.X)
      var s = Math.floor((e.Y) / 60)
      var ss = Math.floor((e.Y) / 60) - 6
      list.push(s)
      lists.push(ss)

    })
    var num = []
    list.forEach(e => {
      num.push(Number(e))
    })
    var max = Math.max(...num)
    var min = Math.min(...num)
    var numlist = [];
    for (var i = min - 1; i <= max + 1; i++) {
      if (i < 10) {
        i = "0" + i
      }
      numlist.push(i + "h")
    }
    console.log(numlist)
    console.log(list, 'datalist')

    var option = {
      grid: {
        y: 40,
        y2: 40,
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: listX,
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        }
      },
      yAxis: {
        type: 'category',
        boundaryGap: false,
        data: numlist,
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: ['#EDEDEDFF'],
            width: 0.5,
            type: 'solid'
          }
        }
      },
      series: [{
        data: lists,
        type: 'line',
        smooth: true,
        symbol: 'none',
        areaStyle: {
          normal: {
            color: 'rgba(73, 117, 240, 0.24)' //改变区域颜色
          }
        },
        itemStyle: {
          normal: {
            lineStyle: {
              color: '#1C52F0FF', //改变折线颜色
              width: 1.5
            }
          }
        },
        symbolSize: 7
      }]
    }
    chart.setOption(option);
    return chart;


  })

}
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
    ec: {
      onInit: initChart
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})