<script setup>
import { ref } from "@vue/reactivity";

const emit = defineEmits(["zipcode"]);

const zipcodeEntry = ref(33308);
const handleSubmit = (e) => {
  e.preventDefault();
  emit("zipcode", zipcodeEntry.value);
};
</script>

<template>
  <form class="searchbar-component row">
    <div class="col-lg-3">
      <i class="fa fa-house-chimney-window"></i>&nbsp;
      <input disabled type="text" placeholder="Restaurant name" />
    </div>
    <div class="col-lg-3">
      <i class="fa fa-location-dot"></i>&nbsp;
      <input v-model="zipcodeEntry" type="text" placeholder="Zip code" />
    </div>
    <div class="col-lg-2">
      <i class="fa-solid fa-burger"></i>&nbsp;
      <select disabled>
        <option>Cuisine type</option>
      </select>
    </div>
    <div class="col-lg-2">
      <i class="fa-solid fa-leaf"></i>&nbsp;
      <select disabled>
        <option>Dietary</option>
      </select>
    </div>
    <button class="col-lg-2" @click="handleSubmit">
      <i class="fa-solid fa-magnifying-glass"></i>
      Search
    </button>
  </form>
</template>

<style scoped>
.searchbar-component {
  overflow: hidden;
  line-height: 40px;
  border-radius: 4px;
  border: 1px solid #ccc;
  box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.25);
}
input[type="text"] {
  border: none;
  outline: none;
}
select {
  border: none;
  background-color: #fff;
  font-family: Arial, FontAwesome;
}
button {
  color: #fff;
  border: none;
  background-color: #0d8fb3;
}
</style>
