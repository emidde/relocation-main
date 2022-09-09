import React from 'react'
import { blogList } from '../../data';
import BlogList from '../Blog/BlogList';
import '../../App.css'
import './blogPage.css'



const BlogPage = () => {
  return (
    <div className='container-relocation' style={{marginTop:'1.4rem', marginBottom: '8rem'}}>
      <div className="bloglist-area">
      <BlogList blogs={blogList} />
      </div>
    </div>
  )
}

export default BlogPage