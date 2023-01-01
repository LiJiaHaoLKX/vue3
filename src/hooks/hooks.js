import { ref } from '@vue/reactivity'
import { onMounted } from '@vue/runtime-core'
export default function (){
    const x = ref(1)
    const y = ref(1)
    onMounted(()=>{
      window.onclick=(event)=>{
        x.value=event.pageX
        y.value=event.pageY
      }
    })
    return {
        x,
        y
    }
}