<template>
  <div class="container">
    <div class="form-container">
      <form v-on:submit.prevent="addTown">
        <h1>Add a City</h1>
        <label for="name">Name</label>
        <input type="text" name="name" id="name" v-model="name" required>
        <label for="county">County</label>
        <input type="text" name="county" id="county" v-model="county" required>
        <label for="population">Population</label>
        <input type="number" name="population" id="population" v-model="population" required>
        <button type="submit" class="sendBtn">SEND</button>
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
        this.name = "";
        this.county = "";
        this.population = null;
        console.log(response._key.path.segments);
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

  padding: 2rem;
}
input {
  display: block;
  margin: 0.5rem auto;
  border-radius: 8px;
  border: 0px solid;
  padding: 0.5rem;
}
label {
  font-size: 1.4rem;
}
.sendBtn {
  color: #000;
  background: #f4f4f9;
  border: none;
  padding: 1rem;
  border-radius: 8px;
}
</style>
