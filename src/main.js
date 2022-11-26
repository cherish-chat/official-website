import Vue from "vue";
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

//px2rem
import "./assets/commonJs/rem";

//路由跳转前
router.beforeEach(async (to, from, next) => {
  //加title
  if (to.meta.title) {
    document.title = to.meta.title;
  } else {
    document.title = "cherish";
  }
  next();
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
