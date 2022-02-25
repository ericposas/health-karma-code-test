<script setup>
import { onMounted } from "@vue/runtime-core";
import useMapMethods from "../extractedMethods/useMapMethods.js";

const emit = defineEmits(["restaurants"]);

const { loadMapFromZipCode } = useMapMethods();

onMounted(async () => {
  loadMapFromZipCode(33308, (results) => {
    emit("restaurants", results);
  });
});
</script>

<template>
  <div id="info"></div>
  <div id="map"></div>
</template>

<style scoped>
#map {
  height: 100%;
  min-height: 400px;
  max-height: 745px;
}
html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
}
</style>
