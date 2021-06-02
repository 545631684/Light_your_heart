// computeds/ec-get/ec-get.js
import * as echarts from '../ec-canvas/echarts';

import request from "../../../network/request"

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


function initChart(canvas, width, height) {
  const chart = echarts.init(canvas, null, {
    width: width,
    height: height
  });
  canvas.setChart(chart);

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
    console.log(res,'夜醒时长分析')
    // 起床时间分析 
    var data = res.data.data.GetUpAnalyse;
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
	datalist = datalist.reverse()//数组反转下
    console.log(datalist, 'datalist')
    datalist.forEach((e) => {
      listX.push(e.X)
      // var s = (e.Y).substr(0, 2) + ":00"
      //  console.log(s)
      list.push(e.Y)
    })
    // var num = []
    // list.forEach(e => {
    //   num.push(Number(e.substr(0, 2)))
    // })
    // var max = Math.max(...num)
    // var min = Math.min(...num)
    // var numlist = [];
    // console.log(num, max, min, '大小')
    // for (var i = min - 1; i <= max + 1; i++) {
    //   if (i < 10) {
    //     i = "0" + i
    //   }
    //   numlist.push(i + ":00")
    // }
    // console.log(numlist)
    var option = {
      grid: {
        y: 40,
        y2: 40,
        x:50,
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
        },
      },

      yAxis: {
        type: 'value',
        boundaryGap: false,
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        axisLabel:{
          formatter: '{value} min',
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: ['#EDEDEDFF'],
            width: 0.5,
            type: 'solid'
          },

        }

      },
      series: [{
        data: list,
        type: 'line',
        areaStyle: {
          normal: {
            color: 'rgba(73, 117, 240, 0.24)' //改变区域颜色
          }
        },
        itemStyle: {
          normal: {
            color: '#1C52F0FF', //改变折线点的颜色
            lineStyle: {
              color: '#1C52F0FF', //改变折线颜色
              width: 1.5
            }
          }
        },
        symbolSize: 7
      }]
    };
    console.log('夜醒时长分析数据',option)
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