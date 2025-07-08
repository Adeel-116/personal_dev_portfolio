import  { useEffect, useState } from 'react';
import quote from '../../assets/quote.png';
import { IoChevronForwardCircleOutline } from "react-icons/io5";
import TextHeading from '../TextHeading';

function Testimonials() {
  const [slideNumber, setSlideNumber] = useState(0);

  const slideArray = [
    {
      id: 1,
      content: "Working with Muhammad Adeel was an absolute pleasure. His dedication to delivering a top-notch product, coupled with his attention to detail, made our project a huge success. Highly recommended!",
      name: "Jenny Wilson",
      role: "Founder & CEO of TechyZone",
    },
    {
      id: 2,
      content: "Muhammad's technical expertise in React.js and mobile development helped us build a robust and scalable web application. His proactive communication and innovative solutions stood out throughout the project.",
      name: "James Anderson",
      role: "CTO at Innovatech Solutions",
    },
    {
      id: 3,
      content: "Exceptional service! Muhammad consistently met tight deadlines while maintaining code quality. His collaborative spirit and deep understanding of software architecture made him an invaluable part of our team.",
      name: "Sophia Lee",
      role: "Product Manager at NextGen Apps",
    },
  ];

  const goNext = () => {
    setSlideNumber((prev) => (prev === slideArray.length - 1 ? 0 : prev + 1));
  };

  const goPrev = () => {
    setSlideNumber((prev) => (prev === 0 ? slideArray.length - 1 : prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(goNext, 3000);
    return () => clearInterval(interval);
  }, [slideNumber]);

  return (
    <div className='w-full flex items-center justify-center flex-col sm:p-5'>
      <TextHeading heading="Testimonials" text="What Our Clients Say" />

      {/* Slides */}
      <div className='w-[90%] overflow-hidden relative'>
        <div
          className='flex transition-transform duration-500 ease-in-out'
          style={{ transform: `translateX(-${slideNumber * 100}%)` }}
        >
          {slideArray.map((slide) => (
            <div
              key={slide.id}
              className='w-full flex-shrink-0 flex flex-col items-center sm:gap-y-10 gap-y-5 sm:p-5 px-3'
            >
              <div className='image sm:w-[90px] w-[50px]'>
                <img src={quote} alt="Quote" />
              </div>

              <div>
                <span className='sm:text-[30px] text-[16px] italic sm:leading-[1.6] text-white'>
                  {slide.content}
                </span>
              </div>

              <div className='sm:w-[85%] w-[90%] h-auto flex flex-row justify-center items-center'>
                <div className="sm:w-[60px] sm:h-[60px] w-[70px] h-[70px] bg-[#00c0ff] rounded-full flex justify-center items-center text-white text-2xl font-semibold">
                  {slide.name.charAt(0)}
                </div>
                <div className='py-1 px-2'>
                  <h1 className='font-semibold text-white text-xl text-left'>{slide.name}</h1>
                  <p className='md:text-[14px] sm:text-[13px] text-[13px] text-left font-medium text-white'>
                    {slide.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <div className='flex flex-row mt-5 gap-x-5'>
        <div className='flex items-center justify-center transform rotate-180 cursor-pointer' onClick={goPrev}>
          <IoChevronForwardCircleOutline size={65} color='#fafafa' />
        </div>
        <div className='flex items-center justify-center cursor-pointer' onClick={goNext}>
          <IoChevronForwardCircleOutline size={65} color='#fafafa' />
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
