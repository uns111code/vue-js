<script setup>
import { ref, onBeforeMount } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
// const charId = route.params.charId;

const character = ref({}); 

const apiUrl = 'https://rickandmortyapi.com/api/character';


onBeforeMount(async () => {
  const tryToFetch = await fetch(`${apiUrl}/${route.params.charId}`);
  const char = await tryToFetch.json();
  character.value = char; 
  console.log(character.value); 
});


</script>

<template>
    <section class="py-2">
          <div class="container px-4 px-lg-5 mt-5 justify-content-center">
            <div class="row">
                <div class="col mb-5">
                    <div class="card h-100">
                        <!-- Product image-->
                        <img class="card-img-top" :src="character.image" alt="..." />
                        <!-- Product details-->
                        <div class="card-body p-4">
                            <div class="text-center">
                                <h5 class="fw-bolder">{{ character.name }} </h5>
                            </div>
                        </div>
                        
                    </div>
                </div>
                <div class="col-4 mb-5">
                    <div class="card h-100">
                        <div class="card-body p-4">
                            <div class="text-center">
                                Des trucs, des détails etc.
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
            
        </section>
</template>

<style scoped></style>