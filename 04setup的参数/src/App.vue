<template>
  <div>
    <button @click="msg+='啊啊啊啊'">更新数据</button>
    <child :msg="msg" @xxx="xxx"></child>
  </div>
  
</template>

<script>

import { ref } from 'vue';
import child from './components/Child'
export default {
  name: 'App',
  //setup 是组合api中第一个使用的函数，是组合api的入口函数
  //reactive可以将非基本类型的数据对象进行相应式数据
  //响应式转化是深层次的：会影响对象内部所有的嵌套的属性
  
  setup(){
    const msg = ref('你好')
    function xxx(xxx){
      msg.value+='确实'
      console.log('触发了事件',xxx);
    }
    return {
      msg,
      xxx
    }
  },
  components:{
    child
  }
}
</script>

<style>

</style>
