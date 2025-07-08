// import React from 'react'

interface textHeadingProps {
    heading: string;
    text: React.ReactNode; 
}

function TextHeading({heading , text}:textHeadingProps) {
  return (
    <div>
                 <div className='w-full flex flex-col items-center gap-y-2'>
                    <h4 className='text-[#00c0ff] text-xl font-medium'>{heading}</h4>
                    <h1 className='w-full text-white font-semibold text-[3rem]'>
                        {text}
                    </h1>
                </div>
    </div>
  )
}

export default TextHeading
