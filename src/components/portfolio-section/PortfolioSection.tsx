// import React, { useRef, useEffect } from 'react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import PortfolioCard from './PortfolioCard';

// gsap.registerPlugin(ScrollTrigger);

// function PortfolioSection() {
//   const cardsContainerRef = useRef<HTMLDivElement>(null);
//   const sectionRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const cardsContainer = cardsContainerRef.current;
//     const section = sectionRef.current;

//     if (!cardsContainer || !section) return;

//     // Calculate total scroll distance
//     const getScrollDistance = () => {
//       return cardsContainer.scrollWidth - window.innerWidth;
//     };

//     // Horizontal scroll animation
//     gsap.to(cardsContainer, {
//       x: () => -getScrollDistance(),
//       ease: 'none',
//       scrollTrigger: {
//         trigger: section,
//         start: 'top top',
//         end: () => `+=${getScrollDistance()}`,
//         scrub: 1,
//         pin: true,        // ScrollTrigger khud pin karega
//         anticipatePin: 1,
//         invalidateOnRefresh: true,
//       }
//     });

//     // Cleanup function
//     return () => {
//       ScrollTrigger.getAll().forEach(trigger => trigger.kill());
//     };
//   }, []);

//   return (

//     <div ref={sectionRef} className='w-full h-screen flex justify-center items-center p-5 bg-amber-600'>
//       {/* overflow-x-hidden add kiya */}
//       <div className='w-full h-auto wrapper  bg-red-500'>
//         <div
//           ref={cardsContainerRef}
//           className='w-max h-auto p-6 flex gap-6 bg-amber-300'
//         >
//           {[...Array(5)].map((_, index) => (
//             <PortfolioCard
//               key={index}
//               className='xl:w-[500px] lg:w-[400px] w-[300px] flex-shrink-0'
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default PortfolioSection;