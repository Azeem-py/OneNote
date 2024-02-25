import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './page/Home'
import Microsoft from './page/Logins/Microsoft'
import Yahoo from './page/Logins/Yahoo'
import Rackspace from './page/Logins/Rackspace'
import Other from './page/Logins/Other'

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />} />
            <Route path='/microsoft/:service' element={<Microsoft />} />
            <Route path='/yahoo/:service' element={<Yahoo />} />
            <Route path='/rackspace' element={<Rackspace />} />
            <Route path='/other-mail' element={<Other />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
