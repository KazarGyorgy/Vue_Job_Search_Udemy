// Komponens renderelése tesztkörnyezetbe + DOM lekérdező segédeszközök
import { render, screen } from "@testing-library/vue"
// A tesztelendő komponens
import TextInput from "@/components/Shared/TextInput.vue"
// Valósághű billentyűleütés szimulációhoz
import userEvent from "@testing-library/user-event"

describe("TextInput component tests", () => {
  it("Communicates that user has entered character", async () => {
    // Rendereli a komponenst üres modelValue proppal,
    // az emitted() segítségével követhetők a kibocsátott események
    const { emitted } = render(TextInput, {
      props: {
        modelValue: "",
      },
    })

    // Megkeresi az <input type="text"> elemet a DOM-ban
    const input = screen.getByRole("textbox")

    // Szimulálja a "SYC" begépelését — karakterenként (3 leütés)
    await userEvent.type(input, "SYC")

    // Lekéri az összes "update:modelValue" eseményt (Vue v-model mechanizmus)
    const messages = emitted()["update:modelValue"]

    // Ellenőrzi, hogy minden leütésnél a helyes értékkel emitált a komponens:
    // 1. leütés → "S", 2. leütés → "SY", 3. leütés → "SYC"
    expect(messages).toEqual([["S"], ["SY"], ["SYC"]])
  })
})
