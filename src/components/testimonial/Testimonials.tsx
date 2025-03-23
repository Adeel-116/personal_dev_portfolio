import React from 'react'
import quote from '../../assets/quote.png'
import testimonialPicture from '../../assets/testimonialPicture.png'


function Testimonials() {
    return (
        <div className='w-full h-auto flex items-center justify-center flex-col  p-5'>
            <div className='w-full flex flex-col items-center gap-y-2'>
                <h4 className='text-[#00c0ff] text-xl font-medium'>About Me</h4>
                <h1 className='w-full text-white font-semibold text-[3rem]'>
                    What Client Say
                </h1>
            </div>
            <div className='w-[90%] flex py-10'>

                <div>
                    <div className='w-full flex flex-col items-center gap-y-10 flex-1'>
                        <div className='image w-[90px]'>
                            <img src={quote} alt="" />
                        </div>

                        <div>
                            <span className='text-[30px] italic leading-[1.6] text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti dolorum culpa, maiores sed nemo iusto natus excepturi rem molestiae facere eligendi porro. Quidem corporis veritatis quo reprehenderit accusantium minima consectetur quam omnis officia, corrupti doloremque ipsum obcaecati suscipit tempore voluptate adipisci maxime aspernatur perspiciatis optio aliquam debitis, a labore! Pariatur.</span>
                        </div>



                        <div className='w-[85%] h-auto flex flex-row justify-center items-center'>
                            <div className="w-[60px] h-[60px] bg-yellow-800 bg-center rounded-full ">
                                <img
                                    className="w-full h-full object-cover rounded-full"
                                    src={testimonialPicture}
                                    alt="Testimonial"
                                />
                            </div>
                            <div className='py-1 px-2'>
                                <h1 className='font-semibold text-white text-left text-xl'>Jenny Wilson</h1>
                                <p className='md:text-[14px] text-[13px] font-medium text-gray-300 text-lg'>Founder & CEO of TechyZone</p>
                            </div>

                        </div>

                    </div>




                </div>

                

                <div>
                    <div className='w-full flex flex-col items-center gap-y-10'>
                        <div className='image w-[90px]'>
                            <img src={quote} alt="" />
                        </div>

                        <div>
                            <span className='text-[30px] italic leading-[1.6] text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti dolorum culpa, maiores sed nemo iusto natus excepturi rem molestiae facere eligendi porro. Quidem corporis veritatis quo reprehenderit accusantium minima consectetur quam omnis officia, corrupti doloremque ipsum obcaecati suscipit tempore voluptate adipisci maxime aspernatur perspiciatis optio aliquam debitis, a labore! Pariatur.</span>
                        </div>



                        <div className='w-[85%] h-auto flex flex-row justify-center items-center'>
                            <div className="w-[60px] h-[60px] bg-yellow-800 bg-center rounded-full ">
                                <img
                                    className="w-full h-full object-cover rounded-full"
                                    src={testimonialPicture}
                                    alt="Testimonial"
                                />
                            </div>
                            <div className='py-1 px-2'>
                                <h1 className='font-semibold text-white text-left text-xl'>Jenny Wilson</h1>
                                <p className='md:text-[14px] text-[13px] font-medium text-gray-300 text-lg'>Founder & CEO of TechyZone</p>
                            </div>

                        </div>

                    </div>




                </div>






            </div>


        </div>
    )
}

export default Testimonials
