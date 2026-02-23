import axios from "axios"

const getJobs = async () => {
  const url = `${import.meta.env.VITE_APP_API_URL}/jobs`
  const respone = await axios.get(url)
  return respone.data
}

export default getJobs
