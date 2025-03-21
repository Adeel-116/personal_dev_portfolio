import React, { useState, useRef } from 'react'

function Service() {
    const [transform, setTransform] = useState({ rotateX: 0, rotateY: 0 });
    const [isHovered, setIsHovered] = useState(false);
    const cardRef = useRef<HTMLDivElement>(null);



    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const container = cardRef.current;
        if (!container) return;

        const { left, top, width, height } = container.getBoundingClientRect();
        const centerX = left + width / 5;
        const centerY = top + height / 5;

        const rotateY = ((e.clientX - centerX) / width) * 10;
        const rotateX = -((e.clientY - centerY) / height) * 10;
        setIsHovered(true);
        setTransform({ rotateX, rotateY });
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        setTransform({ rotateX: 0, rotateY: 0 });
    };

    return (
        <div
            ref={cardRef}
            className={`w-[30%] h-auto flex flex-col gap-y-6 px-[60px] py-[66px]  bg-[#3A2B71] rounded-2xl`}
            style={{
                transform: `perspective(1000px) rotateX(${transform.rotateX}deg) rotateY(${transform.rotateY}deg)`,
                transition: "transform 0.1s ease-out",
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <div className=''>
                <span className={` inline-block w-[60px] h-[60px] rounded-full bg-[#432d92] mb-[53px] relative before:content-[''] before:absolute before:w-full before:h-full  before:rounded-full before:left-0  ${isHovered? 'before:bg-pink-400': ''}`}>


                <svg xmlns="http://www.w3.org/2000/svg" 
                className={`absolute -top-[50%] -left-[50%] bg-amber-800 ${isHovered? 'top-0 left-0 scale-[0.6]': ''} `}
                
                height="50px" fill="#00C0FF" viewBox="0 -1 433.6 433" width="50px" ><path d="m90 50.300781h333.699219c.007812-22.09375-17.90625-40.007812-40-40h-333.699219c-22.09375-.007812-40.007812 17.90625-40 40v244.199219c-.007812 22.09375 17.90625 40.007812 40 40v-244.199219c-.007812-22.09375 17.90625-40.007812 40-40zm0 0" fill="transparent"></path><path d="m6.800781 249.199219h420v20h-420zm0 0"></path><path d="m383.601562.300781h-333.601562c-27.609375.007813-49.9882812 22.390625-50 50v244.199219c.0117188 27.609375 22.390625 49.988281 50 50h156.800781v65.800781h-72.601562c-5.523438 0-10 4.476563-10 10 0 5.523438 4.476562 10 10 10h170c5.523437 0 10-4.476562 10-10 0-5.523437-4.476563-10-10-10h-77.398438v-65.800781h156.800781c27.609376-.011719 49.988282-22.390625 50-50v-244.199219c-.011718-27.609375-22.390624-49.992187-50-50zm30 294.199219c-.050781 16.546875-13.453124 29.953125-30 30h-333.601562c-16.546875-.046875-29.953125-13.453125-30-30v-244.199219c.046875-16.550781 13.453125-29.953125 30-30h333.699219c16.550781.046875 29.953125 13.449219 30 30v244.199219zm0 0"></path></svg>                
                </span>
            </div>

            <div>
                <h1 className='text-white text-2xl font-semibold text-left'> Deeper SKillset</h1>
            </div>
            <div className='text-left w-auto text-[#9D96B6] text-lg'>
                <p>Kobita tumi sopno charini hodsye ersest labo met, consectetur addsipi ctetur adipisicing eod tempor</p>
            </div>
        </div>
    )
}

export default Service
