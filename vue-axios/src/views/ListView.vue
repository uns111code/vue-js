<script setup>
import { ref, onBeforeMount } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const characters = ref([]);
const apiUrl = 'https://rickandmortyapi.com/api/character';

const isLoading = ref(true)

async function fetchAllCharacters() {
    const response = await fetch(apiUrl);
    const char = await response.json();
    isLoading.value = false;
    const {results} = char;
 
    characters.value = results;
}


const goToDetailsHandler = (charId) => {
  router.push({
    name:'details',
    params: {
      charId
    }
  })
  console.log('go to details?', charId);
}



onBeforeMount(async () => {
  await fetchAllCharacters();
});




</script>

<template>
    <section class="py-5">
            <div class="container px-4 px-lg-5 mt-5">
                <table class="table">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Status</th>
                        <th scope="col">More</th>
                      </tr>
                    </thead>
                    <tbody>
                      <div v-if="isLoading">
                        <svg xmlns="http://www.w3.org/2000/svg" width="240" height="240" viewBox="0 0 24 24"><g><rect width="2" height="5" x="11" y="1" fill="currentColor" opacity="0.14"/><rect width="2" height="5" x="11" y="1" fill="currentColor" opacity="0.29" transform="rotate(30 12 12)"/><rect width="2" height="5" x="11" y="1" fill="currentColor" opacity="0.43" transform="rotate(60 12 12)"/><rect width="2" height="5" x="11" y="1" fill="currentColor" opacity="0.57" transform="rotate(90 12 12)"/><rect width="2" height="5" x="11" y="1" fill="currentColor" opacity="0.71" transform="rotate(120 12 12)"/><rect width="2" height="5" x="11" y="1" fill="currentColor" opacity="0.86" transform="rotate(150 12 12)"/><rect width="2" height="5" x="11" y="1" fill="currentColor" transform="rotate(180 12 12)"/><animateTransform attributeName="transform" calcMode="discrete" dur="0.75s" repeatCount="indefinite" type="rotate" values="0 12 12;30 12 12;60 12 12;90 12 12;120 12 12;150 12 12;180 12 12;210 12 12;240 12 12;270 12 12;300 12 12;330 12 12;360 12 12"/></g></svg>
                      </div>
                      <tr
                      v-for="char in characters"
                      :key="char.id"
                      v-else
                      >
                        <th scope="row">{{ char.id }}</th>
                        <td>{{ char.name }}</td>
                        <td>{{ char.status }}</td>
                        <td @click="goToDetailsHandler(char.id)">👀</td>
                      </tr>
                    </tbody>
                  </table>
            </div>
    </section>
</template>

<style scoped>
</style>