import { render, screen } from "@testing-library/vue"
import CollapsableAccordion from "@/components/Shared/CollapsableAccordion.vue"
import userEvent from "@testing-library/user-event"

describe("CollapsableAccordion", () => {
  const renderCollapsableAccordion = (config = {}) => {
    render(CollapsableAccordion, {
      global: {
        stubs: {
          "font-awesome-icon": true,
        },
      },
      props: {
        header: "Test Header",
      },
      slots: {
        default: "<div>Test Content</div>",
      },
      ...config,
    })
  }

  it("renders the header", () => {
    renderCollapsableAccordion({ props: { header: "Test Header" } })
    expect(screen.getByText("Test Header")).toBeInTheDocument()
  })

  it("renders child content", async () => {
    renderCollapsableAccordion({
      props: {
        header: "My Slots",
      },
      slots: {
        default: "<div>Test Content</div>",
      },
    })
    expect(screen.queryByText("Test Content")).not.toBeInTheDocument()

    const button = screen.getByRole("button", { name: /My Slots/i })
    await userEvent.click(button)
    expect(screen.getByText("Test Content")).toBeInTheDocument()
  })

  describe("when parent does not contains nested elements", () => {
    it("renders it with default slot content", async () => {
      renderCollapsableAccordion({
        props: {
          header: "My Slots",
        },
        slots: {},
      })
      expect(
        screen.queryByText("Oups, somebody forgot to pass a slot"),
      ).not.toBeInTheDocument()

      const button = screen.getByRole("button", { name: /My Slots/i })
      await userEvent.click(button)
      expect(
        screen.getByText("Oups, somebody forgot to pass a slot"),
      ).toBeInTheDocument()
    })
  })
})
