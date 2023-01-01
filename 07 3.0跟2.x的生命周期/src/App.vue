<template>
  <div>
    <h1>这是父级组件</h1>
    <Child v-if="flag"></Child>
    <button @click="flag=!flag">点我刷新</button>
  </div>
  
</template>

<script>
import { ref } from '@vue/reactivity'
import Child from './components/Child.vue'
export default {
  components:{
    Child
  },
  setup(){
    const flag = ref(true)
    return {
      flag
    }
  }
}
</script>

<style>

</style>