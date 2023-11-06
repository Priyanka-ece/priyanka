<template>
  <div class="hobby">
    <h2>My Hobbies and Interests</h2>
    <div class="my-hobbies">
      <p><strong>Hobbies:</strong> {{ Hobbies }}</p>
      <p><strong>Area of Interest:</strong> {{ Interest }}</p>
      <p><strong>Favourites of Mine:</strong> {{ Favourite }}</p>

      <img
        alt="Priyanka about logo"
        src="~assets/hobbu.jpg"
        style="width: 200px; height: 200px; margin-right: auto"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const Hobbies = ref(
  " Singing, Listening to music and Audio books ,Playing Chess , Drawing Pencil arts, Dancing"
);
const Interest = ref("Linux, AI/ML, Docker&Kubernetes, Python, VueJS");
const Favourite = ref(
  "Peaceful places, Beaches,Love to explore and learn New things!!!"
);
</script>

<style scoped>
.hobby {
  background-color: blanchedalmond;
  margin: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  display: grid;
  align-items: center;
  justify-content: center;
}
</style>
