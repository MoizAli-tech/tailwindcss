import React from 'react'
import Header from './Header'
import HomeCSS from "./Home.module.css"
const Home = () => {
  return (
    <div className={HomeCSS.Home}>

        <h1 className={HomeCSS.heading}>Welcome to your own very home</h1>
        
    </div>
  )
}

export default Home