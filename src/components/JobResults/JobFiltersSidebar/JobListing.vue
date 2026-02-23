<template>
  <li class="mb-7">
    <router-link
      :to="{ name: 'JobListing', params: { id: job.id } }"
      class="hover:shadow-gray mx-auto block rounded border border-solid border-brand-gray-2 bg-white"
    >
      <div
        class="mx-8 border-b border-solid border-brand-gray-2 pb-2 pt-5"
      >
        <h2 class="mb-2 text-2xl">
          {{ job.title }}
        </h2>
        <div class="flex flex-row align-middle">
          <div class="mr-5">
            <span>{{ job.organization }}</span>
          </div>
          <div>
            <li
              v-for="location of job.locations"
              :key="location"
              class="mr-5 inline-block"
            >
              {{ location }}
            </li>
          </div>
        </div>
      </div>

      <div class="px-8 py-4">
        <div>
          <h3 class="mb-2 mt-1">Qualifications:</h3>
          <div>
            <ul class="list-disc pl-8">
              <li
                v-for="qualification in job.minimumQualifications"
                :key="qualification"
              >
                {{ qualification }}
              </li>
            </ul>
          </div>
        </div>
        <div>
          <h3 class="mb-2 mt-1">Preferred Qualifications:</h3>
          <div>
            <ul class="list-disc pl-8">
              <li
                v-for="preferredQualification in job.preferredQualifications"
                :key="preferredQualification"
              >
                {{ preferredQualification }}
              </li>
            </ul>
          </div>
        </div>
        <div>
          <h3 class="mb-2 mt-1">Description:</h3>
          <div>
            <ul class="list-disc pl-8">
              <li
                v-for="item in job.description"
                :key="item"
              >
                {{ item }}
              </li>
            </ul>
          </div>
        </div>

        <div class="mt-2 text-center">
          <router-link
            :to="{ name: 'JobListing', params: { id: job.id } }"
            class="text-brand-blue-1"
            >Expand</router-link
          >
        </div>
      </div>
    </router-link>
  </li>
</template>

<script>
export default {
  name: "JobListing",
  props: {
    job: {
      type: Object,
      required: true,
    },
  },
}
</script>
