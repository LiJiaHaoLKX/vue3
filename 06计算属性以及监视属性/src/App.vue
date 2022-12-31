<template>
  <div>
    <fieldset>
      <legend>姓名操作</legend>
      姓：<input type="text" placeholder="输入姓氏" v-model="user.firstName">
      <br />
      名：<input type="text" placeholder="输入姓氏" v-model="user.lastName">
    </fieldset>
    <fieldset>
      <legend>计算属性和监视的演示</legend>
      姓名：<input type="text" placeholder="显示姓名" v-model="fullName">
      <br />
      姓名：<input type="text" placeholder="显示姓名" v-model="fullName2">
      <br />
      姓名：<input type="text" placeholder="显示姓名" v-model="fullName3">
    </fieldset>
  </div>

</template>

<script>
import { reactive, ref } from '@vue/reactivity'
import { computed, watch, watchEffect } from '@vue/runtime-core'
export default {
  name: 'App',
  setup() {
    //定义一个响应式对象
    const user = reactive({
      //姓氏
      firstName: '东方',
      //名字
      lastName: '不败'
    })
    //通过计算属性来实现第一个姓名的显示
    //vue3中的计算属性
    //如果计算属性的函数
    const fullName = computed(() => {
      return user.firstName + user.lastName
    })
    const fullName2 = computed({
      get() {
        return user.firstName + '_' + user.lastName
      },
      set(value) {
        const names = value.split('_')
        console.log(names);
        user.firstName = names[0]
        user.lastName = names[1]
      }
    })
    const fullName3 = ref('')
    //监视---监视指定的数据
    watch(user, ({ firstName, lastName }) => {
      fullName3.value =firstName+'_'+lastName
    },{immediate:true,deep:true})
    watch(fullName3, (value) => {
      const names = value.split('_')
        console.log(names);
        user.firstName = names[0]
        user.lastName = names[1]
    },{immediate:true,deep:true})
    //也是监视，但是它不需要执行immediate，因为它本身就会执行一次
    /* watchEffect() */
    //监视非响应式数据的时候需要用箭头函数将数据进行返回
    watch(()=>user.firstName,()=>{
      console.log('firstName改变了');
    })
    //我们不仅可以监视单个数据，还能监视多个数据
    watch([()=>user.firstName,()=>user.lastName,fullName],()=>{
      console.log('数据改变了');
    })
    return {
      user,
      fullName,
      fullName2,
      fullName3
    }
  }
}
</script>

<style>

</style>