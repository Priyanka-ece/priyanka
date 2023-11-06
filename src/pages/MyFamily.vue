<template>
  <div class="family">
    <h2>My Family</h2>
    <div class="my-family">
      <p><strong>Father:</strong> {{ Father }}</p>
      <p><strong>Mother:</strong> {{ Mother }}</p>
      <p><strong>Siblings:</strong> {{ Siblings }}</p>

      <img
        alt="Priyanka about logo"
        src="~assets/download.jpg"
        style="width: 200px; height: 200px; margin-right: auto"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const Father = ref(" Suresh L");
const Mother = ref("Jothi S  - Home Maker");
const Siblings = ref(
  "Kishore Kumar S  - Pursuing B.E in Mechanical Engineering (3rd year)"
);
</script>

<style scoped>
.family {
  background-color: azure;
  margin: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  display: grid;
  align-items: center;
  justify-content: center;
}
</style>
