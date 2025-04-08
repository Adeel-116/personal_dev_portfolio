
import BlogCard from './BlogCard'
import TextHeading from '../TextHeading'
function Blog() {
  return (
    <div className='w-full flex flex-col items-center gap-y-2 py-30'>
                <TextHeading heading='Blogs' text='Latest Blog Post' />
                <div className='w-full h-auto flex flex-row gap-7 flex-wrap justify-center items-center py-10'>
                    <BlogCard className='lg:w-[40%]  sm:w-[90%] w-[95%]' />
                    <BlogCard className='lg:w-[40%]  sm:w-[90%] w-[95%]' />
                    <BlogCard className='lg:w-[40%]  sm:w-[90%] w-[95%]' />
                    <BlogCard className='lg:w-[40%]  sm:w-[90%] w-[95%]' />
                </div>

            </div>
  )
}

export default Blog
