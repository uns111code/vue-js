<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

// URL de l'API
const apiUrl = 'http://localhost:3000/books';

const router = useRouter(); // si on veut rediriger après création

const books = ref([]); // Liste locale à mettre à jour après ajout

const resultMessage = ref('')

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
    // Envoi de la requête POST pour créer un nouveau livre
    const response = await fetch(apiUrl, {
      method: 'POST',  // La méthode HTTP est POST pour créer une ressource
      headers: {
        'Content-Type': 'application/json'  // Indique que le corps de la requête est en JSON
      },
      body: JSON.stringify(newBook.value)  // On convertit l'objet `newBook` en chaîne JSON pour l'envoyer
    });

    // Si la réponse n'est pas "ok", on lance une erreur
    if (!response.ok) throw new Error("Erreur API");

    // Si la requête a réussi, on récupère les données du livre créé
    const createdBook = await response.json();  // La réponse contient le livre créé au format JSON

    // Ajout du livre créé à la liste locale des livres
    books.value.push(createdBook);

    // Réinitialisation du formulaire en vidant les champs
    newBook.value = {
      title: '',
      author: { firstName: '', lastName: '' },
      coverUri: ''
    };

    // Message de succès 
    resultMessage.value = "Livre créé avec succès !";

    // Disparition automatique du message après 3 secondes
    setTimeout(() => resultMessage.value = '', 3000);
  } catch (error) {
    console.error('Erreur lors de la création du livre', error);
  }
}
</script>

<template>
  <section class="create-book">
    <h2>Create a book</h2>
    <div class="form">
      <input v-model="newBook.title" type="text" placeholder="Titre" required />
      <input v-model="newBook.author.firstName" type="text" placeholder="Author's first name" required />
      <input v-model="newBook.author.lastName" type="text" placeholder="Author's last name" required />
      <input v-model="newBook.coverUri" type="text" placeholder="Cover URL" />
      <button @click="createBook">create</button>
    </div>
    <div v-if="resultMessage" :class="resultMessage ? 'creation-message acrive' : 'creation-message deacrive'">{{ resultMessage }}</div>
  </section>
</template>

<style scoped>
.create-book {
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
    /* width: 50%; */
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
.create-book {
  .form {
    display: flex;
    flex-direction: column;
    padding: 2rem;
}
}
}
</style>