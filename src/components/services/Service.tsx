import React, { useState, useRef } from "react";
import monitor from "../../assets/monitor.png";
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
            <div className="flex justify-center">
                <span
                    className={`flex justify-center items-center w-[65px] h-[65px] rounded-full bg-[#432d92] relative before:content-['']  
                    before:w-full before:h-full before:absolute before:rounded-full before:left-0 before:top-0 before:scale-0 before:bg-[#00c0ff]  
                    before:transition-transform before:duration-300 before:ease-in-out  
                    ${isHovered ? "before:scale-100" : ""}`}
                >
                    <img
                        src={monitor}
                        alt="icon"
                        className={`absolute transition-all -top-1/2 -left-1/2 duration-300 ease-in-out ${isHovered
                                ? "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-[0.7]"
                                : ""
                            }`}
                        width="55"
                        height="55"
                    />
                </span>
            </div>

            <div>
                <h1 className="text-white text-2xl font-semibold text-left">
                    {" "}
                    Deeper SKillset
                </h1>
            </div>
            <div className="text-left w-auto text-[#9D96B6] text-lg">
                <p>
                    Kobita tumi sopno charini hodsye ersest labo met, consectetur addsipi
                    ctetur adipisicing eod tempor
                </p>
            </div>
        </div>
    );
}

export default Service;
