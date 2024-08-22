import React, { Suspense } from 'react';
import './App.css';
import Blog from './Pages/Blogs/Blog';
import BlogReader from './Pages/Blogs/BlogReader';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Loading from './Components/Loading';
import { lazy } from 'react'
const Navbar = lazy(()=>import("./Components/Navbar"))

function App() {
  return (
 
    <BrowserRouter>
      <div className='portfolio-container'>
      <Suspense fallback={<Loading/>}>
        <Routes>
          <Route path='/' element={<Navbar />}/>
          <Route path="/blog" element={<Blog />} />
          <Route path="/blogreader/:id" element={<BlogReader />} />
        </Routes>
        </Suspense>
      </div>
    </BrowserRouter>
 
  );
}

export default App;
