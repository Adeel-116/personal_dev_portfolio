import { useEffect, useState } from "react";
import HeroSection from "./HeroSection/HeroSection";
import MouseCircle from "./MouseCircle";
import AboutUS from "./About/AboutUS";
import Contact from "./Contact/Contact";
import NewsLetter from "./newsLetter/NewsLetter";
import SkillSection from "./SkillsSection/SkillSection";
import ServiceSection from "./services/ServiceSection";
import Testimonials from "./testimonial/Testimonials";
import Portfolio from "./portfolio-section/PortfolioSection";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import { Element } from "react-scroll";

import bgImageDesktop from "../assets/backGroundImage.webp";
import bgImageMobile from "../assets/backGroundImage.webp"; 
import LoadingScreen from "./LoadingScreen";


function ImageComponent() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);

    // Preload appropriate image
    const img = new Image();
    img.src = isMobile ? bgImageMobile : bgImageDesktop;
    img.onload = () => {
      setTimeout(() => setImageLoaded(true), 500); 
    };

    return () => window.removeEventListener("resize", handleResize);
  }, [isMobile]);

  if (!imageLoaded) {
    return <LoadingScreen />;
  }

  return (
    <div className="relative w-full min-h-[600px]">
      {/* Background */}
      <div
        className="fixed inset-0 z-0 bg-[#1E1649] transition-opacity duration-1000"
        style={{
          backgroundImage: `url(${isMobile ? bgImageMobile : bgImageDesktop})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: isMobile ? "scroll" : "fixed",
          height: isMobile ? "200dvh" : "100vh",
          opacity: imageLoaded ? 1 : 0,
        }}
      />

      {/* Content Container */}
      <div className="relative z-10 min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex flex-col items-center w-full">
          <div className="w-full flex flex-col items-center">
            <Element name="home" className="2xl:w-[75%] xl:w-[85%] sm:w-[90%] w-[95%] flex justify-center items-center">
              <HeroSection />
            </Element>
            <Element name="about" className="2xl:w-[75%] xl:w-[85%] sm:w-[90%] w-[95%] flex justify-center items-center">
              <AboutUS />
            </Element>
            <Element name="skills" className="2xl:w-[75%] xl:w-[85%] sm:w-[90%] w-[95%]">
              <SkillSection />
            </Element>
            <Element name="portfolio" className="2xl:w-[75%] xl:w-[85%] sm:w-[90%] w-[95%] flex justify-center items-center">
              <Portfolio />
            </Element>
            <Element name="services" className="2xl:w-[75%] xl:w-[85%] sm:w-[90%] w-[95%]">
              <ServiceSection />
            </Element>
            <Element name="testimonials" className="2xl:w-[75%] xl:w-[85%] sm:w-[90%] w-[95%]">
              <Testimonials />
            </Element>
            <Element name="contact" className="2xl:w-[75%] xl:w-[85%] sm:w-[90%] w-[95%]">
              <Contact />
            </Element>
            <div className="2xl:w-[75%] xl:w-[85%] sm:w-[90%] w-[95%] flex justify-center py-10">
              <NewsLetter />
            </div>
            <Footer />
          </div>
        </main>
      </div>

      {/* Mouse Circle */}
      <div className="sm:fixed hidden inset-0 pointer-events-none z-[50]">
        <MouseCircle />
      </div>
    </div>
  );
}

export default ImageComponent;
