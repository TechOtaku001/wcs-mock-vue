
export function observer(data) {
  console.info('data to be observed ', data)

  // data 中的数据如果不是对象类型则不需要劫持
  if (typeof data != 'object' || data == null) {
    return data
  }

  // 真正对 data 进行劫持的是在 Observer 类中进行
  return new Observer(data)
}

// Object.defineProperty 只能对对象的单个属性进行劫持
// 所以需要遍历 data 属性
class Observer {
  constructor(val) {
    this.walk(val)
  }

  walk(obj) {
    let keys = Object.keys(obj)
    
    for(let i = 0; i < keys.length; i++) {
      let key = keys[i]
      let value = obj[key]
      defineReactive(obj, key, value)
    }
  }
}

// 对对象中的属性进行劫持
function defineReactive(obj, key, val) {
  // Object.defineProperty 只能对对象的单个属性进行劫持
  // 所以需要递归调用，进行深度劫持
  observer(val)
  Object.defineProperty(obj, key, {
    get() {
      console.info('获取响应式数据' + val)
      return val
    },
    set(newVal) {
      if (newVal === val) {
        return
      }
      // Object.defineProperty 无法对新增的对象类型数据进行劫持
      // 所以在赋值的时候也需要进行递归调用以深度劫持
      observer(newVal)
      val = newVal
    }
  })
}
