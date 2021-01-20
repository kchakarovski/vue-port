import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./mixins";
import VueTypedjs from "vue-typed-js";

Vue.use(VueTypedjs);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
