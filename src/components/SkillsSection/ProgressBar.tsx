import React from 'react'

function ProgressBar() {
  return (
    <div className='w-full h-auto p-5'>

        <div className='progressBar'>
                <span className='text-white flex justify-between'>
                    <span className='font-semibold'>HTML</span>
                    <span className='text-[#00c0ff]'>95%</span>
                </span>
                <div className='relative mt-2 w-[100%] bg-[#e7e5f1] rounded h-2'>
                    <div className='absolute bg-[#00c0ff] h-2 rounded' style={{width: '95%'}}></div>
                </div>
        </div>
    </div>
  )
}

export default ProgressBar
