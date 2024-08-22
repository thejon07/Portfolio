import React from 'react'
import icon1 from "../../src/assets/real.png"
import "./navbar.css"
import profile from "../assets/profile.png"
import Navigation from "../Components/Navigation"
import Content from "../Components/Content"
import Footer from './Footer'

function Navbar() {
  return (
    <>
    <header className='flex text-white  sm:-ml-20 pt-20'>
      <div className='cont'>
      <div className='box'>
        <img className='rounded-full' src={profile} alt="" />
      </div>
      </div>
      <div className='ml-2 sm:ml-5 mt-5'>
        <h1 className='text-3xl font-semibold profile'>Bijon</h1>
        <p className="flex text-s sm:text-lg profile-tag">Developer Experience at<span className='ml-2 mr-2 rounded-lg '><img className='w-6 h-6 sm:w-6 sm:h-6 shadow-blue'  src={icon1} alt="" /></span> React</p>
      </div>
    </header>
    <Navigation />
    <Content />
    <Footer/>
    </>
  )
}

export default Navbar
