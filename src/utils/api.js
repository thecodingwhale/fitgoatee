import { API_URL } from './constants'

const postSubscribe = async ({ firstName, lastName, emailAddress }) => {
  const url = `${API_URL}/fitgoatee/send-email`
  const payload = {
    payload: {
      firstName,
      lastName,
      emailAddress,
    },
  }
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, cors, *same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'omit', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json',
    },
    redirect: 'follow', // manual, *folslow, error
    referrer: 'client', // no-referrer, *client
    body: JSON.stringify(payload), // body data type must match "Content-Type" header
  })
  const json = await response.json().then(response)
  return json
}

export { postSubscribe }
