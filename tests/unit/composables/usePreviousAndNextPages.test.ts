import { ref } from "vue";
import usePreviousAndNextPages from "../../../src/composables/usePreviousAndNextPages";

describe("usePreviousAndNextPages", () => {

  it("returns undefined when the current page is 1", () => {
    const currentPage = ref(1)
    const maxPage = ref(10)
    const { previousPage } = usePreviousAndNextPages(currentPage, maxPage)
    expect(previousPage.value).toBeUndefined()
  })

  it("returns undefined when the current page is the max page", () => {
    const currentPage = ref(10)
    const maxPage = ref(10)
    const { nextPage } = usePreviousAndNextPages(currentPage, maxPage)
    expect(nextPage.value).toBeUndefined()
  })

  it("returns the previous page when the current page is greater than 1", () => {
    const currentPage = ref(2)
    const maxPage = ref(10)
    const { previousPage } = usePreviousAndNextPages(currentPage, maxPage)
    expect(previousPage.value).toBe(1)
  })

  it("returns the next page when the current page is less than the max page", () => {
    const currentPage = ref(9)
    const maxPage = ref(10)
    const { nextPage } = usePreviousAndNextPages(currentPage, maxPage)
    expect(nextPage.value).toBe(10)
  })
  
})
