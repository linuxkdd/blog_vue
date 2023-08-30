<template>
    <!-- 头像 -->
    <el-menu-item class="touxiang">
        <el-row class="demo-avatar demo-basic">
            <el-col :span="12">
              <div class="demo-basic--circle">
                <div class="block">
                    <div v-if="$useravatar">
                        <el-avatar :src="$useravatar" />
                    </div>
                    <div v-else>
                        <el-avatar :src="circleUrl" />
                    </div>
                </div>
              </div>
            </el-col>
        </el-row>
    </el-menu-item>
</template>

<script setup>
    import { ref } from 'vue'
    //头像
    const circleUrl = ref('https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png')
</script>

<style scoped>
    .block {
        margin-top: -60%;
    }
</style>