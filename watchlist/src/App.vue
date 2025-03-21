<script setup>
import SeriesCard from "./components/SeriesCard.vue";

import { userWatchList } from "./assets/js/watchList.js";

import { ref } from "vue";

const watchList = ref(userWatchList);

console.log(watchList)
</script>

<template>
  <div class="container">
      <section class="sidebar">
          <ul>
              <li>Ici c'est fixe</li>
              <li>Un lien de nav 1</li>
              <li>Un lien de nav 2</li>
          </ul>
          <span>▶ Lecture en cours: (ep title) </span>
      </section>
      <main class="courses-container">
        <SeriesCard :userWatchList="userWatchList" />
      </main>
  </div>
</template>

<style scoped>

</style>
