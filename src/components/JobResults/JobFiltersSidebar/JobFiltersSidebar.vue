<template>
  <div
    class="flex w-96 flex-col border-r border-solid border-brand-gray-1 bg-white p-4"
  >
    <section class="pb-5">
      <div class="flex flex-row justify-between">
        <h3 class="my-4 text-base font-semibold">
          What do you want to do?
        </h3>
        <div class="flex items-center text-sm">
          <action-button
            text="Clear Filters"
            type="secondary"
            @click="clearFilters"
          />
        </div>
      </div>

      <job-filter-sidebar-checkbox-group
        :header="'Job Types'"
        :unique-values="uniqueJobTypes"
        :action="addSelectedJobTypes"
      />
      <job-filter-sidebar-checkbox-group
        :header="'Organizations'"
        :unique-values="uniqueOrganizations"
        :action="addSelectedOrganizations"
      />
      <job-filter-sidebar-checkbox-group
        :header="'Degree Types'"
        :unique-values="uniqueDegreeTypes"
        :action="addSelectedDegreeTypes"
      />
    </section>
  </div>
</template>

<script lang="ts" setup>
import ActionButton from "@/components/Shared/ActionButton.vue"
import JobFilterSidebarCheckboxGroup from "./JobFilterSidebarCheckboxGroup.vue"
import { useJobsStore } from "@/stores/jobs"
import { useUserStore } from "@/stores/user"
import { computed } from "vue"

const jobsStore = useJobsStore()

const uniqueJobTypes = computed(() => jobsStore.UNIQUE_JOB_TYPES)
const uniqueOrganizations = computed(
  () => jobsStore.UNIQUE_ORGANIZATIONS,
)
const uniqueDegreeTypes = computed(
  () => jobsStore.UNIQUE_DEGREE_TYPES,
)

const userStore = useUserStore()

const addSelectedJobTypes = userStore.ADD_SELECTED_JOB_TYPES
const addSelectedOrganizations = userStore.ADD_SELECTED_ORGANIZATIONS
const addSelectedDegreeTypes = userStore.ADD_SELECTED_DEGREE_TYPES

const clearFilters = () => {
  userStore.CLEAR_FILTERS()
}
</script>
