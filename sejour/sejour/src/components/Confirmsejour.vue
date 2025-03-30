<script setup>


const props = defineProps(
    {
        recievedFormData: Object
    }
)

const confirmSejour = () => {
  // console.log(props.recievedFormData.onSubmit);
  
  props.recievedFormData.onSubmit = false;

  // console.log(props.recievedFormData.onSubmit);
  
}



// const localFormData = ref({...props.recievedFormData});

// const confirmSejour = () => {
//   localFormData.value.onSubmit = false;
//   emit("resetSejour"); // Émettre un événement au parent
// };



</script>

<template>
  <div class="container d-flex justify-content-center">
  <div class="card" style="width: 18rem;">
    <img :src="recievedFormData.updateImgSrc" class="card-img-top" alt="default">
    <div class="card-body">
      <h5 class="card-title">Votre Récap</h5>
      <p class="card-text">Nous vous souhaitons un bon séjour <strong>{{ recievedFormData.firstName }}</strong> {{ recievedFormData.lastName }} </p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Hébergement:  <strong>{{ recievedFormData.typeHebrgement }}</strong></li>
      <li class="list-group-item">{{recievedFormData.kayak ? 'Kayak ⛴' : "" }} {{ recievedFormData.kayak && recievedFormData.draps ? "&" : "" }} {{ recievedFormData.draps ? 'Draps' : "" }}</li>
      <li class="list-group-item"><strong>Options déjeuner {{ recievedFormData.petitDej === "off" ? "❌" : "✅" }}</strong></li>
    </ul>
    <div class="card-body">
        <button 
          id="submitButton" 
          type="button" 
          class="btn btn-lg btn-block btn-primary"
          @click="confirmSejour"
          >Confirmer</button>
    </div>
  </div>
</div>
</template>

<style scoped></style>
