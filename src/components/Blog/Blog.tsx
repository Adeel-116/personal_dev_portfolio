import React from 'react'
import BlogCard from './BlogCard'

function Blog() {
  return (
    <div className='w-full flex flex-row gap-x-10 justify-between'>
        <BlogCard />
        <BlogCard />
        <BlogCard />
    </div>
  )
}

export default Blog
