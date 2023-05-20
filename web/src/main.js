import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { firebaseApp } from "./firebase/index.js";
import { VueFire, VueFireAuth } from "vuefire";

import {FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUser, faCircleUser, faDumbbell, faMoon, faMoneyBillWave, faSignOutAlt, faEye, faEyeSlash, faCube, faCalendarDay, faBolt, faEllipsis, faAngleRight } from "@fortawesome/free-solid-svg-icons";

library.add(faUser, faCircleUser, faDumbbell, faMoon, faMoneyBillWave, faSignOutAlt, faEye, faEyeSlash, faCube, faCalendarDay, faBolt, faEllipsis, faAngleRight);

const app = createApp(App);

app.use(router);
app.use(VueFire, {
    firebaseApp,
    modules: [
        VueFireAuth(),
    ],
});
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");