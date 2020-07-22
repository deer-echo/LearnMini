// pages/image/image.js
Page({
data:{
filePath:"",
},
handleChoose(){
  //系统API，让用户在相册中选择图片或拍照
wx.chooseImage({
  success:(res)=>{
    //1.取出路径
    const path = res.tempFilePaths[0]
    console.log(path)
    //2.设置路径
    this.setData({
      filePath:path
    })
  },
})
},
handleImage(){
  console.log("load image successfully")
}


 
})