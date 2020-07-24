// pages/wxml/wxml.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    firstname:"deer",
    lastname:"echo",
    age:19,
    //获取当时时间
    nowTime:new Date().toLocaleString(),
    changecolor:false,
    date:3,
    students:[
      ['1','2','3'],
      ['4','5','6'],
      ['7','8','9']
    ]

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //每秒更新时间
    setInterval(()=>{
      this.setData({
        nowTime:new Date().toLocaleString()
      })

    },1000)
  },
  handlecolor(){
    this.setData({
      changecolor:!this.data.changecolor
    })
  }

})