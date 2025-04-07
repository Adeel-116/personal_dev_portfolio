import { useState, useRef } from "react";
import Avatar from "../../assets/avatar.png";
import Button from "../Button";

function HeroSection() {
  const [transform, setTransform] = useState({ rotateX: 0, rotateY: 0 });
  const imageContainerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e:any) => {
    const container = imageContainerRef.current;
    if (!container) return;

    const { left, top, width, height } = container.getBoundingClientRect();
    const centerX = left + width / 5;
    const centerY = top + height / 5;

    const rotateY = ((e.clientX - centerX) / width) * 10; 
    const rotateX = -((e.clientY - centerY) / height) * 10;

    setTransform({ rotateX, rotateY });
  };

  const handleMouseLeave = () => {
    setTransform({ rotateX: 0, rotateY: 0 }); // Reset on mouse leave
  };

  return (
    <div className="w-full lg:h-screen h-auto grid lg:grid-cols-2 grid-cols-1 lg:items-center lg:py-0 sm:py-30 py-40">
      <div className="w-full h-auto order-2 lg:order-1 lg:mt-0 mt-5" >
        <div className="w-full h-auto flex flex-col gap-y-4 justify-center items-center lg:items-start px-2">
          <h1 className="xl:text-[5.2rem] sm:text-[4rem] text-[2.5rem] leading-none text-white font-semibold">
            Muhammad 
          </h1>
          <h1 className="xl:text-[5.2rem] sm:text-[4.2rem] text-[2.7rem] leading-none text-[#00c0ff] font-semibold">
            Adeel
          </h1>
          <h6 className="xl:text-xl sm:text-lg text-sm text-white lg:text-left font-medium xl:w-[100%] lg:w-[90%] md:w-[75%]">
            I am a Software Engineer, with extensive experience in Buidling websites, web applications and mobile application. more than 3 years of experience in this field, also working as a Partime job in Freelancer.com
          </h6>
          <div className="xl:mt-8 sm:mt-4 flex sm:justify-center">
            <Button />
          </div>
        </div>
      </div>
      <div
        ref={imageContainerRef}
        className="w-full h-auto flex lg:justify-end justify-center items-center lg:order-2 sm:order-1"
        style={{ perspective: "1000px" }}
       
      >
        <img
          src={Avatar}
          className="xl:w-[80%] lg:w-[100%] w-[50%]"
          alt=""
          style={{
            transform: `perspective(1000px) rotateX(${transform.rotateX}deg) rotateY(${transform.rotateY}deg)`,
            transition: "transform 0.1s ease-out",
          }}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        />
      </div>
    </div>
  );
}

export default HeroSection;
