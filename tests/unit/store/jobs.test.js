import { useJobsStore } from "@/stores/jobs"
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
})
