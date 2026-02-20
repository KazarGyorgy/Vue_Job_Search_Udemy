import { describe } from "vitest"
import nextElementInList from "../../../src/utils/nextElementInList"

describe("nextElementInList", () => {
  it("returns the next element in the list", () => {
    const list = ["A", "B", "C", "D"]
    const value = "C"
    const nextElement = nextElementInList(list, value)
    expect(nextElement).toBe("D")
  })

  it("returns the first element in the list if the value is the last element", () => {
    const list = ["A", "B", "C", "D", "E", "F"]
    const value = "F"
    const nextElement = nextElementInList(list, value)
    expect(nextElement).toBe("A")
  })
})
