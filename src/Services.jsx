import React from 'react'
import ServicesCSS from "./Services.module.css";

const Services = () => {
  return (
    <div className="flex mx-2 flex-col md:flex-row text-md justify-around md:text-2xl lg:text-3xl items-center py-4">
      <div className="flex flex-col py-4">
        <span className="hover:scale-125">  <i className="las la-desktop py-4 " style={{ color: "red" }}></i> Web Development </span>
        <span className="hover:scale-125">  <i className="lab la-android py-4 " style={{ color: "green" }}></i> Android Development </span>
        <span className="hover:scale-125">  <i className="lab la-react py-4 " style={{ color: "cyan" }} ></i> Hybird App Development </span>
        <span className="hover:scale-125">  <i className="las la-gamepad py-4 " style={{ color: "purple" }}></i> Game Development </span>
      </div>


      <div className={`${ServicesCSS.design} w-4/12 lg:w-100 `}>
        <span >  <i className="lab la-react h-full w-full"></i></span>
      </div>

    </div>
  )
}

export default Services