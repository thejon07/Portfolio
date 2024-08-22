import React from 'react'
import blogs from "./blog.json"
import { Link } from 'react-router-dom'

function Blog() {
  return (
    <>

      <p className=' text-xs text-white p-4 sm:pt-2'>This Blog post is not finished yet. I sometimes publish early in case it will be helpful to someone....</p>
      {blogs.map((data) => (
        <div key={data.id} className="w-9/12 p-6 bg-transparent content-card mt-5 border border-gray-600 rounded-2xl shadow dark:bg-gray-800 dark:border-gray-700">
          <a href="#">
            <h5 className="mb-2 text-xl font-bold tracking-tight dark:text-white">{data.title}</h5>
          </a>
          <p className="mb-3 font-normal dark:text-gray-400">{data.description}</p>
          <Link to={`/blogreader/${data.id}`}>
            <span className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-transparent rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Read more
              <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
              </svg>
            </span>
          </Link>
        </div>
      ))}
    </>
  )
}

export default Blog
