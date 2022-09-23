let oldArrayProtoMethods = Array.prototype

let arrayMethods = Object.create(oldArrayProtoMethods)

let methods = ['push', 'pop', 'unshift', 'shift', 'splice']

methods.forEach(item => {
  arrayMethods[item] = function (...args) {
    console.log('进行数组方法劫持')
    // 在此写入劫持数组的逻辑
    let result = oldArrayProtoMethods[item].apply(this, args)

    let inserted
    switch (item) {
      case 'push':
      case 'unshift':
        inserted = args
        break
      case 'splice':
        inserted = args.splice(2)
        break
      default:
        break
    }

    let ob = this.__ob__
    if (inserted) {
      ob.observeArray(inserted)
    }

    return result
  }
})

export default arrayMethods
