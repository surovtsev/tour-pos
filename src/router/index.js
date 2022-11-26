import Vue from "vue";
import VueRouter from "vue-router";
import PrintDepartues from "../views/PrintDepartues.vue";
import Import from "../views/Import.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: import.meta.env.BASE_URL,
  routes: [
    { path: "/", name: "Import", component: Import },
    {
      path: "/print-departures",
      name: "PrintDepartues",
      component: PrintDepartues,
    },
    { path: "/import", name: "Import", component: Import },
  ],
});

export default router;
