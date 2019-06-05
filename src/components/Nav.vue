<template>
  <header>
    <nav>
      <ul>
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/game">game</router-link>
        </li>
        <li>
          <router-link to="/about">About</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss">
header {
  background: #586f7c;
  a {
    padding: 1em 2em;
    display: inline-block;
    text-transform: uppercase;
    text-decoration: none;
    font-weight: bold;
    color: #f5f5f9;
    font-size: 0.9em;
    &.router-link-exact-active {
      color: #b8dbd9;
    }
    &:hover {
      background: rgba(0, 0, 0, 0.5);
      border-radius: 0px 0px 8px 8px;
    }
  }
  nav {
    justify-self: right;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline;
  }
}
// nav {
//   height: 10vh;
//   a {
//     margin: 16px 16px;
//     font-weight: bold;
//     color: #2c3e50;
//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
