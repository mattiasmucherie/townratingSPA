<template>
  <div class="container">
    <div class="subcontainer">
      <h1>Håla eller ej?</h1>
      <div>
        <router-link to="/game" class="links">Starta</router-link>
        <router-link to="/addcity" class="links">Add city</router-link>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "home"
};
</script>
<style lang="scss" scoped>
.links {
  display: block;
  color: #f5f5f9;
  text-decoration: none;
  margin: 16px 32px;
  padding: 16px;
  font-weight: bold;
  background: #04724d;
  border-radius: 12px;
  text-transform: uppercase;
  transition: background 0.2s ease;
  border: 4px solid #04724d;
  &:hover {
    background: #f5f5f9;
    color: #04724d;
  }
}
</style>

