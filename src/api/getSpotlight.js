import axios from "axios"

const getSpotlights = async () => {
  const url = `${import.meta.env.VITE_APP_API_URL}/spotlights`
  const respone = await axios.get(url)
  return respone.data
}

export default getSpotlights
