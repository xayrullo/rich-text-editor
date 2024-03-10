import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/assets/style/index.css";

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import locale from "element-ui/lib/locale/lang/en";
import VueCookies from "vue-cookies";
import vModal from 'vue-js-modal'

Vue.use(vModal, {
  dynamic: true
})
Vue.config.productionTip = false;
Vue.use(ElementUI, { locale });
Vue.use(VueCookies);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
