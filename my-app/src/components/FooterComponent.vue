<template>
  <div class="footer">
    <h1 class="text">Footer</h1>
  </div>
</template>

<script>
export default {
  name: 'FooterComponent',
};
</script>

<style scoped>
.footer {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  background-color: #2c3e50;
  border-radius: 1em 1em 0 0;
  box-shadow: 0 -4px 6px rgba(0, 0, 0, 0.1);
}

.text {
  color: white;
  font-size: 24px;
}
</style>