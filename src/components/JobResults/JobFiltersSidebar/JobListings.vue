<template>
  <main class="flex-auto bg-brand-gray-2 p-8">
    <ol>
      <job-listing
        v-for="job in displayedJobs"
        :key="job.id"
        :job="job"
      />
    </ol>
    <div class="mx-auto mt-8">
      <div class="flex flex-row flex-nowrap">
        <p class="flex-grow text-sm">Page {{ currentpage }}</p>
        <div class="flex items-center justify-center">
          <router-link
            v-if="previousPage"
            role="link"
            :to="{
              name: 'JobsResults',
              query: { page: previousPage },
            }"
            class="mx-3 text-sm font-semibold text-brand-blue-1"
          >
            Previous
          </router-link>
          <router-link
            v-if="nextPage"
            role="link"
            :to="{ name: 'JobsResults', query: { page: nextPage } }"
            class="mx-3 text-sm font-semibold text-brand-blue-1"
          >
            Next
          </router-link>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { mapActions, mapState } from "pinia"
import JobListing from "./JobListing.vue"
import { useJobsStore } from "../../../stores/jobs"
import { FETCH_JOBS } from "../../../stores/jobs"

export default {
  name: "JobListings",
  components: { JobListing },
  computed: {
    currentpage() {
      return Number.parseInt(this.$route?.query?.page || "1")
    },
    previousPage() {
      const prevPage = this.currentpage - 1
      const firstPage = 1
      return prevPage >= firstPage ? prevPage : undefined
    },
    ...mapState(useJobsStore, {
      jobs: "jobs",
      nextPage() {
        const nextPage = this.currentpage + 1
        const maxPage = Math.ceil(this.jobs.length / 10)

        return nextPage <= maxPage ? nextPage : undefined
      },
      displayedJobs() {
        const pageNumber = this.currentpage
        const firstJobIndex = (pageNumber - 1) * 10
        const lastJobIndex = pageNumber * 10
        return this.jobs.slice(firstJobIndex, lastJobIndex)
      },
    }),
  },
  async mounted() {
    this.FETCH_JOBS()
  },
  methods: {
    ...mapActions(useJobsStore, [FETCH_JOBS]),
  },
}
</script>
