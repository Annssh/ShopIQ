import './index.css'
import { Footer, Navbar } from '../controller'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <div className='w-full min-h-screen flex flex-col flex-wrap'>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App
