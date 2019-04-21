<template>
   <div class="app-container">
       <!-- 顶部区域 -->
        <mt-header fixed title="study"></mt-header>
        <!-- 中间区域 -->
		<!-- 设置过度动画 -->
		<transition>
			<router-view></router-view>
		</transition>
        
        <!-- 底部tabbar区域 -->
        <nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/news">
				<span class="mui-icon mui-icon-pengyouquan"></span>
				<span class="mui-tab-label">新闻</span>
			</router-link>
			<router-link class="mui-tab-item" to="/shopcart">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart">
                    <span class="mui-badge">0</span>
                </span>
                
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item" to="/center">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">我的</span>
			</router-link>
		</nav>
    </div> 

</template>
<script>
export default {
    
}
</script>
<style scoped>
.mui-bar{
    margin-top: 40px
}
.v-enter,.v-leave{
	opacity: 0;
	transform: translateX(300px)
}
.v-enter-active,
.v-leave-active{
	transition: all 0.5s;
}
</style>