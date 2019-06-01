<template>
  <div class="container">
    <div v-if="!town">
      <spinner/>
    </div>
    <div v-else>
      <h1>{{town.name}}</h1>
      <h2>{{town.county}}</h2>
      <h2>{{town.population}}</h2>
      <p>{{town.rating}}</p>
      <button @click="fetchData">GET NEW</button>
    </div>
  </div>
</template>

<script>
import db from "@/firebase/init.js";
import firebase from "firebase";
import spinner from "@/components/Spinner.vue";

export default {
  name: "game",
  components: {
    spinner
  },
  data() {
    return {
      town: null
    };
  },
  methods: {
    async fetchData() {
      this.town = null;
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
    }
  },
  created() {
    this.fetchData();
  }
};
</script>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>

