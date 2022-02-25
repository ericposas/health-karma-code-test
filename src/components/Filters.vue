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
  <div class="row">
    <select disabled class="col-1" v-for="(option, idx) in options" :key="idx">
      <option>{{ option.name }}</option>
    </select>
  </div>
</template>

<style scoped>
.row {
  margin-top: 8px;
}
.col-1 {
  margin-right: 16px;
}
select {
  width: 120px;
  padding: 4px 8px;
  border-radius: 4px;
  background-color: #fff;
  border: 2px solid #0d8fb3;
}
</style>
