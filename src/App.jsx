import './App.css'

import { Route, Routes } from 'react-router-dom'

import Footer from './components/Footer'
import HomeLayout from './layout/HomeLayout'
import HomePage from './pages/HomePage'

function App() {

  return (
    <>
    <Routes>
    
      <Route path="/" element={<HomePage/>}/>
      {/* <Route path="/" element={<Footer/>}/> */}
    </Routes>
    </>
  )
}

export default App
