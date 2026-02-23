import HomeView from "@/components/Views/HomeView.vue";
import JobResultsView from "@/components/Views/JobResultsView.vue";
import JobView from "@/components/Views/JobView.vue";
import TeamsView from "@/components/Views/TeamsView.vue";
import { createRouter, createWebHashHistory } from "vue-router";
import LocationView from "../components/Views/LocationView.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/jobs/results",
    name: "JobsResults",
    component: JobResultsView,
  },
  {
    path: "/jobs/results/:id",
    name: "JobListing",
    component: JobView,
  },
  {path: "/teams", name: "Teams", component: TeamsView},
  {path: "/location", name: "Location", component: LocationView}
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return { top: 0, left: 0, behavior: "smooth" }
  }
});

export default router;
