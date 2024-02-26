const Loader = ({ message }) => {
  return (
    <div className='fixed top-0 left-0 w-full h-full bg-gray-200 bg-opacity-50 flex flex-col items-center justify-center'>
      <div className='animate-spin rounded-full border-dashed border-2 border-transparent w-8 h-8'>
        <div className='w-4 h-4 bg-indigo-500 rounded-full'></div>
      </div>
      {message && <p className='text-gray-700 mt-4 font-bold '>{message}</p>}
    </div>
  )
}

export default Loader
