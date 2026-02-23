<template>
  <div
    class="flex w-96 flex-col border-r border-solid border-brand-gray-1 bg-white p-4"
  >
    <section cladd="pb-5">
      <div class="flex flex-row justify-between">
        <h3 class="my-4 text-base font-semibold">
          What do you want to do?
        </h3>
        <div class="flex items-center text-sm">
          <action-button label="Clear filters" type="secondary" />
        </div>
      </div>

      <collapsable-accordion header="Organizations">
      <checkbox-list-with-options-name :elements="uniqueOrganizations" />
      </collapsable-accordion>

      <collapsable-accordion header="Job Types">
        <checkbox-list-with-options-name :elements="getUniqueJobTypes" />
      </collapsable-accordion>
      <collapsable-accordion header="Degree">
       <checkbox-list-with-options-name :elements="getUniqueDegrees" />
      </collapsable-accordion>
    </section>
  </div>
</template>

<script>
import { mapState } from "pinia"
import ActionButton from "../../Shared/ActionButton.vue"
import CollapsableAccordion from "../../Shared/CollapsableAccordion.vue"
import { useJobsStore } from "../../../stores/jobs"
import CheckboxListWithOptionsName from "./CheckboxListWithOptionsName.vue";

export default {
  name: "JobFiltersSidebar",
  components: {
    ActionButton,
    CollapsableAccordion,
    CheckboxListWithOptionsName
  },
  computed: {
    ...mapState(useJobsStore, [
      "uniqueOrganizations",
      "getUniqueJobTypes",
      "getUniqueDegrees",
    ]),
  },
}
</script>
