<template>
  <div id="app">
    <div class="main-wrapper">
      <vue-element-loading :active="isLoading" :is-full-screen="true" />
      <Header />
      <div class="flex-container">
        <Grid v-bind:pattern="pattern" @click-square="clickSquare" />
        <Controls
          @click-next="clickNext"
          @click-play="clickPlay"
          @click-clear="clickClear"
          @click-random="clickRandom"
          @select-pattern="selectPattern"
          @select-playspeed="selectPlaySpeed"
          v-bind:preset_patterns="preset_patterns"
        />
      </div>
      <Footer />
    </div>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Grid from "./components/Grid.vue";
import Controls from "./components/Controls.vue";
import GOL from "./GOL/gol.js";
import axios from "axios";
import VueElementLoading from "vue-element-loading";

export default {
  name: "App",
  components: {
    Header,
    Footer,
    Grid,
    Controls,
    VueElementLoading
  },
  data() {
    const grid_length = 100;
    return {
      pattern: new Array(grid_length)
        .fill(null)
        .map(() => Array(grid_length).fill(0)),
      grid_length,
      preset_patterns: {},
      play_speed: 200,
      isLoading: false
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
        this.play_speed
      );
    },
    selectPlaySpeed(val) {
      this.play_speed = val;
      clearInterval(this.timer);
      this.clickPlay();
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
    },
    fetchPatterns() {
      const patterns_link =
        "https://thunder-dev.flashbrand.me/recruitment/life/";
      this.isLoading = true; // show loading screen
      axios.get(patterns_link).then(res => {
        const n_patterns = res.data.patternList.length;
        res.data.patternList.map((preset, i) => {
          axios
            .get(patterns_link + preset)
            .then(res => {
              this.$set(this.preset_patterns, preset, res.data.pattern);
              if (i == n_patterns - 1) {
                setTimeout(() => (this.isLoading = false), 200);
              }
            })
            .catch(e => {
              console.log("Error fetching patterns: ", e);
              if (i == n_patterns - 1) {
                setTimeout(() => (this.isLoading = false), 200);
              }
            });
        });
      });
    },
    selectPattern(name) {
      clearInterval(this.timer);
      if (name) this.pattern = this.preset_patterns[name].map(a => [...a]);
    }
  },
  mounted() {
    this.fetchPatterns();
  }
};
</script>

<style>
body {
  overflow: hidden;
}
#app {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #191847;
  background-color: #fefefe;
}
.main-wrapper {
  /* width: 100%; */
  /* min-width:100%; */
}
.flex-container {
  display: flex;
  justify-content: center;
}
@media screen and (max-width: 900px) {
  .flex-container {
    flex-wrap: wrap;
    /* max-width: 100%; */
  }
}
</style>
