import { render, screen } from "@testing-library/vue"
import SubNav from "../../../src/components/SubNav.vue"

describe("SubNav", () => {
  describe("When the user is on the jobs page", () => {
    it("displays the number of jobs", () => {
      render(SubNav, {
        global:{
          stubs:{
            "font-awesome-icon": true,
          }
        },
        data() {
          return {
            onJobResultsPage: true,
          }
        },
      })

      const jobCount = screen.getByText("165")
      expect(jobCount).toBeInTheDocument()
    })
  })

  describe("When the user is not on the jobs page", () => {
    it("DOES NOT display the job search bar", () => {
      render(SubNav, {
          global:{
          stubs:{
            "font-awesome-icon": true,
          }
        },
        data() {
          return {
            onJobResultsPage: false,
          }
        },
      })

      const jobSearch = screen.queryByText("165")
      expect(jobSearch).not.toBeInTheDocument()
    })
  })

})
