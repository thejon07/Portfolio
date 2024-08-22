import React, { useState } from 'react';
import previous from '../../assets/previous.svg';
import './blogread.css';
import { useParams } from 'react-router-dom';
import Blogs from './blog.json';
import up from "../../assets/up.svg"

function BlogReader() {
  const { id } = useParams();
  const [istoggle,setIsToggle] = useState(false);
  const numericId = Number(id)
  console.log('Params id:', id);

  const handleIstoggleActive = ()=>{
    setIsToggle((prev)=>!prev)
  }

  // Ensure the id from params is compared correctly with the blog id
  const blogData = Blogs.find((blog) => blog.id === numericId);
  console.log('Blog data:', blogData);

  return (
    <>

<div class="grid grid-cols-3 gap-4 p-2">


  <div className='col-span-2 sm:p-10  pt-4 sm:pl-28'>
  <h1 className='blogreadhead mt-4 flex pl-2' onClick={()=>history.back()}>
        <img className='mr-2 w-6' src={previous} alt='Previous' />
        All Post
      </h1>
      {blogData ? (
        <div key={blogData.id} className='text-white mt-10'>
          <h1 className=' text-3xl blogreadhead'>{blogData.title}</h1>
          <p className='blogreadhead'>{blogData.date}</p>
          <h2 className=' series w-80 sm:w-96 p-4 rounded-xl mt-5 flex justify-between' onClick={handleIstoggleActive}><span>{blogData.series.title}</span><img src={up} alt="" /></h2>
          <div  className={`${istoggle ? "visible" : "hidden"} w-96 rounded-xl mt-2 p-2 series-child`}>
            <ul>
              {
                blogData.series.contents.map((data,index)=>(
                  <li key={index} >
                    {data}
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
      ) : (
        <p className='text-white'>No blog post found with id {id}</p>
      )}

      <div key={blogData.id} className=' mt-4 w-96 sm:w-full p-2 sm:p-0'>
      <h1 className='blogreadhead text-2xl'>{blogData.series.contents[1]}</h1>
      <p className='blogreadhead'>
        {blogData.blog["blog-content-1"] }
      </p>
  </div>

  <div className='blogreadhead mt-5 sm:p-0 p-2 sm:w-full w-96' key={blogData.id}>
    <h1 className='text-2xl'>{blogData.blog['blog-content-2'].title}</h1>
    <p>{blogData.blog['blog-content-2'].detail}</p>
  </div>
  </div>

  <div className='w-96 p-5 pt-48 sm:visible hidden'>
    <div key={blogData.id}>
        <h1 className='blogreadhead'>{blogData.onthispage.title}</h1>
        <div>
          <ul className='blogreadhead border-l-2 p-2'>
            {
              blogData.onthispage.list.map((item,index)=>(
                <li key={index}>
                  {item}
                </li>
              ))
            }
          </ul>
        </div>
    </div>
  </div>
</div>


     
    </>
  );
}

export default BlogReader;
