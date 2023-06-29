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
import request from "@/api/request"

request.get("/hosp/hospital/1/10")
  .then(res => {
    console.log(res);
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