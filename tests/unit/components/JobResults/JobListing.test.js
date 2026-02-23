import { render, screen } from "@testing-library/vue"
import JobListing from "../../../../src/components/JobResults/JobFiltersSidebar/JobListing.vue"
import { RouterLinkStub } from "@vue/test-utils"

describe("JobListing component tests", () => {
  const createJobProps = (jobprops = {}) => ({
    id: 1,
    title: "Software Engineer",
    organization: "Vue and Me",
    locations: ["Lisbon", "Oslo"],
    minimumQualifications: ["HTML", "CSS", "JavaScript"],
    preferredQualifications: ["Vue", "React", "Angular"],
    description: "Software Engineer",
    dateAdded: "2021-07-04",
    ...jobprops,
  })

  const renderJobListing = (jobProps) => {
    render(JobListing, {
      global: {
        stubs: {
          routerLink: RouterLinkStub,
        },
      },
      props: {
        job:jobProps,
      },
    })
  }
  it("renders job title", () => {
    const jobProps = createJobProps({title: "VUE Engineer"})
    renderJobListing(jobProps)
    expect(screen.getByText("VUE Engineer")).toBeInTheDocument()
  })

  it("renders job organization", () => {
    const jobProps = createJobProps({organization: "Google"})
    renderJobListing(jobProps)
    expect(screen.getByText("Google")).toBeInTheDocument()
  })

  it("renders job locations", () => {
    const jobProps = createJobProps({locations: ["Lisbon", "Oslo"]})
    renderJobListing(jobProps)
    expect(screen.getByText("Lisbon")).toBeInTheDocument()
  })
  it("renders job qualifications", () => {
    const jobProps = createJobProps({minimumQualifications: ["HTML", "CSS", "JavaScript"]})
    renderJobListing(jobProps)
    expect(screen.getByText("HTML")).toBeInTheDocument()
    expect(screen.getByText("CSS")).toBeInTheDocument()
    expect(screen.getByText("JavaScript")).toBeInTheDocument()
  })

  it("renders job preferred qualifications", () => {
    const jobProps = createJobProps({preferredQualifications: ["Vue", "React", "Angular"]})
    renderJobListing(jobProps)
    expect(screen.getByText("Vue")).toBeInTheDocument()
    expect(screen.getByText("React")).toBeInTheDocument()
    expect(screen.getByText("Angular")).toBeInTheDocument()
  })

  it("renders job description", () => {
    const jobProps = createJobProps({description: "Software Engineer"})
    renderJobListing(jobProps)
    expect(screen.getByText("Software Engineer")).toBeInTheDocument()
  })
})
