<template>
  <div>
    <h1>这是父级组件</h1>
    <child></child>
  </div>
  
</template>

<script>
import child from './components/child'
export default {
  computed:{
    child
  }
}
</script>

<style>

</style>