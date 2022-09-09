import React from 'react'
import BlogItem from './BlogItem'
import './bloglist.css'

const BlogList = ({blogs}) => {
  return (
    <div className="blogList-wrap  .container-relocation">
        {blogs.map(blog => (
        <BlogItem blog={blog} key={blog.id} />
        ))}
    </div>
  )
}

export default BlogList;