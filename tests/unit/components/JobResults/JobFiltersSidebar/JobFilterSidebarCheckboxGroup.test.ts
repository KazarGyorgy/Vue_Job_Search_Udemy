import { render, screen } from "@testing-library/vue"
import userEvent from "@testing-library/user-event"

import JobFilterSidebarCheckboxGroup from "@/components/JobResults/JobFiltersSidebar/JobFilterSidebarCheckboxGroup.vue"
import { useRouter } from "vue-router"
import type { Mock } from "vitest"

vi.mock("vue-router")

const useRouterMock = useRouter as Mock

describe("JobFiltersSidebarCheckboxGroup", () => {
  interface CheckboxGroupProps {
    header: string
    uniqueValues: Set<string>
    action: Mock
  }
  const createProps = (props: Partial<CheckboxGroupProps>) => {
    return {
      header: "Some Header",
      uniqueValues: new Set(["ValueA", "ValueB"]),
      action: vi.fn(),
      ...props,
    }
  }

  const renderJobFiltersSidebarCheckBoxGroup = (props: CheckboxGroupProps) => {
    render(JobFilterSidebarCheckboxGroup, {
      props: {
        ...props,
      },
      global: {
        stubs: {
          FontAwesomeIcon: true,
        },
      },
    })
  }

  it("renders unique list of values", async () => {
    const props = createProps({
      header: "Job Types",
      uniqueValues: new Set(["Full-time", "Part-time"]),
    })

    renderJobFiltersSidebarCheckBoxGroup(props)

    const button = screen.getByRole("button", { name: /job types/i })
    await userEvent.click(button)

    const jobTypesListItems = screen.getAllByRole("listitem")
    const jobTypes = jobTypesListItems.map((node) => node.textContent)
    expect(jobTypes).toEqual(["Full-time", "Part-time"])
  })

  describe("when user clicks checkbox", () => {
    it("communicates that user has selected checkbox for value", async () => {
      useRouterMock.mockReturnValue({
        push: vi.fn(),
      })

      const action = vi.fn()
      const props = createProps({
        header: "Job Types",
        uniqueValues: new Set(["Full-time", "Part-time"]),
        action,
      })

      renderJobFiltersSidebarCheckBoxGroup(props)

      const button = screen.getByRole("button", {
        name: /job types/i,
      })
      await userEvent.click(button)

      const fullTimeCheckbox = screen.getByRole("checkbox", {
        name: /full-time/i,
      })
      await userEvent.click(fullTimeCheckbox)

      expect(action).toHaveBeenCalledWith(["Full-time"])
    })

    it("navigates user to job results page to see fresh batch of filtered jobs", async () => {
      const push = vi.fn()
      useRouterMock.mockReturnValue({
        push,
      })

      const props = createProps({
        header: "Job Types",
        uniqueValues: new Set(["Full-time"]),
      })

      renderJobFiltersSidebarCheckBoxGroup(props)

      const button = screen.getByRole("button", {
        name: /job types/i,
      })
      await userEvent.click(button)

      const fullTimeCheckbox = screen.getByRole("checkbox", {
        name: /full-time/i,
      })
      await userEvent.click(fullTimeCheckbox)

      expect(push).toHaveBeenCalledWith({
        name: "JobResults",
      })
    })
  })
})
