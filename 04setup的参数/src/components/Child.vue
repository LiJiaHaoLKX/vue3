<template>
  <div @click="msg1">
    sfsaf
    {{ msg }}
  </div>
</template>

<script>
export default {
    name:'Child',
    props:['msg'],
    //setup是在beforeCreate生命周期之前就执行了，而且就执行一次
    //所以在执行setup的时候组件实例还没有创建，所以也就没有this
    //setup函数返回的是一个对象，对象中的方法以及属性供html模板使用
    setup(props,context){
      console.log('nnkj');
      //props里面存放着父级组件向子组件传递的参数
      //context里面有三个对象，里面有attrs对象，还有emit方法对象，还有slots插槽对象
      //attrs对象里面有组件标签上的属性（是props没有声明接受的对象以及方法）
      console.log(props,context);
      //setup中返回的对象的方法以及属性在html模板中都是可以进行使用的
      //setup中的对象中的属性和data函数中的属性会合并
      //setup中的对象的方法和methods方法会合并
      //在vue3中一般不要进行混合使用
      console.log(context.attrs.msg1);
      console.log(this);
      function msg1(){
        console.log('nnkj');
        context.emit('xxx','nnkj2')
      }
      return {
        msg1
      }
    }
}

</script>

<style>

</style>