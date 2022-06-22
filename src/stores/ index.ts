/*
 * @Description:  创建store
 */
// Pinia
import { defineStore } from 'pinia'

interface testData {
  counter: number
  name: string
  isAdmin: boolean
}
export const useStore = defineStore('main', {
  //   persist: false,// 这是按照插件的文档，在实例上启用了该插件，这个选项是插件特有的
  persist: {
    key: '给一个要保存的名称',
    //保存的位置
    storage: window.sessionStorage, //默认localstorage
  },
  /*
   *	类似组件的data,用于存储全局状态
   */
  state: (): testData => {
    // 推荐使用 完整类型推断的箭头函数
    return {
      // 所有这些属性都将自动推断其类型
      counter: 2,
      name: 'murray',
      isAdmin: true,
    }
  },
  /*
   *	类似组件的computed,用来封装计算属性
   */
  getters: {
    getCounter(): number {
      return this.counter * 2
    },
  },
  /*
   *	类似组件的methods,封装修改逻辑，修改state
   */
  actions: {
    add() {
      this.counter++
    },
  },
})
