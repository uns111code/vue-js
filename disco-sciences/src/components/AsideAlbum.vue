<script setup>

const model = defineModel();



// const checkedBox = ref(false);

// const filterAlbums = computed (() => {
//   if (checkedBox.value) {
//     return albums.value.filter(album => album.stock > 0); 
//   }
//   return albums.value; 
// })

// function filterAlbums()  {
//   if (checkedBox.value) {
//     return albums.value.filter(album => album.stock > 0); 
//   }
//   return albums.value; 
// }
// console.log(filterAlbums()); 

// const sortBy = ref()

// function sortAlbumsYear()  {
//     return albums.value.sort((a, b) => b.year - a.year);
// }
// // console.log(sortAlbumsYear());

// function sortAlbumsPichFork()  {
//     return albums.value.sort((a, b) => b.pitchforkPos - a.pitchforkPos);
// }
// console.log(sortAlbumsPichFork());


// // Fonction pour gérer le changement de sélection dans le <select>
// function handleSortChange() {
//   if (sortBy.value === "year") {
//     return sortAlbumsYear();
//   } else if (sortBy.value === "pitchforkPos") {
//     return sortAlbumsPichFork();
//   } else {
//     return albums.value; // Retourner les albums sans tri si aucune option n'est sélectionnée
//   }
// }

</script>
<template>
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
                v-model="model"
            >
          </div>
          <div class="ml-3 text-sm">
            <label for="comments" class="font-medium text-cyan-700">In stock only</label>
          </div>

        </div>

      </div>
      <label for="sortBy" class="block text-sm mt-2 font-medium text-cyan-700">Sort by</label>
      <select v-model="model" @change="handleSortChange" 
              id="sortBy" name="sortBy" autocomplete="country-name"
              class="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm">
        <option value="year">Year</option>
        <option value="pitchforkPos">Pitchfork</option>
      </select>
    </fieldset>

  </div>

</div>
</div>
</template>