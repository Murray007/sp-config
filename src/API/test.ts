/*
 * @Description:
 * @Date: 2022-06-23 07:08:37
 * @LastEditTime: 2022-06-23 07:09:48
 */
// 创建一个泛型类

export {}
class Queue<T> {
  private data: T[] = []
  push = (item: T) => this.data.push(item)
  pop = (): T | undefined => this.data.shift()
}

// 简单的使用
const queue = new Queue<string>()
queue.push('0')
//   queue.push('1'); // Error：不能推入一个 `string`，只有 number 类型被允许

function f(shouldInitialize: boolean) {
  let x
  if (shouldInitialize) {
    x = 10
  }

  return x
}

f(true) // returns '10'
f(false) // returns 'undefined'
