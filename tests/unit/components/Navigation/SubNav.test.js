// Render: rendereli a komponenst a tesztkörnyezetbe
// Screen: DOM-lekérdező segédeszközök (getByText, queryByText, stb.)
import { render, screen } from "@testing-library/vue"
// A tesztelendő komponens
import SubNav from "@/components/Navigation/SubNav.vue"

// A teljes SubNav komponens tesztblokka
describe("SubNav", () => {
  const callRenderSubnav = (routeName) => {
    // Szimulált $route objektum — a SubNav computed propertye ezt olvassa:
    // onJobResultsPage() { return this.$route.name === "JobResults" }
    // Ha a name "JobResults", az onJobResultsPage === true lesz → a sáv megjelenik
    const $route = {
      name: routeName,
    }

    // A komponens renderelése globális mock és stub beállításokkal
    render(SubNav, {
      global: {
        // mocks: globálisan elérhető Vue tulajdonságokat helyettesít (pl. $route, $store)
        // A valódi Vue Router helyett egy egyszerű objektumot adunk be,
        // hogy ne kelljen a teljes routert konfigurálni tesztkörnyezetben
        mocks: {
          $route,
        },
        // stubs: valódi komponenseket helyettesít üres "dummy" elemmel
        // A font-awesome-icon ikonkomponens nincs regisztrálva a tesztben,
        // ezért "stuboljuk", különben Vue warningot kapnánk
        stubs: {
          "font-awesome-icon": true,
        },
      },
    })
  }
  // 1. eset: a felhasználó a JobResults oldalon van
  describe("When the user is on the jobs page", () => {
    it("displays the number of jobs", () => {
      callRenderSubnav("JobResults")
      // getByText: megkeresi a "165" szöveget tartalmazó DOM elemet
      // Ha nem találja → a teszt azonnal megbukik (nem kell külön expect)
      const jobCount = screen.getByText("165")
      expect(jobCount).toBeInTheDocument()
    })
  })

  describe("When the user is not on the jobs page", () => {
    it("DOES NOT display the job search bar", () => {
      callRenderSubnav("Home")
      // queryByText: hasonló a getByText-hez, DE ha nem találja az elemet,
      // nem dob hibát — helyette null-t ad vissza
      // Ezért használjuk itt, ahol azt ellenőrizzük, hogy valami NEM létezik
      const jobSearch = screen.queryByText("165")

      // A "165" szöveg NE legyen jelen a DOM-ban (mert nem a Jobs oldalon vagyunk)
      expect(jobSearch).not.toBeInTheDocument()
    })
  })
})
