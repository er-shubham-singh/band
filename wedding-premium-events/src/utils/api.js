import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'https://api.whiteorchidevents.com/v1',
  headers: {
    'Content-Type': 'application/json'
  }
})

export default api
