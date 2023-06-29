<template>
  <div>
    <!-- 轮播 -->
    <Carousel />
    <!-- 搜索框 -->
    <Search />
    <!-- 内容区域 -->
    <el-row :gutter="20">
      <!-- 左侧内容区域 -->
      <el-col :span="20">
        <!-- 等级 -->
        <Level />
        <!-- 地区  -->
        <Region />
        <!-- 医院信息卡片 -->
        <div class="hospital">
          <Card class="item" v-for="item in 10" :key="item" />
        </div>
        <!-- 分页 -->
        <el-pagination
          v-model:current-page="pageNo"
          v-model:page-size="pageSize"
          :page-sizes="[10, 30, 50]"
          :background="true"
          layout="prev, pager, next, jumper,->,sizes,total"
          :total="total"
        />
      </el-col>
      <!-- 右侧内容区域 -->
      <el-col :span="4">
        222
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import Carousel from "@/pages/home/carousel/index.vue"
import Search from "@/pages/home/search/index.vue"
import Level from "@/pages/home/level/index.vue"
import Region from "@/pages/home/region/index.vue"
import Card from "@/pages/home/card/index.vue"

import { ref } from "vue"

let pageNo = ref<number>(1)
let pageSize = ref(1)
let total = ref(400)

</script>

<style lang="scss" scoped>
.hospital {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .item {
    width: 48%;
    margin: 10px 0px;
  }
  .item:hover{
    cursor: pointer;
  }
}
</style>