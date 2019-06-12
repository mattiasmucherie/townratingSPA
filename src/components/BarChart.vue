<template>
  <figure>
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      class="chart"
      width="200"
      height="90"
      aria-labelledby="title"
      role="img"
    >
      <g class="bar">
        <rect x="95" v-bind:width="negativeVotes" height="25" rx="3">
          <animate
            attributeName="width"
            from="0"
            v-bind:to="negativeVotes"
            dur="0.5s"
            fill="freeze"
          ></animate>
        </rect>
        <text x="0" y="12.5" dy="0.5em">{{negative}} Håla</text>
      </g>
      <g class="bar">
        <rect x="95" v-bind:width="positiveVotes" height="25" y="30" rx="3">
          <animate
            attributeName="width"
            from="0"
            v-bind:to="positiveVotes"
            dur="0.5s"
            fill="freeze"
          ></animate>
        </rect>
        <text x="0" y="42.5" dy="0.5em">{{positive}} Inte Håla</text>
      </g>
      <g class="bar">
        <rect x="-7" width="20" height="2" y="60" rx="2"></rect>
      </g>
      <g class="bar">
        <text x="0" y="75" dy="0.5em">{{negative+positive}} Total</text>
      </g>
    </svg>
  </figure>
</template>

<script>
export default {
  name: "barchart",
  props: { negative: Number, positive: Number },
  computed: {
    negativeVotes: function() {
      return (this.negative / (this.negative + this.positive)) * 100;
    },
    positiveVotes: function() {
      return (this.positive / (this.negative + this.positive)) * 100;
    }
  }
};
</script>

<style lang="scss">
figure {
  margin: 16px auto 0px auto;
}
.bar {
  fill: #303d44;
  height: 21px;
  transition: fill 0.3s ease;
  font-family: inherit;
  text {
    color: black;
  }
}
rect {
  &:hover,
  &:focus {
    fill: #000;
  }
}
</style>
