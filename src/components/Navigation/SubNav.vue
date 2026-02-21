<template>
  <section
    class="mx-2 flex h-16 w-full items-center border-b border-solid border-brand-gray-1 px-3"
  >
    <div class="flex h-full items-center px-8">
      <div v-if="onJobResultsPage">
        <font-awesome-icon :icon="['fas', 'search']" class="mr-3" />
        <span>
          <span class="text-bold text-green-800">165</span> jobs
          matches</span
        >
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "SubNav",
  data() {
    return {
      onJobResultsPage: true,
    }
  },
}
</script>
