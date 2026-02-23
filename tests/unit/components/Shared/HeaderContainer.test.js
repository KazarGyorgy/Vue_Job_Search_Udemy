import HeaderContainer from "../../../../src/components/Shared/HeaderContainer.vue"
import { render, screen } from "@testing-library/vue"

describe("Header Container tests",()=>{
  it("renders the default slot content",()=>{
    render(HeaderContainer)
    expect(screen.getByText("Sample title")).toBeInTheDocument()
  })

  it("renders the default slot content with props",()=>{
    render(HeaderContainer,{slots: {default: "Bobo Corp"}})
    expect(screen.getByText("Bobo Corp")).toBeInTheDocument()
  })

  it("allows parent component to provide subtitle content",()=>{
    render(HeaderContainer,{slots: {subtitle: "Sample subtitle"}})
    expect(screen.getByText("Sample subtitle")).toBeInTheDocument()
  })
})
