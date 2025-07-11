import React, { useEffect, useState } from 'react';

interface TextHeadingProps {
    heading: string;
    text: React.ReactNode;
}

function TextHeading({ heading, text }: TextHeadingProps) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const timeout = setTimeout(() => setIsVisible(true), 100);
        return () => clearTimeout(timeout);
    }, []);

     <defs>
        <linearGradient id="meshGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(88, 28, 135, 0.1)" />
          <stop offset="50%" stopColor="rgba(0, 192, 255, 0.1)" />
          <stop offset="100%" stopColor="rgba(139, 92, 246, 0.1)" />
        </linearGradient>
      </defs>
      

    return (
        <div className="text-center mb-16 relative">
            {/* Small Heading with Gradient */}
            <h4
                className="text-xl font-medium text-center mb-2 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
            >
                {heading}
            </h4>

            {/* Main Heading in White */}
            <h2
                className={`text-6xl md:text-7xl font-bold text-white mb-6 transition-all duration-1000 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
            >
                {text}
            </h2>

            {/* Gradient Line */}
            <div
                className={`w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-6 transition-all duration-1000 delay-300 ${
                    isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
                }`}
            />
        </div>
    );
}

export default TextHeading;
