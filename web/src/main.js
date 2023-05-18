import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import {FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUser, faCircleUser, faCow, faMoon, faMoneyBillWave, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

library.add(faUser, faCircleUser, faCow, faMoon, faMoneyBillWave, faSignOutAlt);

const app = createApp(App);

app.use(router);
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");