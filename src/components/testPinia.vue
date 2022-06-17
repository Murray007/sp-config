<template>
    <div>{{mainStore.counter}}</div>
     <div>{{counter}}</div>
     <div>{{ mainStore.getCounter }}</div>
    <button @click="handleChangeState">点我+1</button>
    <button @click="resetState">重置 state</button>
</template>

<script lang="ts" setup>
import { useStore } from '../stores/ index'
import { storeToRefs } from 'pinia'

const mainStore= useStore()
// const{ counter} = mainStore
/*
*   解构时storeToRefs可具有响应式
*/
const{ counter} = storeToRefs(mainStore)
console.log('counter',counter.value);

const handleChangeState = () =>{
    mainStore.add()
}
const resetState = () =>{
    mainStore.$reset()
}

//订阅
mainStore.$subscribe((mutation, state) => {
    if (state.counter === 12) {
        console.log('订阅成功');
        console.log(mutation);
        alert('订阅成功')
    }
})
</script>
