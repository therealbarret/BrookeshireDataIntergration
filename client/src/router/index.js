import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Site from "../views/SiteUI.vue";
import Admin from "../views/Admin.vue";
import NewProject from "../views/NewProject.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/site",
    name: "site",
    component: Site
  },
  {
    path: "/admin",
    name: "Admin",
    component: Admin
  },
  {
    path: "/admin/new-project",
    name: "NewProject",
    component: NewProject
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
