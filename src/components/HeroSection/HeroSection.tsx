import Button from "../Button";
import Avatar from "../../assets/image.png";
import { scroller } from "react-scroll";

const HeroSection = () => {

  function scrollToContact() {
    scroller.scrollTo("contact", {
      duration: 1000,  
      smooth: true,
      offset: -100,
    });
  }


  return (
    <section className="lg:h-screen md:h-auto lg:mt-0 md:mt-45 mt-35 w-full flex flex-col lg:flex-row">

      <div className="flex-1 flex flex-col justify-center items-center px-2">
        <div className="w-full max-w-3xl">
          <div className="text-center lg:text-left mb-6 2xl:mt-0  lg:mt-8 mt-0">
            <h1 className="2xl:text-[4.5rem] sm:text-[4rem] text-[2.5rem] leading-none text-white font-semibold animate-fadeIn">
              Muhammad
            </h1>
            <h1 className="2xl:text-[4.5rem] sm:text-[4rem] text-[2.7rem] leading-none text-[#00c0ff] font-semibold animate-fadeIn delay-100">
              Adeel
            </h1>
          </div>
          <p className="text-sm sm:text-[15px] 2xl:text-xl text-center lg:text-left text-white font-medium leading-relaxed animate-fadeIn delay-200">
            🚀 <span className="text-gray-100">Transform your vision into reality with cutting-edge digital solutions.</span>
            {" "}I'm a <span className="text-cyan-400 font-semibold">Full-Stack Developer</span> specializing in building modern websites, scalable web applications, and intuitive mobile experiences.
            {" "}As a dedicated <span className="text-green-400 font-semibold">Freelancer</span>, I craft digital solutions that drive results and elevate your brand's online presence.
          </p>

          <div className="mt-8 flex justify-center lg:justify-start animate-fadeIn delay-300">
            <Button aria-label="Contact Muhammad Adeel" buttonTile="Get Connected" onClick={scrollToContact} />
          </div>
        </div>
      </div>

      {/* Image Content */}
      <div className="flex-1 flex justify-center lg:justify-end items-center z-50 lg:py-0 py-15">
        <img
          src={Avatar}
          alt="Portrait of Muhammad Adeel, Full-Stack Developer and Freelancer"
          loading="eager"
          decoding="async"
          className="2xl:w-[75%] xl:w-[68%] lg:w-[93%] sm:w-[70%] w-[100%] animate-fadeIn delay-400"
        />
      </div>
    </section>
  );
};

export default HeroSection;