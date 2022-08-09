import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AboutPage from '../pages/AboutPage'
import ContactPage from '../pages/ContactPage'
import HomePage from '../pages/HomePage'
import ServicePage from '../pages/ServicePage'
import Footers from './Footer'
import Footer from './Footer'
import NavBar from './navBar/NavBar'

export default function Navigation() {
  return (
    <div>
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/service" element={<ServicePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </BrowserRouter>
      <Footers/>
    </div>
  )
}
