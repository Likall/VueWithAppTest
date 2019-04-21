<template>
  <div class="center-container">
    <div class="mui-content">
      <div id="tabbar-with-map" class="mui-control-content mui-active">
        <ul class="mui-table-view">
          <li class="mui-table-view-cell">
            <a class="mui-navigate-right">新消息通知</a>
          </li>
          <li class="mui-table-view-cell">
            <a class="mui-navigate-right">隐私</a>
          </li>
          <li class="mui-table-view-cell">
            <a class="mui-navigate-right">通用</a>
          </li>
        </ul>
        <ul class="mui-table-view" style="margin-top: 25px;">
          <li class="mui-table-view-cell">
            <a class="mui-navigate-right">关于mui</a>
          </li>
        </ul>
        <ul class="mui-table-view" style="margin-top: 25px;">
          <li class="mui-table-view-cell">
            <a style="text-align: center;color: #FF3B30;">退出登录</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.center-container {
  margin-top: 40px;
}
.mui-content {
  height: 296px;
}
</style>
