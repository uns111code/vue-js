<script setup>

const props = defineProps({
    userWatchList: Array
});

// const props = defineProps({
//     userWatchList: Array
// })

</script>

<template>
    <div class="watch-card" v-for="(item) in userWatchList">
        <div class="course-preview">
            <h6>Season {{ item.season }}</h6>
            <h2>{{ item.series }}</h2>
        </div>
        <div class="course-info">
            <h6>ep: S{{ item.season }}E{{ item.episode }}</h6>
            <h2>{{ item.title }} </h2>
            <button class="btn" >Continue</button>
        </div>
    </div>
</template>

<style scoped>

</style>
