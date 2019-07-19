# webpack 

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
webpack --config webpack.config.js
```

## 二、入门

### 1. 项目初始化

```
mkdir webpack-demo && cd webpack-demo

npm init -y

npm install webpack webpack-cli --save-dev
```

### 2. 创建配置文件 webpack.config.js

```
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};
```

### 3. 添加 npm 脚本

```
 {
    "name": "webpack-demo",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1",
+     "build": "webpack --config webpack.config.js"
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

## 三、静态资源管理

### 1. css

(1) 安装对应的 loader： `npm install --save-dev style-loader css-loader`

(2) 配置 loader：

```
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

(3) 入口文件中引用对应的 css 文件，在打包入口文件时， 会把对应的 css 代码插入到 index.html 的 head 中。

### 2. 图片

(1) 安装对应的 loader： `npm install --save-dev file-loader`

(2) 配置 loader：

```
{
  test: /\.(png|svg|jpg|gif)$/,
  use: [
    'file-loader'
  ]
}
```

(3) 入口文件中引用 图片，在打包文件时， 会生成目标文件夹中的最终 url，并将入口文件中的路径替换为最终路径。

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

(2) style 文件中引入字体，在打包时， 会生成目标文件夹中的最终 url，并将入口文件中的路径替换为最终路径。

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

(3) 在入口文件中引入对应的数据文件，打包之后，对应的数据文件会被处理为 json 格式的数据

## 四、输出管理

### 1. 解决引用重复的问题

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

(3) 在打包时， HtmlWebpackPlugin 会生成新的 index.html 文件，替换就的 index.html 文件

### 2. 删除遗留的多余文件,在每次构建前清理 /dist 文件夹

(1) 安装插件: `npm install clean-webpack-plugin --save-dev`

(2) 配置插件:

```
const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin');

new CleanWebpackPlugin(),
```

