<script setup>
import { ref, onBeforeMount } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const books = ref([]);
const apiUrl = 'http://localhost:3000/books';

async function fetchAllbooks() {

        const response = await fetch(apiUrl);
        const data = await response.json();
        books.value = data;
        console.log(books.value);

}

onBeforeMount(async () => {
  await fetchAllbooks();
});
</script>

<template>
    <article class="title">
      <h1>Books List</h1>
      <h2>What would you like to read?</h2>
      <p>Here are some books that everyone should read at least once</p>
    </article>
    <section class="books-list">
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
    </section>
</template>

<style scoped>
.title {
  padding-top: 10rem;
  font-size: 1.5rem;
  h1 {
    font-size: 3rem;
  }
}

button {
  background-color: #F1C40F;
  border: none;
  border-radius: 6px;
  padding: .5rem 1rem;
  cursor: pointer;
}

button.delete {
  background-color: red;
  color: white;
}


.books-list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 5rem;
  padding: 10rem;
}

.book {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  img {
    border-radius: 6px;
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

</style>