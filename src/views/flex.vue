<template>
  <div class="container no-padding">
    <div class="row">
      <div class="flex-1 padding-10" v-for="i in [1,2,3,4,5,6,7,8,9,10,11,12]" :key="i">
        <div>flex-1</div>ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.
      </div>
    </div>
    <div class="row">
      <div v-bind:class="[`flex-${i}`, no-padding]" v-for="i in [2,2,2,2,2,2]" :key="i">
        <div>flex-2</div>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.
      </div>
    </div>
    <div class="row">
      <div v-bind:class="[`flex-${i}`, no-padding]" v-for="i in [3,3,3,3]" :key="i">
        <div>flex-3</div>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.
      </div>
    </div>
    <div class="row">
      <div v-bind:class="[`flex-${i}`, no-padding]" v-for="i in [4,4,4]" :key="i">
        <div>flex-4</div>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.
      </div>
    </div>
    <div class="row">
      <div v-bind:class="[`flex-${i}`, no-padding]" v-for="i in [6,6]" :key="i">
        <div>flex-6</div>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.
      </div>
    </div>
    <div class="row">
      <div v-bind:class="[`flex-${i}`, no-padding]" v-for="i in [12]" :key="i">
        <div>flex-12</div>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.
      </div>
    </div>
    <div class="row">
      <div
        v-bind:class="[`flex-${i}`, no-padding]"
        v-for="i in [3,9]"
        :key="i"
      >Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.</div>
    </div>
  </div>
</template> 

<script lang="ts">
import Vue from "vue";
export default {
  name: "Flex"
};
</script>
<style>
[class*="flex-"] {
  flex-wrap: wrap;
  height: 150px;
  color: white;
  border: 2px solid white;
  background-color: #ccc;
}
.flex-1 {
  background-color: purple;
}
.flex-2 {
  background-color: orange;
}
.flex-3 {
  background-color: black;
}
.flex-4 {
  background-color: blue;
}
.flex-6 {
  background-color: green;
}
.flex-12 {
  background-color: pink;
}
</style>