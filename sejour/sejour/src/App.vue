<script setup>
import { ref } from "vue";
import HeaderSejour from "./components/HeaderSejour.vue";
import FormSejour from "./components/FormSejour.vue";
import Confirmsejour from "./components/Confirmsejour.vue"

const sharedData = ref({}); // Donnée partagée

// Fonction qui met à jour la donnée quand ChildA envoie une mise à jour
const updateData = (newValue) => {
  sharedData.value = newValue;
};
// 

</script>

<template>
  <header>
    <HeaderSejour />
  </header>
  <!-- <div>{{ sharedData.onSubmit }}</div> -->
  <main>
    <Confirmsejour
       v-if="sharedData.onSubmit"
       :recievedFormData="sharedData"
    />
    <FormSejour
      v-else
      @sendData="updateData"
    />
  </main>


</template>

<style scoped></style>
