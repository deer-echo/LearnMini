// components/my-cpn.js
Component({
 options:{
   styleIsolation:"apply-shared"
   //shared: use component style
 },
 //外界向组件传入数据
 properties:{
   title:{
     type:String,
     value:'默认标题',
     observer:function(oldval,newval){
        console.log(newval,oldval)
     }
   }
 },
 //外界向组件传入样式
 externalClasses:['titleclass'],
 methods:{
   //在method中注册组件内方法
   //把组件中的方法发送到应用页面的方法中
   //组件.js-->页面.js
   handleIncrement(){
     this.triggerEvent('increment')
   }
 }

})
