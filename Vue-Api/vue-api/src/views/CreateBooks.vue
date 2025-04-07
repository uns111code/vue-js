<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";


const newBook = ref({
  title: '',
  author: {
    firstName: '',
    lastName: ''
  },
  coverUri: ''
});

async function createBook() {
  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newBook.value)
    });
    const createdBook = await response.json();
    books.value.push(createdBook); // mettre à jour la liste
    // reset le formulaire
    newBook.value = {
      title: '',
      author: { firstName: '', lastName: '' },
      coverUri: ''
    };
  } catch (error) {
    console.error('Erreur lors de la création du livre', error);
  }
}
</script>

<template>
    <section class="create-book">
      <h2>Créer un livre</h2>
      <form @submit.prevent="createBook">
          <input v-model="newBook.title" type="text" placeholder="Titre" required />
          <input v-model="newBook.author.firstName" type="text" placeholder="Prénom de l’auteur" required />
          <input v-model="newBook.author.lastName" type="text" placeholder="Nom de l’auteur" required />
          <input v-model="newBook.coverUri" type="text" placeholder="URL de la couverture" />
          <button type="submit">Créer</button>
      </form>
    </section>
</template>

<style scoped>

</style>