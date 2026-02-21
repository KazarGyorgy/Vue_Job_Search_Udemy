import { render, screen } from "@testing-library/vue"
import ActionButton from "@/components/Shared/ActionButton.vue"

describe("Action button component", () => {
  it("Action button has a label", () => {
    render(ActionButton, { props: { label: "Sign in" } })
    expect(screen.getByText("Sign in")).toBeInTheDocument()
  })

  it("Action button has a default style", () => {
    render(ActionButton, { props: { label: "Sign in" } })
    expect(screen.getByRole("button")).toHaveClass("secondary")
  })

  it("Action button has primary style", () => {
    render(ActionButton, {
      props: { label: "Sign in", type: "primary" },
    })
    expect(screen.getByRole("button")).toHaveClass("primary")
  })
})
