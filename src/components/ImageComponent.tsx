import { useEffect, useState } from 'react';
import HeroSection from './HeroSection/HeroSection';
import MouseCircle from './MouseCircle';
import AboutUS from './About/AboutUS';
import Contact from './Contact/Contact';
import NewsLetter from './newsLetter/NewsLetter';
import SkillSection from './SkillsSection/SkillSection';
import ServiceSection from './services/ServiceSection';
import Testimonials from './testimonial/Testimonials';
import Portfolio from './portfolio-section/PortfolioSection';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import { Element } from "react-scroll";
import bgImage from "../assets/backGroundImage.jpg";

function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-[#1E1345] via-[#2A1B5C] to-[#1E1345] flex flex-col justify-center items-center z-50">
      <div className="mb-8 text-center">
        <p className="text-lg text-gray-300 animate-fade-in">
          Loading your experience...
        </p>
      </div>

      <div className="relative">
        <div className="w-16 h-16 border-4 border-purple-200 border-t-purple-500 rounded-full animate-spin"></div>
        <div className="absolute inset-0 w-16 h-16 border-4 border-transparent border-b-blue-500 rounded-full animate-spin-slow"></div>
      </div>

      <div className="mt-8 w-64 bg-gray-700 rounded-full h-2">
        <div className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full animate-progress"></div>
      </div>

      <div className="mt-4 text-center">
        <p className="text-gray-400 text-sm animate-pulse">
          Please wait while we prepare everything for you
        </p>
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-purple-400 rounded-full animate-float"></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-blue-400 rounded-full animate-float-delayed"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-pink-400 rounded-full animate-float-slow"></div>
        <div className="absolute bottom-1/3 right-1/3 w-2 h-2 bg-cyan-400 rounded-full animate-float-delayed"></div>
      </div>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes spin-slow {
          to { transform: rotate(-360deg); }
        }

        @keyframes progress {
          0% { width: 0%; }
          50% { width: 60%; }
          100% { width: 100%; }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }

        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(-180deg); }
        }

        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(360deg); }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-in-out;
        }

        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }

        .animate-progress {
          animation: progress 2s ease-in-out infinite;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 3s ease-in-out infinite 0.5s;
        }

        .animate-float-slow {
          animation: float-slow 4s ease-in-out infinite 1s;
        }
      `}</style>
    </div>
  );
}

function ImageComponent() {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = bgImage;
    img.onload = () => {
      setTimeout(() => setImageLoaded(true), 1000);
    };
  }, []);

  if (!imageLoaded) {
    return <LoadingScreen />;
  }

  return (
    <div className="relative w-full h-auto flex flex-col items-center min-h-screen overflow-hidden">
      <img
        src={bgImage}
        alt="Background"
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />

      {/* Optional overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/30 z-0" />

      {/* Page content */}
      <div className="relative z-10 w-full">
        <Header />
      </div>

      <Element name="home" className='relative z-10 2xl:w-[75%] xl:w-[85%] sm:w-[90%] w-[95%] justify-center items-center'>
        <HeroSection />
      </Element>

      <Element name="about" className='relative z-10 2xl:w-[75%] xl:w-[85%] sm:w-[90%] w-[95%] justify-center items-center'>
        <AboutUS />
      </Element>

      <Element name="skills" className='relative z-10 2xl:w-[75%] xl:w-[85%] sm:w-[90%] w-[95%]'>
        <SkillSection />
      </Element>

      <Element name="portfolio" className='relative z-10 2xl:w-[75%] xl:w-[85%] sm:w-[90%] justify-center items-center'>
        <Portfolio />
      </Element>

      <Element name="services" className='relative z-10 2xl:w-[75%] xl:w-[85%] sm:w-[90%] w-[95%]'>
        <ServiceSection />
      </Element>

      <Element name="testimonials" className='relative z-10 2xl:w-[75%] xl:w-[85%] sm:w-[90%] w-[95%]'>
        <Testimonials />
      </Element>

      <Element name="contact" className='relative z-10 2xl:w-[75%] xl:w-[85%] sm:w-[90%] w-[95%]'>
        <Contact />
      </Element>

      <div className='relative z-10 2xl:w-[75%] xl:w-[85%] sm:w-[90%] flex justify-center py-10 w-[95%]'>
        <NewsLetter />
      </div>

      <div className='relative z-10 w-full'>
        <Footer />
      </div>

      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-20">
        <MouseCircle />
      </div>
    </div>
  );
}

export default ImageComponent;
