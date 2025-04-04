import React, { useState, useRef } from "react";
import Avatar from "../../assets/avatar.png";
import Button from "../Button";

function HeroSection() {
  const [transform, setTransform] = useState({ rotateX: 0, rotateY: 0 });
  const imageContainerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e) => {
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
    <div className="w-full h-screen grid grid-cols-2 items-center">
      <div className="w-full h-auto">
        <div className="w-full h-auto flex flex-col gap-y-4 justify-center items-start px-2">
          <h1 className="text-[7.2rem] leading-none text-white font-semibold">
            James
          </h1>
          <h1 className="text-[7rem] leading-none text-[#00c0ff] font-semibold">
            Smith
          </h1>
          <h6 className="text-xl text-white text-left font-medium w-[90%">
            I am a Software Engineer, with extensive experience in Buidling websites, web applications and mobile application. more than 3 years of experience in this field, also working as a Partime job in Freelancer.com
          </h6>
          <div className="mt-8">
            <Button />
          </div>
        </div>
      </div>
      <div
        ref={imageContainerRef}
        className="w-full h-auto flex justify-center items-center"
        style={{ perspective: "1000px" }}
       
      >
        <img
          src={Avatar}
          width={"80%"}
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
