import { useState, useRef, useCallback, useMemo, useEffect } from "react";
import Avatar from "../../assets/image.png"
import Button from "../Button";

interface Transform {
  rotateX: number;
  rotateY: number;
}

// Type definition for GSAP
interface GSAPInstance {
  timeline: (config?: any) => any;
  fromTo: (target: any, from: any, to: any) => unknown;
  to: (target: any, vars: any) => any;
  killAll: () => void;
}

// Extend Window interface to include gsap
declare global {
  interface Window {
    gsap?: GSAPInstance;
  }
}

const HeroSection = () => {
  const [transform, setTransform] = useState<Transform>({ rotateX: 0, rotateY: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [gsapLoaded, setGsapLoaded] = useState(false);
  
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  const firstNameRef = useRef<HTMLHeadingElement>(null);
  const lastNameRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  // Memoized constants for better performance
  const ROTATION_INTENSITY = 15;
  const TRANSITION_DURATION = "0.2s";
  const PERSPECTIVE = "1200px";

  // Load GSAP
  useEffect(() => {
    const loadGSAP = async () => {
      // Check if GSAP is already loaded
      if (window.gsap) {
        setGsapLoaded(true);
        return;
      }

      try {
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js';
        script.async = true;
        
        script.onload = () => {
          // Double check that GSAP is available
          if (window.gsap) {
            setGsapLoaded(true);
          }
        };
        
        script.onerror = () => {
          console.error('Failed to load GSAP');
        };
        
        document.head.appendChild(script);
      } catch (error) {
        console.error('Error loading GSAP:', error);
      }
    };

    loadGSAP();
  }, []);

  // GSAP Animations
  useEffect(() => {
    if (!gsapLoaded || !window.gsap) return;

    const gsap = window.gsap;
    const tl = gsap.timeline({ delay: 0.5 });

    // Text animations
    tl.fromTo(firstNameRef.current, 
      { 
        opacity: 0, 
        y: 100, 
        rotationX: 90 
      },
      { 
        opacity: 1, 
        y: 0, 
        rotationX: 0, 
        duration: 1.2, 
        ease: "power3.out" 
      }
    )
    .fromTo(lastNameRef.current, 
      { 
        opacity: 0, 
        y: 100, 
        rotationX: 90 
      },
      { 
        opacity: 1, 
        y: 0, 
        rotationX: 0, 
        duration: 1.2, 
        ease: "power3.out" 
      }, 
      "-=0.8"
    )
    .fromTo(descriptionRef.current, 
      { 
        opacity: 0, 
        y: 50 
      },
      { 
        opacity: 1, 
        y: 0, 
        duration: 1, 
        ease: "power2.out" 
      }, 
      "-=0.6"
    )
    .fromTo(buttonRef.current, 
      { 
        opacity: 0, 
        scale: 0.8 
      },
      { 
        opacity: 1, 
        scale: 1, 
        duration: 0.8, 
        ease: "back.out(1.7)" 
      }, 
      "-=0.4"
    );

    // Enhanced SVG Animation
    if (svgRef.current) {
      const floatingCircles = svgRef.current.querySelectorAll('.floating-circle');
      const pulseCircles = svgRef.current.querySelectorAll('.pulse-circle');
      const animatedPaths = svgRef.current.querySelectorAll('.animated-path');
      const morphingShapes = svgRef.current.querySelectorAll('.morphing-shape');
      const techGrid = svgRef.current.querySelectorAll('.tech-grid rect');
      const particles = svgRef.current.querySelectorAll('.particle');
      const connections = svgRef.current.querySelectorAll('.connection');
      const rings = svgRef.current.querySelectorAll('.ring');

      // Floating circles entrance
      gsap.fromTo(floatingCircles, 
        { 
          scale: 0, 
          opacity: 0,
          transformOrigin: "center center"
        },
        { 
          scale: 1, 
          opacity: 1, 
          duration: 2, 
          ease: "elastic.out(1, 0.3)",
          stagger: 0.15
        }
      );

      // Pulse circles animation
      gsap.fromTo(pulseCircles, 
        { 
          scale: 0, 
          opacity: 0
        },
        { 
          scale: 1, 
          opacity: 1, 
          duration: 1.5, 
          ease: "power2.out",
          stagger: 0.2
        }
      );

      // Animated paths drawing
      gsap.fromTo(animatedPaths, 
        { 
          strokeDasharray: "0 100%",
          opacity: 0 
        },
        { 
          strokeDasharray: "100% 0",
          opacity: 1, 
          duration: 4, 
          ease: "power2.inOut",
          stagger: 0.3
        }
      );

      // Morphing shapes entrance
      gsap.fromTo(morphingShapes, 
        { 
          scale: 0, 
          rotation: -180,
          opacity: 0
        },
        { 
          scale: 1, 
          rotation: 0,
          opacity: 1, 
          duration: 2, 
          ease: "back.out(1.7)",
          stagger: 0.2
        }
      );

      // Tech grid animation
      gsap.fromTo(techGrid, 
        { 
          scaleX: 0,
          scaleY: 0,
          opacity: 0
        },
        { 
          scaleX: 1,
          scaleY: 1,
          opacity: 1, 
          duration: 1.5, 
          ease: "power2.out",
          stagger: 0.1
        }
      );

      // Particles entrance
      gsap.fromTo(particles, 
        { 
          scale: 0, 
          opacity: 0
        },
        { 
          scale: 1, 
          opacity: 1, 
          duration: 1, 
          ease: "bounce.out",
          stagger: 0.05
        }
      );

      // Connection lines drawing
      gsap.fromTo(connections, 
        { 
          strokeDasharray: "0 100%",
          opacity: 0 
        },
        { 
          strokeDasharray: "5 5",
          opacity: 1, 
          duration: 2, 
          ease: "power2.out",
          stagger: 0.3
        }
      );

      // Rings entrance
      gsap.fromTo(rings, 
        { 
          scale: 0, 
          opacity: 0
        },
        { 
          scale: 1, 
          opacity: 1, 
          duration: 2, 
          ease: "elastic.out(1, 0.5)",
          stagger: 0.2
        }
      );

      // Continuous animations
      
      // Floating circles movement
      gsap.to(floatingCircles, {
        y: "random(-30, 30)",
        x: "random(-25, 25)",
        duration: "random(4, 7)",
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        stagger: 0.1
      });

      // Pulse circles breathing effect
      gsap.to(pulseCircles, {
        scale: "random(0.8, 1.2)",
        opacity: "random(0.3, 0.8)",
        duration: "random(2, 4)",
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        stagger: 0.2
      });

      // Paths flow animation
      gsap.to(animatedPaths, {
        strokeDashoffset: "100%",
        duration: 8,
        ease: "none",
        repeat: -1,
        stagger: 0.5
      });

      // Morphing shapes rotation
      gsap.to(morphingShapes, {
        rotation: 360,
        duration: "random(15, 25)",
        ease: "none",
        repeat: -1,
        transformOrigin: "center center",
        stagger: 0.3
      });

      // Tech grid pulse
      gsap.to(techGrid, {
        opacity: "random(0.2, 0.6)",
        duration: "random(1, 3)",
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        stagger: 0.1
      });

      // Particles floating
      gsap.to(particles, {
        y: "random(-40, 40)",
        x: "random(-30, 30)",
        rotation: "random(0, 360)",
        duration: "random(5, 10)",
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        stagger: 0.08
      });

      // Connection lines pulse
      gsap.to(connections, {
        opacity: "random(0.1, 0.4)",
        strokeWidth: "random(0.5, 2)",
        duration: "random(2, 4)",
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        stagger: 0.2
      });

      // Rings rotation
      gsap.to(rings, {
        rotation: 360,
        duration: "random(20, 30)",
        ease: "none",
        repeat: -1,
        transformOrigin: "center center",
        stagger: 0.3
      });

      // Advanced morphing animation
      gsap.to(morphingShapes, {
        scale: "random(0.8, 1.2)",
        duration: "random(3, 6)",
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        stagger: 0.4
      });
    }

    // Cleanup function
    return () => {
      if (tl && typeof tl.kill === 'function') {
        tl.kill();
      }
    };
  }, [gsapLoaded]);

  // Optimized mouse move handler with requestAnimationFrame
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLImageElement>) => {
    const container = imageContainerRef.current;
    if (!container) return;

    // Cancel previous animation frame
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
    }

    rafRef.current = requestAnimationFrame(() => {
      const rect = container.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // Normalized coordinates (-1 to 1)
      const normalizedX = (e.clientX - centerX) / (rect.width / 2);
      const normalizedY = (e.clientY - centerY) / (rect.height / 2);

      // Calculate rotation with smooth interpolation
      const rotateY = normalizedX * ROTATION_INTENSITY;
      const rotateX = -normalizedY * ROTATION_INTENSITY;

      setTransform({ rotateX, rotateY });
    });
  }, [ROTATION_INTENSITY]);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    // Cancel any pending animation frame
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
    }
    setTransform({ rotateX: 0, rotateY: 0 });
  }, []);

  // Memoized styles for better performance
  const containerStyle = useMemo(() => ({
    perspective: PERSPECTIVE,
  }), [PERSPECTIVE]);

  const imageStyle = useMemo(() => ({
    transform: `perspective(${PERSPECTIVE}) rotateX(${transform.rotateX}deg) rotateY(${transform.rotateY}deg) scale(${isHovered ? 1.05 : 1})`,
    transition: `transform ${TRANSITION_DURATION} cubic-bezier(0.4, 0, 0.2, 1)`,
    filter: isHovered ? "brightness(1.1)" : "brightness(1)",
    cursor: "pointer",
  }), [transform, isHovered, PERSPECTIVE, TRANSITION_DURATION]);

  return (
    <section 
      className="w-full xl:h-screen h-auto grid lg:grid-cols-2 grid-cols-1 lg:items-center xl:py-0 lg:py-40 sm:py-30 py-40 relative overflow-hidden"
      aria-label="Hero section introducing Muhammad Adeel"
    >
      {/* Enhanced Animated SVG Background */}
      <svg 
        ref={svgRef}
        className="absolute inset-0 w-full h-full opacity-20 pointer-events-none"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00c0ff" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#0080ff" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#004080" stopOpacity="0.1" />
          </linearGradient>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ff6b6b" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#4ecdc4" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#45b7b8" stopOpacity="0.1" />
          </linearGradient>
          <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffeaa7" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#fdcb6e" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#e17055" stopOpacity="0.1" />
          </linearGradient>
          <radialGradient id="radialGradient1" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#00c0ff" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#0080ff" stopOpacity="0.0" />
          </radialGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Floating Circles with Glow Effect */}
        <circle cx="200" cy="150" r="60" fill="url(#gradient1)" filter="url(#glow)" className="floating-circle" />
        <circle cx="800" cy="300" r="80" fill="url(#gradient2)" filter="url(#glow)" className="floating-circle" />
        <circle cx="1000" cy="600" r="50" fill="url(#gradient1)" filter="url(#glow)" className="floating-circle" />
        <circle cx="300" cy="650" r="40" fill="url(#gradient2)" filter="url(#glow)" className="floating-circle" />
        <circle cx="600" cy="100" r="35" fill="url(#gradient1)" filter="url(#glow)" className="floating-circle" />
        <circle cx="450" cy="450" r="45" fill="url(#gradient3)" filter="url(#glow)" className="floating-circle" />
        <circle cx="950" cy="100" r="30" fill="url(#gradient2)" filter="url(#glow)" className="floating-circle" />
        
        {/* Pulsing Radial Gradients */}
        <circle cx="100" cy="100" r="100" fill="url(#radialGradient1)" className="pulse-circle" />
        <circle cx="700" cy="200" r="120" fill="url(#radialGradient1)" className="pulse-circle" />
        <circle cx="400" cy="600" r="90" fill="url(#radialGradient1)" className="pulse-circle" />
        
        {/* Complex Animated Paths */}
        <path 
          d="M 0 400 Q 150 200 300 400 T 600 400 Q 750 200 900 400 T 1200 400" 
          stroke="url(#gradient1)" 
          strokeWidth="2" 
          fill="none"
          pathLength="1"
          className="animated-path"
        />
        <path 
          d="M 0 300 Q 200 100 400 300 T 800 300 Q 1000 100 1200 300" 
          stroke="url(#gradient2)" 
          strokeWidth="2" 
          fill="none"
          pathLength="1"
          className="animated-path"
        />
        <path 
          d="M 0 500 Q 300 300 600 500 T 1200 500" 
          stroke="url(#gradient3)" 
          strokeWidth="2" 
          fill="none"
          pathLength="1"
          className="animated-path"
        />
        <path 
          d="M 200 0 Q 400 150 600 0 T 1000 0 Q 1100 150 1200 0" 
          stroke="url(#gradient1)" 
          strokeWidth="1.5" 
          fill="none"
          pathLength="1"
          className="animated-path"
        />
        
        {/* Morphing Shapes */}
        <polygon 
          points="900,200 950,150 1000,200 950,250" 
          fill="url(#gradient2)" 
          opacity="0.15"
          className="morphing-shape"
        />
        <polygon 
          points="150,550 200,500 250,550 200,600" 
          fill="url(#gradient1)" 
          opacity="0.15"
          className="morphing-shape"
        />
        <polygon 
          points="750,650 800,600 850,650 825,700 775,700" 
          fill="url(#gradient3)" 
          opacity="0.15"
          className="morphing-shape"
        />
        
        {/* Tech-inspired Elements */}
        <g className="tech-grid">
          <rect x="50" y="50" width="100" height="2" fill="url(#gradient1)" opacity="0.3" />
          <rect x="50" y="50" width="2" height="100" fill="url(#gradient1)" opacity="0.3" />
          <rect x="1050" y="650" width="100" height="2" fill="url(#gradient2)" opacity="0.3" />
          <rect x="1148" y="550" width="2" height="100" fill="url(#gradient2)" opacity="0.3" />
          <rect x="300" y="200" width="80" height="2" fill="url(#gradient3)" opacity="0.3" />
          <rect x="300" y="200" width="2" height="80" fill="url(#gradient3)" opacity="0.3" />
        </g>
        
        {/* Particle System */}
        <g className="particles">
          <circle cx="100" cy="200" r="2" fill="#00c0ff" opacity="0.6" className="particle" />
          <circle cx="300" cy="350" r="1.5" fill="#ff6b6b" opacity="0.6" className="particle" />
          <circle cx="500" cy="150" r="2.5" fill="#4ecdc4" opacity="0.6" className="particle" />
          <circle cx="700" cy="500" r="1" fill="#ffeaa7" opacity="0.6" className="particle" />
          <circle cx="900" cy="250" r="2" fill="#00c0ff" opacity="0.6" className="particle" />
          <circle cx="1100" cy="400" r="1.5" fill="#ff6b6b" opacity="0.6" className="particle" />
          <circle cx="200" cy="600" r="2.5" fill="#4ecdc4" opacity="0.6" className="particle" />
          <circle cx="600" cy="700" r="1" fill="#ffeaa7" opacity="0.6" className="particle" />
          <circle cx="800" cy="100" r="2" fill="#00c0ff" opacity="0.6" className="particle" />
          <circle cx="400" cy="300" r="1.5" fill="#ff6b6b" opacity="0.6" className="particle" />
        </g>
        
        {/* Connecting Lines */}
        <g className="connection-lines">
          <line x1="200" y1="150" x2="800" y2="300" stroke="url(#gradient1)" strokeWidth="1" opacity="0.2" className="connection" />
          <line x1="800" y1="300" x2="1000" y2="600" stroke="url(#gradient2)" strokeWidth="1" opacity="0.2" className="connection" />
          <line x1="300" y1="650" x2="600" y2="100" stroke="url(#gradient3)" strokeWidth="1" opacity="0.2" className="connection" />
          <line x1="450" y1="450" x2="950" y2="100" stroke="url(#gradient1)" strokeWidth="1" opacity="0.2" className="connection" />
        </g>
        
        {/* Rotating Ring Elements */}
        <g className="rotating-rings">
          <circle cx="250" cy="250" r="80" fill="none" stroke="url(#gradient1)" strokeWidth="1" opacity="0.3" className="ring" />
          <circle cx="950" cy="550" r="60" fill="none" stroke="url(#gradient2)" strokeWidth="1" opacity="0.3" className="ring" />
          <circle cx="650" cy="350" r="70" fill="none" stroke="url(#gradient3)" strokeWidth="1" opacity="0.3" className="ring" />
        </g>
      </svg>

      {/* Text Content */}
      <div className="w-full h-auto order-2 lg:order-1 lg:mt-0 mt-5 relative z-10">
        <div className="w-full h-auto flex flex-col gap-y-4 justify-center items-center lg:items-start px-2">
          <div className="text-center lg:text-left">
            <h1 
              ref={firstNameRef}
              className="2xl:text-[4.5rem] sm:text-[4rem] text-[2.5rem] leading-none text-white font-semibold opacity-0"
            >
              Muhammad 
            </h1>
            <h1 
              ref={lastNameRef}
              className="2xl:text-[4.5rem] sm:text-[4rem] text-[2.7rem] leading-none text-[#00c0ff] font-semibold opacity-0"
            >
              Adeel
            </h1>
          </div>
          
          <p 
            ref={descriptionRef}
            className="2xl:text-xl sm:text-[15px] text-sm text-white lg:text-left text-center font-medium xl:w-[100%] lg:w-[90%] md:w-[75%] leading-relaxed opacity-0"
          >
            I am a Software Engineer with extensive experience in building websites, web applications, and mobile applications. 
            With more than 3 years of experience in this field, I also work as a part-time freelancer on Freelancer.com.
          </p>
          
          <div 
            ref={buttonRef}
            className="xl:mt-8 sm:mt-4 flex sm:justify-center lg:justify-start opacity-0"
          >
            <Button />
          </div>
        </div>
      </div>

      {/* Avatar Image */}
      <div
        ref={imageContainerRef}
        className="w-full h-auto flex lg:justify-end justify-center items-center lg:order-2 sm:order-1 relative z-10"
        style={containerStyle}
      >
        <img
          src={Avatar}
          className="xl:w-[80%] lg:w-[90%] w-[50%] max-w-md"
          alt="Muhammad Adeel - Software Engineer"
          style={imageStyle}
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          loading="eager"
          decoding="async"
        />
      </div>
    </section>
  );
};

export default HeroSection;