<template>
  <div class="navbar">
    <h1 class="text">NavBar</h1>
  </div>
</template>

<script>
export default {
  name: 'NavbarComponent',
};
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  background-color: #4a90e2;
  border-radius: 0 0 1em 1em;
  box-shadow: 0 12px 6px rgba(0, 0, 0, 0.9);
}

.text {
  color: white;
  font-size: 24px;
}
</style>