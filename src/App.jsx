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
import SuccessPage from './pages/SuccessPage'
import Crossword from './pages/Crossword'
import SecondCrossword from './pages/SecondCrossword'
import Menu from './pages/menu'
import Gift from './pages/Gift'
import Details from './pages/Details'

function App() {

  return (
    <Router>
      <div className="App">
      {/* <Header></Header> */}
      <Routes>
      <Route path="/" element ={<Menu></Menu>}></Route>
        <Route path="/menu" element={<Card></Card>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/SuccessPage" element={<SuccessPage></SuccessPage>}></Route>
        <Route path="/crossword" element ={<Crossword></Crossword>}></Route>
        <Route path="/second-crossword" element ={<SecondCrossword></SecondCrossword>}></Route>
        <Route path="/gift" element ={<Gift></Gift>}></Route>
        <Route path="/details" element ={<Details></Details>}></Route>
        
        
        
      </Routes>
      {/* <Footer></Footer> */}

      </div>
      
      

    </Router>

  )
}

export default App
