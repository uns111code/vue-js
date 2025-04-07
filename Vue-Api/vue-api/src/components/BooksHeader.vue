<script setup>

</script>

<template>
  <header>
    <nav class="navigation">
      <ul class="nav-items">
        <li>
          <RouterLink 
          class="list links"
          to="/a/list-books"
          >
            List
          </RouterLink>
        </li>
        <li>
          <RouterLink 
          class="create links"
          to="/a/create-books"
          >Create</RouterLink>
        </li>
      </ul>
    </nav>
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
  border: none;
  border-radius: 6px;
  padding: .5rem 1rem;
  cursor: pointer;
}

.create {
  background-color: rgb(23, 206, 23);
}
.list {
  background-color: rgb(14, 106, 243);
}

header {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: #1e293b; /* bleu foncé */
  color: white;
  align-items: center;
}

.nav-items{
  padding: clamp(1rem, 2vh, 3rem);

  display: flex;
  align-items: center;
  justify-content: space-between;
  width: clamp(320px, 80vw, 1200px);
}
.search {
  width: 40rem;
}
</style>