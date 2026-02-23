import { defineStore } from "pinia"
import getJobs from "../api/getJobs"

export const FETCH_JOBS = "FETCH_JOBS"

export const useJobsStore = defineStore("jobs", {
  state: () => ({
    jobs: [],
  }),
  actions: {
    async [FETCH_JOBS]() {
      const response = await getJobs()
      this.jobs = response
    },
  },
  getters: {
    uniqueOrganizations(state) {
      return [...new Set(state.jobs.map((job) => job.organization))]
    },
    getUniqueJobTypes(state) {
      return [...new Set(state.jobs.map((job) => job.jobType))]
    },
    getUniqueDegrees(state) {
      return [...new Set(state.jobs.map((job) => job.degree))]
    },
  },
})
