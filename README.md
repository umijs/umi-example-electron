# umi-example-electron

Electron example with [umi](https://github.com/umijs/umi/) and [dva](https://github.com/dvajs/dva/).

## 参考

* https://github.com/sorrycc/dva-boilerplate-electron
* [Electron 应用实战 (架构篇)](https://github.com/sorrycc/blog/issues/13)

## 使用

安装依赖。

```bash
# 安装依赖
$ npm i

# 安装 app 目录依赖（注意这里不要用 cnpm 或 tnpm，pack 时会丢失 node_modules）
$ cd app
$ npm i
$ cd ../

# rebuild 生产依赖
$ npm run rebuild
```

启动本地调试。

```bash
$ npm run dev
```

你也可以分开运行 `npm run dev:renderer` 和 `npm run dev:main`。

打包。

```bash
$ npm run pack
```
