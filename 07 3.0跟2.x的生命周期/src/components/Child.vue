<template>
    <div>
        <h1>我是子集组件</h1>
        <h1>你好{{ msg }}</h1>
        <button @click="fn">点我刷新数据</button>
    </div>
  
</template>

<script>
import { ref } from '@vue/reactivity';
import { onBeforeMount, onBeforeUnmount, onBeforeUpdate, onMounted, onUnmounted, onUpdated } from '@vue/runtime-core';

export default {
    name:'Child',
    beforeCreate(){
        console.log('beforeCreate');
    },
    created(){
        console.log('created');
    },
    beforeMount(){
        console.log('beforeMount');
    },
    mounted(){
        console.log('mounted');
    },
    beforeUpdate(){
        console.log('beforeUpdate');
    },
    updated(){
        console.log('updated');
    },
    beforeUnmount(){
        console.log('beforeUnmount');
    },
    unmounted(){
        console.log('unmounted');
    },
    setup(){
        let msg = ref('小明')
        const fn = ()=>{
            msg.value='小黑'
        }
        //vue3生命周期函数
        onBeforeMount(()=>{
            console.log('3.0onBeforeMount');
        })
        onMounted(()=>{
            console.log('3.0onMounted');
        })
        onBeforeUpdate(()=>{
            console.log('3.0onBeforeUpdate');
        })
        onUpdated(()=>{
            console.log('3.0onUpdated');
        })
        onBeforeUnmount(()=>{
            console.log('3.0onBeforeUnmount');
        })
        onUnmounted(()=>{
            console.log('3.0onUnmounted');
        })
        return {
            msg,
            fn
        }
        
    }
}
</script>

<style>

</style>