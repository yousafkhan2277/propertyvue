import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import FlashMessage from '@smartweb/vue-flash-message';


createApp(App)
  .use(router)
  .use(store,FlashMessage)
  .mount("#app");

  
