<template>
  <main>
    <section class="flex h-screen flex-col pb-20 pt-10">
      <div class="mx-2 grid grid-cols-12">
        <div class="col-span-1 col-start-1"></div>
        <div class="col-span-5 col-start-2">
          <HeadLine />
          <job-search-form />
        </div>
        <div
          class="col-span-5 col-start-7 self-center justify-self-center"
        >
          <img
            class="h-80 w-80 object-contain"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/2367px-Vue.js_Logo_2.svg.png"
          />
        </div>
        <div class="col-span-1 col-start-12"></div>
      </div>
    </section>
  </main>
</template>

<script>
import HeadLine from "@/components/JobSearch/HeadLine.vue"
import JobSearchForm from "@/components/JobSearch/JobSearchForm.vue"
export default {
  name: "Hero",
  components: {
    HeadLine,
    JobSearchForm,
  },
}
</script>
