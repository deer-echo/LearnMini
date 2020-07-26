// components/choose/choose.js
Component({
  /**
   * 组件的属性列表
   * 向组件传入标题数组
   */
  properties: {
    titles:{
      type:Array,
      value:[]
    }
  },

  /**
   * 组件的初始数据
   * 现在选中
   */
  data: {
    currentIndex:0,
  },

  /**
   * 组件的方法列表
   * 1.获取按钮发送来的数据
   * 并将现在选中的index绑定给currentIndex
   * 2.把方法和数据发送给页面.js
   * 
   */
  methods: {
    handleChoose(event){
      const index=event.currentTarget.dataset.index
      const item=event.currentTarget.dataset.item
      this.setData({
        currentIndex:index
      })
      this.triggerEvent('choose',{index,item})
    }
  }
})
