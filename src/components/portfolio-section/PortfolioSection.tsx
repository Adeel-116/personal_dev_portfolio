import React, { useEffect, useRef, useState } from "react";
import { FaGlobe, FaCode, FaMobileAlt, FaPaintBrush, FaGithub, FaEye, } from "react-icons/fa";

//
const portfolioData = [
  { id: 1, title: "E-Commerce Platform", description: "Full-stack e-commerce solution with advanced features and seamless user experience.", image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop", technologies: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind"], category: "web", liveUrl: "#", githubUrl: "#", featured: true },
  { id: 2, title: "AI-Powered Mobile App", description: "Revolutionary mobile application with machine learning capabilities and intuitive design.", image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop", technologies: ["React Native", "TensorFlow", "Firebase", "Redux"], category: "mobile", liveUrl: "#", githubUrl: "#", featured: true },
  { id: 3, title: "Dashboard Analytics", description: "Interactive data visualization dashboard with real-time insights and custom charts.", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop", technologies: ["Next.js", "D3.js", "TypeScript", "PostgreSQL"], category: "web", liveUrl: "#", githubUrl: "#", featured: false },
  { id: 4, title: "Social Media Platform", description: "Modern social networking platform with real-time messaging and content sharing.", image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop", technologies: ["Flutter", "Firebase", "WebRTC", "GraphQL"], category: "mobile", liveUrl: "#", githubUrl: "#", featured: false },
  { id: 5, title: "Brand Identity System", description: "Complete brand identity design with modern aesthetics and comprehensive guidelines.", image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop", technologies: ["Figma", "Adobe CC", "Sketch", "Principle"], category: "design", liveUrl: "#", githubUrl: "#", featured: false },
  { id: 6, title: "Fintech Dashboard", description: "Advanced financial analytics platform with real-time market data and portfolio tracking.", image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=400&fit=crop", technologies: ["Vue.js", "Chart.js", "Node.js", "MySQL"], category: "web", liveUrl: "#", githubUrl: "#", featured: true },
];

const categories = [
  { id: "all", name: "All Projects", icon: FaGlobe },
  { id: "web", name: "Web Development", icon: FaCode },
  { id: "mobile", name: "Mobile Apps", icon: FaMobileAlt },
  { id: "design", name: "UI/UX Design", icon: FaPaintBrush },
];

// Custom SVG animations component
const AnimatedBackground = () => (
  <div className="fixed inset-0 pointer-events-none overflow-hidden">
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1920 1080">
      {/* Floating particles */}
      {Array.from({ length: 15 }).map((_, i) => (
        <circle
          key={i}
          cx={Math.random() * 1920}
          cy={Math.random() * 1080}
          r={Math.random() * 3 + 1}
          fill="rgba(0, 192, 255, 0.3)"
          className="animate-pulse"
          style={{
            animation: `float ${8 + Math.random() * 4}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 2}s`
          }}
        />
      ))}
      
      {/* Gradient mesh */}
      <defs>
        <linearGradient id="meshGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(88, 28, 135, 0.1)" />
          <stop offset="50%" stopColor="rgba(0, 192, 255, 0.1)" />
          <stop offset="100%" stopColor="rgba(139, 92, 246, 0.1)" />
        </linearGradient>
      </defs>
      
      {/* Animated mesh lines */}
      <g stroke="url(#meshGradient)" strokeWidth="0.5" fill="none" opacity="0.3">
        {Array.from({ length: 8 }).map((_, i) => (
          <path
            key={i}
            d={`M${i * 240},0 Q${i * 240 + 120},${540 + Math.sin(i) * 200} ${i * 240 + 240},1080`}
            className="animate-pulse"
            style={{
              animation: `wave ${6 + i}s ease-in-out infinite`,
              animationDelay: `${i * 0.5}s`
            }}
          />
        ))}
      </g>
    </svg>
  </div>
);

const GlowingOrb = ({ delay = 0 }) => (
  <div 
    className="absolute w-32 h-32 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 opacity-20 blur-xl animate-pulse"
    style={{
      animation: `glow 4s ease-in-out infinite`,
      animationDelay: `${delay}s`
    }}
  />
);

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [filteredProjects, setFilteredProjects] = useState(portfolioData);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);
  const projectsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (activeCategory === "all") {
      setFilteredProjects(portfolioData);
    } else {
      setFilteredProjects(portfolioData.filter(p => p.category === activeCategory));
    }
  }, [activeCategory]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden">
      <AnimatedBackground />
      
      <section ref={sectionRef} className="relative z-10 py-20 px-4">
        {/* Header with enhanced typography */}
        <div className="text-center mb-16 relative">
          <GlowingOrb delay={0} />
          <h2 className={`text-6xl md:text-7xl font-bold text-white mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            My <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Portfolio</span>
          </h2>
          <div className={`w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-6 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`} />
          <p className={`text-xl text-gray-300 max-w-2xl mx-auto transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
            Explore my latest projects and creative solutions
          </p>
        </div>

        {/* Enhanced category filter */}
        <div className={`flex justify-center gap-4 flex-wrap mb-16 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {categories.map((cat, index) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`group relative flex items-center gap-3 px-8 py-4 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                activeCategory === cat.id
                  ? "bg-gradient-to-r from-cyan-400 to-blue-500 text-white shadow-lg shadow-cyan-500/25"
                  : "bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 border border-white/20"
              }`}
              style={{
                animation: `fadeInUp 0.8s ease-out ${index * 0.1}s both`
              }}
            >
              <cat.icon className="text-lg transition-transform group-hover:rotate-12" />
              <span>{cat.name}</span>
              {activeCategory === cat.id && (
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 opacity-20 animate-pulse" />
              )}
            </button>
          ))}
        </div>

        {/* Enhanced project grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              ref={el => { projectsRef.current[index] = el; }}
              className={`group relative bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl border border-white/10 hover:border-cyan-400/50 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{
                transitionDelay: `${index * 0.1}s`
              }}
            >
              {/* Featured badge */}
              {project.featured && (
                <div className="absolute top-4 left-4 z-10 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                  Featured
                </div>
              )}
              
              {/* Project image with overlay */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Hover actions */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <a
                    href={project.liveUrl}
                    className="flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-black font-medium hover:bg-white transition-colors"
                  >
                    <FaEye /> View
                  </a>
                  <a
                    href={project.githubUrl}
                    className="flex items-center gap-2 px-4 py-2 bg-black/90 backdrop-blur-sm rounded-full text-white font-medium hover:bg-black transition-colors"
                  >
                    <FaGithub /> Code
                  </a>
                </div>
              </div>

              {/* Enhanced project content */}
              <div className="p-6 space-y-4">
                <div className="flex justify-between items-start">
                  <div className="flex gap-3 text-sm">
                    <span className="text-cyan-400 font-medium">
                      {project.category === 'web' ? 'Web Dev' : 
                       project.category === 'mobile' ? 'Mobile' : 'Design'}
                    </span>
                    <span className="text-gray-400">•</span>
                    <span className="text-gray-400">2024</span>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Technology stack */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-cyan-400/20 to-blue-500/20 border border-cyan-400/30 text-cyan-300 hover:from-cyan-400/30 hover:to-blue-500/30 transition-all cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Animated border glow */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-400/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
      </section>
      
      {/* Custom styles for animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes wave {
          0%, 100% { d: path('M0,0 Q120,540 240,1080'); }
          50% { d: path('M0,0 Q120,340 240,1080'); }
        }
        
        @keyframes glow {
          0%, 100% { transform: scale(1) rotate(0deg); opacity: 0.2; }
          50% { transform: scale(1.2) rotate(180deg); opacity: 0.4; }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}