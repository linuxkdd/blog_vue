<template>
    <navs/>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    <div id="home">
        <div id="header">
            <div id="blogTitle">
                
        <!--done-->
        <h1><a id="Header1_HeaderTitle" class="headermaintitle HeaderMainTitle" href="https://www.cnblogs.com/n00dle/">noodle</a>
        </h1>
        <h2>热爱生命，热爱生活。</h2>
        <h3 align="center">开发中。。。。。</h3>
        <div class="text"></div>

        <span class="material-symbols-outlined">
        thumb_up
        </span>
        <h3 align="center">开发中。。。。。</h3>
    </div>
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
    import axios from 'axios'
    import Editor from '@tinymce/tinymce-vue';
    import { reactive, ref } from 'vue'
    import navs from '@/views/home/nav/index.vue'
    import { useRoute } from 'vue-router';
    import { ElMessage } from 'element-plus'

    const route = useRoute();
    const pageId = route.query.page_id;
    //评论列表
    const tableData = [
        {
            date: '2016-05-03',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles',
        },
        {
            date: '2016-05-02',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles',
        }
    ]
    //编辑器
    const editorContent = ref('')
    const editorOptions = reactive({
        height: 200,
        width: 600,
        menubar: false,
        plugins: [
          'advlist autolink lists link image charmap print preview anchor',
          'searchreplace visualblocks code fullscreen',
          'insertdatetime media table paste code help wordcount'
        ],
        toolbar:
          'undo redo | formatselect | bold italic backcolor | \
          alignleft aligncenter alignright alignjustify | \
          bullist numlist outdent indent | removeformat | help'
      })
      //提交评论
    const submitComment = () => {
        console.log(editorContent.value)
    }
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




.material-symbols-outlined {
  font-variation-settings:
  'FILL' 0,
  'wght' 100,
  'GRAD' 0,
  'opsz' 200
}
.material-symbols-outlined:hover{
  font-variation-settings:
  'FILL' 1;
  cursor: pointer;
    }
</style>