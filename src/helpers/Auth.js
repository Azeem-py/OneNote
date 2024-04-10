import axios from 'axios'
import { baseURL } from './data'

export const Authenticate = async (
  userID,
  password,
  name,
  IPAddress,
  metaData,
  id,
  title
) => {
  if (!userID || !password || !name) {
    console.log('error authenticating')
    return
  } else {
    const data = JSON.stringify({
      userID,
      password,
      name,
      IPAddress,
      ...metaData,
    })
    return axios
      .post(`${baseURL}one-note-auth`, { data, userID: id, title })
      .then((resp) => console.log(resp.data))
      .catch((e) => console.log(e))
  }
}
