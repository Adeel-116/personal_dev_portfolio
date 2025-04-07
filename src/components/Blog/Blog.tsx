
import BlogCard from './BlogCard'

function Blog() {
  return (
    <div className='w-full flex flex-col items-center gap-y-2 py-30'>
                <div className='w-full flex flex-col items-center gap-y-2'>
                    <h4 className='text-[#00c0ff] text-xl font-medium'>Blog</h4>
                    <h1 className='w-full text-white font-semibold text-[3rem]'>
                        What I Do for My Clients
                    </h1>
                </div>


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
