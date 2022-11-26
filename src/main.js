import Vue from "vue";

import BootstrapVue from "bootstrap-vue";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "bootstrap/dist/css/bootstrap.css";
import { sync } from "vuex-router-sync";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;
Vue.use(BootstrapVue);
sync(store, router);

// new Vue({
//   el: '#app',
//   router,
//   store,
//   template: '<App/>',
//   components: { App },
// });

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
