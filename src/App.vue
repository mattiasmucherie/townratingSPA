<template>
  <div id="app">
    <Navigation></Navigation>
    <router-view/>
  </div>
</template>
<script>
import Navigation from "@/components/Nav.vue";
export default {
  name: "app",
  components: {
    Navigation: Navigation
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Josefin+Sans&display=swap");
#app {
  font-family: "Josefin Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
  height: 100vh;
}
html {
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

body {
  background: rgb(244, 244, 249);
  background: linear-gradient(
    315deg,
    rgba(244, 244, 249, 1) 0%,
    rgba(184, 219, 217, 1) 100%
  );
  margin: 0;
  padding: 0;
}
</style>
