<template>
  <div class="wrapper">
    <div class="btns">
      <button @click="$emit('click-next')">Next</button>
      <button @click="$emit('click-play')">Play</button>
      <button @click="$emit('click-clear')">Clear</button>
      <button @click="$emit('click-random')">Random</button>
      <select :value="selected" @input="$emit('select-pattern', $event.target.value)">
        <option :value="null">– Select a ... –</option>
        <option v-for="(value, name) in preset_patterns" :key="name">{{ name }}</option>
      </select>
      <vue-slide-bar
        v-model="sliderCustomzie.val"
        :min="1"
        :max="10"
        :processStyle="sliderCustomzie.processStyle"
        :lineHeight="sliderCustomzie.lineHeight"
        :tooltipStyles="sliderCustomzie.tooltipStyles"
        @input="e => $emit('select-playspeed', 1010 - Number.parseInt(e)*100)"
        
      ></vue-slide-bar>
    </div>
  </div>
</template>

<script>
import VueSlideBar from "vue-slide-bar";
export default {
  name: "Controls",
  props: ["preset_patterns"],
  components: {
    VueSlideBar
  },
  data() {
    return {
      selected: "",
      sliderCustomzie: {
        val: 7,
        lineHeight: 10,
        processStyle: {
          backgroundColor: "#42b883"
        },
        tooltipStyles: {
          backgroundColor: "#42b883",
          borderColor: "#42b883"
        }
      }
    };
  }
};
</script>

<style scoped>
.wrapper {
  align-self: center;
  margin-left: 1em;
}
@media screen and (max-width: 900px) {
  .wrapper {
    width: 100%;
    margin: 10px 0;
  }
}
.btns {
  display: flex;
  flex-direction: column;
}
</style>