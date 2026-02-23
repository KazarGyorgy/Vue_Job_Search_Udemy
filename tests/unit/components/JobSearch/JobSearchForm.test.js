import { render, screen } from "@testing-library/vue"
import userEvent from "@testing-library/user-event"
import JobSearchForm from "../../../../src/components/JobSearch/JobSearchForm.vue"

describe("JobSearchForm", () => {
  describe("when the user submits the form", () => {
    it("directs user to job results page with user's search parameters", async () => {
      const mockRouterPush = vi.fn();
      const $router = {
        push: mockRouterPush,
      }
      render(JobSearchForm, {
        global: {
          mocks: {
            $router,
          },
          stubs: {
            "font-awesome-icon": true,
          },
        },
      })
      const roleInput = screen.getByRole("textbox", { name: /role/i })
      await userEvent.type(roleInput, "Software Engineer")

      const locationInput = screen.getByRole("textbox", { name: /where/i })
      await userEvent.type(locationInput, "Szeged")

      const submitButton = screen.getByRole("button", { name: /search/i })
      await userEvent.click(submitButton)

      expect(mockRouterPush).toHaveBeenCalledWith({
        name: "JobsResults",
        query: {
          role: "Software Engineer",
          location: "Szeged",
        },
      })
    })
  })
})
