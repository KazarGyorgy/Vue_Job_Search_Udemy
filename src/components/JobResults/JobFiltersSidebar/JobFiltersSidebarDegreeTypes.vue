<template>
  <collapsible-accordion header="Degree Types">
    <div class="mt-5">
      <fieldset>
        <ul class="flex flex-row flex-wrap">
          <li
            v-for="degreeType in UNIQUE_DEGREE_TYPES"
            :key="degreeType"
            class="h-8 w-1/2"
          >
            <input
              :id="degreeType"
              v-model="selectedDegreeTypes"
              :value="degreeType"
              type="checkbox"
              class="mr-3"
              @change="selectDegreeType"
            />
            <label :for="degreeType">{{ degreeType }}</label>
          </li>
        </ul>
      </fieldset>
    </div>
  </collapsible-accordion>
</template>

<script>
import { mapActions, mapState } from "pinia";

import { useJobsStore, UNIQUE_DEGREE_TYPES } from "@/stores/jobs";
import { useUserStore, ADD_SELECTED_DEGREE_TYPES } from "@/stores/user";

import CollapsibleAccordion from "@/components/Shared/CollapsibleAccordion.vue";

export default {
  name: "JobFiltersSidebarDegreeTypes",
  components: { CollapsibleAccordion },
  data() {
    return {
      selectedDegreeTypes: [],
    };
  },
  computed: {
    ...mapState(useJobsStore, [UNIQUE_DEGREE_TYPES]),
  },
  methods: {
    ...mapActions(useUserStore, [ADD_SELECTED_DEGREE_TYPES]),
    selectDegreeType() {
      this.ADD_SELECTED_DEGREE_TYPES(this.selectedDegreeTypes);
      this.$router.push({ name: "JobResults" });
    },
  },
};
</script>
