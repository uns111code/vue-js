<script setup>
import router from '@/router';


// import { RouterLink } from 'vue-router';
console.log(router.routes);

</script>

<template>
    <nav>
        <ul class='mymenu'>
            <li>
                <RouterLink to="/">Home</RouterLink>
            </li>
            <li>
                <RouterLink to="/apptestimonials">Témoignages</RouterLink>
            </li>
            <li>
                <RouterLink to="/appRates">Rates</RouterLink>
            </li>
            <li>
                <RouterLink to="/appteam">Teams</RouterLink>
            </li>
        </ul>
    </nav>
    
</template>

<style scoped>
.router-link-active:after {
 content: "🐴";
}
</style>
