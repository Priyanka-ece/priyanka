<template>
  <q-page class="container flex flex-center">
    <div>
      <img
        alt="Priyanka Suresh"
        src="~assets/Mine.png"
        style="float: right; width: 200px; height: 300px"
      />
    </div>
    <div>
      <p><strong>Hi I'm Priyanka Suresh .</strong></p>
      <p><strong>I am working in LTIMindtree as Software Engineer.</strong></p>
      <p><strong>Place: Coimbatore,Tamilnadu.</strong></p>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "IndexPage",
});
</script>

<style scoped>
.container {
  font-size: medium;
  background-color: bisque;
  display: flex;
  justify-content: space-around;
  background-color: azure;
  margin: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
.profile {
  text-align: center;
  background-color: rgb(94, 157, 205);
}

.profile img {
  align-self: left;

  display: block;
  margin: 0 auto;
}

.profile h4 {
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
}
.profile p {
  display: grid;
  align-items: right;
  justify-content: right;
}
</style>
