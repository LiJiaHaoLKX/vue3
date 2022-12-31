<template>
  <div>
    <h3>reactive和ref的细节问题</h3>
    <h3>m1:{{ m1 }}</h3>
    <h3>m2:{{ m2 }}</h3>
    <h3>m3:{{ m3 }}</h3>
  </div>
</template>

<script>
import { reactive, ref } from '@vue/reactivity'
export default {
  name: 'App',
  setup() {
    //通过ref设置数据相应式
    const m1 = ref('abc')
    const m2 = reactive({

    })
    //ref可以传入对象吗
    const m3 = ref({
      
    })
    return {
      m1,
      m2,
      m3
    }
  }
}
</script>

<style>

</style>