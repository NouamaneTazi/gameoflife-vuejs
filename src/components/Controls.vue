<template>
  <div class="wrapper">
    <div class="btn-row">
      <button @click="$emit('click-next')">Next</button>
      <button @click="$emit('click-play')">Play</button>
      <button @click="$emit('click-clear')">Clear</button>
      <button @click="$emit('click-random')">Random</button>
      <select :value="selected" @input="$emit('select-pattern', $event.target.value)">
        <option :value="null">– Select a ... –</option>
        <option v-for="(value, name) in preset_patterns" :key="name">{{ name }}</option>
      </select>
      <span>Selected: {{ selected }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Controls",
  props: ["preset_patterns"],
  data() {
    return {
      selected: ""
    };
  }
};
</script>

<style scoped>
</style>