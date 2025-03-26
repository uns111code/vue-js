<script setup>
import HeaderAlbum from "./components/HeaderAlbum.vue";
import AsideAlbum from "./components/AsideAlbum.vue";
import {records} from './assets/js/allRecords'
// ici records est un variable js

import { computed, ref } from "vue";
import CardAlbum from './components/CardAlbum.vue';
// import Nav from "./components/Nav.vue"


const albums = ref(records)
// on transform variable js à,  type de ref --- objet


// const handleStockUpdate = ({ id, action }) => {
//   const album = albums.value.find(album => album.id === id);
//   if (album) {
//     if (action === 'increase') album.stock++;
//     if (action === 'decrease' && album.stock > 0) album.stock--;
//   }
// };

const increaseStockHandler = (id) => {
  const album = albums.value.find(album => album.id === id);
  album.stock++;
}

const decreaseStockHandler = (id) => {
  const album = albums.value.find(album => album.id === id);
  album.stock--;
}



const checkedBox = ref(false);

function filterAlbums()  {
  if (checkedBox.value) {
    return albums.value.filter(album => album.stock > 0); 
  }
  return albums.value; 
}
console.log(checkedBox);




</script>


<template>
  <HeaderAlbum/>
  <div class="min-h-screen flex flex-col">
    <div class="flex flex-row ">
      <div class=" px-8 bg-cyan-100 "> <!-- left filter panel -->
        <AsideAlbum 
        v-model="checkedBox"/>
      </div>

      <main class="bg-white py-5 ml-6 basis-auto">
        <!-- component -->
        <CardAlbum 
        v-for="album in filterAlbums()"
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
        @onIncreaseStock="increaseStockHandler"
        @onDecreaseStock="decreaseStockHandler"
        >
         
        </CardAlbum><!-- end one records -->
      </main>
    </div>
  </div>
</template>

<style scoped>
</style>














<!-- // const handleStockUpdate = (stock) => {
  //   console.log('entendu', stock);
  
  // } -->

<!-- // function findAlbumId(id) {
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
   -->