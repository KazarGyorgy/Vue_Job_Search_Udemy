import { defineStore } from "pinia";

export const ADD_SELECTED_ORGANIZATIONS = "ADD_SELECTED_ORGANIZATIONS";
export const ADD_SELECTED_JOB_TYPES = "ADD_SELECTED_JOB_TYPES";
export const ADD_SELECTED_DEGREE_TYPES = "ADD_SELECTED_DEGREE_TYPES"

export const CLEAR_FILTERS = "CLEAR_FILTERS"

export const useUserStore = defineStore("user", {
  state: () => ({
    isLoggedIn: false,
    selectedOrganizations: [],
    selectedJobTypes: [],
    selectedDegreeTypes: [],
  }),
  actions: {
    loginUser() {
      this.isLoggedIn = true;
    },
    [ADD_SELECTED_ORGANIZATIONS](organizations) {
      this.selectedOrganizations = organizations;
    },
    [ADD_SELECTED_JOB_TYPES](jobTypes) {
      this.selectedJobTypes = jobTypes;
    },
    [ADD_SELECTED_DEGREE_TYPES](degreeTypes) {
      this.selectedDegreeTypes = degreeTypes;
    },
    [CLEAR_FILTERS]() {
      this.selectedOrganizations = [];
      this.selectedJobTypes = [];
      this.selectedDegreeTypes = [];
    },
  },
});
