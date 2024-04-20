import { useLocation } from 'react-router-dom'

const useQueryParams = () => {
  const { search } = useLocation()

  const userID = search.slice(2)
  console.log(userID)

  return userID
}

export default useQueryParams
