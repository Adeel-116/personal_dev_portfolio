import React, { useState, useRef } from "react";
import { FaDesktop, FaMobileAlt, FaCode, FaPaintBrush, FaShoppingCart, FaTools } from "react-icons/fa";

interface ServiceProps {
    className?: string;
    icon: string;
    title: string;
    description: string;
}

function Service({ className, icon, title, description }: ServiceProps) {
    const [transform, setTransform] = useState({ rotateX: 0, rotateY: 0 });
    const [isHovered, setIsHovered] = useState(false);
    const cardRef = useRef<HTMLDivElement>(null);

    // Map string keys to React icons
    const iconMap: { [key: string]: JSX.Element } = {
        monitor: <FaDesktop size={40} />,
        mobile: <FaMobileAlt size={40} />,
        code: <FaCode size={40} />,
        design: <FaPaintBrush size={40} />,
        ecommerce: <FaShoppingCart size={40} />,
        maintenance: <FaTools size={40} />,
    };

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const container = cardRef.current;
        if (!container) return;

        const { left, top, width, height } = container.getBoundingClientRect();
        const centerX = left + width / 2;
        const centerY = top + height / 2;

        const rotateY = ((e.clientX - centerX) / width) * 8;
        const rotateX = -((e.clientY - centerY) / height) * 8;
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
            className={`${className} h-auto flex flex-col gap-y-6 md:px-[50px] md:py-[70px] px-[40px] py-[50px] bg-gradient-to-br from-[#3A2B71] to-[#2A1B5B] rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group`}
            style={{
                transform: `perspective(1000px) rotateX(${transform.rotateX}deg) rotateY(${transform.rotateY}deg)`,
                transition: "transform 0.1s ease-out, box-shadow 0.3s ease-out",
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <div className="flex justify-center">
                <span
                    className={`flex justify-center items-center w-[70px] h-[70px] rounded-full bg-[#432d92] relative overflow-hidden
                    before:content-[''] before:w-full before:h-full before:absolute before:rounded-full before:left-0 before:top-0 
                    before:scale-0 before:bg-gradient-to-r before:from-[#00c0ff] before:to-[#0099cc] 
                    before:transition-transform before:duration-300 before:ease-in-out  
                    ${isHovered ? "before:scale-100" : ""}`}
                >
                    <span
                        className={`relative z-10 transition-all duration-300 ease-in-out ${
                            isHovered ? "text-white scale-75" : "text-white scale-100"
                        }`}
                    >
                        {iconMap[icon] || <FaDesktop size={40} />}
                    </span>
                </span>
            </div>

            <div>
                <h3 className="text-white text-2xl font-semibold text-center group-hover:text-[#00c0ff] transition-colors duration-300">
                    {title}
                </h3>
            </div>

            <div className="text-center">
                <p className="text-[#9D96B6] text-base leading-relaxed group-hover:text-[#B8B3D1] transition-colors duration-300">
                    {description}
                </p>
            </div>

            <div className="flex justify-center mt-2">
                <div className={`h-1 bg-gradient-to-r from-[#00c0ff] to-[#0099cc] rounded-full transition-all duration-300 ${
                    isHovered ? "w-16" : "w-8"
                }`}></div>
            </div>
        </div>
    );
}

export default Service;
