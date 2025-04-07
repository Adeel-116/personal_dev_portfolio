import React, { useState, useRef } from 'react';

interface SkillCardProps {
  children: React.ReactNode;  // This allows you to pass any JSX or text inside SkillCard
}

const SkillCard: React.FC<SkillCardProps> = ({ children }) => {
  const [transform, setTransform] = useState({ rotateX: 0, rotateY: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const container = cardRef.current;
    if (!container) return;

    const { left, top, width, height } = container.getBoundingClientRect();
    const centerX = left + width / 5;
    const centerY = top + height / 5;

    const rotateY = ((e.clientX - centerX) / width) * 10; 
    const rotateX = -((e.clientY - centerY) / height) * 10;

    setTransform({ rotateX, rotateY });
  };

  const handleMouseLeave = () => {
    setTransform({ rotateX: 0, rotateY: 0 });
  };

  return (
    <div 
      ref={cardRef} 
      className={`h-auto flex flex-col xl:gap-y-6 xl:px-[60px] xl:py-[66px] lg:p-10 gap-y-3 p-[50px] bg-[#3A2B71] rounded-2xl ${children}`}
      style={{
        transform: `perspective(1000px) rotateX(${transform.rotateX}deg) rotateY(${transform.rotateY}deg)`,
        transition: "transform 0.1s ease-out",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" height="65px" viewBox="0 -4 400.002 400" width="65px" fill="#00C0FF">
          <g>
            <path d="m75.925781 308.339844..."></path>
            {/* SVG path continues here */}
          </g>
        </svg>
      </div>
      <div>
        <h1 className="text-white text-2xl font-semibold text-left">Deeper SKillset</h1>
      </div>
      <div className="text-left w-auto text-[#9D96B6] text-lg">
        <p>Kobita tumi sopno charini hodsye ersest labo met, consectetur addsipi ctetur adipisicing eod tempor</p>
      </div>

      {/* This will allow children to be passed in */}
      <div>{children}</div>
    </div>
  );
};

export default SkillCard;
