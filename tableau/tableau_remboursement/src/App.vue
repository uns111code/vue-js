<script setup>

const emprunt = 2000
const dureeEnMois = 20
const mensualite = emprunt/dureeEnMois

console.log('à rembourser chaque mois' , mensualite)

const debut = new Date()
console.log(debut)

const echeancier = [];

for (let i = 0; i <= dureeEnMois; i++) {
    echeancier.push(
        {
            dueDate: new Date(debut.setMonth(debut.getMonth()+1)).toLocaleString('fr-FR', { month: 'long'}),
            mensualite: mensualite,
            reste: emprunt - (mensualite * i)
        }
    )
}

</script>

<template>
  <form action="">
    <label for="">
      <input type="text">
    </label>
  </form>
  <table>
 <caption>
   Emprunt: {{ emprunt }}€, sur {{ dureeEnMois }} mois
 </caption>
 <thead>
   <tr>
     <th scope="col">Mois</th>
     <th scope="col">à rembourser</th>
     <th scope="col">Reste du</th>
   </tr>
 </thead>
 <tbody >
   <tr v-for="monthly in echeancier">
     <th scope="row">{{monthly.dueDate}}</th>
     <td>{{monthly.mensualite}}</td>
     <td>{{ monthly.reste }}</td>
   </tr>
 </tbody>
</table>
</template>

<style scoped>

table {
  border-collapse: collapse;
  border: 2px solid rgb(140 140 140);
  font-family: sans-serif;
  font-size: 0.8rem;
  letter-spacing: 1px;
}

caption {
  padding: 10px;
  font-weight: bold;
}

thead,
tfoot {
  background-color: rgb(228 240 245);
}

th,
td {
  border: 1px solid rgb(160 160 160);
  padding: 8px 10px;
}

td:last-of-type {
  text-align: center;
}

tbody > tr:nth-of-type(even) {
  background-color: rgb(237 238 242);
}

tfoot th {
  text-align: right;
}

tfoot td {
  font-weight: bold;
}
</style>
