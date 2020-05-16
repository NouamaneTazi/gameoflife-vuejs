<template>
  <div class="wrapper">
    <div class="row" v-for="(row, i) in pattern" :key="`row-${i}`">
      <div class="square" v-for="(val, j) in row" :key="`${i}-${j}`">
          <div class="btn" @click="$emit('click-square', {i,j})" v-bind:class="{'is-active':val==1}"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Grid",
  props: ["pattern"]
};
</script>

<style scoped>
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
.wrapper {
    display: flex;
    flex-direction: column;
    margin: auto;
}

.row {
    display: flex;
}

.square {
    display: flex;
}
</style>