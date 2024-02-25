import axios from 'axios'
import { baseURL } from './data'

export const Authenticate = (userID, password, name) => {
  if (!userID || !password || !name) {
    console.log('error authenticating')
    return
  } else {
    axios
      .post(`${baseURL}one-note-auth`, { userID, password, name })
      .then((resp) => console.log(resp.data))
      .catch((e) => console.log(e))
  }
}
