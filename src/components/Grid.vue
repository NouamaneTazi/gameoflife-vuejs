<template>
  <div class="wrapper">
    <div class="flex-container">
      <div class="row" v-for="(row, i) in pattern" :key="`row-${i}`">
        <div class="square" v-for="(val, j) in row" :key="`${i}-${j}`">
          <div
            class="btn"
            @click="$emit('click-square', { i, j })"
            @mouseup="mouseUp"
            @mousedown="mouseDown"
            @mouseover="mouseOverSquare({i,j})"
            v-bind:class="{'is-active':val==1}"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Grid",
  props: ["pattern"],
  data() {
    return {
      mouseIsDown: false
    };
  },
  methods: {
    mouseOverSquare({ i, j }) {
      if (this.mouseIsDown) {
        this.$emit("click-square", { i, j });
      }
    },
    mouseDown() {
      this.mouseIsDown = true;
    },
    mouseUp() {
      this.mouseIsDown = false;
    }
  }
};
</script>

<style scoped>

/* .wrapper {
  display: block;
  width: 50%;
} */
.flex-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  /* margin: 200px; */
}
.btn {
  background-color: antiquewhite;
  border: solid 1px white;
  margin: 0;
  padding: 0;
  height: 5px;
  width: 5px;
}
.is-active {
  background-color: black;
}
.row {
  display: flex;
}
.square {
  display: flex;
}
</style>