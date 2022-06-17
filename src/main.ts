/*
 * @Description: 
 * @Date: 2022-06-15 10:57:58
 * @LastEditTime: 2022-06-17 15:44:53
 */
import { createApp } from 'vue'
import App from './App.vue'

import {createPinia} from 'pinia'//引入Pinia
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate' // 导入 Pinia 插件
//创建
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate) // 激活 Pinia 插件
const app = createApp(App)

//挂载
app.use(pinia)
app.mount('#app')