<script setup>
import { ref } from "vue";

const options = ref([
  {
    name: "Rating",
  },
  {
    name: "Price",
  },
  {
    name: "Distance",
  },
]);
</script>

<template>
  <select
    disabled
    class="col-lg-1 col-md-2 col-sm-2"
    v-for="(option, idx) in options"
    :key="idx"
  >
    <option>{{ option.name }}</option>
  </select>
</template>

<style scoped>
select {
  padding: 4px 8px;
  border-radius: 4px;
  background-color: #fff;
  border: 2px solid #0d8fb3;
}
</style>
