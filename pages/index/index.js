//index.js
Page({
  data:{
    people:["girls","boys","teachers"]
  },
  handleBtn(){
    console.log("don't touch me!!!")
  },
  handleTouchStart(){
    console.log("TouchStart")
  },
  handleTouchMove(){
    console.log("TouchMove")
  },
  handleTouchEnd(){
    console.log("TouchEnd")
  },
  handleLongTap(){
    console.log("LongTap")
  },
  handleEvent(event){
    console.log(event)
  },
  touchOutter(){
    console.log("touched outter")
  },
  touchInner(){
    console.log("touched inner")
  },
  handleChoose(event){
    const dataset=event.currentTarget.dataset
    console.log(dataset.index+" "+dataset.item)
  },
  handleView1(){
    console.log("catch view1")
  },
  handleView2(){
    console.log("catch view2")
  },
  handleView3(){
    console.log("catch view3")
  },
  handleTap1(){
    console.log("bubble tap1")
  },
  handleTap2(){
    console.log("bubble tap2")
  },
  handleTap3(){
    console.log("bubble tap3")
  },

})
