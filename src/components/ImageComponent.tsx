import HeroSection from './HeroSection/HeroSection'; 
import MouseCircle from './MouseCircle'; 
import AboutUS from './About/AboutUS'; 
import Contact from './Contact/Contact'; 
import NewsLetter from './newsLetter/NewsLetter'; 
import SkillSection from './SkillsSection/SkillSection'; 
import ServiceSection from './services/ServiceSection'; 
import Testimonials from './testimonial/Testimonials'; 
import backGroundImage from '../assets/backGroundImage.jpg'; 
import Portfolio from './portfolio-section/PortfolioSection'; 
import Footer from './Footer/Footer'; 
import {Element} from "react-scroll"
import Header from './Header/Header';

function ImageComponent() { 
  return ( 
    <div 
      className="w-full min-h-screen flex flex-col items-center" 
      style={{ backgroundImage: `url(${backGroundImage})`, width: "100%", backgroundSize: "cover", minHeight: '100vh' }} 
    > 
      <div className='w-full'> 
        <Header /> 
      </div> 

      {/* Hero Section */}
      <Element name="home" className='2xl:w-[75%] xl:w-[85%] sm:w-[90%] w-[95%] justify-center items-center'>
        <HeroSection />
      </Element>  

      {/* About Section */}
      <Element name="about" className='2xl:w-[75%] xl:w-[85%] sm:w-[90%] w-[95%] justify-center items-center'>
        <AboutUS />
      </Element>

      {/* Skills */}
      <Element name="skills" className='2xl:w-[75%] xl:w-[85%] sm:w-[90%] w-[95%]'>
        <SkillSection />
      </Element>  

      {/* Portfolio */}
      <Element name="portfolio" className='2xl:w-[75%] xl:w-[85%] sm:w-[90%] justify-center items-center'>
        <Portfolio />
      </Element>

      {/* Services */}
      <Element name="services" className='2xl:w-[75%] xl:w-[85%] sm:w-[90%] w-[95%]'>
        <ServiceSection />  
      </Element>

      {/* Testimonials */}
      <Element name="testimonials" className='2xl:w-[75%] xl:w-[85%] sm:w-[90%] w-[95%]'>
        <Testimonials />
      </Element>


      {/* Contact */}
      <Element name="contact" className='2xl:w-[75%] xl:w-[85%] sm:w-[90%] w-[95%]'>
        <Contact />
      </Element>  

      {/* Newsletter */}
      <div className='2xl:w-[75%] xl:w-[85%] sm:w-[90%] flex justify-center py-10 w-[95%]'> 
        <NewsLetter /> 
      </div>  

      {/* Footer */}
      <div className='w-full'> 
        <Footer /> 
      </div>  

      {/* Mouse Circle */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-50"> 
        <MouseCircle /> 
      </div>  
    </div> 
  ) 
} 

export default ImageComponent;
