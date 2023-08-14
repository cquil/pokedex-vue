<script setup>

</script>

<template>
<header>
  <div class="header-wrap">
    <nav>
      <RouterLink to="/" class="nav-link">Home</RouterLink>
      <RouterLink to="/favorite" class="nav-link">Favorite</RouterLink>
    </nav>
  </div>
</header>
</template>

<style>
header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 20px;
}
nav {
  width: 100%;
  display: flex;
  align-items: center;
}
.nav-link {
  width: 50%;
  display: block;
  text-align: center;
  text-decoration: none;
  color: white;
  font-size: 20px;
  font-weight: bold;
}
</style>
