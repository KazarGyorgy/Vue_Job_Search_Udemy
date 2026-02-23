import axios from "axios"

import getJobs from "@/api/getJobs"
import { beforeEach, expect } from "vitest"

vi.mock("axios")

describe("getJobs", () => {
  beforeEach(() => {
    axios.get.mockResolvedValue({
      data: [{ id: 1, title: "Software Engineer" }],
    })
  })

  it("should return jobs", async () => {
    await getJobs()
    expect(axios.get).toHaveBeenCalledWith(
      `${process.env.VITE_APP_API_URL}/jobs`,
    )
  })

  it("extracts jobs from response", async () => {
    const jobs = await getJobs()
    expect(jobs).toEqual([{ id: 1, title: "Software Engineer" }])
  })
})
