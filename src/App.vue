<template>
  <div id="app">
    <Header />
    <Grid />
    <Controls />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Grid from "./components/Grid.vue";
import Controls from "./components/Controls.vue";

export default {
  name: "App",
  components: {
    Header,
    Grid,
    Controls
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
