//index.js
Page({
  data:{
    counter:0,
  },
  //设置页面事件
  increment(){
    console.log("------------")
    this.setData({
      counter:this.data.counter+1
    })
  },
  //接收并展示component传来的数据
  choose(event){
    console.log(event.detail.index,event.detail.item)
  },
  handleCounter(){
    //change the data in component
    //bind with class
    //获取组件对象
    const my_sel=this.selectComponent('.sel-class')
    console.log(my_sel.data.counter)
   //1.直接修改组件内部数据：不合理
   // my_sel.setData({
   //  counter:my_sel.data.counter+20
   // })
   //2.使用组件内的方法
  my_sel.myselCounter(10)

  }
  
})
