import React from 'react'
import "./footer.css"

function footer() {
  return (
  <>
    <div className='-ml-40 foo'>
        <ul className='flex mt-20'>
            <li className='m-2'>Videos</li>
            <li className='m-2'>Post</li>
            <li className='m-2'>Twitter</li>
            <li className='m-2'>Youtube</li>
            <li className='m-2'>Github</li>
        </ul>
        <p className='foo-p ml-2'>Build With React,Tailwind,Stack Overflow</p>
    </div>
  </>
  )
}

export default footer
