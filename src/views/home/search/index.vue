<template>
    <div class="demo-input-size">
      <el-input
        v-model="input1"
        class="w-50 m-2"
        size="large"
        placeholder="搜索内容"
        :suffix-icon="Search"
      />
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { Search } from '@element-plus/icons-vue'
  const input1 = ref('')
  </script>

<style>
.demo-input-size .el-input {
  padding-bottom:8px;
}
.el-input__suffix {
  cursor: pointer;
}
</style>