import $ from 'jquery'

import Vue from 'vue'
// 导入mint-ui
import {Header,Button,Swipe, SwipeItem,Lazyload } from 'mint-ui'
// // 安装mint-ui
Vue.component(Header.name, Header)
Vue.component(Button.name, Button)
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem)
Vue.use(Lazyload);
//导入App组件
import App from './App.vue'

// 导入mui样式
import Mui from "../src/lib/css/mui.css"
import IconExtra from "../src/lib/css/icons-extra.css"
//导入路由
import VueRouter from "vue-router"
//安装路由
Vue.use(VueRouter)



//导入路由js
import router from "./router.js"
// 导入vue-resource
import VueResource from 'vue-resource'
Vue.use(VueResource)

var vm = new Vue({
    el:'#app',
    render:function(creatElement){
        return creatElement(App); 
    },
    router:router,
    // created(){
    //     console.log(format(1555914716000))
    // }
})

// // 新闻接口测试