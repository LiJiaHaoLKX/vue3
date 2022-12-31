<template>
<div>
  <!-- html模板中是不需要.value的 -->
  {{ number }}
  <button @click="updata">更新数据</button>
</div>
</template>

<script>
import { ref } from '@vue/reactivity'

export default {
  name: 'App',
  //setup 是组合api中第一个使用的函数，是组合api的入口函数
  //该函数返回的属性跟方法是能直接调用的
  setup(){
    //ref是一个函数用来定义一个基本数据类型的响应式的数据,他会返回一个ref对象，对象中有一个value属性
    let number =ref(10)
    console.log('第一次调用',ref);
    //方法
    function updata(){
      number.value++
    }
    return {
      number,
      updata
    }
  }

}
</script>

<style>

</style>
