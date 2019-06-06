<template>
  <header class="main-head">
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
a {
  outline: 0;
}
header {
  display: flex;
  justify-self: center;
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline;
  }
  a {
    position: relative;
    display: inline-block;
    padding: 20px;
    font-weight: bold;
    font-size: 1em;
    text-decoration: none;
    text-transform: uppercase;
    color: #000;
    &.router-link-exact-active {
      &:after {
        content: "";
        position: absolute;
        height: 3px;
        width: calc(100% - 30px);
        bottom: 10px;
        transition: all 0.2s ease-out;
        background: #000;
        left: 50%;
        transform: translateX(-50%) scaleX(1);
      }
    }
    &:after {
      content: "";
      position: absolute;
      height: 3px;
      width: calc(100% - 30px);
      bottom: 10px;
      transition: all 0.2s ease-out;
      background: #000;
      left: 50%;
      transform: translateX(-50%) scaleX(0);
    }

    &:hover:after {
      transform: translateX(-50%) scaleX(1);
    }
  }
}
</style>
