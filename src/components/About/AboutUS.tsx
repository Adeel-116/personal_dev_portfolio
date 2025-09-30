import Button from "../Button";
import TextHeading from "../TextHeading";
import AboutImage from "../../assets/about2.webp";
import { scroller } from "react-scroll";
function AboutUS() {

  
    function scrollToContact() {
      scroller.scrollTo("contact", {
        duration: 1000,   
        smooth: true,
        offset: -100,
      });
    }


  return (
    <div className="sm:text-center w-full">
      <TextHeading
        heading="About Me"
        text={
          <>
            Passionate Developer <br />
            Who Loves to Code
          </>
        }
      />

      <div className="flex py-5 flex-col lg:flex-row w-full">
        {/* Image Section with Enhanced Animations */}
        <div className="lg:w-1/2 flex justify-center items-center relative group">
          <div className="relative lg:w-[90%] 2xl:w-[75%] w-[80%]">
            {/* Animated border effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500 rounded-lg opacity-30 group-hover:opacity-50 blur-xl transition-all duration-700 animate-pulse"></div>
            
            {/* Main image with hover effects */}
            <img
              src={AboutImage}
              alt="Muhammad Adeel - Full Stack Developer workspace"
              className="relative lg:flex md:hidden rounded-lg object-cover shadow-2xl transform transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-cyan-500/20"
              style={{
                animation: "fadeInUp 0.8s ease-out forwards"
              }}
            />

            {/* Floating decorative elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 border-2 border-cyan-400 rounded-lg opacity-50 animate-float"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 border-2 border-blue-400 rounded-lg opacity-50 animate-float-delayed"></div>
          </div>
        </div>

        {/* Text Section with Staggered Animations */}
        <div className="lg:w-1/2 md:py-0 py-5 flex flex-col justify-center items-center lg:items-start gap-y-5 text-white  lg:text-left px-1 2xl:pl-20">
          <div className="text-[16px] xl:text-[17px] 2xl:text-[18px] leading-relaxed max-w-[90%] lg:w-auto">
            <p className="mb-4 opacity-0 animate-slideInLeft" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
              I'm a <strong className="text-[#00c0ff] transition-all duration-300 hover:text-cyan-300">Full-Stack Developer</strong> passionate about building
              <strong> modern websites</strong>, <strong>scalable web apps</strong>, and
              <strong> cross-platform mobile applications</strong> using cutting-edge technologies.
            </p>

            <p className="mb-4 opacity-0 animate-slideInLeft" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
              My focus is on delivering <strong>clean UI/UX</strong>, high performance, and
              <strong> future-ready digital solutions</strong> that help brands thrive in the digital landscape.
            </p>

            <p className="mb-4 opacity-0 animate-slideInLeft" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
              <strong className="text-[#00c0ff] transition-all duration-300 hover:text-cyan-300">Tech Stack:</strong> React.js, Next.js, Tailwind CSS,
              Node.js, Express.js, REST APIs, MongoDB, PostgreSQL, React Native, Flutter.
            </p>

            <p className="opacity-0 animate-slideInLeft" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
              I thrive on solving real-world problems, mastering emerging technologies, and
              collaborating as a <strong>Freelancer</strong> to transform visionary ideas into powerful digital experiences. 🚀
            </p>
          </div>

          <div className="w-fit opacity-0 animate-slideInUp" style={{ animationDelay: '1s', animationFillMode: 'forwards' }}>
            <Button buttonTile="Contact Us" onClick={scrollToContact} />
          </div>
        </div>
      </div>

      <style>{`
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

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }

        @keyframes float-delayed {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-15px) rotate(-5deg);
          }
        }

        .animate-slideInLeft {
          animation: slideInLeft 0.6s ease-out;
        }

        .animate-slideInUp {
          animation: slideInUp 0.6s ease-out;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 3s ease-in-out infinite 1.5s;
        }
      `}</style>
    </div>
  );
}

export default AboutUS;