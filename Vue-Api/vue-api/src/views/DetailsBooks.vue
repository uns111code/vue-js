<script setup>
import { ref, onBeforeMount } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const bookId = route.params.id;

const detailsBook = ref({});


const apiUrl = 'http://localhost:3000/books';

async function fetchOnebook() {
    try {
        const response = await fetch(`${apiUrl}/${bookId}`);
        const data = await response.json();
        detailsBook.value= data;
        
    } catch (error) {
        console.error("Erreur lors du chargement du livre", error);
    }
};




async function deleteBook(bookId) {
  try {
        // Effectuer une requête HTTP DELETE vers l'API pour supprimer le livre
        // await pour attendre la réponse de la requête avant de continuer l'exécution du code
        // fetch() pour effectuer des requêtes HTTP
    await fetch(`${apiUrl}/${bookId}`, {
      method: 'DELETE',           // Méthode HTTP pour supprimer une ressource
    });
    detailsBook.value = detailsBook.value.filter(book => book._id !== bookId);      // Mise à jour de la liste des livres après suppression
  } catch (error) {
    console.error('Erreur lors de la suppression du livre', error);
  }
}






onBeforeMount(async () => {
  await fetchOnebook();
});

console.log(detailsBook.value);
</script>

<template>
<section class="sxn-home">
    <article class="book">
        <div class="details-container">
            <h4>Author: {{ detailsBook.author.firstName}} {{ detailsBook.author.lastName}}</h4>
            <h2>{{ detailsBook.title }}</h2>
            <h3>Original Title: {{ detailsBook.originalTitle }}</h3>
            <h4>Publication Year: {{ detailsBook.publicationYear }}</h4>
            <h4>genre: {{ detailsBook.genre }}</h4>
            <h4>createdAt: {{ detailsBook.createdAt }}</h4>
            <div class="btn-book">
                <button class="delete" @click="deleteBook(detailsBook._id)">Delete</button>
                <button class="update">
                    <RouterLink :to="`/a/update-books/${bookId}`">Update</RouterLink>
                </button>
            </div>
        </div>
        <div class="img-container">
            <img :src="detailsBook.coverUri" alt="Couverture du livre" />
        </div>
    </article>
</section>
</template>

<style scoped>
.sxn-home {
    /* background: linear-gradient(180deg, rgba(12,77,158,1) 13%, rgba(9,160,141,1) 50%, rgba(23,198,160,1) 100%); */
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 85vh;
    justify-content: center;
}

.book {
    display: flex;
    gap: 6rem; 
    align-items: center;
    background-color: white;
    width: max-content;
    padding: 1rem 1rem 1rem 2rem;
    border-radius: 50px 0 ;
}

.details-container {
    line-height: 3rem;
    h4:nth-child(1) {
        color: rgba(12,77,158,1);
    }
    h2 {
        font-size: 3rem;
    }
}

.btn-book {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
}

.update {
  background-color: black;
  color: white;
  border: none;
  border-radius: 50px;
  padding: .5rem 1.8rem;
  cursor: pointer;
  border: 1px solid black;
}
.update:hover {
  background-color: white;
  color: black;
  
}

button.delete {
  background-color: red;
  color: white;
  padding: .5rem 1.8rem;
  border: none;
  border-radius: 50px;
  cursor: pointer;
}

button.delete:hover {
  background-color: rgb(255, 71, 71);
}

.img-container {
    img {
        border-radius: 50px 0 ;
    }
}
</style>