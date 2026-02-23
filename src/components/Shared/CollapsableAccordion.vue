<template>
  <div class="border-b border-solid border-brand-gray-2 py-5">
    <div
      class="cusror-pointer flex flex-wrap items-center justify-between"
      role="button"
      @click="openAccordion"
    >
      <h3 class="text-base font-semibold">{{ header }}</h3>
      <font-awesome-icon :icon="carretIcon" />
    </div>
    <div class="mt-5 w-full" v-if="isOpen">
      <slot>
        <p>Oups, somebody forgot to pass a slot</p>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "CollapsableAccordion",
  props: {
    header: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      isOpen: false,
    }
  },
  computed: {
    carretIcon() {
      return this.isOpen
        ? "fa-solid fa-angle-up"
        : "fa-solid fa-angle-down"
    },
  },
  methods: {
    openAccordion() {
      this.isOpen = !this.isOpen
    },
  },
}
</script>
