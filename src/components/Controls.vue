<template>
  <div class="wrapper">
    <div class="btns">
      <sui-button class="teal labeled icon" @click="$emit('click-next')">
        <i class="redo icon"></i> Next
      </sui-button>
      <sui-button class="blue labeled icon" @click="$emit('click-play')">
        <i class="play icon"></i> Play
      </sui-button>
      <sui-button class="red labeled icon" @click="$emit('click-clear')">
        <i class="trash alternate icon"></i> Clear
      </sui-button>
      <sui-button class="labeled icon" @click="$emit('click-random')">
        <i class="random icon"></i> Random
      </sui-button>
      <div class="flex-row">
        <sui-button class="violet labeled icon" @click="$emit('save-pattern')">
          <i class="save icon"></i> Save
        </sui-button>
        <sui-button class="purple labeled icon" @click="$emit('load-pattern')">
          <i class="cloud download icon"></i> Load
        </sui-button>
      </div>
      <!-- Preset patterns dropdown menu -->
      <sui-dropdown
        placeholder="Select a pattern"
        selection
        @input="e => $emit('select-pattern', e) "
        :options="options"
        v-model="selected"
      />
      <!-- Playspeed slider -->
      <vue-slide-bar
        v-model="sliderCustomzie.val"
        :min="1"
        :max="10"
        :processStyle="sliderCustomzie.processStyle"
        :lineHeight="sliderCustomzie.lineHeight"
        :tooltipStyles="sliderCustomzie.tooltipStyles"
        @input="e => $emit('select-playspeed', 1000 - Number.parseInt(e)*100)"
      ></vue-slide-bar>
      <div class="ui pointing label">Control the play speed !</div>
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
    options: function() {
      // updates preset_patterns to convenient options format for dropdown menu
      return Object.keys(this.preset_patterns).map(name => ({
        text: name,
        value: name
      }));
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
  .btns {
    margin: 0 1em;
  }
}
.btns {
  display: flex;
  flex-direction: column;
}
.flex-row {
  display: flex;
}
.button {
  margin-right: 0;
  flex-grow: 1;
}
</style>