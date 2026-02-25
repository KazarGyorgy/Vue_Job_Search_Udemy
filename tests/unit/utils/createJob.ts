import type { Job } from "@/api/types"

export const createJob = (job: Partial<Job> = {}): Job => ({
    id: 1,
    title: "Job 1",
    organization: "Organization 1",
    degree: "Degree 1",
    jobType: "Job Type 1",
    locations: ["Location 1"],
    minimumQualifications: ["Minimum Qualification 1"],
    preferredQualifications: ["Preferred Qualification 1"],
    dateAdded: "2021-07-04",
    description: ["Description 1"],
    ...job,
  })
