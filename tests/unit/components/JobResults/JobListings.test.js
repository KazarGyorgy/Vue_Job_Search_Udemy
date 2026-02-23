import { render, screen } from "@testing-library/vue"
import JobListings from "../../../../src/components/JobResults/JobFiltersSidebar/JobListings.vue"
import axios from "axios"
import { RouterLinkStub } from "@vue/test-utils"
import { createTestingPinia } from "@pinia/testing"
import { useJobsStore } from "../../../../src/stores/jobs"

vi.mock("axios")
const url = import.meta.env.VITE_APP_API_URL

describe("JobListings component tests", () => {
  const createRoute = (queryParams = {}) => ({
    query: {
      page: "5",
      ...queryParams,
    },
  })

  const renderJobListings = (route) => {
    const pinia = createTestingPinia({ stubActions: false })

    render(JobListings, {
      global: {
        plugins: [pinia],
        stubs: {
          routerLink: RouterLinkStub,
        },
        mocks: {
          $route: route,
        },
      },
    })
  }

  it("fetches jobs", () => {
    axios.get.mockResolvedValue({ data: [] })
    const $route = createRoute()
    renderJobListings($route)
    const jobsStore = useJobsStore()
    expect(jobsStore.FETCH_JOBS).toHaveBeenCalled()
  })

  it("displays maximum of 10 jobs", async () => {
    const $route = createRoute({ page: "1" })

    renderJobListings($route)

    const jobsStore = useJobsStore()
    jobsStore.jobs = Array(15).fill({})
    const jobListingItems = await screen.findAllByRole("listitem")
    expect(jobListingItems).toHaveLength(10)
  })

  describe("when params exclude page number", () => {
    it("dispays page number in no page number is provided", () => {
      const queryParams = { page: undefined }

      const $route = createRoute(queryParams)
      renderJobListings($route)
      expect(screen.getByText("Page 1")).toBeInTheDocument()
    })

    it("dispays page number in page number is provided", () => {
      const queryParams = { page: 3 }

      const $route = createRoute(queryParams)
      renderJobListings($route)
      expect(screen.getByText("Page 3")).toBeInTheDocument()
    })
  })

  describe("When user is on first page", () => {
    it("does not show previous page link", async () => {
      const queryParams = { page: "1" }

      const $route = createRoute(queryParams)
      renderJobListings($route)

      const jobsStore = useJobsStore()
      jobsStore.jobs = Array(15).fill({})

      await screen.findAllByRole("listitem")
      const previuosLink = screen.queryByRole("link", {
        name: /previous/i,
      })
      expect(previuosLink).not.toBeInTheDocument()
    })

    it(" shows next page link", async () => {
      const queryParams = { page: "1" }

      const $route = createRoute(queryParams)
      renderJobListings($route)

      const jobsStore = useJobsStore()
      jobsStore.jobs = Array(15).fill({})

      await screen.findAllByRole("listitem")
      const nextLink = screen.queryByRole("link", { name: /next/i })

      expect(nextLink).toBeInTheDocument()
    })
  })
})
