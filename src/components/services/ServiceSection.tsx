
import Service from './Service'
import TextHeading from '../TextHeading'
function ServiceSection() {
    return (

        <>
            <div className='w-full flex flex-col items-center gap-y-2 py-30'>
                <div>
                    <TextHeading heading='Services' text='What I Do for My Clients' />
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
