<template>
  <div class="about-me">
    <div class="container">
      <h2>About Me</h2>
      <div class="personal-info">
        <div class="content">
          <p><strong>Name:</strong> {{ fullName }}</p>
          <p><strong>Qualifications:</strong> {{ qualifications }}</p>
          <p><strong>Current Job Designation:</strong> {{ jobDesignation }}</p>
          <p><strong>Company Name:</strong> {{ companyName }}</p>
          <p><strong>Phone Number:</strong> {{ phoneNumber }}</p>
          <p><strong>Email:</strong> {{ email }}</p>
          <p><strong>Address:</strong>{{ address }}</p>
        </div>
        <img
          alt="Priyanka about logo"
          src="~assets/about.jpg"
          style="width: 200px; height: 200px; align-self: auto"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const fullName = ref("Priyanka Suresh");
const qualifications = ref("B.E in Electronics and Communication Engineering");
const jobDesignation = ref("Software Engineer");
const companyName = ref("LTI Mindtree");
const phoneNumber = ref("8428599929");
const email = ref("priyankasuresh584@gmail.com");
const address = ref(
  "No.3,Duraiswamy Mudaliar Street,Kundrathur,Chennai-600069,Tamilnadu"
);
</script>

<style scoped>
.about-me {
  background-color: cornsilk;
  margin: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  display: flex;

  justify-content: space-around;
}

.about-me h2 {
  font-family: fantasy "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-style: italic;
}

.personal-info {
  display: flex;
}
.personal-info p {
  margin: 10px 0;
}

.profile img {
  /* display: block; */
  margin: 0 auto;
}
</style>
