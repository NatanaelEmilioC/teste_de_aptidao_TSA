import Vue from "vue";
import App from "./App.vue";
import "./quasar";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";

import { VueMaskDirective } from 'v-mask'
Vue.directive('mask', VueMaskDirective);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
