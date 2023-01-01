<template>
  <div>
    x:{{ x }}
    y:{{ y }}
  </div>
  
</template>

<script>
import hooks from './hooks/hooks'
import myAsiox from './hooks/axios'
export default {
  setup(){
    const {x,y} = hooks()
    console.log(x,y);
    myAsiox('post','http://localhost:3000/image').then((r)=>{console.log(r);})
    return {
      x,
      y
    }
  }
}
</script>

<style>

</style>