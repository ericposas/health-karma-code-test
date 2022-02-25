<script setup></script>

<template>
  <div class="row page-header">
    <div class="col-6">
      <img class="header-image" src="@/assets/hungrytime.png" />
    </div>
    <div class="col-3 my-dashboard nav-item">Dashboard</div>
    <div class="col-1 search nav-item">Search</div>
    <div class="col-1">
      <img class="notif-icon" src="@/assets/bell-icon.png" />
    </div>
    <div class="col-1">
      <img class="profile-icon" src="@/assets/profile-icon.png" />
    </div>
  </div>
</template>

<style scoped>
.header-image {
  width: 220px;
}
.page-header {
  height: 60px;
  line-height: 60px;
  margin-bottom: 10px;
}
.nav-item {
  font-size: 1.35rem;
  color: #525252;
  font-weight: bold;
}
.col-1,
.col-3 {
  text-align: right;
}
</style>
