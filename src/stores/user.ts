import { defineStore } from "pinia"

export const ADD_SELECTED_ORGANIZATIONS = "ADD_SELECTED_ORGANIZATIONS"
export const ADD_SELECTED_JOB_TYPES = "ADD_SELECTED_JOB_TYPES"
export const ADD_SELECTED_DEGREE_TYPES = "ADD_SELECTED_DEGREE_TYPES"

export const CLEAR_FILTERS = "CLEAR_FILTERS"

export interface UserState {
  isLoggedIn: boolean
  selectedOrganizations: string[]
  selectedJobTypes: string[]
  selectedDegreeTypes: string[]
}

export const useUserStore = defineStore("user", {
  state: (): UserState => ({
    isLoggedIn: false,
    selectedOrganizations: [],
    selectedJobTypes: [],
    selectedDegreeTypes: [],
  }),
  actions: {
    loginUser() {
      this.isLoggedIn = true
    },
    [ADD_SELECTED_ORGANIZATIONS](organizations: string[]) {
      this.selectedOrganizations = organizations
    },
    [ADD_SELECTED_JOB_TYPES](jobTypes: string[]) {
      this.selectedJobTypes = jobTypes
    },
    [ADD_SELECTED_DEGREE_TYPES](degreeTypes: string[]) {
      this.selectedDegreeTypes = degreeTypes
    },
    [CLEAR_FILTERS]() {
      this.selectedOrganizations = []
      this.selectedJobTypes = []
      this.selectedDegreeTypes = []
    },
  },
})
