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



