<template>
  <div class="container">
    <div v-if="!town">
      <spinner/>
    </div>
    <div v-else class="subcontainer">
      <h1>{{town.name}}</h1>
      <h2 class="townInfo">{{town.county}} - {{populationBeautified}}</h2>
      <div v-if="!voting && !voted">
        <button class="rateBtn" @click="rateTown('negative')">Håla</button>
        <button class="rateBtn" @click="rateTown('positive')">Inte Håla</button>
      </div>
      <div v-else-if="!voting && voted">
        <barchart v-bind:negative="town.rating.negative" v-bind:positive="town.rating.positive"></barchart>
        <button class="rateBtn" @click="fetchData">NY stad</button>
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
    // Import random data from firestore database
    async fetchData() {
      this.town = null;
      this.voted = null;
      const ref = db.collection("towns");
      // Generate random Document ID
      const key = ref.doc().id;
      try {
        // Query in the database for the closest "bigger" document ID.
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
          // If no document was found bigger, query for the closest "smaller" docment ID.
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
        // No error handling has been built yet.
        console.log(err);
      }
    },
    // Put in a vote on a town.
    async rateTown(vote) {
      try {
        this.voting = true; // The loading variable.
        const ref = db.collection("towns").doc(this.town.id);
        // Check if posistve or negative vote and increment the rating accordingly
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
        // No error handling has been built yet.
        console.log(err);
        this.voting = false;
      }
    }
  },
  created() {
    // Runs fetchData when mounting the page.
    this.fetchData();
  },
  computed: {
    // Recalcultes this.town.population that comes in as an int to beautifu text, ex: 123456754 => "123 456 754"
    populationBeautified: function() {
      return this.town.population
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }
  }
};
</script>

<style lang="scss" >
.container {
  margin: auto;
  display: flex;
  justify-content: center;
  text-align: center;
  min-height: 400px;
}
.rateBtn {
  border: 3px solid #000;
  border-radius: 0.5rem;
  text-decoration: none;
  background: none;
  font-family: inherit;
  padding: 1rem;
  margin: 1rem;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.1s ease-in-out;
  font-weight: 900;
  &:hover {
    color: #f4f4f9;
    background: #000;
  }
}
.townInfo {
  font-weight: 100;
  font-size: 1.3rem;
  margin-bottom: 2rem;
}
</style>

