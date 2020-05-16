<template>
  <div id="app">
    <Header />
    <Grid v-bind:pattern="pattern" @click-square="clickSquare" />
    <Controls
      @click-next="clickNext"
      @click-play="clickPlay"
      @click-clear="clickClear"
      @click-random="clickRandom"
    />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Grid from "./components/Grid.vue";
import Controls from "./components/Controls.vue";
import GOL from "./GOL/gol.js"

export default {
  name: "App",
  components: {
    Header,
    Grid,
    Controls
  },
  data() {
    return {
      pattern : new Array(10).fill(null).map(() => Array(10).fill(0))
    }
  },
  methods: {
    clickSquare({i,j}) {
      var tempArray = [];
      tempArray = this.pattern.slice();
      tempArray[i][j]  = 1 - tempArray[i][j];
      this.pattern = tempArray;
    },
    clickNext() {
      this.pattern = GOL.getNextPattern(this.pattern.slice())
    },
    clickPlay() {

    },
    clickClear() {

    },
    clickRandom() {

    }
  }
};
</script>

<style>
#app {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
