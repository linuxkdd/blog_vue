<template>
        <div v-if="!$cookies">
            <!-- 登录面板的内容 -->
            <el-menu-item >
              <el-button text @click="dialogFormVisible = true">登录</el-button>
            </el-menu-item>
        </div>
        <div v-else>
          <el-menu-item >
            <el-button @click="logout">退出登录</el-button>
          </el-menu-item>
          <!-- 头像 -->
          <!-- <el-menu-item >
            <el-button>
              <el-row class="demo-avatar demo-basic">
                <el-col :span="12">
                  <div class="sub-title">circle</div>
                  <div class="demo-basic--circle">
                    <div class="block">
                      <el-avatar :size="50" :src="circleUrl" />
                    </div>
                    <div v-for="size in sizeList" :key="size" class="block">
                      <el-avatar :size="size" :src="circleUrl" />
                    </div>
                  </div>
                </el-col>
              </el-row>
            </el-button>
          </el-menu-item> -->
        </div>

 <el-dialog v-model="dialogFormVisible" title="用户登录">

   <el-form :model="form" label-width="120px" class="window">
     <el-form-item label="用户名">
       <el-input v-model="form.logindata" maxlength="25" minlength="5" placeholder="用户名" show-word-limit/>
     </el-form-item>
     <el-form-item label="密码">
       <el-input v-model="form.password" show-password placeholder="输入密码..." maxlength="15" minlength="5" show-word-limit/>
     </el-form-item>
     <el-form-item>
     <el-button type="primary" @click="onSubmit" style="margin-left:20%;margin-top:1rem;">登录</el-button>
     </el-form-item>
     
 </el-form>
 </el-dialog>
</template>
 
<script setup>
  import axios from 'axios'
  import { reactive, ref } from 'vue'
  import { ElMessage } from 'element-plus'
  const dialogFormVisible = ref(false)
  const form = reactive({
    logindata: '',
    password: '',
  })
const onSubmit = () => {
 axios.post('/api/auth/login', { username: form.logindata, password: form.password })
     .then(response => {
      if (response.data.status === 20000){
            //登录成功
            //关闭弹窗
            dialogFormVisible.value = false
            ElMessage.success("登录成功!")
            if (response.data.data.token) {
              document.cookie = `token=${response.data.data.token}`;
              document.cookie = `username=${response.data.data.username}`;
              document.cookie = `useravatar=${response.data.data.useravatar}`;
              window.location.reload()
            }
        }else{
            ElMessage.error(response.data.message)
            console.log(response.data)
        }
     }) 
     .catch(error => {
       // 处理请求错误
       ElMessage.error(error)
     });
  }
  //退出登录
  const logout =() => {
      document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
      window.location.reload()
  }
</script>

<style scoped>
   .el-button--text {
     margin-right: 15px;
   }
   .el-select {
     width: 300px;
   }
   .el-input {
     width: 300px;
   }
   .dialog-footer button:first-child {
     margin-right: 10px;
   }
   .window {
     margin-left:10%;
   }
</style>
 