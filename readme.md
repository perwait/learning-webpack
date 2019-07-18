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