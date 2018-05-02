# mini-program

> speaking-training

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev 用开发者工具打开dist目录就可以了

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

五分钟搭建mpvue
# 1. 先检查下 Node.js 是否安装成功
$ node -v
v8.9.0

$ npm -v
5.6.0

# 2. 由于众所周知的原因，可以考虑切换源为 taobao 源
$ npm set registry https://registry.npm.taobao.org/

# 3. 全局安装 vue-cli
# 一般是要 sudo 权限的
$ npm install --global vue-cli

# 4. 创建一个基于 mpvue-quickstart 模板的新项目
# 新手一路回车选择默认就可以了
$ vue init mpvue/mpvue-quickstart my-project

# 5. 安装依赖
$ cd my-project
$ npm install
$ npm run dev

注意事项

1.pages目录下添加新页面，主文件的名字必须是index.vue,js必须是main.js(可能在哪里配置，后期调研下)
2.安装sass依赖

```
npm i sass-loader node-sass --save
```

```css
<style scoped lang=scss>
.daily-page{
  .test-scss{
     color:red
  }
}
</style>
```

3.vue-cli怎么引入.scss文件
就可以在.vue文件的style里import .scss文件了， vue-cli自己已经配置好了 。

4.小程序的ui框架 
[WeUI官网](https://weui.io)
 
由于微信小程序不支持dom操作，所以样式文件可直接引用/weui/style/weui.wxss，或者单独引用/weui/style/widget下的组件的wxss,
写法可以参照/weui/example文件

5.VS Code .vue文件代码缩进以及格式化代码

首先在应用商店中搜索'Vetur'插件安装，然后进行下面操作：
文件->首选项->设置，然后在右边编辑框输入以下设置：

```json
{
    "prettier.tabWidth": 4,
    "vetur.format.defaultFormatter.html": "prettier"
}
```

然后通过快捷键 Alt+Shift+F 进行格式化

6.webpack 开发时跨域问题的解决

##### 1.说明

```
webpack 内置了 http-proxy-middleware 可以解决 请求的 URL 代理的问题
```

##### 2.API

```js
//需要代理的 pathname 要加 /
module.exports = {
    devtool: 'cheap-module-source-map',
    entry: './app/js/index.js'
    output: {
        path: path.resolve(__dirname, 'dev'),
        // 所有输出文件的目标路径
        filename: 'js/bundle.js',
        publicPath: '/',
        chunkFilename: '[name].chunk.js'
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'dev'),
        publicPath: '/',
        historyApiFallback: true,
        proxy: {
            // 请求到 '/wechat/teenager/' 下 的请求都会被代理到 target： http://192.168.250.242:8333 中
            '/wechat/teenager/*': { 
                target: 'http://192.168.250.242:8333',
                secure: false, // 接受 运行在 https 上的服务
                changeOrigin: true
            }
        }
    }
}
```

7.调用后端服务

详细文档： https://www.cnblogs.com/Upton/p/6180512.html

//axios请求返回的也是一个promise,跟踪错误只需要在最后加一个catch就可以了。

axios官方文档 https://github.com/axios






