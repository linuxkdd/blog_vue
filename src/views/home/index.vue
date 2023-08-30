<template>
    <div class="common-layout">
      <el-container>
        <el-header class="header">
          <navs/>
        </el-header>
        <el-container class="container">
            <el-main>
              <texts/>
            </el-main>
            <el-aside width="300px" class="aside">
              <window/>
            </el-aside>
        </el-container>
      </el-container>
    </div>
</template>

<script setup>
import navs from './nav/index.vue'
import texts from './text/index.vue'
import window from './window/index.vue'

</script>
<style>
    body {
        background-color:white;
        margin: 0px;
        padding: 0px;
        height:100%;
    }
    .header {
        text-align: center;
        line-height: 60px;
    }
    .common-layout {
        float:flex;
        height: 100%;
    }
    .container {
        height: 90%;;
    }
    .aside {
        text-align: left;
        line-height: 25px;
    }
</style>