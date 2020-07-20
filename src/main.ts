import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "vue-material/dist/vue-material.min.css";
import "vue-material/dist/theme/default.css";
import "./assets/styles/responsive-grid/responsive-grid.scss";
Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
