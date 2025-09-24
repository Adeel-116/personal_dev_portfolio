import React, { useEffect, useState, useRef } from 'react';

interface TextHeadingProps {
    heading: string;
    text: React.ReactNode;
}

const TextHeading: React.FC<TextHeadingProps> = ({ heading, text }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [isInView, setIsInView] = useState(false);
    const headingRef = useRef<HTMLDivElement>(null);

    // Intersection Observer for scroll-based animation
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true);
                }
            },
            { threshold: 0.1 }
        );

        if (headingRef.current) {
            observer.observe(headingRef.current);
        }

        return () => observer.disconnect();
    }, []);

    // Delayed animation trigger
    useEffect(() => {
        if (isInView) {
            const timeout = setTimeout(() => setIsVisible(true), 200);
            return () => clearTimeout(timeout);
        }
    }, [isInView]);

    return (
        <div ref={headingRef} className="text-center  relative overflow-hidden">
        
            {/* Small Heading with Enhanced Gradient */}
            <h4 
                className={`relative z-10 text-xl font-medium mb-3 bg-gradient-to-r from-[#00C0FF] via-blue-400 to-purple-500 bg-clip-text text-transparent transition-all duration-1000 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                }`}
            >
                {heading}
            </h4>

            {/* Main Heading with Animated Gradient */}
            <h2 
                className={`relative z-10 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 transition-all duration-1200 ease-out ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
            >
                <span className="bg-gradient-to-r from-white via-[#00C0FF] to-white bg-clip-text text-transparent bg-size-200 animate-gradient-x">
                    {text}
                </span>
            </h2>

            {/* Enhanced Gradient Line with Glow */}
            <div className="relative z-10 flex justify-center mb-6">
                <div 
                    className={`w-32 h-1 bg-gradient-to-r from-[#00C0FF] via-blue-400 to-purple-500 rounded-full transition-all duration-1200 delay-400 ease-out ${
                        isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
                    }`}
                />
                <div 
                    className={`absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-[#00C0FF] via-blue-400 to-purple-500 rounded-full blur-sm transition-all duration-1200 delay-400 ease-out ${
                        isVisible ? 'opacity-60 scale-x-100' : 'opacity-0 scale-x-0'
                    }`}
                />
            </div>

            {/* Floating Particles */}
            <div className="absolute inset-0 pointer-events-none">
                <div className={`absolute top-1/4 left-1/4 w-2 h-2 bg-[#00C0FF]/30 rounded-full transition-all duration-2000 ${isVisible ? 'animate-pulse opacity-100' : 'opacity-0'}`} />
                <div className={`absolute top-3/4 right-1/4 w-1 h-1 bg-purple-400/40 rounded-full transition-all duration-2000 delay-500 ${isVisible ? 'animate-pulse opacity-100' : 'opacity-0'}`} />
                <div className={`absolute top-1/2 left-3/4 w-1.5 h-1.5 bg-blue-400/30 rounded-full transition-all duration-2000 delay-1000 ${isVisible ? 'animate-pulse opacity-100' : 'opacity-0'}`} />
            </div>

            {/* Custom Styles */}
            <style>{`
                @keyframes gradient-x {
                    0%, 100% {
                        background-size: 200% 200%;
                        background-position: left center;
                    }
                    50% {
                        background-size: 200% 200%;
                        background-position: right center;
                    }
                }
                
                .animate-gradient-x {
                    animation: gradient-x 3s ease infinite;
                }
                
                .bg-size-200 {
                    background-size: 200% 200%;
                }
            `}</style>
        </div>
    );
};

export default TextHeading;