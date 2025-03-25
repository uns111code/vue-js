<script setup>
const props = defineProps({
    seriesTitle: String,
    season: Number,
    episode: Number,
    episodeTitle: String
});

const emit = defineEmits(['onSelectedEpisode']);

// const fullEpisodeSeason = (season,episode)=>{
//   const fullSeason = season<10?'0'+season:season
//   const fullEpisode = episode<10?'0'+episode:episode
//   return `S${fullSeason}E${fullEpisode}`
// }

const fullEpisodeSeason = ()=>{
  const fullSeason = props.season<10?'0'+props.season:props.season
  const fullEpisode = props.episode<10?'0'+props.episode:props.episode
  return `S${fullSeason}E${fullEpisode}`
}

const continueBtnHandler = () => {
  console.log(props.episodeTitle);
  emit('onSelectedEpisode', props.episodeTitle)
}

</script>

<template>
    <div class="watch-card">
        <div class="course-preview">
            <h6>Season {{ season }}</h6>
            <h2>{{ seriesTitle }}</h2>
        </div>
        <div class="course-info">
            <!-- <h6>ep: S{{ season < 10 ? "0" + season : season }}E{{ episode < 10 ? "0" + episode : episode }}</h6> -->
            <!-- <h6>ep: {{ fullEpisodeSeason(season,episode)}}</h6> -->
            <h6>ep: {{ fullEpisodeSeason()}}</h6>
            <h2>{{ episodeTitle }}</h2>
            <button class="btn" @click="continueBtnHandler()">Continue</button>
        </div>
    </div>
</template>



















<style scoped>
.watch-card {
  background-color: #fff;
  border-radius: 6px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
  display: flex;
  width:80%;
  max-width: 850px;
  margin: 20px;
  overflow: hidden;
}

.watch-card h6 {
  opacity: 0.6;
  margin: 0;
  letter-spacing: 1px;
  text-transform: uppercase;
}

.watch-card h2 {
  letter-spacing: 1px;
  margin: 10px 0;
}

.course-preview {
  background-color: #2A265F;
  color: #fff;
  padding: 30px;
  min-width: 200px;
}

.course-preview a {
  color: #fff;
  display: inline-block;
  font-size: 12px;
  opacity: 0.6;
  margin-top: 30px;
  text-decoration: none;
}

.course-info {
  padding: 30px;
  position: relative;
  width: 100%;
}



.btn {
  background-color: #2A265F;
  border: 0;
  border-radius: 10px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
  color: #fff;
  font-size: 16px;
  padding: 12px 25px;
  position: absolute;
  bottom: 30px;
  right: 30px;
  letter-spacing: 1px;
}
</style>
