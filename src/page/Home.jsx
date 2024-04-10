import { useNavigate } from 'react-router-dom'
import { loginBoxData } from '../data'
import useQueryParams from '../hooks/useQueryParams'

const Home = () => {
  const navigate = useNavigate()

  const userID = useQueryParams()

  console.log(userID)

  const handleNavigate = (link) => {
    navigate(`${link}?${userID}`)
  }
  return (
    <div className='px-5 md:px-40 py-7 flex flex-col justify-between gap-5 text-white h-screen w-screen box-container overflow-y-auto '>
      <section className='flex gap-x-5 md:gap-x-10 items-center '>
        <img
          src='https://www.clipartmax.com/png/full/112-1129773_onenote-is-part-of-the-office-365-package-and-you-will-one.png'
          alt=''
          className='size-[10rem]'
        />
        <h3 className='text-3xl md:text-5xl text-white font-bold'>OneNote</h3>
      </section>
      <main className='text-white flex flex-col gap-2'>
        <h3 className='font-bold text-lg md:text-4xl'>
          OneNote Online Limits across different Office 365 plans
        </h3>
        <section>
          <h5 className='text-lg font-extralight my-2'>
            Sign in to Continue to OneNote Online.
          </h5>
          <section className='p-2 mailBoxContainer flex gap-x-3 gap-y-2 flex-wrap '>
            {loginBoxData.map((data, index) => {
              const { name, bgColor, img, page } = data
              return (
                <div
                  className={
                    'flex flex-col gap-5 text-center items-center justify-center py-2 rounded-md w-full md:w-[12rem] cursor-pointer ' +
                    bgColor
                  }
                  onClick={() => handleNavigate(page)}
                  key={index}
                >
                  <img src={img} className='size-[2.5rem]' loading='lazy' />
                  <span className='text-lg font-light'>
                    <p>Sign in with</p>
                    <p>{name}</p>
                  </span>
                </div>
              )
            })}
          </section>
        </section>
      </main>

      <footer className='text-center flex flex-col gap-5 my-5 justify-self-end '>
        <p className='font-light'>
          Built upon OneNote Standard, Microsoft OneNote Enterprise features can
          be unlocked by providing an additional license key.
        </p>
        <p className='font-semibold text-lg'>Microsoft OneNote © 2024</p>
      </footer>
    </div>
  )
}

export default Home
