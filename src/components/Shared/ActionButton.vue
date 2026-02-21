<template>
  <button :class="buttonClass">
    {{ label }}
  </button>
</template>

<script>
export default {
  name: "ActionButton",
  props: {
    label: {
      type: String,
      required: true,
      validator(value) {
        return value.length > 0
      },
    },
    type: {
      type: String,
      required: false,
      default: "secondary",
      validator(value) {
        return ["primary", "secondary"].includes(value)
      },
    },
  },
  computed: {
    buttonClass() {
      return {
        [this.type]: true,
      }
    },
  },
}
</script>

<style scoped>
button {
  @apply px-5 py-3 font-medium;
}

.primary {
  @apply rounded bg-brand-blue-1 text-white hover:shadow-blue;
}
.secondary {
  @apply bg-transparent text-brand-blue-2 hover:bg-brand-blue-1 hover:text-white;
}
</style>
