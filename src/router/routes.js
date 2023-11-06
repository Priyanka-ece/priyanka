const routes = [
  {
    path: "/priyanka",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "Home", component: () => import("pages/IndexPage.vue") },
      {
        path: "PersonalInfo",
        component: () => import("src/pages/PersonalInfo.vue"),
      },
      { path: "MyFamily", component: () => import("src/pages/MyFamily.vue") },
      { path: "MyHobbies", component: () => import("src/pages/MyHobbies.vue") },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
