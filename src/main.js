import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()

export default {
    // 这个字段走 app.json
    config: {
        // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
        pages: ['pages/logs/main', 'pages/index/main', '^pages/daily/main', 'pages/rank/main', 'pages/my/main', 'pages/apiDemo/main'],
        window: {
            backgroundTextStyle: 'light',
            navigationBarBackgroundColor: '#fff',
            navigationBarTitleText: '英语口语训练',
            navigationBarTextStyle: 'black'
        },
        tabBar: {
            color: "#9C9C9C",
            selectedColor: "#3A7BFF",
            borderStyle: "white",
            list: [{
                selectedIconPath: "/static/img/daily/bar-icon-select.png",
                iconPath: "/static/img/daily/bar-icon.png",
                pagePath: "pages/daily/main",
                text: "每日一句"
            }, {
                selectedIconPath: "/static/img/rank/bar-icon-select.png",
                iconPath: "/static/img/rank/bar-icon.png",
                pagePath: 'pages/rank/main',
                text: "每日排行"
            }, {
                selectedIconPath: "/static/img/my/bar-icon-select.png",
                iconPath: "/static/img/my/bar-icon.png",
                pagePath: "pages/my/main",
                text: "我的"
            }, {
                selectedIconPath: "/static/img/my/bar-icon-select.png",
                iconPath: "/static/img/my/bar-icon.png",
                pagePath: "pages/apiDemo/main",
                text: "调用后端服务测试"
            }]
        },
    }
}