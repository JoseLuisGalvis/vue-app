<template>
  <div class="body">
    <h1 class="text">Body</h1>
    <section-one-component />
    <section-two-component />
  </div>
</template>

<script>
import SectionOneComponent from './SectionOneComponent.vue';
import SectionTwoComponent from './SectionTwoComponent.vue';

export default {
  name: 'BodyComponent',
  components: {
    SectionOneComponent,
    SectionTwoComponent,
  },
};
</script>

<style scoped>
.body {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: calc(100vh - 140px);
  background-color: #79b5f2;
  border-radius: 1em;
    box-shadow: inset 0 0 8px rgba(0, 0, 0, 0.3),
                    0 8px 6px rgba(0, 0, 0, 0.1),
                inset 0 8px 6px rgba(0, 0, 0, 0.1),
                inset 8px 0 6px rgba(0, 0, 0, 0.1),
                inset -8px 0 6px rgba(0, 0, 0, 0.1);
}

.text {
  color: white;
  font-size: 24px;
}
</style>