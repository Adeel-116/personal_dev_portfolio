import React, { useEffect } from 'react';
import quote from '../../assets/quote.png';
import testimonialPicture from '../../assets/testimonialPicture.png';

function Testimonials() {
  const [slideNumber, setSlideNumber] = React.useState(0);

  const slideArray = [
    { id: 1, content: 'Slide 1: Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
    { id: 2, content: 'Slide 2: Corrupti dolorum culpa, maiores sed nemo iusto natus excepturi rem molestiae facere eligendi.' },
    { id: 3, content: 'Slide 3: Quidem corporis veritatis quo reprehenderit accusantium minima consectetur.' },
  ];

  const goNext = () => {
    const slideLength = slideArray.length;
    setSlideNumber((prevSlide) => (prevSlide === slideLength - 1 ? 0 : prevSlide + 1));
  };

  const goPrev = () => {
    const slideLength = slideArray.length;
    setSlideNumber((prevSlide) => (prevSlide === 0 ? slideLength - 1 : prevSlide - 1));
  };

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      goNext();
    }, 3000); // Change slide every 3 seconds

    // Cleanup function to clear the interval
    return () => clearInterval(interval);
  }, [slideNumber]); // Restart interval when slideNumber changes

  return (
    <div className='w-full h-auto flex items-center justify-center flex-col bg-amber-800 p-5'>
      <div className='w-full flex flex-col items-center gap-y-2'>
        <h4 className='text-[#00c0ff] text-xl font-medium'>About Me</h4>
        <h1 className='w-full text-white font-semibold text-[3rem]'>What Client Say</h1>
      </div>

      {/* Slides Container */}
      <div className='w-[90%] overflow-hidden relative'>
        <div
          className='flex transition-transform duration-500 ease-in-out'
          style={{ transform: `translateX(-${slideNumber * 100}%)` }}
        >
          {slideArray.map((slide, index) => (
            <div
              key={slide.id}
              className='w-full flex-shrink-0 flex flex-col items-center gap-y-10 p-5 bg-pink-400'
            >
              <div className='image w-[90px]'>
                <img src={quote} alt="Quote" />
              </div>

              <div>
                <span className='text-[30px] italic leading-[1.6] text-white'>{slide.content}</span>
              </div>

              <div className='w-[85%] h-auto flex flex-row justify-center items-center'>
                <div className="w-[60px] h-[60px] bg-yellow-800 bg-center rounded-full">
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
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className='mt-5'>
        <button
          className='bg-[#00c0ff] text-white px-5 py-2 rounded-full hover:bg-[#0099cc] transition-colors duration-300'
          onClick={goPrev}
        >
          Prev
        </button>
        <button
          className='bg-[#00c0ff] text-white px-5 py-2 rounded-full ml-6 hover:bg-[#0099cc] transition-colors duration-300'
          onClick={goNext}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Testimonials;