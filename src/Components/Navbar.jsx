import React from "react"
import "./Navbar.css"
import "../App.jsx"
//import Product from "./Product.js"
import logo from "../Assets/weblogo.jpg"


const Navbar = () => {

  return (
    <>
    <div className="navbar bg-[#330121] h-[fit-content] pt-[6px] pb-[6px] shadow-lg">
    <img src={logo} alt="website logo" className="web-logo w-[26px] md:w-[50px] rounded-[50%]" />
    <ul className="navlist">
      <li className="text-right text-[1.3rem]"><a href="#Home">Home</a></li>
      <li className="text-right text-[1.3rem]"><a href="#Products">Products</a></li>
      <li className="text-right pr-[10px] text-[1.3rem]"><a href="#About">About</a></li>
    </ul>
    </div> < />
  )
}

export default Navbar