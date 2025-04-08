<script setup>

</script>

<template>
  <section class="login">
    <h2>Login</h2>
    <div class="form">
      <input type="text" placeholder="@mail" required />
      <input type="text" placeholder="******" required />
      <button>Login</button>
    </div>
  </section>
</template>

<style scoped>
.login {
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
}

@media screen and (max-width: 767px) {
.login {
  .form {
    display: flex;
    flex-direction: column;
    padding: 2rem;
}
}
}
</style>