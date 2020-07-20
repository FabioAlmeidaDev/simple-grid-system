<template>
  <div class="container no-padding">
    <div class="row">
      <div class="col-1 padding-10" v-for="i in [1,2,3,4,5,6,7,8,9,10,11,12]" :key="i">
        <div>col-1</div>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.
      </div>
    </div>
    <div class="row">
      <div v-bind:class="[`col-${i}`, no-padding]" v-for="i in [2,2,2,2,2,2]" :key="i">
        <div>col-2</div>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.
      </div>
    </div>
    <div class="row">
      <div v-bind:class="[`col-${i}`, no-padding]" v-for="i in [3,3,3,3]" :key="i">
        <div>col-3</div>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.
      </div>
    </div>
    <div class="row">
      <div v-bind:class="[`col-${i}`, no-padding]" v-for="i in [4,4,4]" :key="i">
        <div>col-4</div>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.
      </div>
    </div>
    <div class="row">
      <div v-bind:class="[`col-${i}`, no-padding]" v-for="i in [6,6]" :key="i">
        <div>col-6</div>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.
      </div>
    </div>
    <div class="row">
      <div v-bind:class="[`col-${i}`, no-padding]" v-for="i in [12]" :key="i">
        <div>col-12</div>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.
      </div>
    </div>
  </div>
</template> 

<script lang="ts">
import Vue from "vue";
import { MdButton, MdField } from "vue-material/dist/components";
Vue.use(MdButton);
Vue.use(MdField);
export default {
  name: "Columns"
};
</script>
<style>
[class*="col-"] {
  col-wrap: wrap;
  height: 150px;
  color: white;
  border: 2px solid white;
  background-color: #ccc;
}
.col-1 {
  background-color: purple;
}
.col-2 {
  background-color: orange;
}
.col-3 {
  background-color: black;
}
.col-4 {
  background-color: blue;
}
.col-6 {
  background-color: green;
}
.col-12 {
  background-color: pink;
}
</style>