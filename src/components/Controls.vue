<template>
  <div class="wrapper">
    <div class="btn-row">
      <button @click="$emit('click-next')">Next</button>
      <button @click="$emit('click-play')">Play</button>
      <button @click="$emit('click-clear')">Clear</button>
      <button @click="$emit('click-random')">Random</button>
      <select v-model="selected">
        <option
          v-for="option in options"
          v-bind:value="option.value"
          :key="option.text"
        >{{ option.text }}</option>
      </select>
      <span>Selected: {{ selected }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Controls",
  data() {
    return {
      selected: "A",
      options: [
        { text: "One", value: "A" },
        { text: "Two", value: "B" },
        { text: "Three", value: "C" }
      ]
    };
  }
};
</script>

<style scoped>
</style>