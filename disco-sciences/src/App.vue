<script setup>
import {records} from './assets/js/allRecords'
// ici records est un variable js

import {ref} from "vue";
import CardAlbum from './components/CardAlbum.vue';
// import Nav from "./components/Nav.vue"


const albums = ref(records)
// on transform variable js à,  type de ref --- objet

// const handleStockUpdate = (stock) => {
//   console.log('entendu', stock);

// }


const handleStockUpdate = ({ id, action }) => {
  const album = albums.value.find(album => album.id === id);
  if (album) {
    if (action === 'increase') album.stock++;
    if (action === 'decrease' && album.stock > 0) album.stock--;
  }
};














// function findAlbumId(id) {
//   return albums.value.find((album) => album.id === id);
// };



// const increaseStock = (stock) => {
//   // const thisAlbum = findAlbumId(id);
//   // const thisAlbum = albums.value.find((album) => album.id === id);
//   // console.log(thisAlbum)
//   console.log('entendu', stock);
//   stock++
//   // if (thisAlbum) {
//   //   thisAlbum.stock++;
//   // } else {
//   //   console.warn(`Album avec l'ID ${id} non trouvé`);
//   // }
// }

// const decreaseStock = (id) => {
//   const thisAlbum = findAlbumId(id);
//   // const thisAlbum = albums.value.find((album) => album.id === id);
//   if (thisAlbum.stock>0) thisAlbum.stock--;
//   // if (thisAlbum) {
//   //   if (thisAlbum.stock > 0) {
//   //     thisAlbum.stock--;
//   //   } else {
//   //     console.warn(`Stock épuisé pour l'album ID ${id}`);
//   //   }
//   // } else {
//   //   console.warn(`Album avec l'ID ${id} non trouvé`);
//   // }
// }


</script>


<template>
      <header class="h-32 text-2xl w-full flex-none -ml-full shadow-lg bg-gradient-to-br from-teal-600 to-cyan-400">
        <div class="p-4 h-32 text-2xl w-full flex-none -ml-full rounded-2xl transform shadow-lg bg-gradient-to-br from-cyan-400 to-teal-600 -rotate-1 sm:-rotate-1"> Disco Sciences-U (v3)</div>
      </header>
  <div class="min-h-screen flex flex-col">
    <div class="flex flex-row ">
      <div class=" px-8 bg-cyan-100 "> <!-- left filter panel -->
        <div class="mt-2 basis-1/4">

          <div class="overflow-hidden shadow sm:rounded-md">
            <div class="bg-white p-6 w-64 h-96">

              <fieldset>
                <legend class="sr-only">Filtres</legend>
                <div class="text-base font-medium text-gray-900" aria-hidden="true">Filtres</div>
                <div class="mt-4 space-y-4">

                  <div class="flex items-start">
                    <div class="flex h-5 items-center">
                      <input
                          id="comments"
                          name="comments"
                          type="checkbox"
                          class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"

                      >
                    </div>
                    <div class="ml-3 text-sm">
                      <label for="comments" class="font-medium text-cyan-700">In stock only</label>
                    </div>

                  </div>

                </div>
                <label for="sortBy" class="block text-sm mt-2 font-medium text-cyan-700">Sort by</label>
                <select id="sortBy" name="sortBy" autocomplete="country-name"
                        class="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
                  <option>Year</option>
                  <option>Pitchfork</option>
                </select>
              </fieldset>

            </div>

          </div>
        </div>
      </div>

      <main class="bg-white py-5 ml-6 basis-auto">
        <!-- component -->
        <CardAlbum 
        v-for="album in albums"
        :key="album.id"
        :id="album.id"
        :title="album.title"
        :artist="album.artist"
        :year="album.year"
        :stock="album.stock"
        :pitchforkPos="album.pitchforkPos"
        :comment="album.comment"
        :coverUrl="album.coverUrl"
        @updateStock="handleStockUpdate"
        >
         
        </CardAlbum><!-- end one records -->
      </main>
    </div>
  </div>
</template>

<style scoped>
</style>
