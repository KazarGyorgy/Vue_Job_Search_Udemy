import { render, screen } from "@testing-library/vue"
import MainNav from "@/components/MainNav.vue"
import { describe } from "vitest"
import userEvent from "@testing-library/user-event"

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

  describe("When the user logs in", () => {
    it("displays user prtofile picture", async () => {
      render(MainNav)
      let profileImage = screen.queryByRole("img", {
        name: /profilepicture/i, //i for case insensitive
      })
      expect(profileImage).not.toBeInTheDocument()

      const loginButton = screen.getByRole("button", {
        name: /sign in/i,
      })
      await userEvent.click(loginButton)
      profileImage = screen.queryByRole("img", {
        name: /profilepicture/i, //i for case insensitive
      })
      expect(profileImage).toBeInTheDocument()
    })
  })
})
