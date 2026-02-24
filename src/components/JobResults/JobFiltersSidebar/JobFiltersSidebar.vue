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
          <action-button text="Clear Filters" type="secondary"  @click="clearFilters"/>
        </div>
      </div>

      <job-filters-sidebar-degree-types />

      <job-filters-sidebar-job-types />

      <job-filters-sidebar-organizations />
    </section>
  </div>
</template>

<script>
import JobFiltersSidebarJobTypes from "@/components/JobResults/JobFiltersSidebar/JobFiltersSidebarJobTypes.vue"
import JobFiltersSidebarOrganizations from "@/components/JobResults/JobFiltersSidebar/JobFiltersSidebarOrganizations.vue"
import ActionButton from "@/components/Shared/ActionButton.vue"
import CollapsibleAccordion from "@/components/Shared/CollapsibleAccordion.vue"
import { mapActions } from "pinia"
import { CLEAR_FILTERS, useUserStore } from "../../../stores/user"
import JobFiltersSidebarDegreeTypes from "./JobFiltersSidebarDegreeTypes.vue"

export default {
  name: "JobFiltersSidebar",
  components: {
    ActionButton,
    CollapsibleAccordion,
    JobFiltersSidebarJobTypes,
    JobFiltersSidebarOrganizations,
    JobFiltersSidebarDegreeTypes,
  },
  methods: {
    ...mapActions(useUserStore, [CLEAR_FILTERS]),
    clearFilters() {
      this.CLEAR_FILTERS()
    },
  },
}
</script>
