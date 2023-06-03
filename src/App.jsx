import React from 'react'
import Header from "./Header"
import {Routes,Route} from "react-router-dom"
import Home from "./Home"
import Services from "./Services"
import Contact from "./Contact"

import "./App.css";
const App = () => {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      
    </div>
  )
}

export default App