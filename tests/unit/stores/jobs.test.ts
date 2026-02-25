import { createPinia, setActivePinia } from "pinia"
import axios from "axios"
import type { Mock } from "vitest"
import { useJobsStore } from "@/stores/jobs"
import { useUserStore } from "@/stores/user"
import { createJob } from "../utils/createJob"

vi.mock("axios")

describe("state", () => {
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
    it("makes API request and stores received jobs", async () => {
      ;(axios.get as Mock).mockResolvedValue({
        data: ["Job 1", "Job 2"],
      })
      const store = useJobsStore()
      await store.FETCH_JOBS()
      expect(store.jobs).toEqual(["Job 1", "Job 2"])
    })
  })
})

describe("getters", () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  describe("UNIQUE_ORGANIZATIONS", () => {
    it("finds unique organizations from list of jobs", () => {
      const store = useJobsStore()
      store.jobs = [
        createJob({ organization: "Google" }),
        createJob({ organization: "Amazon" }),
        createJob({ organization: "Google" }),
      ]

      const result = store.UNIQUE_ORGANIZATIONS

      expect(result).toEqual(new Set(["Google", "Amazon"]))
    })
  })

  describe("UNIQUE_JOB_TYPES", () => {
    it("finds unique job types from list of jobs", () => {
      const store = useJobsStore()
      store.jobs = [
        createJob({ jobType: "Full-time" }),
        createJob({ jobType: "Temporary" }),
        createJob({ jobType: "Full-time" }),
      ]

      const result = store.UNIQUE_JOB_TYPES

      expect(result).toEqual(new Set(["Full-time", "Temporary"]))
    })
  })
  describe("UNIQUE_DEGREE_TYPES", () => {
    it("finds unique degree types from list of jobs", () => {
      const store = useJobsStore()
      store.jobs = [
        createJob({ degree: "Bsc" }),
        createJob({ degree: "Msc" }),
        createJob({ degree: "Ph.D." }),
      ]

      const result = store.UNIQUE_DEGREE_TYPES

      expect(result).toEqual(new Set(["Bsc", "Msc", "Ph.D."]))
    })
  })

  describe("INCLUDE_JOB_BY_ORGANIZATION", () => {
    describe("when the user has not selected any organizations", () => {
      it("includes job", () => {
        const userStore = useUserStore()
        userStore.selectedOrganizations = []
        const store = useJobsStore()
        const job = createJob({ organization: "Google" })

        const result = store.INCLUDE_JOB_BY_ORGANIZATION(job)

        expect(result).toBe(true)
      })
    })

    it("identifies if job is associated with given organizations", () => {
      const userStore = useUserStore()
      userStore.selectedOrganizations = ["Google", "Microsoft"]
      const store = useJobsStore()
      const job = createJob({ organization: "Google" })

      const result = store.INCLUDE_JOB_BY_ORGANIZATION(job)

      expect(result).toBe(true)
    })
  })

  describe("INCLUDE_JOB_BY_JOB_TYPE", () => {
    describe("when the user has not selected any job types", () => {
      it("includes job", () => {
        const userStore = useUserStore()
        userStore.selectedJobTypes = []
        const store = useJobsStore()
        const job = createJob({ jobType: "Full-time" })

        const result = store.INCLUDE_JOB_BY_JOB_TYPE(job)

        expect(result).toBe(true)
      })
    })

    it("identifies if job is associated with given job types", () => {
      const userStore = useUserStore()
      userStore.selectedJobTypes = ["Full-time", "Part-time"]
      const store = useJobsStore()
      const job = createJob({ jobType: "Part-time" })

      const result = store.INCLUDE_JOB_BY_JOB_TYPE(job)

      expect(result).toBe(true)
    })
  })

  describe("INCLUDE_JOB_BY_DEGREE_TYPE", () => {
    describe("when the user has not selected any degree types", () => {
      it("includes job", () => {
        const userStore = useUserStore()
        userStore.selectedDegreeTypes = []
        const store = useJobsStore()
        const job = createJob({ degree: "Msc" })

        const result = store.INCLUDE_JOB_BY_DEGREE_TYPE(job)

        expect(result).toBe(true)
      })
    })

    it("identifies if job is associated with given degree types", () => {
      const userStore = useUserStore()
      userStore.selectedDegreeTypes = ["Bsc", "Msc"]
      const store = useJobsStore()
      const job = createJob({ degree: "Msc" })

      const result = store.INCLUDE_JOB_BY_DEGREE_TYPE(job)

      expect(result).toBe(true)
    })
  })
})
