const BASE_API = 'https://2jfv7zjfe5.execute-api.ap-southeast-1.amazonaws.com'
const API_URL =
  process.env.NODE_ENV === 'development'
    ? `${BASE_API}/dev`
    : `${BASE_API}/prod`
export { API_URL }
