<template>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
  <article class="post-item" data-post-id="17658768">
    <template v-for="item in data.article" :key="item.id">
        <section class="post-item-body">
            <div class="post-item-text">
                <router-link class="post-item-title" :to="{ path: '/p', query: { page_id: item.id } }" target="_blank" xt-marked="ok">{{ item.title }}</router-link>
                <p class="post-item-summary" xt-marked="ok">
                            <a :href="item.useravatar">
                                <img :src="item.useravatar" class="avatar" alt="博主头像">
                            </a>
                        {{item.content.slice(0, 150)}}.....
                </p>
            </div>
            <footer class="post-item-foot">
                <a href="https://www.cnblogs.com/fulongyuanjushi/" class="post-item-author"><span xt-marked="ok">{{ item.username }}</span></a>
                <span class="post-meta-item">
                    <span xt-marked="ok">{{ item.updatetime ? formatDate(item.updatetime) : formatDate(item.createtime) }}</span>
                </span>
                <a id="digg_control_17658768" class="post-meta-item btn " href="javascript:void(0)" onclick="DiggPost('fulongyuanjushi', 17658768, 530760, 1);return false;">
                    <span class="material-symbols-outlined">
                        thumb_up
                    </span>
                    <span id="digg_count_17658768" xt-marked="ok">{{ item.lookcount }}</span>
                </a>
                <a class="post-meta-item btn" href="https://www.cnblogs.com/fulongyuanjushi/p/17658768.html#commentform">
                    <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                        <use xlink:href="#icon_comment"></use>
                    </svg>
                    <span xt-marked="ok">{{ item.commentcount }}</span>
                </a>
                <a class="post-meta-item btn" href="https://www.cnblogs.com/fulongyuanjushi/p/17658768.html">
                    <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                        <use xlink:href="#icon_views"></use>
                    </svg>
                    <span xt-marked="ok">{{ item.diggcount }}</span>
                </a>
                <span id="digg_tip_17658768" class="digg-tip" style="color: red"></span>
            </footer>
        </section>
    </template>
    </article>
        <div class="example-pagination-block">
            <el-pagination layout="prev, pager, next" :total="data.total + 0"  v-model="currentPage" @current-change="handlePageChange"/>
        </div>
</template>


  <script setup>
    import axios from 'axios'
    import { ref } from 'vue';
    import { ElMessage } from 'element-plus'
    import dayjs from 'dayjs'; // 引入日期格式化库

    const data = ref([]) // 使用 ref 创建响应式的 data 属性
    const formatDate = ref([])
    //页码处理
    const currentPage = ref(1);
    const handlePageChange = (newPage) => {

      console.log('Clicked page:', newPage);
      // 在这里处理点击的页数

      axios.get('/font/blog/content?page=' + newPage)
            .then(response => {
            if (response.status == 200){
                    //获取展示列表
                    //状态判断
                    if (response.data.status === 20000){
                        console.log("获取展示列表成功")
                        //处理分页数量 * 10
                        response.data.data.total = response.data.data.total * 10
                        data.value = response.data.data
                    }else{
                        console.log("状态码异常")
                    }
                    
                }else{
                    console.log("获取展示列表失败")
                }
            }) 
            .catch(error => {
            // 处理请求错误
            ElMessage.error(error)
            });
    };
    // 格式化日期
    formatDate.value = (date) => {
      return dayjs(date).format('YYYY-MM-DD HH:mm');
    };
    //异步请求
    axios.get('/font/blog/content')
     .then(response => {
      if (response.status == 200){
            //获取展示列表
            //状态判断
            if (response.data.status === 20000){
                console.log("获取展示列表成功")
                //处理分页数量 * 10
                response.data.data.total = response.data.data.total * 10
                data.value = response.data.data
            }else{
                console.log("状态码异常")
            }
            
        }else{
            console.log("获取展示列表失败")
        }
     }) 
     .catch(error => {
       // 处理请求错误
       ElMessage.error(error)
     });
  </script>
  


<style scoped>
  .post-item-title {
    color: #005da6;
    text-decoration: underline;
    font-size: 16px;
    line-height: 22px;
    font-weight: bold;
    outline:none;
}
  .post-item-title:hover {
    color:#ff6600;
    text-decoration: underline;
  }
  .post-item-summary{
    color:#555555;
    font-weight: 400;
    font-size: 14px;
    max-height: 80px;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
    line-height: 1.5;
    display: block;
    font-size: 12px;
    font-weight: 400;
    line-height: 20px;
    text-overflow: clip;
    word-break: break-all;
  }
  .post-item .avatar {
    border-radius: 0;
    padding: 1px;
    border: 1px solid #ccc;
    float: left;
    margin-right: 5px;
    margin-top: 3px;
}
  .post-item .post-item-author {
    min-width: 50px;
    max-width: 120px;
    overflow: hidden;
    line-height: 20px;
    height: 20px;
    color: #0053a1;
    margin-right: 16px;
  }
  .post-meta-item {
    display: inline-flex;
    fill: #bdbdbd;
    stroke: #bdbdbd;
    height: 20px;
    white-space: nowrap;
    align-items: center;
}
footer {
    display: block;
}
.post-item-foot {
    margin-right: 6px;
    margin-top: 0px;
    display: inline-flex;
    align-items: center;
    font-size: 13px;
    color: #555;
}
.post-meta-item>img {
    width: 17px;
    height: 17px;
}
.post-item-body{
  margin-top:20px;
  border-bottom: 1px solid rgba(214, 212, 212, 0.541);
}
.post-item-summary >a >img{
    width: 10%;
    height: 100%;
    border-radius: 5px;
    margin-top: 10px;
    margin-bottom: 10px;
}
/* 點贊 */
.material-symbols-outlined {
  font-variation-settings:
  'FILL' 0,
  'wght' 400,
  'GRAD' 0,
  'opsz' 24
}
.material-symbols-outlined:hover{
  font-variation-settings:
  'FILL' 1;
  cursor: pointer;
}
</style>
  