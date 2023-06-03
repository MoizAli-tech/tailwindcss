import React from 'react'
import ServicesCSS from "./Services.module.css";

const Services = () => {
  return (
    <div className={ServicesCSS.Services}>
      <div className={ServicesCSS.functionalities}>
        <span>  <i className="las la-desktop" style={{color:"red"}}></i> Web Development </span>
        <span>  <i className="lab la-android" style={{color:"green"}}></i> Android Development </span>
        <span>  <i className="lab la-react" style={{color:"cyan"}} ></i> Hybird App Development </span>
        <span>  <i className="las la-gamepad" style={{color:"purple"}}></i> Game Development </span>
      </div>
     

        <div  className={ServicesCSS.design}>
            <span>  <i className="lab la-react"></i></span>
        </div>
       
    </div>
  )
}

export default Services