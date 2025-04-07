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
  <!-- <section class="create-book">
      <h2>Créer un livre</h2>
      <form @submit.prevent="createBook">
          <input v-model="newBook.title" type="text" placeholder="Titre" required />
          <input v-model="newBook.author.firstName" type="text" placeholder="Prénom de l’auteur" required />
          <input v-model="newBook.author.lastName" type="text" placeholder="Nom de l’auteur" required />
          <input v-model="newBook.coverUri" type="text" placeholder="URL de la couverture" />
          <button type="submit">Créer</button>
      </form>
    </section> -->

  <main>
    <router-view></router-view>
    <!-- <section class="books-list">
      <article 
      v-for="book in books"
      :key="book._id"
      class="book"
      >
        <div class="img-container">
          <img :src="book.coverUri" alt="">
        </div>
        <div class="book-header">
          <div>Author:</div>
          <div>{{ book.author.firstName + " " + book.author.lastName }}</div>
        </div>
        <h2>{{ book.title	 }}</h2>
        <div class="book-footer">
          <button class="delete">
            supprimer
          </button>
          <button class="update">
            Modifier
          </button>
        </div>
      </article>
    </section> -->
  </main>

</template>






<style scoped>

main {
  width: clamp(320px, 80vw, 1200px);
  margin: 0 auto;
  padding: 1rem;
}


</style>
