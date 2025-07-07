import React, { useEffect, useRef, useState } from "react";
import { FaGlobe, FaCode, FaMobileAlt, FaPaintBrush, FaExternalLinkAlt, FaGithub, FaEye, FaPaperPlane } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

const portfolioData = [
  { id: 1, title: "E-Commerce Platform", description: "Full-stack e-commerce solution.", image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop", technologies: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind"], category: "web", liveUrl: "#", githubUrl: "#", featured: true },
  { id: 2, title: "AI-Powered Mobile App", description: "Revolutionary mobile application.", image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop", technologies: ["React Native", "TensorFlow", "Firebase", "Redux"], category: "mobile", liveUrl: "#", githubUrl: "#", featured: true },
  { id: 3, title: "Dashboard Analytics", description: "Interactive data visualization dashboard.", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop", technologies: ["Next.js", "D3.js", "TypeScript", "PostgreSQL"], category: "web", liveUrl: "#", githubUrl: "#", featured: false },
  { id: 4, title: "Social Media Platform", description: "Modern social networking platform.", image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop", technologies: ["Flutter", "Firebase", "WebRTC", "GraphQL"], category: "mobile", liveUrl: "#", githubUrl: "#", featured: false },
  { id: 5, title: "Brand Identity System", description: "Complete brand identity design.", image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop", technologies: ["Figma", "Adobe CC", "Sketch", "Principle"], category: "design", liveUrl: "#", githubUrl: "#", featured: false },
];

const categories = [
  { id: "all", name: "All Projects", icon: FaGlobe },
  { id: "web", name: "Web Development", icon: FaCode },
  { id: "mobile", name: "Mobile Apps", icon: FaMobileAlt },
  { id: "design", name: "UI/UX Design", icon: FaPaintBrush },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [filteredProjects, setFilteredProjects] = useState(portfolioData);
  const [animation, setAnimation] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    if (activeCategory === "all") setFilteredProjects(portfolioData);
    else setFilteredProjects(portfolioData.filter(p => p.category === activeCategory));
  }, [activeCategory]);

  useEffect(() => {
    gsap.fromTo(sectionRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, scrollTrigger: { trigger: sectionRef.current, start: "top 80%" } });
  }, []);

  return (
    <section ref={sectionRef} className="min-h-screen py-20 px-4">
      <h2 className="text-5xl font-bold text-center text-white mb-12">My <span className="text-[#00c0ff]">Portfolio</span></h2>

      <div className="flex justify-center gap-4 flex-wrap mb-12">
        {categories.map(cat => (
          <button key={cat.id} onClick={() => setActiveCategory(cat.id)} className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm transition-all ${activeCategory === cat.id ? "bg-[#00c0ff] text-white shadow-lg" : "bg-[#00c0ff] text-white hover:bg-[#00c0ff]/90"}`}>
            <cat.icon className="text-lg" />
            {cat.name}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
        {filteredProjects.map(project => (
          <div key={project.id} className="group bg-[#3A2B71] rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition-transform">
            <div className="relative h-48 overflow-hidden">
              <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
            </div>

            <div className="p-6">
              <div className="flex gap-x-4">
                <p className="font-normal text-[#00c0ff]">Branding</p>
                <p className="text-[#b4afc6]">August 27, 2022</p>
              </div>
              <h3 className="text-left text-white font-semibold text-2xl mt-3">{project.title}</h3>
              <p className="text-[#b4afc6] text-sm mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="px-3 py-1 rounded-full text-xs bg-[#00c0ff] text-white">{tech}</span>
                ))}
              </div>
              <div className="flex gap-4 mt-4 text-sm">
                <a href={project.liveUrl} className="flex items-center gap-1 text-[#00c0ff] hover:text-white">
                  <FaExternalLinkAlt /> Demo
                </a>
                <a href={project.githubUrl} className="flex items-center gap-1 text-[#b4afc6] hover:text-white">
                  <FaGithub /> Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="w-fit mt-12 relative rounded-full bg-[#00c0ff] overflow-hidden sm:px-9 sm:py-3 px-5 py-3 group"
        onMouseEnter={() => setAnimation(true)}
        onMouseLeave={() => setAnimation(false)}
      >
        <div className="absolute inset-0 bg-white translate-y-full transition-transform duration-300 ease-in-out group-hover:translate-y-0"></div>
        <div className="relative z-10 flex items-center gap-2">
          <FaPaperPlane className="text-lg" style={{ color: animation ? "black" : "#ffff" }} />
          <p className="font-medium 2xl:text-[0.9rem] text-[0.9rem]" style={{ color: animation ? "black" : "#ffff" }}>Get Connected</p>
        </div>
      </div>
    </section>
  );
}
