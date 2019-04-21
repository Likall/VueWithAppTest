<template>
  <div class="news-container">
      <!-- mui-list -->
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media">
        <a href="javascript:;">
          <img class="mui-media-object mui-pull-left" src="../imgs/home/App_02.jpg">
          <div class="mui-media-body">
              <!-- appname -->
              <h5>标题</h5>
            <div class="mui-ellipsis">
                <span class="name">知情网</span>
                <span class="time">2019-04-20 09-50</span>
            </div>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
    // 获得新闻信息
    data:function(){
        return {}
    },
    created(){
        this.getInfo();
    },
    methods:{
        getInfo:function(){
            this.$http.jsonp('http://api01.idataapi.cn:8000/article/idataapi?apikey=0SC6pVCcxG8Cgkyr7PvQpq6Pp8gYXmxV3D49Wxxi5CQ7VFhUXIRJB1Mj0U99v9yN&kw=&KwPosition=3&kwMode=3&sentiment=-1')
            .then(function(result){
                console.log(result);
            })
        }
    }
};
</script>
<style scoped>
.news-container {
  margin-top: 40px;
}
h5{
    color: black;
    font-size: 14px;
}
.mui-ellipsis{
    display: flex;
    justify-content: space-between;
    font-size: 10px;
    color: darkgrey;
}
</style>
