import React from 'react'
import "./navigation.css"
import video from "../assets/camera.svg"
import blog from "../assets/blog.svg"
import youtube from "../assets/youtube.svg"
import twitter from "../assets/twitter.svg"
import { Link } from 'react-router-dom'

function Navigation() {
  return (
    <>
    <nav className='mt-6'>
    <p className='bio text-s ml-4 sm:ml-0 sm:text-lg'>What I'm learning about shipping great products, becoming a<br/> better developer,and growing a career in tech.</p>
     <div className='litags'>
        <ul className='text-white flex mt-6 font-medium p-2 sm:p-0 text-s sm:text-lg font-normal'>
            <li className='mt-2 mb-2 mr-2 flex'>
                <span className='mr-2'><img src={video} className=' w-6 h-6' alt="" /></span>Videos</li>
            <Link to="/blog">
            <li className='m-2 flex'>
            <span className='mr-2'><img src={blog} className='w-6 h-6' alt="" /></span>
                Blog</li>
            </Link>
            <li className='m-2 flex'>
            <span className='mr-2'><img src={youtube} className='w-6 h-6' alt="" /></span>
                Youtube</li>
            <li className='m-2 flex'>
            <span className='mr-2'><img src={twitter} className='w-6 h-6' alt="" /></span>
                Twitter</li>
        </ul>
     </div>
    </nav>
    
    </>
  )
}

export default Navigation
