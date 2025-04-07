<script setup>

</script>

<template>
    <section class="sxn-home">
        <div>
            <h1>The<br>
                <span class="nbr-books">100</span><br>
                 Best Books <br>
                 of All Time
             </h1>
        </div>
        <div>
            <RouterLink to="/a/list-books" class="links">Books List</RouterLink>
        </div>
    </section>
</template>

<style scoped>
.sxn-home {
    background: linear-gradient(180deg, rgba(12,77,158,1) 13%, rgba(9,160,141,1) 50%, rgba(23,198,160,1) 100%);
    height: 85vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5rem;
    color: white;
}
.links {
  border: 1px solid white;
  border-radius: 50px;
  padding: 1rem 3rem;
  background-color: white;
  color: black;
}
.links:hover {
    background-color: #0ba590;
}

h1 {
    font-size: 4rem;
}

.nbr-books {
    font-size: 13rem;
    line-height: 10rem;
}

</style>