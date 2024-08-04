import React from 'react'
import NavHeader from '../Home/NavHeader/NavHeader'
import BlogIntro from "./BlogIntro/BlogIntro"
import Blogged from "./Blogged/Blogged"
import BlogSlid from "./BlogSlid/BlogSlid"

import Footer from '../Home/Footer/Footer'
const Blog = () => {
  return (
    <div>
      <NavHeader/>
      <BlogIntro/>
      <Blogged/>
      <BlogSlid/>
      <Footer/>
    </div>
  )
}

export default Blog
