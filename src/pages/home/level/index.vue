<template>
  <div class="level">
    <h1>医院</h1>
    <div class="content">
      <div class="left">等级:</div>
      <ul class="hospital">
        <li class="active">全部</li>
        <li v-for="item in props.levelList" :key="item.value" >{{item.name}}</li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
  interface HospitalLevelAndRegion {
    "id": number,
    "createTime": string,
    "updateTime": string,
    "isDeleted": number,
    "param": {},
    "parentId": number,
    "name": string,
    "value": string,
    "dictCode": string,
    "hasChildren": boolean
  }
  const props = defineProps<{levelList: HospitalLevelAndRegion[]}>()
</script>

<style scoped lang="scss">
.level {
  color: #7f7f7f;
  margin-top: 20px;
  h1 {
    font-weight: 900;
    margin: 10px 0px;
  }
  .content {
    display: flex;
    .left {
      margin-right: 10px;
    }
    .hospital {
      display: flex;
      li {
        margin-right: 10px;
        &.active {
          color: #55a6fe;
        }
      }
      li:hover {
        color: #55a6fe;
        cursor: pointer;
      }
    }
  }
}
</style>
