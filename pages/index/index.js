//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })
    // 画圆
    const ctx = wx.createCanvasContext('myCanvas')
    const grd = ctx.createLinearGradient(200, 100, 350,100)
    grd.addColorStop(0, '#2f40fd')
    grd.addColorStop(0.5, '#b754f4')
    grd.addColorStop(1, '#01c8b9')
    // Draw coordinates
    ctx.setLineWidth(15)
    ctx.arc(250, 150, 100, 0, 2 * Math.PI)
    ctx.setStrokeStyle('#EEEEEE')
    ctx.stroke()

    // ctx.moveTo(220, 150)
    // ctx.lineTo(0, 150)

    ctx.beginPath()
    ctx.lineTo(110, 60)
    ctx.setStrokeStyle('#AAAAAA')
    ctx.stroke()

    ctx.setFontSize(12)
    ctx.setFillStyle('black')
    ctx.fillText('0', 165, 78)
    ctx.fillText('0.5*PI', 83, 145)
    ctx.fillText('1*PI', 15, 78)
    ctx.fillText('1.5*PI', 83, 10)

    // Draw points
    ctx.beginPath()
    ctx.arc(100, 75, 2, 0, 2 * Math.PI)
    ctx.setFillStyle('lightgreen')
    ctx.fill()



    // Draw arc
    ctx.beginPath()
    ctx.arc(250, 150, 100, 1.2 * Math.PI,1.8 * Math.PI)
    ctx.setLineCap('round')
    ctx.setStrokeStyle(grd)
    ctx.setLineWidth(20)
    ctx.stroke()


    ctx.draw()
  }
})
