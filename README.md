# umi-example-electron

Electron example with [umi](https://github.com/umijs/umi/) and [dva](https://github.com/dvajs/dva/).

## 参考

* [Electron 应用实战 (架构篇)](https://github.com/sorrycc/blog/issues/13)
* https://github.com/sorrycc/dva-boilerplate-electron
* https://www.electron.build/configuration/configuration

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

# 不打 dmg、exe 包，本地验证时用
$ npm run pack:dir

# 不重复做 webpack 层的构建和 rebuild，本地验证打包流程用
$ npm run pack:dirOnly
```

## 截图

<img src="https://gw.alipayobjects.com/zos/rmsportal/EHDQdNKjUrVxTGfBTMVv.png" width="600" />

## 目录结构

采用 [Two package.json Structure](https://www.electron.build/tutorials/two-package-structure)，之后可能会切到 Single package.json Structure 。

```
+ app
  + dist              // src 目录打包完放这里，分 main 和 renderer
  - package.json      // 生产依赖，存 dependencies
+ build               // background.png, icon.icns, icon.ico
+ dist                // pack 完后的输出，.dmg, .exe, .zip, .app 等文件
+ src
  + main              // main
  + renderer          // renderer
- package.json        // 开发依赖，存 devDependencies
- webpack.config.js   // 给 main 用的 webpack 配置
```

几点说明：

* /src/main -> /app/dist/main，是基于 roadhog 打包
* /src/renderer -> /app/dist/renderer，是基于 umi 做打包
* /webpack.config.js 等 roadhog 支持 APP_ROOT 环境变量之后会迁到 /src/main 下

## FAQ

### 如何在 renderer 端引用 electron、node 原生模块、以及 app 里的依赖？

直接 import 就好，已处理好 externals。
