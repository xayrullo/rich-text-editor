import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "contents",
    component: () => import("../views/Contents.vue"),
  },
  {
    path: "/:id",
    name: "detail",
    component: () => import("../views/Detail.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
