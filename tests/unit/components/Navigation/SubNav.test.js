import { render, screen } from "@testing-library/vue"
import SubNav from "@/components/Navigation/SubNav.vue"
import { useJobsStore } from "@/stores/jobs"
import { createTestingPinia } from "@pinia/testing"

describe("SubNav", () => {
  const callRenderSubnav = (routeName) => {
    const pinia = createTestingPinia()
    const jobsStore = useJobsStore()
    const $route = {
      name: routeName,
    }

    render(SubNav, {
      global: {
        plugins: [pinia],
        mocks: {
          $route,
        },
        stubs: {
          "font-awesome-icon": true,
        },
      },
    })
    return { jobsStore }
  }

  describe("When the user is not on the jobs page", () => {
 
    it("DOES NOT display the job search bar", () => {
      const { jobsStore } = callRenderSubnav("Home")
      const numberOfJobsConstant = 2618
      jobsStore.FILTERED_JOBS_BY_ORGANIZATIONS = Array(numberOfJobsConstant).fill({})
      const jobSearch = screen.queryByText(numberOfJobsConstant)
      expect(jobSearch).not.toBeInTheDocument()
    })
  })
})
