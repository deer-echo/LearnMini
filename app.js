//app.js
App({
//生命周期函数
  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   * 一开始就有
   */
  onLaunch: function () {
    //1.获取用户信息，需要回调
    //即将废弃的获取用户信息方式
    wx.getUserInfo({
      success:function (res) {
        console.log(res)
      }
    })
  },
  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   * 界面显示出来后执行的
   */
  onShow: function (options) {
    //判断进入场景，onShow和onLaunch都有
  console.log(options)
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   * 界面被隐藏时出现
   */
  onHide: function () {
    
  },
  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   * 错误时出现
   */
  onError: function (msg) {
    
  },
  globalData:{
    name:"deer",
  }
  

})
