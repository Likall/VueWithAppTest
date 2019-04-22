import VueRouter from "vue-router"

//导入组件
import CenterContainer from "./components/CenterContainer.vue"
import HomeContainer from "./components/HomeContainer.vue"
import NewsContainer from "./components/NewsContainer.vue"
import ShopCartContainer from "./components/ShopCartContainer.vue"
import NewList from "./components/news/NewList.vue"
import Imgs from "./components/imgs/Imgs.vue"
var router = new VueRouter({
    // data:function(){
    //     return {}
    // },
    routes: [
        {path:'/',redirect:'/home'},
        {path:'/news',component:NewsContainer},
        {path:'/center',component:CenterContainer},
        {path:'/home',component:HomeContainer},
        {path:'/shopcart',component:ShopCartContainer},
        // 首页下的路由
        {path:'/home/newlist',component:NewList},
        {path:'/home/imgs',component:Imgs}
    ],
    linkActiveClass:'mui-active'
})

export default router