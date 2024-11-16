import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Card from './pages/card'
import Header from './components/header'
import './index.css'
import Footer from './components/footer'
import Contact from './pages/contact'

function App() {

  return (
    <Router>
      <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Card></Card>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
      </Routes>
      <Footer></Footer>

      </div>
      
      

    </Router>

  )
}

export default App
