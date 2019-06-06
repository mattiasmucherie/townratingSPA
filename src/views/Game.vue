<template>
  <div class="container">
    <div v-if="!town">
      <spinner/>
    </div>
    <div v-else>
      <h1>{{town.name}}</h1>
      <h2>{{town.county}}</h2>
      <h2>{{town.population}}</h2>
      <div v-if="!voting && !voted">
        <button @click="rateTown('negative')">Håla</button>
        <button @click="rateTown('positive')">Inte Håla</button>
      </div>
      <div v-else>
        <barchart v-bind:negative="town.rating.negative" v-bind:positive="town.rating.positive"></barchart>
        <button @click="fetchData">NY stad</button>
      </div>
      <spinner v-if="voting"></spinner>
    </div>
  </div>
</template>

<script>
import db from "@/firebase/init.js";
import firebase from "firebase";
import spinner from "@/components/Spinner.vue";
import barchart from "@/components/BarChart.vue";

export default {
  name: "game",
  components: {
    spinner,
    barchart
  },
  data() {
    return {
      town: null,
      voted: false,
      voting: false
    };
  },
  methods: {
    async fetchData() {
      this.town = null;
      this.voted = null;
      const ref = db.collection("towns");
      const key = ref.doc().id;
      try {
        const snap = await ref
          .where(firebase.firestore.FieldPath.documentId(), ">=", key)
          .limit(1)
          .get();
        if (snap.size > 0) {
          snap.forEach(doc => {
            this.town = doc.data();
            this.town.id = doc.id;
          });
        } else {
          const snap2 = await ref
            .where(firebase.firestore.FieldPath.documentId(), "<=", key)
            .limit(1)
            .get();
          snap2.forEach(doc => {
            this.town = doc.data();
            this.town.id = doc.id;
          });
        }
      } catch (err) {
        //TODO: handle errors
        console.log(err);
      }
    },
    async rateTown(vote) {
      try {
        this.voting = true;
        const ref = db.collection("towns").doc(this.town.id);
        if (vote === "negative") {
          const snap = await ref.update({
            "rating.negative": firebase.firestore.FieldValue.increment(1)
          });
          this.town.rating.negative++;
          this.voting = false;
        } else if (vote === "positive") {
          const snap = await ref.update({
            "rating.positive": firebase.firestore.FieldValue.increment(1)
          });
          this.town.rating.positive++;
          this.voting = false;
        }
        this.voted = true;
      } catch (err) {
        console.log(err);
        this.voting = false;
      }
    }
  },
  created() {
    this.fetchData();
  }
};
</script>

<style lang="scss" >
.container {
  margin: auto;
  min-height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
// button {
//   color: #f5f5f9;
//   text-decoration: none;
//   margin: 16px 16px;
//   padding: 16px;
//   font-weight: bold;
//   background: #04724d;
//   border-radius: 12px;
//   text-transform: uppercase;
//   transition: background 0.2s ease;
//   border: 4px solid #04724d;
//   cursor: pointer;
//   &:hover {
//     background: #f5f5f9;
//     color: #04724d;
//   }
// }
</style>

