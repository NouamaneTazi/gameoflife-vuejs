<template>
  <div class="footer">
    <div class="ui horizontal divider">
      Made with
      <i class="heart icon"></i>
      by Nouamane Tazi
    </div>
    <img class="flashbrand-logo" :src="flashbrandLogo" />
  </div>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      flashbrandLogo: require("../assets/flashbrand_logo_embedded.svg")
    };
  }
};
</script>

<style scoped>
.divider {
  text-transform: none;
}
.flashbrand-logo {
  width: 180px;
  color: white;
  margin-bottom: 10px;
}
</style>