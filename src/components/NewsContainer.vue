<template>
  <div class="news-container">
      <!-- mui-list -->
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media" v-for="item in newList" :key="item.item_id">
        <a href="javascript:;">
          <img class="mui-media-object mui-pull-left" src="../imgs/home/App_02.jpg">
          <div class="mui-media-body">
              <!-- appname -->
              
              <h5>{{item.title}}</h5>
            <div class="mui-ellipsis">
                <span class="name">{{item.source}}</span>
                <span class="time">{{item.cursor}}</span>
            </div>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
// 导入转换时间工具
import {format} from '../utils/timeTrans.js'
export default {
    // 获得新闻信息
    data:function(){
        return {
          newList:[],
          obj:{},
          abstract:''
        }
    },
    created(){
        this.getInfo();
    },
    methods:{
      // 获得新闻数据
        getInfo:function(){
            this.$http.jsonp('http://is.snssdk.com/api/news/feed/v51/?concern_id=1234567828934679042&refer=1&count=20&min_behot_time=1492080290&last_refresh_sub_entrance_interval=1492080292&loc_mode=6&loc_time=1492079387&latitude=28.687511709859&longitude=116.02067822305&city=%E5%8D%97%E6%98%8C%E5%B8%82&tt_from=pull&lac=31176&cid=123456789&cp=5183e0f15e6a4q1&iid=0123456789&device_id=12345678952&ac=wifi&channel=oppo-cpa&aid=13&app_name=news_article&version_code=607&version_name=6.0.7&device_platform=ios&ab_version=116031%2C112577%2C101786%2C117787%2C114037%2C101533%2C118766%2C110341%2C113607%2C118273%2C114108%2C106784%2C113608%2C101558%2C105475%2C118213%2C117714%2C105610%2C118751%2C104321%2C118607%2C117725%2C112578%2C115570%2C118602%2C118850%2C115776%2C116615%2C118660%2C31650%2C118530%2C118976%2C118216%2C114338%2C118846&ab_client=a1%2Cc4%2Ce1%2Cf2%2Cg2%2Cf7&ab_group=94563%2C102749&ab_feature=94563%2C102749&abflag=3&ssmix=a&device_type=XIAOMI&device_brand=Google&language=zh&os_api=23&os_version=6.0&openudid=123456789d36d6z6&manifest_version_code=607&resolution=1080*1821&dpi=440&update_version_code=6075&_rticket=123456789123')
            .then(function(result){
              // 成功的回调
              if(result.body.message == "success"){
                var b = [];
                var a = result.body.data;
               for(var i=0;i<a.length;i++){
                //  this.obj = a[i].content;
                
                 this.obj = JSON.parse(a[i].content);
                //  将时间替换
                 this.obj.cursor = format(this.obj.cursor);
                 b.push(this.obj);
                 
               }
               this.newList = b;
              console.log(this.newList);
              }
              
            },function(err){
              console.log(456+err)
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
