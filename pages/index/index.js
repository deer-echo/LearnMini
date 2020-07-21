//index.js
//page是注册一个页面
//注册page时做的事
Page({
  //------2.初始化数据----------
  data:{

  },
  UserInform(event) {
    console.log(event)
  },
  //----1.监听页面的生命周期函数------
  //页面被加载出来
  onLoad(){
    console.log('onLoad')
    //发送网络请求
    wx.request({
      url: 'https://www.wjx.cn/m/51736563.aspx',
      success(res){
        console.log(res)
      }
    })
  },
  //页面初次渲染完成
  onReady(){
    console.log('onReady')

  },
  //页面显示
  onShow(){
    console.log('onShow')

  },
  //隐藏
  onHide(){
    console.log('onHide')

  },
  onUnload(){
    console.log('onUnload')

  },
  //-----------3.监听wxml中的事件------
  //自定义方法啥的
  //-----------4.监听其他事件----------
  //监听滚动
  onPageScroll(obj){
    console.log(obj)
  },
  //监听页面滚动到顶部
  onReachBottom(){
    console.log('arrive botton!')
  },
  //下拉刷新
  onPullDownRefresh(){
    console.log('pull down')
  },
  //tabbar
  onTabItemTap(item){
    console.log(item.index)
    console.log(item.pagePath)
    console.log(item.text)

  }
})
