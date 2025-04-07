// import React, { useState, useRef } from "react";
// import monitor from "../../assets/monitor.png";
// function PortfolioCard({className}: any) {
//     const [transform, setTransform] = useState({ rotateX: 0, rotateY: 0 });
//     const [isHovered, setIsHovered] = useState(false);
//     const cardRef = useRef<HTMLDivElement>(null);

//     const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
//         const container = cardRef.current;
//         if (!container) return;

//         const { left, top, width, height } = container.getBoundingClientRect();
//         const centerX = left + width / 5;
//         const centerY = top + height / 5;

//         const rotateY = ((e.clientX - centerX) / width) * 10;
//         const rotateX = -((e.clientY - centerY) / height) * 10;
//         setIsHovered(true);
//         setTransform({ rotateX, rotateY });
//     };

//     const handleMouseLeave = () => {
//         setIsHovered(false);
//         setTransform({ rotateX: 0, rotateY: 0 });
//     };

//     return (
//         <div
//             ref={cardRef}
//             className={`${className} h-auto flex flex-col gap-y-6 md:px-[50px] md:py-[70px]  bg-[#898952] rounded-2xl`}
//             style={{
//                 transform: `perspective(1000px) rotateX(${transform.rotateX}deg) rotateY(${transform.rotateY}deg)`,
//                 transition: "transform 0.1s ease-out",
//             }}
//             onMouseMove={handleMouseMove}
//             onMouseLeave={handleMouseLeave}
//         >
            

            
           
//         </div>
//     );
// }

// export default PortfolioCard;
