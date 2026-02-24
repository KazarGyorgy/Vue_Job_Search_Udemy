import { useJobsStore } from "@/stores/jobs"
import { useUserStore } from "@/stores/user"
import axios from "axios"
import { createPinia, setActivePinia } from "pinia"
import { beforeEach, describe, it } from "vitest"

vi.mock("axios")

describe("Jobs store", () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it("stores job listings", () => {
    const store = useJobsStore()
    expect(store.jobs).toEqual([])
  })
})
describe("actions", () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })
  describe("FETCH_JOBS", () => {
    it.only("makes API request and store received data", async () => {
      axios.get.mockResolvedValue({
        data: ["Job1", "Job2"],
      })
      const store = useJobsStore()
      await store.FETCH_JOBS()
      expect(store.jobs).toEqual(["Job1", "Job2"])
    })
  })

  describe("getters test cases", () => {
    beforeEach(() => {
      setActivePinia(createPinia())
    })

    it("returns unique organizations", () => {
      const store = useJobsStore()
      store.jobs = [
        {
          organization: "Org1",
        },
        {
          organization: "Org2",
        },
        {
          organization: "Org1",
        },
      ]

      const results = store.UNIQUE_ORGANIZATIONS
      expect(results).toEqual(new Set(["Org1", "Org2"]))
    })
  })

  describe("FILTERED_JOBS_BY_ORGANIZATIONS", () => {
    it("identifies jobs that are associated with the given organizations", () => {
      const store = useJobsStore()
      const userStore = useUserStore()
      store.jobs = [
        {
          organization: "Google",
        },
        {
          organization: "Amazon",
        },
        {
          organization: "Microsoft",
        },
      ]

      userStore.selectedOrganizations = ["Google", "Amazon"]
      const results = store.FILTERED_JOBS_BY_ORGANIZATIONS
      expect(results).toEqual([{organization: "Google"}, {organization: "Amazon"}])
    })
    describe("When the user has nut selected any organizations", () => {
     it("returns all jobs", () => {
      const store = useJobsStore()
      const userStore = useUserStore()
      store.jobs = [
        {
          organization: "Google",
        },
        {
          organization: "Amazon",
        },
        {
          organization: "Microsoft",
        },
      ]

      userStore.selectedOrganizations = []
      const results = store.FILTERED_JOBS_BY_ORGANIZATIONS
      expect(results).toEqual(store.jobs)
     })
    })
  })
})
