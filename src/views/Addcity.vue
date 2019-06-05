<template>
  <div class="container">
    <div class="form-container">
      <form v-on:submit.prevent="addTown">
        <h1>Add a City</h1>
        <label for="name">Name</label>
        <input type="text" name="name" id="name" v-model="name">
        <label for="county">County</label>
        <input type="text" name="county" id="county" v-model="county">
        <label for="population">Population</label>
        <input type="number" name="population" id="population" v-model="population">
        <button type="submit">SEND</button>
      </form>
    </div>
  </div>
</template>

<script>
import db from "@/firebase/init.js";

export default {
  name: "addcity",
  data() {
    return {
      name: "",
      county: "",
      population: null
    };
  },
  methods: {
    async addTown() {
      const ref = db.collection("towns");
      const body = {
        county: this.county,
        name: this.name,
        population: Number(this.population),
        rating: { negative: 0, positive: 0 }
      };
      try {
        const response = await ref.add(body);
        console.log(response);
        this.name = "";
        this.county = "";
        this.population = null;
      } catch (err) {
        console.log(err);
      }
      console.log("testing");
    }
  }
};
</script>

<style lang="scss" scoped>
.form-container {
  background: #04724d;
  border-radius: 8px;
  margin: 32px;
  padding: 16px;
}
input {
  display: block;
}
</style>
