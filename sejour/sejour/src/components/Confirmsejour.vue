<script setup>

defineProps(
    {
        formData: Object
        // firstName: String,
        // lastName: String,
        // typeHebrgement: String,
        // kayak: String,
        // draps: String,
        // petitDej: String
    }
)

</script>

<template>
<div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
      <h5 class="my-0 mr-md-auto font-weight-normal"> Notre Super Séjour dans les arbres </h5>
    </div>


<div class="container d-flex justify-content-center">
  <div class="card" style="width: 18rem;">
    <img :src="updateImgSrc" class="card-img-top" alt="default">
    <div class="card-body">
      <h5 class="card-title">Votre Récap</h5>
      <p class="card-text">Nous vous souhaitons un bon séjour <strong>{{ formData.firstName }}</strong> {{ formData.lastName }} </p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Hébergement:  <strong>{{ typeHebrgement }}</strong></li>
      <li class="list-group-item">{{kayak ? 'Kayak ⛴' : "" }} {{ kayak & draps ? "&" : "" }} {{ draps ? 'Draps' : "" }}</li>
      <li class="list-group-item"><strong>Options déjeuner {{ petitDej === "off" ? "❌" : "✅" }}</strong></li>
    </ul>
    <div class="card-body">
        <button id="submitButton" type="button" class="btn btn-lg btn-block btn-primary">Confirmer</button>
    </div>
  </div>
</div>
</template>

<style scoped></style>
