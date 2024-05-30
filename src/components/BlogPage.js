import React from "react";
import NavBar from './NavBar';
import SideBar from "./SideBar";
import Blog from './Blog';
import Footer from "./Footer";
import './static/BlogPage.css'; 

function BlogPage() {
  return (
    <div className="blog page">
        <NavBar/>
        <div className='main-content'>
        <SideBar/>
        <Blog/>
        </div>
        <Footer/>
    </div>
  )
}

export default BlogPage