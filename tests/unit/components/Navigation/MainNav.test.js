// Render: komponens renderelése tesztkörnyezetbe
// Screen: DOM-lekérdező segédeszközök (getByText, getAllByRole, stb.)
import { render, screen } from "@testing-library/vue"
// A tesztelendő komponens
import MainNav from "@/components/Navigation/MainNav.vue"
// A describe funkció explicit importja Vitestből (normál esetben auto-import is működne)
import { describe } from "vitest"
// Valósághű billentyűzet- és egéresemény-szimuláció
import userEvent from "@testing-library/user-event"
// RouterLinkStub: a valódi <router-link> helyett egy egyszerű <a> tag-et renderel,
// hogy ne kelljen a teljes Vue Router-t konfigurálni a tesztekben
import { RouterLinkStub } from "@vue/test-utils"

describe("MainNav component tests", () => {
  // Szimulált $route objektum — a SubNav computed propertye ezt olvassa
  // ($route.name alapján dönti el, hogy a JobResults oldalon vagyunk-e)
  const $route = {
    name: "Home",
  }

  // Segédfüggvény (helper): kiszervezi a render hívást, hogy ne kelljen
  // minden tesztnél megismételni ugyanazt a konfigurációt (DRY elv)
  const renderMainNav = () => {
    render(MainNav, {
      global: {
        // mocks: a Vue globális tulajdonságait ($route, $store, stb.) helyettesíti
        // valódi Vue Router vagy Vuex feltelepítése nélkül
        mocks: {
          $route,
        },
        // stubs: valódi komponenseket cserél le üres "dummy" elemekre
        stubs: {
          // A font-awesome-icon ikon nincs regisztrálva → stuboljuk, hogy ne dobjona warningot
          "font-awesome-icon": true,
          // A <router-link>-et RouterLinkStub-ra cseréljük,
          // ami egy egyszerű <a> tagként viselkedik a tesztben
          RouterLink: RouterLinkStub,
        },
      },
    })
  }

  // 1. teszt: megjelenik-e a cég neve a navigációban?
  it("displays company name", () => {
    renderMainNav()
    // Megkeresi a DOM-ban a "Bobo Careers" szöveget tartalmazó elemet
    const companyName = screen.getByText("Bobo Careers")
    expect(companyName).toBeInTheDocument()
  })

  // 2. teszt: megjelennek-e a navigációs menüpontok?
  it("Check menuItems are existing", () => {
    renderMainNav()
    // getAllByRole("listitem"): az összes <li> elemet lekéri a DOM-ból (role="listitem")
    const menuItems = screen.getAllByRole("listitem")
    // .map(...): minden <li> elem szövegtartalmát kinyeri (textContent)
    const navigationMenuItemTexts = menuItems.map(
      (menuItem) => menuItem.textContent,
    )
    // Ellenőrzi, hogy pontosan ezek a menüpontok szerepelnek, ebben a sorrendben
    expect(navigationMenuItemTexts).toEqual([
      "Teams",
      "Location",
      "Life at Bobo Corp",
      "How we hire",
      "Students",
      "Jobs",
    ])
  })

  // 3. tesztcsoport: bejelentkezési folyamat vizsgálata
  describe("When the user logs in", () => {
    it("displays user prtofile picture", async () => {
      renderMainNav()

      // Először ellenőrzi, hogy a profilkép még NEM látható (nem vagyunk bejelentkezve)
      // queryByRole: null-t ad vissza, ha nem találja → nem dob hibát (ellentétben a getByRole-lal)
      // { name: /profilepicture/i }: az img alt szövege alapján keresi, kis/nagy betű érzéketlen
      let profileImage = screen.queryByRole("img", {
        name: /profilepicture/i,
      })
      expect(profileImage).not.toBeInTheDocument()

      // Megkeresi a "Sign in" gombot (role="button", szöveg alapján, kis/nagy betű érzéketlen)
      const loginButton = screen.getByRole("button", {
        name: /sign in/i,
      })

      // Szimulálja a kattintást a gombon → a komponens isLoggedIn állapota true-ra vált
      // async/await szükséges, mert a DOM frissülése aszinkron (Vue reaktivitás)
      await userEvent.click(loginButton)

      // Bejelentkezés után újra lekéri a profilképet — most már meg kell jelennie
      profileImage = screen.queryByRole("img", {
        name: /profilepicture/i,
      })
      expect(profileImage).toBeInTheDocument()
    })
  })
})
