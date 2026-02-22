import HomeView from "@/components/Views/HomeView.vue";
import JobResultsView from "@/components/Views/JobResultsView.vue";
import JobView from "@/components/Views/JobView.vue";
import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeView,
  },
  {
    path: "/jobs",
    name: "JobResults",
    component: JobResultsView,
  },
  {
    path: "/jobs/results/:id",
    name: "JobListing",
    component: JobView,
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
