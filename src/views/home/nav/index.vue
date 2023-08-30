<template>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      :ellipsis="false"
      @select="handleSelect"
      style="width=100%"
    >
      <router-link :to="{ path: '/'}">
        <el-menu-item index="0">首页</el-menu-item>
      </router-link>
      <el-menu-item index="3">杂文趣事</el-menu-item>
      <el-menu-item index="4">相册</el-menu-item>
      <el-menu-item index="5">技术</el-menu-item>

      <el-menu-item index="6">关于</el-menu-item>

      <div class="flex-grow" />
        <el-menu-item index="2"><search/></el-menu-item>
        <el-menu-item index="1"><register/></el-menu-item>
        <el-menu-item index="7"><login/></el-menu-item>
        <el-menu-item index="8">
          <div v-if="$cookies">
            <avatar/>
          </div>
        </el-menu-item>
    </el-menu>
  </template>

  <script setup>
  import { ref } from 'vue'
  import login from '../login/index.vue'
  import register from '../register/index.vue'
  import search from '../search/index.vue'
  import avatar from '../login/avatar.vue'

  const activeIndex = ref('1')
  const handleSelect = (key, keyPath) => {
    console.log(key, keyPath)
  }
  </script>
  
  <style>
  .header {
    margin:0px;
    padding:0px;
  }
  .flex-grow {
    flex-grow: 1;
  }
  </style>
  