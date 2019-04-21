<template>
  <div class="home-container">
    <!-- 轮播图 -->
    <mt-swipe :auto="4000" class="mt-swips">
      <mt-swipe-item></mt-swipe-item>
      <mt-swipe-item></mt-swipe-item>
      <mt-swipe-item></mt-swipe-item>
    </mt-swipe>

    <!-- 六宫格 九宫格到六宫格的改造 -->
    <div class="mui-content">
      <ul class="mui-table-view mui-grid-view mui-grid-9">
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link to="/home/newlist">
            <img src="../imgs/home/news.png" alt="新闻资讯">
            <div class="mui-media-body">新闻资讯</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link to="/home/movie">
            <img src="../imgs/home/movie.png" alt="视频">
            <div class="mui-media-body">视频专区</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link to="/home/shop">
            <img src="../imgs/home/shop.png" alt="商城">
            <div class="mui-media-body">乐购商城</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link to="/home/imgs">
           <img src="../imgs/home/imgs.png" alt="图片分享">
            <div class="mui-media-body">图片分享</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link to="/home/message">
            <img src="../imgs/home/fankui.png" alt="留言反馈">
            <div class="mui-media-body">留言反馈</div>
          </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
          <router-link to="/home/concact">
            <img src="../imgs/home/contact.png" alt="联系我们">
            <div class="mui-media-body">联系我们</div>
          </router-link>
        </li>
       
        
        
      </ul>
    </div>
  </div>
</template>
<script>
export default {

};
</script>
<style scoped>
.home-container {
  margin-top: 40px;
}
.mt-swips {
  height: 200px;
}
/* 设置轮播图图片 */
.mint-swipe-item:nth-child(1) {
  background: url("../imgs/home/App_02.jpg") no-repeat center center;
}
.mint-swipe-item:nth-child(2) {
  background: url("../imgs/home/App_03.jpg") no-repeat center center;
}
.mint-swipe-item:nth-child(3) {
  background: url("../imgs/home/App_04.jpg") no-repeat center center;
}
.mui-table-view-cell img{
    width: 45px;
    height: 45px;
}
</style>
