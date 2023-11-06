<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <div class="q-px-lg q-pt-xl q-mb-md">
          <q-toolbar-title>
            <q-avatar>
              <img
                alt="My logo"
                src="~assets/logo.jpg"
                style="width: 50px; height: 50px"
            /></q-avatar>
            My Profile Quasar App
          </q-toolbar-title>
        </div>

        <!-- <q-btn dense flat round icon="menu" @click="toggleRightDrawer" /> -->
      </q-toolbar>

      <q-tabs align="left">
        <q-route-tab to="/priyanka/Home" label="Home" />
        <q-route-tab to="/priyanka/PersonalInfo" label="Personal Info" />
        <q-route-tab to="/priyanka/MyHobbies" label="My Hobbies" />
        <q-route-tab to="/priyanka/myFamily" label="My Family" />
      </q-tabs>
    </q-header>

    <q-drawer v-model="leftDrawerOpen">
      <q-scroll-area
        style="
          height: calc(100% - 192px);
          /* margin-top: 192px; */
          border-right: 1px solid #ddd;
        "
      >
        <q-list padding>
          <q-item to="/priyanka/PersonalInfo">
            <q-item-section avatar>
              <q-icon name="inbox" />
            </q-item-section>

            <q-item-section> About Me </q-item-section>
          </q-item>

          <q-item to="/priyanka/MyFamily">
            <q-item-section avatar>
              <q-icon name="star" />
            </q-item-section>

            <q-item-section> Family </q-item-section>
          </q-item>
          <q-item to="/priyanka/MyHobbies">
            <q-item-section avatar>
              <q-icon name="style" />
            </q-item-section>

            <q-item-section> Hobbies </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
      <!-- drawer content -->
    </q-drawer>

    <!-- <q-drawer show-if-above v-model="rightDrawerOpen" side="right" bordered>
       drawer content -->
    <!-- </q-drawer> -->

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const leftDrawerOpen = ref(false);

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
};
// computed:{
//           todaysDate() {
//             let timestamp = Date.now()
//             let formatedString = date.formatDate(timestamp,'YYYY-MM-DDTHH:mm:ss.SSSZ')
//           }  }
</script>
