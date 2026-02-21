import { render, screen } from "@testing-library/vue"
import HeadLine from "@/components/JobSearch/HeadLine.vue"
import { describe, expect, vi } from "vitest"
import { nextTick } from "vue"

describe("HeadLine component tests", () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it("Displays introductory action verb", () => {
    render(HeadLine)

    const actionPhase = screen.getByRole("heading", {
      name: /build for everyone/i,
    })
    expect(actionPhase).toBeInTheDocument()
  })

  it("Changes the action verb every 3 seconds", () => {
    const mock = vi.fn()
    vi.stubGlobal("setInterval", mock)

    render(HeadLine)

    expect(mock).toHaveBeenCalled()
  })

  it("Swaps action verb after interval", async () => {
    render(HeadLine)
    vi.advanceTimersToNextTimer()

    await nextTick()
    const actionPPhase = screen.getByRole("heading", {
      name: /create for everyone/i,
    })
    expect(actionPPhase).toBeInTheDocument()
  })

it("removes interval when component disappears", () => {
  const clearIntervalSpy = vi.spyOn(window, "clearInterval")

  const { unmount } = render(HeadLine)
  unmount()
  expect(clearIntervalSpy).toHaveBeenCalled()
})

})
