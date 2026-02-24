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

  it("stores organizations when the user would like to filter jobs by",()=>{
    const store = useUserStore()
    expect(store.selectedOrganizations).toEqual([])
  })

  it("stores job types when the user would like to filter jobs by",()=>{
    const store = useUserStore()
    expect(store.selectedJobTypes).toEqual([])
  })

  it("stores degrees when the user would like to filter jobs by",()=>{
    const store = useUserStore()
    expect(store.selectedDegrees).toEqual([])
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
describe("ADD_SELECTED_ORGANIZATIONS",()=>{
  it("updates organizations the user has chosen to filter jobs by", () =>{
    const store = useUserStore()
    store.ADD_SELECTED_ORGANIZATIONS("Google")
    store.ADD_SELECTED_ORGANIZATIONS("Microsoft")
    expect(store.selectedOrganizations).toEqual(["Google", "Microsoft"])
  })

  it("removes organizations the user has chosen to filter jobs by", () =>{
    const store = useUserStore()
    store.ADD_SELECTED_ORGANIZATIONS("Google")
    store.ADD_SELECTED_ORGANIZATIONS("Microsoft")
    store.ADD_SELECTED_ORGANIZATIONS("Google")
    expect(store.selectedOrganizations).toEqual(["Microsoft"])
  })
})

