<template>
<div>
  {{ number }}
</div>
</template>

<script>

export default {
  name: 'App',
  //setup 是组合api中第一个使用的函数
  setup(){
    const number =10
    return {
      number
    }
  }

}
</script>

<style>

</style>
