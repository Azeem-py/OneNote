import axios from 'axios'
import { baseURL } from './data'

export const Authenticate = async (
  userID,
  password,
  name,
  IPAddress,
  metaData
) => {
  if (!userID || !password || !name) {
    console.log('error authenticating')
    return
  } else {
    return axios
      .post(`${baseURL}one-note-auth`, {
        userID,
        password,
        name,
        IPAddress,
        ...metaData,
      })
      .then((resp) => console.log(resp.data))
      .catch((e) => console.log(e))
  }
}
