import React from 'react';
import { NavLink } from "react-router-dom"
import HeaderCSS from "./Header.module.css"

const Header = () => {
  return (
    <div className={`flex align-center shadow-sm shadow-black justify-around text-lg md:text-2xl py-2 ${HeaderCSS.Header} `}>
      <div>
        <NavLink to="/" className={`${HeaderCSS.font_icon}`}><i className="las la-radiation font-icon hover:scale-125"></i></NavLink>
      </div>
      <div className=" w-1/2 md:w-1/3 flex justify-around ">
        <NavLink to="/services" className="py-2 hover:scale-125">Services</NavLink>
        <NavLink to="/contact" className="py-2 hover:scale-125">Contact</NavLink>
      </div>
    </div>
  )
}

export default Header