<script setup>
defineProps({
  icon: {
    type: String,
  },
  name: {
    type: String,
  },
  type: {
    type: String,
    default: "restaurant",
  },
  address: {
    type: String, // google result param: "vicinity"
  },
  cost: {
    type: Number, // google result param: "price_level"
  },
  rating: {
    type: Number,
  },
  phone: {
    type: String,
    default: "(000)000-000",
  },
});
const remainingStars = (n) => 5 - n;
const getType = (icon) =>
  icon.indexOf("cafe") > -1
    ? "Cafe"
    : icon.indexOf("generic") > -1
    ? "Business / Delivery"
    : icon.indexOf("movie") > -1
    ? "Movies"
    : icon.indexOf("bar") > -1
    ? "Bar"
    : icon.indexOf("lodging") > -1
    ? "Hotel / Lodging"
    : icon.indexOf("shopping") > -1
    ? "Shopping"
    : "Restaurant";
</script>

<template>
  <div class="restaurant-listing row">
    <div class="image-icon col-2">
      <img :src="icon" />
    </div>
    <div class="restaurant-details col-4">
      <div class="restaurant-name">{{ name }}</div>
      <div class="restaurant-type">{{ getType(icon) }}</div>
      <i class="fa-solid fa-location-dot"></i>&nbsp;
      <span>{{ address }}</span>
      <div class="restaurant-cost">
        <span v-for="n in cost" :key="n">
          <i class="fa-solid fa-dollar-sign"></i>&nbsp;
        </span>
      </div>
    </div>
    <div class="star-rating col-3">
      <span v-for="n in Math.floor(rating)" :key="n">
        <i class="fa-solid fa-star"></i>
      </span>
      <span v-for="n in remainingStars(Math.floor(rating))" :key="n">
        <i class="fa-regular fa-star"></i> </span
      >&nbsp;
      <!-- should have some logic to sort through fractional stars, possibly a library for that -->
      <span> {{ 5 - remainingStars(rating) }} / 5 </span>
    </div>
    <div class="reservations col-3">
      <div>Make a Reservation</div>
      <button class="phone-number">
        <i class="fa-solid fa-phone"></i>&nbsp;
        <span>{{ phone }}</span>
      </button>
      <div class="see-website-save-combo">
        <a>See website</a>&nbsp;|&nbsp;<i class="fa-regular fa-heart"></i> Save
      </div>
    </div>
  </div>
</template>

<style scoped>
.restaurant-listing {
  height: 180px;
  padding: 8px;
  border-radius: 4px;
  margin-bottom: 8px;
  background-color: #fff;
  box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.25);
}
.restaurant-details > .restaurant-name {
  font-size: 1.25rem;
  font-weight: bold;
}
.reservations {
  text-align: center;
}
.reservations > button {
  width: 100%;
}
button.phone-number {
  color: #fff;
  border: none;
  padding: 4px;
  margin-top: 4px;
  font-size: 0.9rem;
  border-radius: 2px;
  background-color: #0d8fb3;
}
.see-website-save-combo {
  margin-top: 14px;
}
</style>
