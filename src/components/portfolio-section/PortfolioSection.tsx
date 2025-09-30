import { useEffect, useRef, useState } from "react";
import { FaGithub, FaEye } from "react-icons/fa";
import TextHeading from "../TextHeading";
import Convex from "../../assets/convex4.png";
import Estore from "../../assets/e-store01.png";
import Travel from "../../assets/travel-website.png";
import Ecom from "../../assets/ecom.png";
import food from "../../assets/food-website.png";
import Portfolio_pic from "../../assets/portfolio-website.png";
import ComplainApp from "../../assets/complainApp.png";
import MediConnectApp from "../../assets/medi-connect.png"
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
  },
  {
    id: 7,
    title: "Complaint App",
    description:
      "A complaint management app developed for a client using React Native, with real-time notifications and intuitive UI.",
    image: ComplainApp,
    technologies: [
      "React Native",
      "React-Navigation",
      "Redux ToolKit",
      "Android SDK",
    ],
    category: "mobile",
    liveUrl: "https://drive.google.com/drive/folders/1HZ8W4F3KT8IefPLeiouzUf1XPb4I-LSo?usp=sharing",
    githubUrl: "https://github.com/Adeel-116/Complain_App",
  },
 {
  id: 8,
  title: "MediConnect App",
  description:
    "A healthcare app for doctors and patients, built with React Native, offering appointment scheduling, and a smooth, intuitive UI.",
  image: MediConnectApp,
  technologies: [
    "React Native",
    "React-Navigation",
    "Redux ToolKit",
    "Android SDK",
  ],
  category: "mobile",
  liveUrl: "https://drive.google.com/drive/folders/1z7RtjwHOIp8Fk9nh_n6kA-IWVCNAB7I7?usp=sharing",
  githubUrl: "https://github.com/Adeel-116/Medi-Connect-App/",
}
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
    </svg>
  </div>
);

export default function Portfolio() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const sectionRef = useRef<HTMLElement | null>(null);
  const projectsRef = useRef<Array<HTMLDivElement | null>>([]);

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
          <TextHeading
            heading="Here is a Complete Portfolio"
            text="Portfolio"
          />
        </div>

        {/* Removed filter buttons */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mt-16 mb-5">
          {portfolioData.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => {
                projectsRef.current[index] = el;
              }}
              className={`group relative bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl border border-white/10 hover:border-cyan-400/50 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
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
                    <FaEye /> {project.category=== "mobile" ? "APK File" : "Live"}
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
                <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-300 text-sm leading-relaxed">
                  {project.description}
                </p>

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
      `}</style>
    </div>
  );
}
