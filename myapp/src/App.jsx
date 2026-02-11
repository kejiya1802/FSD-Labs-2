import React from 'react'
import Navbar from './component/Navbar'
import Home from './component/Home'
import About from './component/About'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path = '/' element = {<Home />} />
          <Route path = '/about' element = {<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
