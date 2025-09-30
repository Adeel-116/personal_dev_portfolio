import { useEffect, useState } from 'react';
import { IoChevronForwardCircleOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa"; // <-- Added star icon
import TextHeading from '../TextHeading';

function Testimonials() {
  const [slideNumber, setSlideNumber] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

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
    if (isAnimating) return;
    setIsAnimating(true);
    setSlideNumber((prev) => (prev === slideArray.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  const goPrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setSlideNumber((prev) => (prev === 0 ? slideArray.length - 1 : prev - 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  const goToSlide = (index: number) => {
    if (isAnimating || index === slideNumber) return;
    setIsAnimating(true);
    setSlideNumber(index);
    setTimeout(() => setIsAnimating(false), 500);
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
              <div className='text-center'>
                <span className='sm:text-[30px] text-[16px] italic sm:leading-[1.6] text-white'>
                  {slide.content}
                </span>

                {/* Star Rating */}
                <div className="flex justify-center mt-4">
                  {[...Array(5)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400 mx-1" size={20} />
                  ))}
                </div>
              </div>

              <div className='sm:w-[85%] w-[90%] h-auto flex flex-row justify-center items-center'>
                <div className="sm:w-[60px] sm:h-[60px] w-[50px] h-[50px] bg-[#00c0ff] rounded-full flex justify-center items-center text-white text-2xl font-semibold">
                  {slide.name.charAt(0)}
                </div>
                <div className='py-1 px-2'>
                  <h1 className='font-semibold text-white sm:text-xl text-sm text-left'>{slide.name}</h1>
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
      <div className='flex flex-col items-center gap-6 mt-8'>
        <div className='flex flex-row gap-8'>
          <button 
            className={`
              flex items-center justify-center transform rotate-180 cursor-pointer
              transition-all duration-300 hover:scale-110 active:scale-95
              ${isAnimating ? 'opacity-50 cursor-not-allowed' : 'hover:drop-shadow-lg'}
            `}
            onClick={goPrev}
            disabled={isAnimating}
          >
            <IoChevronForwardCircleOutline 
              size={50} 
              color='#fafafa'
              className="transition-colors duration-300 hover:text-[#00c0ff]"
            />
          </button>

          <button 
            className={`
              flex items-center justify-center cursor-pointer
              transition-all duration-300 hover:scale-110 active:scale-95
              ${isAnimating ? 'opacity-50 cursor-not-allowed' : 'hover:drop-shadow-lg'}
            `}
            onClick={goNext}
            disabled={isAnimating}
          >
            <IoChevronForwardCircleOutline 
              size={50} 
              color='#fafafa'
              className="transition-colors duration-300 hover:text-[#00c0ff]"
            />
          </button>
        </div>

        {/* Dots */}
        <div className='flex gap-3 items-center'>
          {slideArray.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`
                h-3 rounded-full transition-all duration-300 cursor-pointer
                ${index === slideNumber 
                  ? 'bg-[#00c0ff] w-12 shadow-lg shadow-[#00c0ff]/30' 
                  : 'bg-white/30 hover:bg-white/50 w-3 hover:scale-125'
                }
              `}
              disabled={isAnimating}
            />
          ))}
        </div>

        {/* Progress Bar */}
        <div className="w-64 bg-white/10 rounded-full h-1 overflow-hidden">
          <div
            className="bg-[#00c0ff] h-1 rounded-full transition-all duration-500 shadow-sm"
            style={{ width: `${((slideNumber + 1) / slideArray.length) * 100}%` }}
          />
        </div>

        {/* Slide Counter */}
        <div className="text-white/60 text-sm font-medium">
          {slideNumber + 1} / {slideArray.length}
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
