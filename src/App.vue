<template>
  <div class="container">

    <Header />

    <div class="content">
    
      <router-view />

    </div>

    <Footer />

  </div>
</template>

<script setup lang="ts">
// import request from "@/api/request"

import { getHospitalList } from "@/api/home/index"

// request.get("/hosp/hospital/1/10")
// request.get("cmn/dict/findByDictCode/HosType", {{aa:'11'}})
//   .then(res => {
//     console.log(res);
//   })

// getHospitalLevel("HosType")
//   .then(res => {
//     console.log(res);
//   }, err => {
//     console.log(err);
//   })

getHospitalList(1, 10, {aa: "111"})
  .then(res => {
    console.log(res);
  }, err => {
    console.log(err);
  })

</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  .content {
    margin-top: 70px;
    width: 1200px;
    min-height: 700px;
  }
}
</style>