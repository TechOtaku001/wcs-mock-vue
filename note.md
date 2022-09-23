# rollup 搭建环境

## 安装依赖

```shell

npm install @babel/preset-env @babel/core rollup rollup-plugin-babel rollup-plugin-serve -D

```

# 实现 Vue

## 初始化Vue

1. 在 src 目录下新建 init.js 用于实现 Vue 初始化相关方法
2. 在 index.js 中引入初始化方法，然后传入 Vue 进行调用
3. 后续的数据绑定等其它功能，也可以像 init.js 这样进行模块化的处理


## data 属性劫持

### data 中对象类型数据的劫持

1. Object.defineProperty 只能对对象类型数据的单个属性进行劫持，所以必须遍历对象对每个属性进行劫持
2. Object.defineProperty 只能对对象类型数据的第一层数据进行劫持，所以对于嵌套深的对象，需要递归调用劫持方法

### data 中数据类型数据的劫持

1. Object.defineProperty 无法对数组类型数据进行劫持
1. 使用方法函数劫持，重写数组方法进行数据劫持


