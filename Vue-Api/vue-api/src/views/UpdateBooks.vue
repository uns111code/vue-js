<script setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";

const resultMessage = ref('')

const route = useRoute();
const router = useRouter();
const bookId = route.params.id; // <-- récupère l'ID du livre via URL

const formBook = ref({
  title: '',
  author: {
    firstName: '',
    lastName: ''
  },
  coverUri: ''
});

const apiBaseUrl = 'http://localhost:3000/books';

onMounted(async () => {  // ici on récupère les informations du livre pour pré-remplir le formulaire. une fois que le composant est monté dans le DOM
  try {
    const response = await fetch(`${apiBaseUrl}/${bookId}`);  // Envoie une requête GET pour obtenir les détails du livre avec l'ID spécifique
    const data = await response.json();   // Convertit la réponse en JSON
    formBook.value = data;  // Remplie le formulaire avec les données récupérées
  } catch (error) {
    console.error("Erreur lors du chargement du livre", error);
  }
});

async function updateBook() {
  try {
    const response = await fetch(`${apiBaseUrl}/${bookId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formBook.value)  // On envoie les données modifiées du livre
    });

    if (!response.ok) throw new Error("Erreur API");

    resultMessage.value = "Livre modifié avec succès !";
    setTimeout(() => resultMessage.value = '', 2000); 
    setTimeout(() => router.push('/a/list-books'), 2000);  // rediriger après modif
  } catch (error) {
    console.error("Erreur lors de la mise à jour", error);
  }
}
</script>

<template>
  <section class="update-book">
    <h2>Update the book</h2>
    <div class="form">
      <input v-model="formBook.title" type="text" placeholder="Titre" required />
      <input v-model="formBook.author.firstName" type="text" placeholder="Author's first name" required />
      <input v-model="formBook.author.lastName" type="text" placeholder="Author's last name" required />
      <input v-model="formBook.coverUri" type="text" placeholder="Cover URL" />
      <button @click="updateBook">Update</button>
    </div>
    <div v-if="resultMessage" :class="resultMessage ? 'creation-message acrive' : 'creation-message deacrive'">{{ resultMessage }}</div>
  </section>
</template>

<style scoped>
.update-book {
  display: flex;
  flex-direction: column;
  gap: 5rem;
  margin: 0 auto;
  height: 85vh;
  width: 100vw;
  background-color: #e1e4ed;
  padding: 5rem 0;
  .form {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    /* width: 60%; */
    margin: 0 auto;
    padding: 5rem 10rem;
    border-radius: 50px 0 ;
    background-color: white;
    input {
      background-color: #f1f1f1;
      border: none;
      height: 3rem;
      border-radius: 50px;
      padding: 0 1.5rem;
    }
    button {
      grid-column: 2 span;
      margin: 0 auto;
      padding: 1rem 3rem;
      border: 1px solid black;
      border-radius: 50px;
      background-color: black;
      color: white;
      cursor: pointer;
      margin-top: 2rem;
    }
    button:hover {
      background-color: white;
      color: black;
    }
  }
  h2 {
    font-size: 3rem;
  }

  .creation-message{
    width: 50%;
    margin: 0 auto;
    padding: 1.5rem 0;
    border-radius: 50px 0;
    font-size: 1.5rem;
  }
  .creation-message.acrive {
    background-color: rgb(22, 180, 22);
  }
  .creation-message.deacrive {
    background-color: rgb(255, 1, 1);
  }
}


@media screen and (max-width: 767px) {
.update-book {
  .form {
    display: flex;
    flex-direction: column;
    padding: 2rem;
}
}
}
</style>