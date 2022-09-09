import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { blogList } from '../../data';
import { Link } from 'react-router-dom';
import Chip from '../../components/common/Chip';
import './Blog.css'
import '../../App.css'
import '../../index.css'

const Blog = () => {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);
  
    useEffect(() => {
        let blog = blogList.find((blog) => blog.id === parseInt(id));
        if (blog) {
          setBlog(blog);
        }
      }, [id]);
  
    return (
      <>
      <div className="container-relocation">
        {blog ? (
          
          <div className='blog-wrap' style={{fontFamily:'Poppins', marginTop:'2rem'}}>
     <Link className='blog-goBack  container  sm:text-justify' style={{fontSize:'18px'}} to='/posts'>
          <span> &#8592;</span> <span>Voltar</span>
        </Link>
            <header>
              <p className='blog-date'>Published {blog.createdAt}</p>
              <h1 className='sm:text-xl sm:font-semibold'>{blog.title}</h1>
              <div className='blog-subCategory'>
                {blog.subCategory.map((category, i) => (
                  <div key={i}>
                    <Chip label={category} />
                  </div>
                ))}
              </div>
            </header>
            <img src={blog.cover} alt='cover' style={{borderRadius:'20px'}} />
            <p className='blog-desc sm:text-justify'>{blog.description}</p>
            <Link className='blog-goBack  container  sm:text-justify' style={{fontSize:'18px'}} to='/posts'>
          <span> &#8592;</span> <span>Voltar</span>
        </Link>
          </div>
        ) : (
          <div></div>
        )}
      </div>
      </>
    );
  };

export default Blog

