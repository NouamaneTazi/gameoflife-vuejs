<template>
  <div class="wrapper">
    <div class="btns">
      <sui-button class="teal" @click="$emit('click-next')">Next</sui-button>
      <sui-button class="blue" @click="$emit('click-play')">Play</sui-button>
      <sui-button class="red" @click="$emit('click-clear')">Clear</sui-button>
      <sui-button @click="$emit('click-random')">Random</sui-button>
      <sui-dropdown placeholder="Select a pattern" selection search @input="e => $emit('select-pattern', e) " :options="options" v-model="selected" />
     
      <span>Pick your play speed:</span>
      <vue-slide-bar
        v-model="sliderCustomzie.val"
        :min="1"
        :max="10"
        :processStyle="sliderCustomzie.processStyle"
        :lineHeight="sliderCustomzie.lineHeight"
        :tooltipStyles="sliderCustomzie.tooltipStyles"
        @input="e => $emit('select-playspeed', 1000 - Number.parseInt(e)*100)"
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
      selected: null,
      sliderCustomzie: {
        val: 7,
        lineHeight: 10,
        processStyle: {
          backgroundColor: "#4a90e2"
        },
        tooltipStyles: {
          backgroundColor: "#4a90e2",
          borderColor: "#4a90e2"
        }
      }
    };
  },
  computed: {
    options : function () {
      return Object.keys(this.preset_patterns).map(name => ({text:name, value:name}))
    }
  },
  methods: {
    testEmit(e) {
      console.log(e)
    }
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
.button {
  /* margin: 3px 0; */
}
</style>