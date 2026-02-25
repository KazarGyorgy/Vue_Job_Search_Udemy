import { defineStore } from "pinia"

import getJobs from "@/api/getJobs"

import { useUserStore } from "@/stores/user"
import type { Job } from "@/api/types"

export const FETCH_JOBS = "FETCH_JOBS"
export const UNIQUE_ORGANIZATIONS = "UNIQUE_ORGANIZATIONS"
export const UNIQUE_JOB_TYPES = "UNIQUE_JOB_TYPES"
export const UNIQUE_DEGREE_TYPES = "UNIQUE_DEGREE_TYPES"
export const FILTERED_JOBS = "FILTERED_JOBS"

export const INCLUDE_JOB_BY_ORGANIZATION =
  "INCLUDE_JOB_BY_ORGANIZATION"
export const INCLUDE_JOB_BY_JOB_TYPE = "INCLUDE_JOB_BY_JOB_TYPE"
export const INCLUDE_JOB_BY_DEGREE_TYPE = "INCLUDE_JOB_BY_DEGREE_TYPE"

export interface JobState {
  jobs: Job[]
}

export const useJobsStore = defineStore("jobs", {
  state: (): JobState => ({
    jobs: [],
  }),
  actions: {
    async [FETCH_JOBS](): Promise<void> {
      const jobs: Job[] = await getJobs()
      this.jobs = jobs
    },
  },
  getters: {
    [UNIQUE_ORGANIZATIONS](state): Set<string> {
      const uniqueOrganizations = new Set<string>()
      state.jobs.forEach((job) =>
        uniqueOrganizations.add(job.organization),
      )
      return uniqueOrganizations
    },
    [UNIQUE_JOB_TYPES](state): Set<string> {
      const uniqueJobTypes = new Set<string>()
      state.jobs.forEach((job) => uniqueJobTypes.add(job.jobType))
      return uniqueJobTypes
    },
    [UNIQUE_DEGREE_TYPES](state): Set<string> {
      const uniqueDegreeTypes = new Set<string>()
      state.jobs.forEach((job) => uniqueDegreeTypes.add(job.degree))
      return uniqueDegreeTypes
    },
    [INCLUDE_JOB_BY_ORGANIZATION]:
      () =>
      (job: Job): boolean => {
        const userStore = useUserStore()
        if (userStore.selectedOrganizations.length === 0) return true
        return userStore.selectedOrganizations.includes(
          job.organization,
        )
      },
    [INCLUDE_JOB_BY_JOB_TYPE]:
      () =>
      (job: Job): boolean => {
        const userStore = useUserStore()
        if (userStore.selectedJobTypes.length === 0) return true
        return userStore.selectedJobTypes.includes(job.jobType)
      },
    [INCLUDE_JOB_BY_DEGREE_TYPE]:
      () =>
      (job: Job): boolean => {
        const userStore = useUserStore()
        if (userStore.selectedDegreeTypes.length === 0) return true
        return userStore.selectedDegreeTypes.includes(job.degree)
      },
    [FILTERED_JOBS](state): Job[] {
      return state.jobs
        .filter((job: Job) => this.INCLUDE_JOB_BY_ORGANIZATION(job))
        .filter((job: Job) => this.INCLUDE_JOB_BY_JOB_TYPE(job))
        .filter((job: Job) => this.INCLUDE_JOB_BY_DEGREE_TYPE(job))
    },
  },
})
