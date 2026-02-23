import { library } from "@fortawesome/fontawesome-svg-core"
import {
  faSearch,
  faAngleDown,
  faAngleUp,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import { createApp } from "vue"

import App from "@/App.vue"
import "@/index.css"
import router from "@/router/index.js"
import { createPinia } from "pinia"

const pinia = createPinia()

library.add(faSearch, faAngleDown, faAngleUp)

createApp(App)
  .use(pinia)
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app")
