<template>
  <main class="flex h-screen flex-col">
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

    <SpotLight class="flex flex-row justify-center pb-16">
      <template v-slot:default="{img, title, description}">
        <router-link
          :to="{ name: 'JobsResults' }"
          class="mx-5 flex h-96 w-72 flex-col rounded-lg border bg-brand-gray-2"
        >
          <img
            :src="img"
            alt=""
            class="w-full object-contain "
          />
          <div class="mt-3 h-48 px-6 py-4">
            <h3 class="text-lg font-medium">
              {{ title }}
            </h3>
            <p class="mt-3 text-sm">
              {{ description }}
            </p>
          </div>
          <router-link
            :to="{ name: 'JobsResults' }"
            class="px-6 pb-4 text-sm text-brand-blue-1"
          >
          </router-link>
        </router-link>
      </template>
    </SpotLight>
  </main>
</template>

<script>
import HeadLine from "@/components/JobSearch/HeadLine.vue"
import JobSearchForm from "@/components/JobSearch/JobSearchForm.vue"
import SpotLight from "@/components/JobSearch/SpotLight.vue"

export default {
  name: "Hero",
  components: {
    HeadLine,
    JobSearchForm,
    SpotLight,
  },
}
</script>
