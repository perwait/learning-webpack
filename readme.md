# Learning Webpack 

- [目录](#%e7%9b%ae%e5%bd%95)
- [一、安装](#%e4%b8%80%e5%ae%89%e8%a3%85)
  - [1. 本地安装](#1-%e6%9c%ac%e5%9c%b0%e5%ae%89%e8%a3%85)
  - [2. 全局安装（官方不推荐）](#2-%e5%85%a8%e5%b1%80%e5%ae%89%e8%a3%85%e5%ae%98%e6%96%b9%e4%b8%8d%e6%8e%a8%e8%8d%90)
  - [3. 最新体验版安装](#3-%e6%9c%80%e6%96%b0%e4%bd%93%e9%aa%8c%e7%89%88%e5%ae%89%e8%a3%85)
  - [3. 运行](#3-%e8%bf%90%e8%a1%8c)
- [二、入门](#%e4%ba%8c%e5%85%a5%e9%97%a8)
  - [1. 项目初始化](#1-%e9%a1%b9%e7%9b%ae%e5%88%9d%e5%a7%8b%e5%8c%96)
  - [2. 初始化源码目录](#2-%e5%88%9d%e5%a7%8b%e5%8c%96%e6%ba%90%e7%a0%81%e7%9b%ae%e5%bd%95)
  - [3. 创建配置文件 webpack.config.js](#3-%e5%88%9b%e5%bb%ba%e9%85%8d%e7%bd%ae%e6%96%87%e4%bb%b6-webpackconfigjs)
  - [4. 添加npm脚本](#4-%e6%b7%bb%e5%8a%a0npm%e8%84%9a%e6%9c%ac)
  - [5. 开始使用 webpack 打包：`npm run build`](#5-%e5%bc%80%e5%a7%8b%e4%bd%bf%e7%94%a8-webpack-%e6%89%93%e5%8c%85npm-run-build)
- [三、静态资源管理](#%e4%b8%89%e9%9d%99%e6%80%81%e8%b5%84%e6%ba%90%e7%ae%a1%e7%90%86)
  - [0. 创建静态资源目录 asset](#0-%e5%88%9b%e5%bb%ba%e9%9d%99%e6%80%81%e8%b5%84%e6%ba%90%e7%9b%ae%e5%bd%95-asset)
  - [1. css](#1-css)
  - [2. 图片](#2-%e5%9b%be%e7%89%87)
  - [3. 字体](#3-%e5%ad%97%e4%bd%93)
  - [4. 数据（json<默认支持>、xml、csv）](#4-%e6%95%b0%e6%8d%aejson%e9%bb%98%e8%ae%a4%e6%94%af%e6%8c%81xmlcsv)
- [四、输出管理](#%e5%9b%9b%e8%be%93%e5%87%ba%e7%ae%a1%e7%90%86)
  - [0. 入口分离](#0-%e5%85%a5%e5%8f%a3%e5%88%86%e7%a6%bb)
  - [1. 解决引用重复的问题，每次打包生成新的 html 文件](#1-%e8%a7%a3%e5%86%b3%e5%bc%95%e7%94%a8%e9%87%8d%e5%a4%8d%e7%9a%84%e9%97%ae%e9%a2%98%e6%af%8f%e6%ac%a1%e6%89%93%e5%8c%85%e7%94%9f%e6%88%90%e6%96%b0%e7%9a%84-html-%e6%96%87%e4%bb%b6)
  - [2. 删除遗留的多余文件,在每次构建前清理 /dist 文件夹](#2-%e5%88%a0%e9%99%a4%e9%81%97%e7%95%99%e7%9a%84%e5%a4%9a%e4%bd%99%e6%96%87%e4%bb%b6%e5%9c%a8%e6%af%8f%e6%ac%a1%e6%9e%84%e5%bb%ba%e5%89%8d%e6%b8%85%e7%90%86-dist-%e6%96%87%e4%bb%b6%e5%a4%b9)
- [五、开发环境配置](#%e4%ba%94%e5%bc%80%e5%8f%91%e7%8e%af%e5%a2%83%e9%85%8d%e7%bd%ae)
  - [1. 将编译后的代码映射回原始源代码](#1-%e5%b0%86%e7%bc%96%e8%af%91%e5%90%8e%e7%9a%84%e4%bb%a3%e7%a0%81%e6%98%a0%e5%b0%84%e5%9b%9e%e5%8e%9f%e5%a7%8b%e6%ba%90%e4%bb%a3%e7%a0%81)
  - [2. 自动编译代码](#2-%e8%87%aa%e5%8a%a8%e7%bc%96%e8%af%91%e4%bb%a3%e7%a0%81)
- [六、模块热替换](#%e5%85%ad%e6%a8%a1%e5%9d%97%e7%83%ad%e6%9b%bf%e6%8d%a2)
  - [1. 添加 webpack 自带的插件 NamedModulesPlugin 和 HotModuleReplacementPlugin](#1-%e6%b7%bb%e5%8a%a0-webpack-%e8%87%aa%e5%b8%a6%e7%9a%84%e6%8f%92%e4%bb%b6-namedmodulesplugin-%e5%92%8c-hotmodulereplacementplugin)
  - [2. 修改 index.js 文件，监听该文件所引用的外部文件的更新状况](#2-%e4%bf%ae%e6%94%b9-indexjs-%e6%96%87%e4%bb%b6%e7%9b%91%e5%90%ac%e8%af%a5%e6%96%87%e4%bb%b6%e6%89%80%e5%bc%95%e7%94%a8%e7%9a%84%e5%a4%96%e9%83%a8%e6%96%87%e4%bb%b6%e7%9a%84%e6%9b%b4%e6%96%b0%e7%8a%b6%e5%86%b5)
  - [3. css 等静态资源加载了相应的 loader，会自动更新](#3-css-%e7%ad%89%e9%9d%99%e6%80%81%e8%b5%84%e6%ba%90%e5%8a%a0%e8%bd%bd%e4%ba%86%e7%9b%b8%e5%ba%94%e7%9a%84-loader%e4%bc%9a%e8%87%aa%e5%8a%a8%e6%9b%b4%e6%96%b0)
  - [4.其他热更新 loader 或插件](#4%e5%85%b6%e4%bb%96%e7%83%ad%e6%9b%b4%e6%96%b0-loader-%e6%88%96%e6%8f%92%e4%bb%b6)
- [七、输出优化](#%e4%b8%83%e8%be%93%e5%87%ba%e4%bc%98%e5%8c%96)
  - [1. 移除 JavaScript 上下文中的未引用代码(dead-code)](#1-%e7%a7%bb%e9%99%a4-javascript-%e4%b8%8a%e4%b8%8b%e6%96%87%e4%b8%ad%e7%9a%84%e6%9c%aa%e5%bc%95%e7%94%a8%e4%bb%a3%e7%a0%81dead-code)
  - [2.压缩输出，设置编译模式为 production](#2%e5%8e%8b%e7%bc%a9%e8%be%93%e5%87%ba%e8%ae%be%e7%bd%ae%e7%bc%96%e8%af%91%e6%a8%a1%e5%bc%8f%e4%b8%ba-production)
- [八、生产环境构建](#%e5%85%ab%e7%94%9f%e4%ba%a7%e7%8e%af%e5%a2%83%e6%9e%84%e5%bb%ba)
  - [1.构建目标比较](#1%e6%9e%84%e5%bb%ba%e7%9b%ae%e6%a0%87%e6%af%94%e8%be%83)
  - [2.针对不同环境配置 webpack](#2%e9%92%88%e5%af%b9%e4%b8%8d%e5%90%8c%e7%8e%af%e5%a2%83%e9%85%8d%e7%bd%ae-webpack)
- [九、代码分离](#%e4%b9%9d%e4%bb%a3%e7%a0%81%e5%88%86%e7%a6%bb)
  - [1.针对多个文件指定对应的入口](#1%e9%92%88%e5%af%b9%e5%a4%9a%e4%b8%aa%e6%96%87%e4%bb%b6%e6%8c%87%e5%ae%9a%e5%af%b9%e5%ba%94%e7%9a%84%e5%85%a5%e5%8f%a3)
  - [2.把多个地方引用的代码分离到一个文件中，防止重复引用](#2%e6%8a%8a%e5%a4%9a%e4%b8%aa%e5%9c%b0%e6%96%b9%e5%bc%95%e7%94%a8%e7%9a%84%e4%bb%a3%e7%a0%81%e5%88%86%e7%a6%bb%e5%88%b0%e4%b8%80%e4%b8%aa%e6%96%87%e4%bb%b6%e4%b8%ad%e9%98%b2%e6%ad%a2%e9%87%8d%e5%a4%8d%e5%bc%95%e7%94%a8)
  - [3.动态导入](#3%e5%8a%a8%e6%80%81%e5%af%bc%e5%85%a5)

## 一、安装

### 1. 本地安装

```
# webpack 4+ 版本
npm install --save-dev webpack-cli
npm install --save-dev webpack

# 安装指定版本
npm install --save-dev webpack@<version>
```

### 2. 全局安装（官方不推荐）

```
npm install --global webpack
```

### 3. 最新体验版安装

```
npm install webpack@beta
npm install webpack/webpack#<tagname/branchname>
```

### 3. 运行

```
webpack
```

## 二、入门

### 1. 项目初始化

```
mkdir webpack-demo && cd webpack-demo

npm init -y

npm install webpack webpack-cli --save-dev
```

### 2. 初始化源码目录

```
mkdir src
cd src
new-item index.js
cd ..
mkdir dist
cd dist
new-item index.html
```

### 3. 创建配置文件 webpack.config.js

```
const path = require('path');

module.exports = {
  entry: './src/index.js', // 入口文件地址
  output: {
    filename: 'bundle.js', // 出口文件名
    path: path.resolve(__dirname, 'dist') // 告诉 webpack 在哪里生成文件
  }
};
```

### 4. 添加npm脚本

```
 {
    "name": "webpack-demo",
    "private": true,
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1",
+     "build": "webpack"
    },
    "keywords": [],
    "author": "",
    "license": "ISC",
    "devDependencies": {
      "webpack": "^4.0.1",
      "webpack-cli": "^2.0.9",
      "lodash": "^4.17.5"
    }
  }
```

### 5. 开始使用 webpack 打包：`npm run build`

> 具体事例请参考 example 目录下的 chapterOne

## 三、静态资源管理

### 0. 创建静态资源目录 asset

### 1. css

(1) 安装对应的 loader： `npm install --save-dev style-loader css-loader`

(2) 配置 loader：

```js
module: {
    rules: [{
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader'
      ]
    }]
  }
```

(3) 静态资源目录添加 style.css 文件，在入口文件中引用，在打包时， webpack 会把对应的 css 代码插入到 index.html 的 head 中。

### 2. 图片

(1) 安装对应的 loader： `npm install --save-dev file-loader`

(2) 配置 loader：

```js
{
  test: /\.(png|svg|jpg|gif)$/,
  use: [
    'file-loader'
  ]
}
```

(3) 静态资源目录添加一张图片，在入口文件中引用，打包时， webpack 会生成目标文件夹中的最终 url，并将入口文件中的路径替换为最终路径。

### 3. 字体

(1) 配置 loader：

```
{
  test: /\.(woff|woff2|eot|ttf|otf)$/,
  use: [
    'file-loader'
  ]
}
```

(2) 静态资源目录添加字体，在入口文件中引用，打包时， webpack 会生成目标文件夹中的最终 url，并将入口文件中的路径替换为最终路径。

### 4. 数据（json<默认支持>、xml、csv）

(1) 安装对应的 loader: `npm install --save-dev csv-loader xml-loader`

(2) 配置 loader：

```
{
  test: /\.(csv|tsv)$/,
  use: [
    'csv-loader'
  ]
},
{
  test: /\.xml$/,
  use: [
    'xml-loader'
  ]
}
```

(3) 静态资源目录添加对应的数据文件，在入口文件中引用数据文件, 打包之后，对应的数据文件会被处理为 json 格式的数据

> 具体事例请参考 example 目录下的 chapterTwo

## 四、输出管理

### 0. 入口分离

(1) 源码目录中新建 print.js 文件，并在 index.js 中引用对应模块，index.js 中引用对应的包

(2) webpack 配置修改：

```js
const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    app: './src/index.js',
    print: './src/print.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};
```

### 1. 解决引用重复的问题，每次打包生成新的 html 文件

(1) 设定 HtmlWebpackPlugin

安装 html-webpack-plugin: `npm install --save-dev html-webpack-plugin`

(2) 配置 HtmlWebpackPlugin

```
const HtmlWebpackPlugin = require('html-webpack-plugin');

plugins: [
  new HtmlWebpackPlugin({
    title: 'Output Management'
  })
],
```

(3) 在打包时， HtmlWebpackPlugin 会生成新的 index.html 文件，替换旧的 index.html 文件

### 2. 删除遗留的多余文件,在每次构建前清理 /dist 文件夹

(1) 安装插件: `npm install clean-webpack-plugin --save-dev`

(2) 配置插件:

```
const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin');

new CleanWebpackPlugin(),
```

> 具体事例请参考 example 目录下的 chapterThree

## 五、开发环境配置

### 1. 将编译后的代码映射回原始源代码

(1) 配置文件中添加 source map 配置： `devtool: 'inline-source-map'`

(2) 入口文件有错误，控制台返回的错误路径是对应的源路径

### 2. 自动编译代码

(1) 观察模式：

+ 添加 script 脚本：`"watch": "webpack --watch"` 

+ `npm run watch`，每次更新入口文件，代码将自动编译，但是每次编译后，需要手动刷新浏览器，页面才会更新


(2) webpack-dev-server（一个简单的web服务器，可以实时重新加载页面）（官方推荐使用）

+ 安装： `npm install --save-dev webpack-dev-server`

+ 修改配置文件：告知 webpack-dev-server 在哪里查找文件

```
devServer: {
  contentBase: './dist'
}
```

+ 添加 script 脚本

```
"start": "webpack-dev-server --open",
```

+ 修改源文件，web 服务器就会自动重新加载编译后的代码

(3) webpack-dev-middleware（模块热替换），把 webpack 处理后的文件传递给一个服务器(server)

+ 安装 express 和 webpack-dev-middleware： `npm install --save-dev express webpack-dev-middleware`

+ 配置文件中 output 添加  publicPat 选项： `publicPath: '/'`

+ 自定义一个 express 服务，添加 server.js 文件，内容如下：

```js
const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const app = express();
const config = require('./webpack.config.js');
const compiler = webpack(config);

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath
}));

// Serve the files on port 3000.
app.listen(3000, function () {
  console.log('Example app listening on port 3000!\n');
});
```

+ 添加 npm script： `"server": "node server.js",`

+ 执行 `npm run server`， 打开 http://localhost:3000/ 即是项目地址

> 具体事例请参考 example 目录下的 chapterFour

## 六、模块热替换

### 1. 添加 webpack 自带的插件 NamedModulesPlugin 和 HotModuleReplacementPlugin

```
const webpack = require('webpack');

devServer: {
  contentBase: './dist',
  hot: true
},

plugins: [
  new webpack.NamedModulesPlugin(),
  new webpack.HotModuleReplacementPlugin()
],
```

### 2. 修改 index.js 文件，监听该文件所引用的外部文件的更新状况

```js
if (module.hot) {
  module.hot.accept('./print.js', function() {
    console.log('Accepting the updated printMe module!');
    printMe();
  })
}
```

### 3. css 等静态资源加载了相应的 loader，会自动更新

### 4.其他热更新 loader 或插件

+ React Hot Loader：实时调整 react 组件。

+ Vue Loader：此 loader 支持用于 vue 组件的 HMR，提供开箱即用体验。

+ Elm Hot Loader：支持用于 Elm 程序语言的 HMR。

+ Redux HMR：无需 loader 或插件！只需对 main store 文件进行简单的修改。

+ Angular HMR：没有必要使用 loader！只需对主要的 NgModule 文件进行简单的修改，由 HMR API 完全控制。

## 七、输出优化

### 1. 移除 JavaScript 上下文中的未引用代码(dead-code)

package.json 文件设置 sideEffects 属性 

```js
"sideEffects": [
  "./src/some-side-effectful-file.js",
  "*.css"
]
```

### 2.压缩输出，设置编译模式为 production

```js
mode: "production"
```

## 八、生产环境构建

### 1.构建目标比较

**生产环境构建目标：** 更小的 bundle、更轻量的 source map、更优化的资源、更短的加载时间

**开发环境构建目标：** 强大的 source map 和具有热模块替换能力的 localhost server

### 2.针对不同环境配置 webpack

(1) 安装 webpack-merge：`npm install --save-dev webpack-merge`

(2) 针对不同的环境创建对应的配置文件

```js
// webpack.common.js
const path = require('path');
const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.js'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Production'
    })
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [{
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.(csv|tsv)$/,
        use: [
          'csv-loader'
        ]
      },
      {
        test: /\.xml$/,
        use: [
          'xml-loader'
        ]
      }
    ]
  }
};
```

```js
// webpack.dev.js
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist'
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
});
```

```js
//webpack.prod.js
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new UglifyJSPlugin({sourceMap: true}) // 不支持 es6 语法的压缩
  ]
});
```

(3) 修改 NPM Script

```js
"start": "webpack-dev-server --open --config webpack.dev.js",
"build": "webpack --config webpack.prod.js"
```

## 九、代码分离

### 1.针对多个文件指定对应的入口

### 2.把多个地方引用的代码分离到一个文件中，防止重复引用

```js
optimization: {
  runtimeChunk: {
    name: "manifest"
  },
  splitChunks: {
    cacheGroups: {
      commons: {
        test: /[\\/]node_modules[\\/]/,
        name: "vendor",
        chunks: "all"
      }
    }
  }
}
```

### 3.动态导入

```js
// output 添加 chunkFilename 字段
chunkFilename: '[name].bundle.js',
```

```js
// index.js 动态引入库，编译之后可以看到对应的 loadash-chunk
async function getComponent() {
  var element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  return element;
}
getComponent().then(component => {
  document.body.appendChild(component);
})
```
