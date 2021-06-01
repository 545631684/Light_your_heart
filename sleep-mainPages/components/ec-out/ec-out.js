// components/ec-out/ec-out.js
import request from "../../../network/request"
import * as echarts from '../ec-canvas/echarts';
// import { get } from "request";
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
  console.log(token, MemberCode);
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
    var data = res.data.data.sleepAnalyse;
    var listX = [];
    var list = []
    var datalist = []
    for (var i = 0; i < 7; i++) {
      //  console.log(getDate(i))
      for (var j = 0; j < data.length; j++) {
          if(data[j].X == getDate(i)){
        datalist[i] = data[j]
        break
         }          
      }
    }

    console.log(datalist, 'datalist')
	datalist = datalist.reverse()//数组反转下
    datalist.forEach((e) => {
      listX.push(e.X)
      // listX.push(e.X)
      var s = (e.Y).substr(0, 2) + ":00"
      //  console.log(s)
      list.push(s)

    })
    var num = []
    list.forEach(e => {
      num.push(Number(e.substr(0, 2)))
    })
    var max = Math.max(...num)
    var min = Math.min(...num)
    var numlist = [];
    if (max >= 24) {
      max = 23
    }
    console.log(num, max, min, '大小')
    for (var i = min - 1; i <= max + 1; i++) {
      if (i < 10) {
        i = "0" + i
      }
      numlist.push(i + ":00")
    }
    console.log(numlist)
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
        data: ['20:00','21:00','22:00','23:00','00:00','01:00','02:00','03:00','04:00','05:00','06:00'],
        // data: numlist,
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
          },
        }
      },
      series: [{
        name: '●',
        data: list,
        type: 'bar',
        label:{
          show:true,
          position:['50%','0%'],
          distance: 15,
          align: 'center',
          verticalAlign: 'top',
          formatter: '{name|{a}}',
          rich: {
            name: {
              showAbove:true,
              color: '#fff',
              fontFamily: 'Microsoft YaHei',
              fontSize: 16
             }
              
          }
        },
        itemStyle: {
          normal: {
            //柱形图圆角，初始化效果
            barBorderRadius: [15, 15, 0, 0],
            color: '#577EEC',
          }
        },
        barWidth: 13.5
      }]
    };
    console.log("入睡时间分析表图数据",option)
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