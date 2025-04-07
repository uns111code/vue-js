<script setup>

</script>

<template>
   <!-- Navigation-->
   <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container px-4 px-lg-5">
                <span class="navbar-brand" >Async / Await</span>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                        <li class="nav-item">
                        	<RouterLink class="nav-link active" aria-current="page" to="/">Home</RouterLink>
                        </li>
                        <li class="nav-item">
                        	<RouterLink class="nav-link" to="/list">Liste</RouterLink>
                        </li>
                        
                    </ul>
                    
                </div>
            </div>
   </nav>
        <!-- Header-->
        <header class="bg-dark py-4">
            <div class="container px-4 px-lg-5 my-5">
                <div class="text-center text-white">
                    <h1 class="display-4 fw-bolder"> ⚡ API CALLING ⚡</h1>
                    <p class="lead fw-normal text-white-50 mb-0"> With axios or fetch </p>
                </div>
            </div>
        </header>
        <!-- Section-->
        <router-view></router-view>
        <!-- Footer-->
        <footer class="py-5 bg-dark">
            <div class="container"><p class="m-0 text-center text-white">Copyright &copy; Your Website 2025</p></div>
        </footer>
</template>

<style scoped></style>
