import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Blog from './Blog';
import Navbar from './Navbar';

function Home() {
  return (
    <div className='bg-blue-200'>
      <header className='text-gray-700 border-b border-gray-400'>
    <div className='container flex mx-auto p-5 flex-col md:flex-row items-center'>
      <a href='#' className="font-medium text-gray-900 mb-4 md:mb-0">
        <span className='text-7xl ml-3'>Sirasu</span>
      </a>
      <nav className='md:ml-auto text-base'>
        <a href='#home' className='mr-5 hover:text-blue-400 duration-300'>home</a>
        <a href='#About' className="mr-5 hover:text-blue-400 duration-300" >About</a>
        <a href='#Skills' className="mr-5 hover:text-blue-400 duration-300" >Skills</a>
        <a href='#Blog' className="mr-5 hover:text-blue-400 duration-300" >Blog</a>
      </nav>
    </div>
   </header>
     <Router>
      <Routes>
        <Route path="/#Blog" element={<Blog />}></Route>
      </Routes>
     </Router>
     
    </div>
  )
}

export default Home
