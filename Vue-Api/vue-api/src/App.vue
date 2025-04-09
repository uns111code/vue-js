<script setup>

import Header from "./components/BooksHeader.vue";
</script>

<template>
  <Header />
  <main>
    <router-view></router-view>
  </main>
</template>






<style scoped>
main {
  text-align: center;
  width: 100vw;
  /* background-color: #e1e4ed; */
}
</style>
