<script setup>

import { computed, ref } from "vue";
import { defineEmits } from "vue";


const formData = ref(
    {
        firstName: "",
        lastName: "",
        typeHebrgement: "default",
        kayak: false,
        draps: false,
        petitDej: "on",
        // updateImgSrc: updateImgSrc,
        onSubmit: false

    }
)





const priceUpdate = computed(() => {

  if (formData.value.typeHebrgement === "default") return 'N/A';

  let totalPrice = 0;
  
  switch (formData.value.typeHebrgement) {
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
      totalPrice = 0;
  }

  if (formData.value.kayak) totalPrice += 30;
  if (formData.value.draps) totalPrice += 5;

  if (formData.value.petitDej === "off") totalPrice -= 10;
  return totalPrice;
});
//  console.log(kayak.value);
 



const emit = defineEmits(["sendData"]);

const onSubmit = () => {
  if (verifInput()) {
    formData.value.onSubmit = true;
    emit("sendData", formData.value )
  } else {

  }
}

const errorMessage = ref("");

const verifInput = () => {
  if (formData.value.firstName.trim() === "" || formData.value.lastName.trim() === "" || formData.value.typeHebrgement === "default") {
    errorMessage.value = "Merci de remplir tous les champs obligatoires et de sélectionner un hébergement.";
    return false;
  }
  errorMessage.value = "";
  return true;
};

// console.log(formData.firstName);



</script>
<template>
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
                  v-model="formData.typeHebrgement"
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
                   v-model="formData.kayak"
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
                    v-model="formData.draps"
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
                          v-model="formData.petitDej"
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
                          v-model="formData.petitDej"
                          >
                        <label class="custom-control-label" for="nonPetitDej">Non</label>
                      </div>
                </div>
                <div 
                  class="alert alert-warning" 
                  role="alert" 
                  :style="{ visibility: verifInput()  ? 'hidden' : 'visible' }"
                  >
                  {{ errorMessage }}
                  
                </div>
                <div class='mt-2'>
                    <button 
                      id="submitButton" 
                      type="button" 
                      class="btn btn-lg btn-block btn-primary"
                      @click="onSubmit"
                      >Ok</button>
                </div>

              </div>
            </div>
        </div>
        <div class="col-4">

            <div class="card" style="width: 18rem;">
              <img :src="`src/assets/img/${formData.typeHebrgement}.jpg`" class="card-img-top" alt="">
            <div class="card-body">
              <h6 class="card-title text-center">{{ priceUpdate }}€</h6>
            </div>
          </div>

        </div>
    </div>
</div>

</template>

<style scoped>
</style>