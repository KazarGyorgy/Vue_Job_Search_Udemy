import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { createApp } from "vue";

import App from "@/App.vue";
import "@/index.css";

const app = createApp(App);

library.add(faSearch);

app.component("font-awesome-icon", FontAwesomeIcon);

app.mount("#app");

