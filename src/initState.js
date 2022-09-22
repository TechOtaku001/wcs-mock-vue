import { observer } from "./observe/index"

export function initState(vm) {
  let opts = vm.$options

  if (opts.props) {
    initProps()
  }

  if (opts.data) {
    initData(vm)
  }

  if (opts.watch) {
    initWatch()
  }

  if (opts.computed) {
    initComputed()
  }

  if (opts.methods) {
    initMethods()
  }

}

function initProps(){}

function initData(vm){
  console.info('初始化 data')
  let data = vm.$options.data
  // 如果 data 是个函数，则在调用时要注意 this 的指向问题
  data = vm._data =  typeof data === 'function' ? data.call(vm) : data

  // 对数据进行劫持
  observer(data)
}

function initWatch(){}

function initComputed(){}

function initMethods(){}
