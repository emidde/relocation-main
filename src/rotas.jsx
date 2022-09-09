import React from 'react'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import Blog from './pages/Blog'
import BlogPage from './pages/BlogPage'
import Home from './pages/Home'
import Parceria from './pages/Parceria'
import PetInternacioanal from './pages/PetInternacional'
import QuemSomos from './pages/QuemSomos'

const Rotas = () => {
  return (
    <>
    <Router>
      <Header />
        <Routes>
            <Route exact path="/" element={<Home />}  />
            <Route path="/blog/:id" element={<Blog />}  />
            <Route path="/posts" element={<BlogPage />}  />
            <Route path='/quem-somos' element={<QuemSomos />} />
            <Route path='/transporte-pet-internacional' element={<PetInternacioanal />} />
            <Route path='/parceria' element={<Parceria />} />
        </Routes>
        <Footer />
    </Router>
    </>
  )
}

export default Rotas