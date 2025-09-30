import { useEffect, useRef, useState } from "react";
import {
  FaGlobe,
  FaCode,
  FaMobileAlt,
  FaPaintBrush,
  FaGithub,
  FaEye,
} from "react-icons/fa";
import TextHeading from "../TextHeading";
import Convex from "../../assets/convex4.png";
import Estore from "../../assets/e-store01.png";
import Travel from "../../assets/travel-website.png";
import Ecom from "../../assets/ecom.png";
import food from "../../assets/food-website.png";
import Portfolio_pic from "../../assets/portfolio-website.png";
import ComplainApp from "../../assets/complain-app.png";

const portfolioData = [
  {
    id: 1,
    title: "Book Publishing Branding Website",
    description:
      "Revolutionary book publishing website developed for a client, featuring modern design and seamless user experience.",
    image: Convex,
    technologies: ["React", "Tailwind CSS", "JavaScript", "Node.js"],
    category: "web",
    liveUrl: "https://convex-publisher.vercel.app/",
    githubUrl: "https://github.com/Adeel-116/Convex_publisher",
  },
  {
    id: 2,
    title: "E-Commerce Landing Page",
    description:
      "A responsive landing page for an E-commerce platform, built with modern web technologies and intuitive design.",
    image: Estore,
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    category: "web",
    liveUrl: "https://e-store-website-phi.vercel.app/",
    githubUrl: "https://github.com/Adeel-116/e-store-website",
  },
  {
    id: 3,
    title: "Traveling Website Frontend",
    description:
      "Frontend of a traveling website developed from Figma designs, focusing on responsive layout and smooth user experience.",
    image: Travel,
    technologies: ["React", "JavaScript", "Redux", "Tailwind CSS"],
    category: "web",
    liveUrl: "https://travel-website-v7sa.vercel.app/",
    githubUrl: "https://github.com/Adeel-116/Travel_website",
  },
  {
    id: 4,
    title: "E-Commerce Website",
    description:
      "A complete e-commerce website with user authentication, shopping cart, and responsive design.",
    image: Ecom,
    technologies: ["React", "CSS", "Firebase", "Redux"],
    category: "web",
    liveUrl: "https://travel-website-6rh7.vercel.app/",
    githubUrl: "https://github.com/Adeel-116/Ecom-website",
    featured: false,
  },
  {
    id: 5,
    title: "Figma Design Clone",
    description:
      "Frontend clone of Figma designs using HTML, CSS, and JavaScript, focusing on pixel-perfect design and responsiveness.",
    image: food,
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    category: "web",
    liveUrl: "https://figma-to-html-lyart.vercel.app/",
    githubUrl: "https://github.com/Adeel-116/Figma_to_HTML",
    featured: false,
  },
  {
    id: 6,
    title: "Portfolio Website",
    description:
      "A personal portfolio website showcasing projects and skills with responsive design and modern UI.",
    image: Portfolio_pic,
    technologies: ["React", "Tailwind CSS", "JavaScript", "Framer Motion"],
    category: "web",
    liveUrl: "https://personal-portfolio-bwxq.vercel.app/",
    githubUrl: "https://github.com/Adeel-116/Personal_portfolio",
    featured: true,
  },
  {
    id: 7,
    title: "Complaint App",
    description:
      "A complaint management app developed for a client using React Native, with real-time notifications and intuitive UI.",
    image: ComplainApp,
    technologies: ["React Native", "React-Navigation", "Redux ToolKit", "Android SDK"],
    category: "mobile",
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
];

const categories = [
  { id: "all", name: "All Projects", icon: FaGlobe },
  { id: "web", name: "Web Development", icon: FaCode },
  { id: "mobile", name: "Mobile Apps", icon: FaMobileAlt },
  { id: "design", name: "UI/UX Design", icon: FaPaintBrush },
];

const AnimatedBackground = () => (
  <div className="fixed inset-0 pointer-events-none overflow-hidden">
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1920 1080">
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
            animationDelay: `${Math.random() * 2}s`,
          }}
        />
      ))}
      <defs>
        <linearGradient id="meshGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(88, 28, 135, 0.1)" />
          <stop offset="50%" stopColor="rgba(0, 192, 255, 0.1)" />
          <stop offset="100%" stopColor="rgba(139, 92, 246, 0.1)" />
        </linearGradient>
      </defs>
      <g stroke="url(#meshGradient)" strokeWidth="0.5" fill="none" opacity="0.3">
        {Array.from({ length: 8 }).map((_, i) => (
          <path
            key={i}
            d={`M${i * 240},0 Q${i * 240 + 120},${540 + Math.sin(i) * 200} ${
              i * 240 + 240
            },1080`}
            className="animate-pulse"
            style={{
              animation: `wave ${6 + i}s ease-in-out infinite`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </g>
    </svg>
  </div>
);

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [filteredProjects, setFilteredProjects] = useState(portfolioData);
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const sectionRef = useRef<HTMLElement | null>(null);
const projectsRef = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    if (activeCategory === "all") {
      setFilteredProjects(portfolioData);
    } else {
      setFilteredProjects(
        portfolioData.filter((p) => p.category === activeCategory)
      );
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

      <section ref={sectionRef} className="relative z-10 px-4">
        <div className="text-center relative">
          <TextHeading heading="Here is a Complete Portfolio" text="Portfolio" />
        </div>

        <div
          className={`flex justify-center gap-4 flex-wrap mb-16 transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
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
                animation: `fadeInUp 0.8s ease-out ${index * 0.1}s both`,
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
               ref={(el) => { projectsRef.current[index] = el; }}
              className={`group relative bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl border border-white/10 hover:border-cyan-400/50 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 0.1}s` }}
              onClick={() =>
                setActiveCard(activeCard === project.id ? null : project.id)
              }
            >
              <div className="relative h-70 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Buttons overlay */}
                <div
                  className={`absolute inset-0 flex items-center justify-center gap-4 transition-all duration-300 ${
                    activeCard === project.id ? "opacity-100" : "opacity-0"
                  } md:group-hover:opacity-100`}
                >
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    className="flex items-center gap-2 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-black font-medium hover:bg-white transition-colors"
                  >
                    <FaEye /> View
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    className="flex items-center gap-2 px-4 py-2 bg-black/90 backdrop-blur-sm rounded-full text-white font-medium hover:bg-black transition-colors"
                  >
                    <FaGithub /> Code
                  </a>
                </div>
              </div>

              <div className="p-6 space-y-3.5">
                <div className="flex justify-between items-start">
                  <div className="flex gap-3 text-sm">
                    <span className="text-cyan-400 font-medium">
                      {project.category === "web"
                        ? "Web Dev"
                        : project.category === "mobile"
                        ? "Mobile"
                        : "Design"}
                    </span>
                    <span className="text-gray-400">•</span>
                    <span className="text-gray-400">2024</span>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-300 text-sm leading-relaxed">{project.description}</p>

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

              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-cyan-400/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
      </section>

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
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
