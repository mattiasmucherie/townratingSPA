<template>
  <div id="app">
    <Navigation/>
    <router-view/>
    <Footer/>
  </div>
</template>
<script>
import Navigation from "@/components/Nav.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "app",
  components: {
    Navigation: Navigation,
    Footer: Footer
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Josefin+Sans&display=swap");
#app {
  font-family: "Josefin Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #000000;
  height: 100vh;
  background: rgb(244, 244, 249);
  background: linear-gradient(315deg, #f4f4f9 0%, #b8dbd9 100%);
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-areas: "header" "container" "footer";
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 1fr;
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
</style>
