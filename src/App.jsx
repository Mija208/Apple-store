import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Contact from './Pages/Contact'
import Home from './Pages/Home'
import NotFound from './Pages/NotFound'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>

      <Routes>
        <Route path='/' element= {<Home/>}/>
        <Route path='contact' element= {<Contact/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App
