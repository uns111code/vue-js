<script setup>

// import { ref, onBeforeMount } from "vue";
// import { useRouter } from "vue-router";

// const router = useRouter();

// const books = ref([]);
// const apiUrl = 'http://localhost:3000/books';

// async function fetchAllbooks() {

//         const response = await fetch(apiUrl);
//         const data = await response.json();
//         books.value = data;
//         console.log(books.value);

// }

// onBeforeMount(async () => {
//   await fetchAllbooks();
// });





// const newBook = ref({
//   title: '',
//   author: {
//     firstName: '',
//     lastName: ''
//   },
//   coverUri: ''
// });

// async function createBook() {
//   try {
//     const response = await fetch(apiUrl, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(newBook.value)
//     });
//     const createdBook = await response.json();
//     books.value.push(createdBook); // mettre à jour la liste
//     // reset le formulaire
//     newBook.value = {
//       title: '',
//       author: { firstName: '', lastName: '' },
//       coverUri: ''
//     };
//   } catch (error) {
//     console.error('Erreur lors de la création du livre', error);
//   }
// }


import Header from "./components/BooksHeader.vue";
</script>

<template>
  <Header />
  <main>
    <router-view></router-view>
  </main>
</template>






<style scoped>
main {
  /* width: clamp(320px, 80vw, 1200px);
  margin: 0 auto;
  padding: 1rem; */
  text-align: center;
}
</style>
