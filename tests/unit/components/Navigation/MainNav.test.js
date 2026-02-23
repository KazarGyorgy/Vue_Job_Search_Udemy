import { render, screen } from "@testing-library/vue"
import MainNav from "@/components/Navigation/MainNav.vue"
import { describe } from "vitest"
import userEvent from "@testing-library/user-event"
import { RouterLinkStub } from "@vue/test-utils"
import { createTestingPinia } from "@pinia/testing"
import { useUserStore } from "../../../../src/stores/user"

describe("MainNav component tests", () => {
  const renderMainNav = () => {
    const pinia = createTestingPinia({ stubActions: false })
    const $route = {
      name: "Home",
    }
    render(MainNav, {
      global: {
        plugins: [pinia],
        mocks: {
          $route,
        },
        stubs: {
          "font-awesome-icon": true,
          RouterLink: RouterLinkStub,
        },
      },
    })
  }

  it("displays company name", () => {
    renderMainNav()
    const companyName = screen.getByText("Bobo Careers")
    expect(companyName).toBeInTheDocument()
  })

  it("Check menuItems are existing", () => {
    renderMainNav()
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
      renderMainNav()
      const userStore = useUserStore()
      let profileImage = screen.queryByRole("img", {
        name: /profilepicture/i,
      })
      expect(profileImage).not.toBeInTheDocument()

      const loginButton = screen.getByRole("button", {
        name: /sign in/i,
      })

      userStore.isLoggedIn = true
      await userEvent.click(loginButton)
      profileImage = screen.queryByRole("img", {
        name: /profilepicture/i,
      })
      expect(profileImage).toBeInTheDocument()
    })
  })
})
