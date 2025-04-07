
import Service from './Service'

function ServiceSection() {
    return (

        <>
            <div className='w-full flex flex-col items-center gap-y-2 py-30'>
                <div className='w-full flex flex-col items-center gap-y-2'>
                    <h4 className='text-[#00c0ff] text-xl font-medium'>Services</h4>
                    <h1 className='w-full text-white font-semibold text-[3rem]'>
                        What I Do for My Clients
                    </h1>
                </div>


                <div className='w-full h-auto flex lg:flex-row flex-col gap-4 flex-wrap justify-center items-center py-10'>
                    <Service className='xl:w-[32.1%] lg:w-[40%] w-[90%]' />
                    <Service className='xl:w-[32.1%] lg:w-[40%] w-[90%]' />
                    <Service className='xl:w-[32.1%] lg:w-[40%] w-[90%]'  />
                    <Service className='xl:w-[32.1%] lg:w-[40%] w-[90%]' />
                    <Service className='xl:w-[32.1%] lg:w-[40%] w-[90%]' />
                    <Service className='xl:w-[32.1%] lg:w-[40%] w-[90%]' />
                </div>

            </div>
       
    
    
    </>
   
  )
}

export default ServiceSection
