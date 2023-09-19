<template>
    <navs/>
    <div id="home">
        <div id="header">
        </div>
            <div id="blogTitle">
        <!--done-->
        <h1><a id="Header1_HeaderTitle" class="headermaintitle HeaderMainTitle" href="https://www.cnblogs.com/n00dle/">{{ data.title }}</a>
        </h1>
           </div>
        <div class="text">
            {{ data.content }}
        </div>
    </div>
    <!-- 评论列表 -->
    <div class="pl_list">
        <ul>
            <p>评论列表</p>
            <li>
                <p>#1楼 2023-08-30 16:49 yi念之间</p>
                <span>123加油人</span>
            </li>
        </ul>
    </div>
    <!-- 评论 -->
    <div class="editor">
        <editor api-key="izxzyikta1iwmm0oe7jbmrtizz54o9fqoxr6k7rrcioiptsa" v-model="editorContent" :init="editorOptions" />
        <el-button type="primary" style="margin-top:1rem;" @click="submitComment">提交评论</el-button>
    </div>
</template>


<script setup>
    // import axios from 'axios'
    // import Editor from '@tinymce/tinymce-vue';
    // import { reactive, ref } from 'vue'
    // import navs from '@/views/home/nav/index.vue'
    // import { useRoute } from 'vue-router';
    // import { ElMessage } from 'element-plus'

    // const data = ref([]) // 使用 ref 创建响应式的 data 属性
    // const route = useRoute();
    // const articleid = route.query.articleid;
    // //评论列表
    // const tableData = [
    //     {
    //         date: '2016-05-03',
    //         name: 'Tom',
    //         address: 'No. 189, Grove St, Los Angeles',
    //     },
    //     {
    //         date: '2016-05-02',
    //         name: 'Tom',
    //         address: 'No. 189, Grove St, Los Angeles',
    //     }
    // ]
    // //编辑器
    // const editorContent = ref('')
    // const editorOptions = reactive({
    //     height: 200,
    //     width: 600,
    //     menubar: false,
    //     plugins: [
    //       'advlist autolink lists link image charmap print preview anchor',
    //       'searchreplace visualblocks code fullscreen',
    //       'insertdatetime media table paste code help wordcount'
    //     ],
    //     toolbar:
    //       'undo redo | formatselect | bold italic backcolor | \
    //       alignleft aligncenter alignright alignjustify | \
    //       bullist numlist outdent indent | removeformat | help'
    //   })
    //   //提交评论
    // const submitComment = () => {
    //     console.log(editorContent.value)
    // }
    // axios.get('/font/blog/p?articleid=' + articleid)
    //         .then(response => {
    //             if (response.data.status === 20000){
    //                     console.log("获取展示列表成功")
    //                     data.value = response.data.data.article
    //                 }else{
    //                     console.log("状态码异常")
    //                 }
    //         }) 
    //         .catch(error => {
    //         // 处理请求错误
    //         ElMessage.error(error)
    //         });
</script>

<style scoped>
    .text {
        width: 100%;
        height:100%;
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
    .editor {
        margin-left: 20%;
    }
    .pl_list {
        margin-left: 6%;
        margin-top: -2rem;
        margin-bottom:1rem;
    }
    ul {
        list-style: none;
    }
    ul > li {
        border-top: 1px solid #ccc;
        border-bottom: 1px solid #ccc;
        width:90%;
    }
    ul > li > span {
        margin-bottom: 2rem;
        margin-top: -0.8rem;
        display: block;
        color:#666;
        font-size:14px;
        margin-left:0.7rem;
    }
    ul > li > p {
        font-size:14px;
    }
</style>