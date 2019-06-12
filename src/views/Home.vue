<template>
  <div class="container">
    <div>
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
<style lang="scss">
h1 {
  font-size: 4rem;
  margin: 1rem auto;
}
.links {
  position: relative;
  display: block;
  font-size: 1.5rem;
  text-transform: uppercase;
  margin: 1rem;
  font-weight: 100;

  &:after {
    content: "";
    position: absolute;
    height: 3px;
    width: calc(30%);
    bottom: -5px;
    transition: all 0.2s ease-out;
    background: #000;
    left: 50%;
    transform: translateX(-50%) scaleX(0);
  }

  &:hover:after {
    transform: translateX(-50%) scaleX(1);
  }
}
</style>

