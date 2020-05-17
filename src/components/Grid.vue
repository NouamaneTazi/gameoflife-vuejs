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
      // selects square if drag while clicking
      if (this.mouseIsDown) {
        this.$emit("click-square", { i, j });
      }
    },
    mouseDown() {
      // indicates that user is clicking. WARNING: Works only with mouse
      this.mouseIsDown = true;
    },
    mouseUp() {
      // indicates that user is no longer clicking. WARNING: Works only with mouse
      this.mouseIsDown = false;
    }
  }
};
</script>

<style scoped>
.flex-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.btn {
  background-color: #ebebeb;
  border: solid 1px white;
  margin: 0;
  padding: 0;
  height: 6px;
  width: 6px;
}

@media screen and (max-width: 900px) {
  .btn {
    width: 5px;
    height: 5px;
  }
}
.is-active {
  background-color: #4DA1A1;
}
.row {
  display: flex;
}
.square {
  display: flex;
}
</style>