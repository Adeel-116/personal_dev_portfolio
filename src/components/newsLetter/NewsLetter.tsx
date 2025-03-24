import React from 'react'

function NewsLetter() {
  return (
    <div className='w-full h-auto py-20 px-20 flex flex-row justify-center items-center bg-[#432D92] rounded-2xl'>
      
        <div className='w-1/2 flex flex-col'>
            <div className='w-full flex flex-col gap-y-2 text-left'>
                <h3 className='text-[#00c0ff] text-2xl font-normal'>Subscribe Now</h3>
                <h1 className='text-white font-semibold text-5xl'>Get My Newsletter</h1>
                <p className='text-[#b4afc6] text-lg'>Get latest news, tips and trics in your inbox</p>
            </div>
        </div>

        <div className='w-1/2'>
                <div className='relative w-full flex '>
                <input
                  type="text"
                  name="name"
                  value={""}
                  placeholder="Your Email Here"
                  className="w-2/2 px-7 py-6 border bg-white rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#00c0ff]"
                  required
                />


                <div className='absolute w-1/4 h-full overflow-hidden bg-[#00c0ff] right-0 flex justify-center items-center rounded-r-2xl'>
                    <h1 className='text-white font-semibold'>Send Now</h1>
                </div>
                </div>
        </div>
    
    </div>
  )
}

export default NewsLetter
