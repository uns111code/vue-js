<script setup>
const props = defineProps(
    {
        label:String,
        level:Number
    }
);
// 2
// const fullprofilePic = `url(src/assets/img/${props.profilePic})`;
// console.log(fullprofilePic);


</script>
<template>
    <div class="card-stats">
      <div class="stat">
        <div class="techno">{{ label }}</div>
        <div class="level">{{ '⭐' .repeat( level) }}</div>
      </div>
    </div>
</template>