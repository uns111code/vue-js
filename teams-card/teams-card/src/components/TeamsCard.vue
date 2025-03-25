<script setup>
import {  } from "module";
const props = defineProps(
    {
    firstName: {
      type:String,
      default:'Jean jean'
    },
    lastName: String,
    verbatim: String,
    jobTitle: String,
    profilePic: String,
    stack: Array
}
);
// 2
// const fullprofilePic = `url(src/assets/img/${props.profilePic})`;
// console.log(fullprofilePic);


</script>
<template>
<div class="card">
    <div class="card-image" :style="{ backgroundImage: `url('/img/${profilePic}')` }"></div>
    <div class="card-text">
      <span class="job">{{ jobTitle }}</span>
      <h2>{{ firstName }} {{ lastName }}</h2>
      <p>{{verbatim}}</p>
    </div>
    <div class="card-stats">
      <div class="stat" 
      v-for="techno in stack" 
      :key="techno.label"
      >
        <div class="techno">{{ techno.label }}</div>
        <div class="level">{{ '⭐' .repeat(techno.level) }}</div>
      </div>
    </div>
</div>
</template>

<style scoped>

.card {
  display: grid;
  grid-template-columns: 300px;
  grid-template-rows: 210px 210px;
  grid-template-areas: "image" "text";
  border-radius: 15px;
  background: white;
  box-shadow: 5px 5px 15px rgba(0,0,0,0.9);
  font-family: roboto;
  text-align: center;
  margin:30px;
}


.card-image {
  grid-area: image;
  /* background: v-bind(fullprofilePic); */
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-size: cover;
}

.card-text {
  grid-area: text;
  margin: 25px;
}
.card-text .job {
  color: rgb(255, 7, 110);

}
.card-text p {
  color: grey;
  font-size:15px;
  font-weight: 300;
}
.card-text h2 {
  margin-top:0px;
  font-size:20px;
}
.card-stats {
  display: grid;
  grid-template-columns: 1fr 1fr;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  justify-content: center;
  background: rgb(255, 7, 110);
}
.card-stats .stat {
  padding:20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: white;
}
.card-stats .border {
  border-left: 1px solid rgb(172, 26, 87);
}
.card-stats .techno{
  font-size:22px;
  font-weight: 500;
}

.card-stats .level{
  font-size:15px;
}


</style>