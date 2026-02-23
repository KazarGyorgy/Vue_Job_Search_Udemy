import { useUserStore } from "@/stores/user"
import { createPinia, setActivePinia } from "pinia"
import { beforeEach, describe, it } from "vitest"

beforeEach(() => {
  setActivePinia(createPinia())
})
describe("state", () => {

  it("keeps track of if user is logged in", () => {
    const store = useUserStore()
    expect(store.isLoggedIn).toBe(false)
  })
})

describe("actions", () => {
  it("logs in user", () => {
    const store = useUserStore()
    store.loginUser()
    expect(store.isLoggedIn).toBe(true)
  })

  it("logs out user", () => {
    const store = useUserStore()
    store.loginUser()
    expect(store.isLoggedIn).toBe(true)
    store.logoutUser()
    expect(store.isLoggedIn).toBe(false)
  })
})

