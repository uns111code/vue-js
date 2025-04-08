<script setup>
import { ref, watch } from "vue";

const isOpen = ref(false);

const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};


// désactiver/activer le scroll en fonction de l'état du menu
watch(isOpen, (newValue) => {
  if (newValue) {
    document.body.style.overflow = 'hidden'; // empêche le scroll
  } else {
    document.body.style.overflow = ''; // réactive le scroll
  }
});

</script>

<template>
  <header>
    <button
      :class="isOpen ? 'navbar-burger open' : 'navbar-burger'"
      @click="toggleMenu"
    >
      <span class="navbar-burger-bar"></span>
    </button>
    <transition name="menu-fade">
  <nav v-if="isOpen" class="navigation">
    <ul class="nav-items">
      <li>
        <RouterLink class="links" to="/" @click="isOpen = false">Home</RouterLink>
      </li>
      <li>
        <RouterLink class="links" to="/a/list-books" @click="isOpen = false">List</RouterLink>
      </li>
      <li>
        <RouterLink class="links" to="/a/create-books" @click="isOpen = false">Create</RouterLink>
      </li>
      <li>
        <RouterLink class="links" to="/About" @click="isOpen = false">About</RouterLink>
      </li>
    </ul>
  </nav>
</transition>
    <RouterLink to="/">
      <section class="logo">
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M36.804 34.298c1.321-.362 2.408-1.224 2.408-3.332V10.154c0-1.66-1.08-2.765-3.667-2.158l-11.792 2.763l-11.79-2.763c-2.579-.648-3.668.498-3.668 2.158v20.812c0 2.108 1.087 2.97 2.408 3.332l13.05 3.574zm2.407-22.659l1.677-.214c1.095-.14 2.612.933 2.612 2.038v21.81c0 1.662-.963 2.166-2.975 2.471L24 40.188L7.475 37.744c-2.012-.305-2.975-.809-2.975-2.471v-21.81c0-1.105 1.517-2.179 2.612-2.038l1.185.151" stroke-width="1"/></svg>
        <h4>Books</h4>
      </section>
    </RouterLink>
    <RouterLink to="/login" class="search-profil">
        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="50" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="1"><path stroke-linejoin="round" d="M4 18a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z"/><circle cx="12" cy="7" r="3"/></g></svg>
    </RouterLink>
  </header>
</template>

<style scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

img,
figure,
video {
    max-width: 100%;
    object-fit: cover;
}

a {
    text-decoration: none;
    color: inherit;
}

ul,
ol {
    list-style: none;
}


.links {
  display: inline-block;
  width: 15rem;
  text-align: center;
  border-radius: 6px;
  background: transparent;
  border: 1px solid white;
  padding: 1rem;
}
.links:hover {
  background-color: white;
  color: black;
}


header {
  display: flex;
  justify-content: space-between;
  background-color: rgb(12, 77, 158);
  color: white;
  align-items: center;
  padding: 0 3rem;
  height: 15vh;
  position: relative;
}

.nav-items{
  padding: clamp(1rem, 2vh, 3rem);

  display: flex;
  align-items: center;
  justify-content: space-between;
  width: clamp(320px, 80vw, 1200px);
}
/* .search {
  position: relative;
  svg {
    color: black;
    position: absolute;
    right: 15px;
    top: 10px;
  }
  .srch-input { */
    /* width: 4rem; */
    /* padding: 1rem 1rem;
    border-radius: 50px;
    font-size: 1rem;
  }
} */
/* .search.active {
  width: 15rem;
} */


.navbar-burger {
    border: none;
    background: transparent;
    cursor: pointer;
    padding: 1rem;
}

.navbar-burger .navbar-burger-bar {
  width: 1.5rem;
}

.navbar-burger-bar,
.navbar-burger-bar::before,
.navbar-burger-bar::after {
    position: relative;
    content: "";
    display: block;
    width: 3rem;
    height: .4rem;
    background: whitesmoke;
    transition: all 0.3s ease-in;
}

.navbar-burger-bar::before {
    position: absolute;
    top: -1rem;
}

.navbar-burger-bar::after {
    position: absolute;
    top: 1rem;
}



.navbar-burger.open .navbar-burger-bar {
    background: transparent;
}

.navbar-burger.open .navbar-burger-bar::after,
.navbar-burger.open .navbar-burger-bar::before {
    top: 0;
}

.navbar-burger.open .navbar-burger-bar::after {
    transform: rotate(45deg);
}

.navbar-burger.open .navbar-burger-bar::before {
    transform: rotate(-45deg);
}




/* .search-profil {
  display: flex;
  gap: 2rem;
} */






.navigation {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: linear-gradient(180deg, rgba(12, 78, 158, 0.937) 13%, rgba(9, 160, 140, 0.932) 50%, rgba(23, 198, 160, 0.937) 100%);
  height: calc(100vh - 15vh);
  z-index: 1000;
}

.navigation .nav-items {
  display: flex;
  flex-direction: column;
  gap: 3rem;
  margin: 0 auto;
  margin-top: 15vh;
}


/* -----------------transittion vue --------------------*/

.menu-fade-enter-active,
.menu-fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.menu-fade-enter-from,
.menu-fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

.menu-fade-enter-to,
.menu-fade-leave-from {
  opacity: 1;
  transform: translateY(0);
}

/* .logo {
  margin-left: 200px;
} */

</style>