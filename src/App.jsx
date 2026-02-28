import React from 'react'
import Navbar from './Components/Navbar'
import { Routes,Route } from 'react-router-dom'

import Project from './Pages/Project'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Home from './Pages/Home'
import Footer from './Components/Footer'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Project" element={<Project />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />

      </Routes>

      <Footer />
    </>
  )
}

export default App