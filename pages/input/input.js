// pages/input/input.js
Page({
handleInput(event){
  console.log('用户输入的内容为',event)
},
handleFocus(event){
  console.log('input获取焦点',event)
},
handleBlur(event){
  console.log('input失去焦点',event)
}

})