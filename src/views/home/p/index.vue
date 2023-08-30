<template>
    <navs/>
    <div id="home">
        <div id="header">
            <div id="blogTitle">
                
        <!--done-->
        <h1><a id="Header1_HeaderTitle" class="headermaintitle HeaderMainTitle" href="https://www.cnblogs.com/n00dle/">noodle</a>
        </h1>
        <h2>热爱生命，热爱生活。</h2>
        <h3 align="center">开发中。。。。。</h3>

        <div class="text"></div>


        <h3 align="center">开发中。。。。。</h3>
    </div>
    </div>
    </div>
                
</template>


<script setup>
    import axios from 'axios'
    import { reactive, ref } from 'vue'
    import navs from '@/views/home/nav/index.vue'
    import { useRoute } from 'vue-router';
    import { ElMessage } from 'element-plus'

    const route = useRoute();
    const pageId = route.query.page_id;

    axios.get('/font/blog/content?page_id=' + pageId)
            .then(response => {
            if (response.status == 200){
                    //获取展示列表
                    //状态判断
                    console.log(response.data)
            }
            }) 
            .catch(error => {
            // 处理请求错误
            ElMessage.error(error)
            });
</script>

<style scoped>
    .text {
        width: 100px;
        height:1080px;
        background-color: #fff;
    }
    #home {
        margin: 0 auto;
        width: 65%;
        min-width: 950px;
        background-color: #fff;
        padding: 30px;
        margin-top: 50px;
        margin-bottom: 50px;
        box-shadow: 0 2px 6px rgba(100,100,100,.3);
    }
</style>