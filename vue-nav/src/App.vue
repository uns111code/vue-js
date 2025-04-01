<script setup>


import  AppNavBar  from "./components/AppNavbar.vue";




</script>

<template>
    <header>Un Header</header>
    <main>
      <router-view></router-view>
    </main>
    <AppNavBar />
    <aside>Sidebar</aside>
    <footer>Made with 💜 by Réré</footer>
</template>

<style scoped>

</style>
