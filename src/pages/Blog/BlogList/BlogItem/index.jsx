import React from 'react'
import { Link } from 'react-router-dom'
import Chip from '../../../../components/common/Chip'
import '../bloglist.css'

const BlogItem = ({
    blog: {
      description,
      title,
      createdAt,
      authorName,
      authorAvatar,
      cover,
      category,
      id,
    },
  }) => {
    return (
      <div className='blogItem-wrap   container.relocation'>
        <img className='blogItem-cover' src={cover} alt='cover' />
        <Chip label={category} />
        <h3>{title}</h3>
        <p className='blogItem-desc'>{description}</p>
        <footer>
          <div className='blogItem-author'>
            <img src={authorAvatar} alt='avatar' />
            <div>
              <h6>{authorName}</h6>
              <p>{createdAt}</p>
            </div>
          </div>
          <Link className='blogItem-link'style={{
            fontWeight:'600',
            color:'#6F2185'
          }} to={`/blog/${id}`}>
            Ver mais
          </Link>
        </footer>
      </div>
    );
  };

export default BlogItem