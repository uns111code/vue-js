<script setup>
import { ref, watch, onMounted } from "vue";
import HeaderSejour from "./components/HeaderSejour.vue";
import FormSejour from "./components/FormSejour.vue";
import Confirmsejour from "./components/Confirmsejour.vue";

const sharedData = ref(JSON.parse(localStorage.getItem("sharedData")) || {});

const updateData = (newValue) => {
  sharedData.value = newValue;
};

watch(sharedData, (newValue) => {
  localStorage.setItem("sharedData", JSON.stringify(newValue));
}, { deep: true });

</script>

<template>
  <header>
    <HeaderSejour />
  </header>

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

<style scoped>
</style>
































<!-- <script setup>
import { ref,watch } from "vue";
import HeaderSejour from "./components/HeaderSejour.vue";
import FormSejour from "./components/FormSejour.vue";
import Confirmsejour from "./components/Confirmsejour.vue"

const sharedData = ref({}); // Donnée partagée

// Fonction qui met à jour la donnée quand ChildA envoie une mise à jour
const updateData = (newValue) => {
  sharedData.value = newValue;
};
// 

const name = ref(localStorage.getItem('name') || ''); 
watch(name, (newValue) => {
  localStorage.setItem('name', newValue);
});

</script> -->

<!-- <template>
  <header>
    <HeaderSejour />
  </header> -->
  <!-- <div>{{ sharedData.onSubmit }}</div> -->
  <!-- <main>
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

<style scoped></style> -->
