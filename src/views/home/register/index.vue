<template>
      <div v-if="!$cookies">
            <!-- 登录面板的内容 -->
            <el-menu-item >
              <el-button text @click="dialogFormVisible = true">注册</el-button>
            </el-menu-item>
      </div>
      <div v-else>
        <el-menu-item >
            <el-button>欢迎登录--{{ $info }}</el-button>
        </el-menu-item>
      </div>

  <el-dialog v-model="dialogFormVisible" title="用户注册">

    <el-form :model="form" label-width="120px" class="window">
      <el-form-item label="用户名">
        <el-input v-model="form.username" maxlength="8" minlength="5" placeholder="用户名" show-word-limit/>
      </el-form-item>
      <el-form-item label="邮箱">
        <el-input v-model="form.email" maxlength="25" minlength="5" placeholder="邮箱" show-word-limit/>
      </el-form-item>
      <el-form-item label="手机号">
        <el-input v-model="form.phone" maxlength="11" minlength="5" placeholder="手机号" show-word-limit/>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="form.password" show-password placeholder="输入密码..." maxlength="15" minlength="5" show-word-limit/>
      </el-form-item>
      <el-form-item>
      <el-button type="primary" @click="onSubmit" style="margin-left:20%;margin-top:1rem;">立即注册</el-button>
      </el-form-item>
      
  </el-form>
  </el-dialog>
</template>
  
<script setup>
import axios from 'axios'
import { reactive, ref } from 'vue'
import { ElMessage } from 'element-plus'
const token = ref('');

const dialogFormVisible = ref(false)

const form = reactive({
  username: '',
  email: '',
  password: '',
  phone: '',
})
//form提交
const onSubmit = () => {
  axios.post('/api/auth/register', { email: form.email, password: form.password,tel:form.phone, username: form.username })
      .then(response => {
        // 处理响应数据
        if (response.data.status === 20000){
            //注册成功
            //关闭弹窗
            dialogFormVisible.value = false
            ElMessage.success("恭喜,注册成功!")
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
      margin-left:20%;
    }
</style>
  