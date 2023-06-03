import React from 'react';
import {NavLink} from "react-router-dom"
import HeaderCSS from "./Header.module.css";
const Header = () => {
  return (
    <div className={HeaderCSS.Header}>
        <div>
            <NavLink to="/" className={HeaderCSS.font_icon}><i className="las la-radiation font-icon"></i></NavLink>
        </div>
        <div className={HeaderCSS.navbar}>
            <NavLink to="/services"  className={HeaderCSS.links}>Services</NavLink>
            <NavLink to="/contact"   className={HeaderCSS.links}>Contact</NavLink>
        </div>
    </div>
  )
}

export default Header