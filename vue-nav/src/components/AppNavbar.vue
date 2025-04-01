<script setup>

import { RouterLink } from 'vue-router';

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

</style>
