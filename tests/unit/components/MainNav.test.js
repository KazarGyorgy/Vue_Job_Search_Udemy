import { render, screen } from "@testing-library/vue"
import MainNav from "@/components/MainNav.vue"

describe("MainNav component tests", () => {
  it("displays company name", () => {
    render(MainNav)
    const companyName = screen.getByText("Bobo Careers")
    expect(companyName).toBeInTheDocument()
  })

  it("Check menuItems are existing", () => {
    render(MainNav)
    const menuItems = screen.getAllByRole("listitem")
    const navigationMenuItemTexts = menuItems.map(
      (menuItem) => menuItem.textContent,
    )
    expect(navigationMenuItemTexts).toEqual([
      "Teams",
      "Location",
      "Life at Bobo Corp",
      "How we hire",
      "Students",
      "Jobs",
    ])
  })
})
