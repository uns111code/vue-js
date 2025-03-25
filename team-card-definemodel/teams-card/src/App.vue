<script setup>
import { TEAMS } from "./assets/js/teamsApp";
import { ref } from "vue";

const teams = ref(TEAMS);

// console.log(teams.value);

import  TeamsCard  from "./components/TeamsCard.vue";
</script>

<template>
  <TeamsCard
  v-for="team in teams" 
  :key="team.profilePic"
  :profile-pic="team.profilePic"
  :job-title="team.jobTitle"
  :first-name="team.firstName"
  :last-name="team.lastName"
  :verbatim="team.verbatim"
   />
</template>


<style scoped>

</style>
