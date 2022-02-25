<script setup>
import AppHeader from "@/components/AppHeader.vue";
import PromoStrip from "@/components/PromoStrip.vue";
import SearchBar from "@/components/SearchBar.vue";
import Filters from "@/components/Filters.vue";
import RestaurantListing from "@/components/RestaurantListing.vue";
import MapComponent from "@/components/MapComponent.vue";
import useMapMethods from "./extractedMethods/useMapMethods.js";
import { ref } from "@vue/runtime-core";
import Paginate from "vuejs-paginate-next";

const perPage = ref(4);
const currentPage = ref(1);
const restaurants = ref([
  {
    icon: "",
    name: "Default",
    type: "restaurant",
    vicinity: "",
    price_level: 1,
    rating: 1,
    phone: "(000)000-0000",
  },
]);

const { loadMapFromZipCode } = useMapMethods();

const onRestaurantsLoaded = (loadedRestaurants) =>
  (restaurants.value = loadedRestaurants);

const onZipCodeSubmit = (zip) =>
  loadMapFromZipCode(zip, (results) => {
    onRestaurantsLoaded(results);
    currentPage.value = 1;
  });

const itemsForList = () => {
  const slice = restaurants.value.slice(
    (currentPage.value - 1) * perPage.value,
    currentPage.value * perPage.value
  );
  console.log("currentPage", currentPage.value, restaurants.value);
  console.log(slice);
  return slice;
};
</script>

<template>
  <div class="app-header container">
    <app-header />
  </div>
  <promo-strip />
  <div class="app-main container">
    <search-bar @zipcode="onZipCodeSubmit" />
    <filters />
    <div class="listings-and-locations-container row">
      <div class="listings col-xl-6 col-lg-7 col-md-12">
        <restaurant-listing
          v-for="(restaurant, idx) in itemsForList()"
          :key="idx"
          :icon="restaurant.icon"
          :name="restaurant.name"
          :type="restaurant.type"
          :address="restaurant.vicinity"
          :cost="restaurant.price_level"
          :rating="restaurant.rating"
          :phone="restaurant.phone"
        />
      </div>
      <div class="locations-map col-xl-6 col-lg-5 col-md-12">
        <map-component @restaurants="onRestaurantsLoaded"></map-component>
      </div>
    </div>
    <div class="row">
      <paginate
        v-model="currentPage"
        style="cursor: pointer"
        :page-count="restaurants.length / 4"
        :prev-text="'Prev'"
        :next-text="'Next'"
        :container-class="'pagination'"
      >
      </paginate>
    </div>
  </div>
</template>

<style scoped>
.app-main {
  margin-top: 60px;
}
.listings-and-locations-container {
  margin-top: 25px;
}
.pagination {
  list-style-type: none;
}
</style>
