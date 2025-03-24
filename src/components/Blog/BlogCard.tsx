import React, { useState, useRef } from "react";
import blogPicture from "../../assets/blog.avif";
function BlogCard() {
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
            className={`w-[35%] h-auto flex flex-col gap-y-6 overflow-hidden bg-[#3A2B71] rounded-2xl`}
            style={{
                transform: `perspective(1000px) rotateX(${transform.rotateX}deg) rotateY(${transform.rotateY}deg)`,
                transition: "transform 0.1s ease-out",
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <div className="w-full h-auto flex flex-col items-center justify-center">
                <div className="bloImage ">
                    <img src={blogPicture} alt="" />
                </div>
                <div className="w-full px-10 py-7">
                    <div className="flex gap-x-4">
                        <p className="font-normal text-[#00c0ff]">Branding</p>
                        <p className="text-[#b4afc6]">Auguest 27, 2022</p>
                    </div>
                    <h3 className="text-left text-white font-semibold text-2xl mt-3">How good designers can collabrate better</h3>
                </div>
            </div>
        </div>
    );
}

export default BlogCard;
