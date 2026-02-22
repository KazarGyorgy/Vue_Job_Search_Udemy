import { library } from "@fortawesome/fontawesome-svg-core"
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import { createApp } from "vue"

import App from "@/App.vue"
import "@/index.css"
import router from "@/router/index.js"

const app = createApp(App)

library.add(faSearch)
app.use(router)
app.component("font-awesome-icon", FontAwesomeIcon)

app.mount("#app")
