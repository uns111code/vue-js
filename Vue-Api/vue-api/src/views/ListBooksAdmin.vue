<script setup>
import { ref, computed, onBeforeMount } from "vue";
// import { useRouter } from "vue-router";

// const router = useRouter();

const books = ref([]); // on stock la valeur de la fontion fetchAllbooks
const searchTerm = ref(""); // on stock la valeur de l'input de search

const apiBaseUrl = 'http://localhost:3000/books';
const fetchUrl = `${apiBaseUrl}?page=1&perPage=500`;

async function fetchAllbooks() {                 // on récupere les books
  try {
    const response = await fetch(fetchUrl);
    const data = await response.json();
    books.value = data;              // on stock les data(books) que on a récuperé dans ref de books
  } catch (error) {
    console.error('Erreur lors de la récupération des livres', error);
  }
}

async function deleteBook(bookId) {
  try {
        // Effectuer une requête HTTP DELETE vers l'API pour supprimer le livre
        // await pour attendre la réponse de la requête avant de continuer l'exécution du code
        // fetch() pour effectuer des requêtes HTTP
    await fetch(`${apiBaseUrl}/${bookId}`, {
      method: 'DELETE',           // Méthode HTTP pour supprimer une ressource
    });
    books.value = books.value.filter(book => book._id !== bookId);      // Mise à jour de la liste des livres après suppression
  } catch (error) {
    console.error('Erreur lors de la suppression du livre', error);
  }
}


//  Liste filtrée dynamiquement
const filteredBooks = computed(() => {
  const term = searchTerm.value.toLowerCase();  // On prend le terme de recherche en minuscules
  return books.value.filter(book =>
    book.title.toLowerCase().includes(term) ||  // Vérifier si le titre du livre contient le terme de recherche
    book.author.firstName.toLowerCase().includes(term) ||  // Vérifier si le prénom de l'auteur contient le terme de recherche
    book.author.lastName.toLowerCase().includes(term)  // Vérifier si le nom de l'auteur contient le terme de recherche
  );
});




onBeforeMount(async () => {
  await fetchAllbooks();
});



</script>

<template>
  <section class="search">
    <input
      type="text"
      class="srch-input"
      v-model="searchTerm"
      placeholder="Search by title or author..."
    />
    <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24">
      <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
        d="m21 21l-4.343-4.343m0 0A8 8 0 1 0 5.343 5.343a8 8 0 0 0 11.314 11.314" stroke-width="1"/>
    </svg>
  </section>

  <article class="title">
    <h1>Books List</h1>
    <h2>What would you like to read?</h2>
    <p>Here are some books that everyone should read at least once</p>
  </article>

  <section class="books-list">
    <article
      v-for="book in filteredBooks"
      :key="book._id"
      class="book"
    >
      <div class="img-container">
        <img :src="book.coverUri" alt="Couverture du livre" />
      </div>
      <div class="book-header">
        <div>Author :</div>
        <div>{{ book.author.firstName }} {{ book.author.lastName }}</div>
      </div>
      <h2>{{ book.title }}</h2>
      <div class="book-footer">
        <button class="delete" @click="deleteBook(book._id)">Delete</button>
        <RouterLink :to="`/a/update-books/${book._id}`" class="update">Update</RouterLink>
      </div>
    </article>
  </section>
</template>

<style scoped>
.title {
  padding-top: 10rem;
  font-size: 1.5rem;
  background-color: #e1e4ed;
  h1 {
    font-size: 3rem;
  }
}

.update {
  background-color: black;
  color: white;
  border: none;
  border-radius: 50px;
  padding: 1rem 2.8rem;
  cursor: pointer;
}
.update:hover {
  background-color: white;
  color: black;
  border: 1px solid black;
}

button.delete {
  background-color: red;
  color: white;
  padding: 1rem 2.8rem;
  border: none;
  border-radius: 50px;
  cursor: pointer;
}

button.delete:hover {
  background-color: rgb(255, 71, 71);
}


.books-list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 5rem;
  padding: 10rem;
  background-color: #e1e4ed;
}

.book {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
  border: 2rem solid white;
  border-radius: 12px;
  background-color: white;
  img {
    width: initial;
  }
}

.book h2 {
  align-self: center;
}

.book-header,
.book-footer {
  display: flex;
  justify-content: space-around;
}



.search {
  position: relative;
  background-color: #e1e4ed;
  text-align: right;
  svg {
    color: black;
    position: absolute;
    right: 40px;
    top: 40px;
  }
  .srch-input {
    /* width: 4rem; */
    padding: 1rem 1rem;
    border-radius: 50px;
    font-size: 1rem;
    margin: 2rem;
  }
}
/* .search.active {
  width: 15rem;
} */

@media screen and (min-width: 768px) and (max-width: 1023px) {
  .books-list {
  grid-template-columns: repeat(2, 1fr);
  padding: 2rem;
}
}
@media screen and (max-width: 767px) {
  .books-list {
  grid-template-columns: 1fr;
  padding: 1rem;
}
}

</style>