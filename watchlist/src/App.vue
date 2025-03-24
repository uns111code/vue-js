<script setup>
import WatchCard from "./components/WatchCard.vue";
import { userWatchList } from "./assets/js/watchList.js";
import { ref } from "vue";

const watchList = ref(userWatchList);

const onSelectedEpisodeHandler = (episodeTitle) => {
  console.log('entendu', episodeTitle);
  return episodeTitle;
}

</script>

<template>
  <div class="container">
    <section class="sidebar">
      <ul>
        <li>Ici c'est fixe</li>
        <li>Un lien de nav 1</li>
        <li>Un lien de nav 2</li>
      </ul>
      <span>▶ Lecture en cours: {{  }} </span>
    </section>
    
    <main class="courses-container">
      <WatchCard 
        v-for="serie in watchList"
        :key="serie.series + serie.title"
        :series-title="serie.series"
        :episode-title="serie.title"
        :season="serie.season"
        :episode="serie.episode"
        @onSelectedEpisode="onSelectedEpisodeHandler"
      />
    </main>
  </div>
</template>

<style scoped>
</style>
