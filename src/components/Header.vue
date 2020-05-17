<template>
  <div class="header">
    <h1>
      Conway's G<span class="green">a</span>me of L<span class="green">i</span>fe
    </h1>
    <i @click='openInfo' class="info circle icon"></i>
  </div>
</template>

<script>
export default {
  name: "Headers",
  methods: {
      openInfo() {
          window.open("https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life", "_blank");    
      }
  }
};
</script>

<style scoped>
.header {
  margin: 1em 0;
  display: flex;
  align-items: center;
  justify-content: center;
}
h1 {
  margin: 0;
  color: #191847;
  font-family: Montserrat-Bold, sans-serif;
  font-size: 2.5rem;
  text-rendering: optimizeLegibility;
  font-weight: 600;
}
.icon {
    font-size: 1.5rem;
    margin-left: 1rem;
    /* display: contents; */
    color: #3db5aaa6;
    cursor: pointer;
}
.green {
  color: #3db5aa;
}
</style>