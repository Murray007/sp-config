<!--
 * @Description:  test01
 * @Date: 2022-06-17 15:42:57
-->
<template>
  <div>{{ mainStore.counter }}</div>
  <div>{{ counter }}</div>
  <div>{{ mainStore.getCounter }}</div>
  <button @click="handleChangeState">点我+1</button>
  <button @click="resetState">重置 state</button>
</template>

<script lang="ts">
import { useStore } from '../stores/ index'
import { storeToRefs } from 'pinia'
import { defineComponent, reactive, ref } from 'vue'

export default defineComponent({
  setup(props) {
    const mainStore = useStore()
    // const{ counter} = mainStore
    /*
     *   解构时storeToRefs可具有响应式
     */
    const { counter } = storeToRefs(mainStore)
    // console.log('counter', counter.value)

    const handleChangeState = () => {
      mainStore.add()
    }
    const resetState = () => {
      mainStore.$reset()
    }

    //订阅
    mainStore.$subscribe((mutation, state) => {
      if (state.counter === 12) {
        console.log('订阅成功')
        console.log(mutation)
        alert('订阅成功')
      }
    })

    return {
      mainStore,
      handleChangeState,
      resetState,
      counter,
    }
  },
})
</script>
