<script setup>
import { computed, ref } from "vue";

const typeHebrgement = ref("default");

const kayak = ref(false);
const draps = ref(false);
const petitDej = ref(null);     //   Un input radio renvoie une chaîne de caractères ("on", "off", etc.).    Aucune option sélectionnée (État initial)

const priceUpdate = computed(() => {
  let totalPrice = 0;

  switch (typeHebrgement.value) {
    case "tente":
      totalPrice = 30;
      break;
    case "toile":
      totalPrice = 50;
      break;
    case "pierre":
      totalPrice = 100;
      break;
    default:
      totalPrice = 150;
  }

  // Ajout des options supplémentaires
  if (kayak.value) totalPrice += 30;
  if (draps.value) totalPrice += 5;

  // Gestion du petit déjeuner
  if (petitDej.value === "off") totalPrice -= 10;

  return totalPrice;
});
//  console.log(kayak.value);
 

const updateImgSrc = computed(() => {
  switch (typeHebrgement.value) {
    case "tente":
      return new URL("@/assets/img/tente.jpg", import.meta.url).href;
    case "toile":
      return new URL("@/assets/img/toile.jpg", import.meta.url).href;
    case "pierre":
      return new URL("@/assets/img/pierre.jpg", import.meta.url).href;
    default:
      return new URL("@/assets/img/default.jpg", import.meta.url).href;
  }
});

const emit = defineEmits("onSubmit");










const formData = ref(
    {
        firstName: "",
        lastName: "",
        typeHebrgement: "",
        kayak: "",
        draps: "",
        petitDej: ""

    }
)

// console.log(formData.firstName);

</script>

<template>
<div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
      <h5 class="my-0 mr-md-auto font-weight-normal"> Notre Super Séjour dans les arbres </h5>
</div>
<div class="container">

    <div class="row" >

        <div class="col-8">
            <div class="card mb-4 shadow-sm">
              <div class="card-header">
                <h4 class="my-0 font-weight-normal">Configurer votre séjour</h4>
              </div>
              <div class="card-body">

                <div class="row mb-2">
                  <div class="col">
                    <input 
                        type="text" 
                        class="form-control" 
                        placeholder="Nom"
                        v-model="formData.firstName"
                        >
                  </div>
                  <div class="col">
                    <input 
                        type="text" 
                        class="form-control" 
                        placeholder="Prénom"
                        v-model="formData.lastName"
                        >
                  </div>
                </div>



                <!-- Select   -->
                <label for="type">Type d'hebergement :  </label>
                <select
                 class="custom-select d-btypelock w-100"
                  id="type"
                  v-model="typeHebrgement"
                  >
                  <option value="default">Choisissez...</option>
                  <option value="tente">Emplacement Tentes</option>
                  <option value="toile">Camp</option>
                  <option value="pierre">Pierre</option>
                </select>

                <hr class="mb-4">
                <!-- Checkboxes button  -->
                <h4 class="my-2">Les options de séjour </h4>
                <div class="custom-control custom-checkbox">
                  <input
                   type="checkbox" 
                   class="custom-control-input" 
                   name="optionsSejour" 
                   value="kayak" 
                   id="ok-kayak"
                   v-model="kayak"
                   >
                  <label class="custom-control-label" for="ok-kayak">Location Kayak (+30€)</label>
                </div>
                <div class="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    class="custom-control-input"
                    name="optionsSejour" 
                    value="draps" 
                    id="ok-draps"
                    v-model="draps"
                    >
                  <label class="custom-control-label" for="ok-draps">Draps (+5€) </label>
                </div>
                <h4 class="mt-3">Petit Déjeuner</h4>

                    <div class="d-block my-3">
                      <div class="custom-control custom-radio">
                        <input 
                          id="ouiPetitDej" 
                          name="petitDej" 
                          type="radio" 
                          class="custom-control-input" 
                          checked
                          value="on" 
                          v-model="petitDej"
                          >
                        <label class="custom-control-label" for="ouiPetitDej">Oui (+10€)</label>
                      </div>
                      <div class="custom-control custom-radio">
                        <input 
                          id="nonPetitDej" 
                          name="petitDej" 
                          type="radio" 
                          class="custom-control-input" 
                          value="off"
                          v-model="petitDej"
                          >
                        <label class="custom-control-label" for="nonPetitDej">Non</label>
                      </div>
                </div>
                <div class="alert alert-warning" role="alert" :style="{ visibility: typeHebrgement != 'default' ? 'hidden' : 'visible' }">
                  Erreur, merci de séléctionner un hébergement
                </div>
                <div class='mt-2'>
                    <button id="submitButton" type="button" class="btn btn-lg btn-block btn-primary">Ok</button>
                </div>

              </div>
            </div>
        </div>
        <div class="col-4">

            <div class="card" style="width: 18rem;">
              <img :src="updateImgSrc" class="card-img-top" alt="">
            <div class="card-body">
              <h6 class="card-title text-center">{{ priceUpdate }}€</h6>
            </div>
          </div>

        </div>
    </div>
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

<style scoped>
</style>