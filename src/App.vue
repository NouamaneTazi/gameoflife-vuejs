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
import GOL from "./GOL/gol.js";
import axios from 'axios';
export default {
  name: "App",
  components: {
    Header,
    Grid,
    Controls
  },
  data() {
    const grid_length = 100;
    axios
      .get("https://api.coindesk.com/v1/bpi/currentprice.json")
      .then(response => (this.info = response.data.bpi));

    return {
      pattern: new Array(grid_length)
        .fill(null)
        .map(() => Array(grid_length).fill(0)),
      grid_length
    };
  },
  methods: {
    clickSquare({ i, j }) {
      clearInterval(this.timer);
      var tempArray = [];
      tempArray = this.pattern.slice();
      tempArray[i][j] = 1 - tempArray[i][j];
      this.pattern = tempArray;
    },
    clickNext() {
      clearInterval(this.timer);
      this.pattern = GOL.getNextPattern(this.pattern.slice());
    },
    clickPlay() {
      this.timer = setInterval(
        () => (this.pattern = GOL.getNextPattern(this.pattern.slice())),
        500
      );
    },
    clickClear() {
      clearInterval(this.timer);
      this.pattern = new Array(this.grid_length)
        .fill(null)
        .map(() => Array(this.grid_length).fill(0));
    },
    clickRandom() {
      clearInterval(this.timer);
      this.pattern = Array(this.grid_length)
        .fill()
        .map(() =>
          Array(this.grid_length)
            .fill()
            .map(() => Math.round(Math.random() * 0.52))
        );
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
