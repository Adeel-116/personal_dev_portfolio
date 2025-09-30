import { FaLinkedinIn, FaTwitter, FaInstagram, FaHeart } from "react-icons/fa";
import { LuGithub } from "react-icons/lu";
import { MdOutlineMail, MdLocationOn, MdPhone } from "react-icons/md";
import { IoArrowUp } from "react-icons/io5";
import { useEffect, useState, useCallback, useRef } from "react";
import { scroller } from "react-scroll";
import Logo from "../../assets/bg.png";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [error, setError] = useState("");
  const footerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1, rootMargin: '50px' }
    );
    const footerElement = document.getElementById('footer');
    if (footerElement) observer.observe(footerElement);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = useCallback(() => window.scrollTo({ top: 0, behavior: 'smooth' }), []);

  const scrollToSection = useCallback((section: any) => {
    scroller.scrollTo(section, { duration: 500, smooth: true, offset: -100 });
  }, []);

  const navigationLinks = [
    { name: "Home", section: "home" },
    { name: "About", section: "about" },
    { name: "Services", section: "services" },
    { name: "Portfolio", section: "portfolio" },
    { name: "Contact", section: "contact" }
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <FaLinkedinIn />,
      href: "https://www.linkedin.com/in/muhammad-adeel-4561bb255",
      color: "hover:text-blue-400",
      ariaLabel: "Visit my LinkedIn profile"
    },
    {
      name: "GitHub",
      icon: <LuGithub />,
      href: "https://github.com/Adeel-116",
      color: "hover:text-gray-400",
      ariaLabel: "Visit my GitHub profile"
    },
    {
      name: "Twitter",
      icon: <FaTwitter />,
      href: "https://x.com/adeel8128377",
      color: "hover:text-blue-300",
      ariaLabel: "Visit my Twitter profile"
    },
    {
      name: "Instagram",
      icon: <FaInstagram />,
      href: "https://instagram.com",
      color: "hover:text-pink-400",
      ariaLabel: "Visit my Instagram profile"
    }
  ];

  const contactInfo = [
    {
      icon: <MdOutlineMail />,
      text: "adeel8128377@gmail.com",
      href: "mailto:adeel8128377@gmail.com",
      ariaLabel: "Send an email to adeel8128377@gmail.com"
    },
    {
      icon: <MdPhone />,
      text: "+92 342 2815470",
      href: "tel:+923422815470",
      ariaLabel: "Call +92 342 2815470"
    },
    {
      icon: <MdLocationOn />,
      text: "Karachi, Pakistan",
      href: "https://www.google.com/maps/search/Karachi,+Pakistan",
      ariaLabel: "View location in Karachi, Pakistan on Google Maps"
    }
  ];

  const currentYear = new Date().getFullYear();

  const handleSubscribe = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setError("");

    if (!email.includes("@")) {
      setError("Please enter a valid email.");
      return;
    }

    setIsLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setIsSubscribed(true);
      setEmail(""); // clear input
      setTimeout(() => setIsSubscribed(false), 3000);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <footer id="footer" ref={footerRef} className="w-full relative bg-gradient-to-br from-[#1E1345] via-[#2A1B5C] to-[#1E1345] text-white overflow-hidden">
        <div className="relative z-10 2xl:w-[75%] xl:w-[85%] sm:w-[90%] mx-auto py-10 px-4 sm:px-6 lg:px-8">
          <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

            {/* Logo & Social */}
            <div className="flex flex-col items-center lg:items-start">
              <img src={Logo} alt="Logo" className="w-[120px] sm:w-[150px] lg:w-[170px] mb-4" />
              <p className="text-white text-center lg:text-left text-[15px] leading-relaxed mb-2">
                A passionate developer crafting creative digital solutions and seamless user experiences.
              </p>
              <div className="flex space-x-3">
                {socialLinks.map((social) => (
                  <a key={social.name} href={social.href} aria-label={social.ariaLabel} target="_blank" rel="noopener noreferrer" className={`text-xl p-2 rounded-full bg-white/10 hover:scale-110 transition-all duration-300 ${social.color}`}>
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="text-center lg:text-left lg:pl-7 ">
              <h2 className="text-lg font-semibold text-[#00C0FF] mb-4">Quick Links</h2>
              <ul className="space-y-2">
                {navigationLinks.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.section)}
                      className="text-white hover:text-[#00C0FF]  cursor-pointer text-[16px] transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="text-center lg:text-left">
              <h2 className="text-lg font-semibold text-[#00C0FF] mb-4">Get In Touch</h2>
              <ul className="space-y-3 cursor-pointer">
                {contactInfo.map((contact, idx) => (
                  <li key={idx} className="flex justify-center lg:justify-start items-center gap-3 text-white hover:text-[#00C0FF] text-[15px]">
                    <span>{contact.icon}</span>
                    <a href={contact.href} aria-label={contact.ariaLabel} className="break-words text-white hover:text-[#00C0FF]">{contact.text}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h2 className="text-lg font-semibold text-[#00C0FF] mb-4">Stay Updated</h2>
              <p className="text-white text-[15px] mb-4">Subscribe to get the latest update</p>
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-3 bg-white/10 text-white rounded-md text-sm"
                  aria-label="Enter your email"
                />
                <button
                  onClick={handleSubscribe}
                  disabled={isLoading || isSubscribed}
                  className={`px-4 py-2 bg-gradient-to-r cursor-pointer from-[#00C0FF] to-blue-400 rounded-md text-sm ${isLoading || isSubscribed ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105 transition-transform duration-150'}`}
                >
                  {isLoading ? 'Loading...' : isSubscribed ? 'Subscribed ✓' : 'Subscribe'}
                </button>
              </div>
              {error && <p className="text-red-400 text-sm mt-2">{error}</p>}
            </div>


          </div>

          {/* Divider */}
          <div className="mt-12 border-t border-white/20 pt-6 flex flex-col sm:flex-row items-center justify-between">
            <p className="sm:text-[15px] text-[14px] text-white flex items-center gap-1">
              © {currentYear} Muhammad Adeel. Developed & Designed by me <FaHeart className="text-red-400 animate-pulse sm:block hidden" />
            </p>
          </div>
        </div>
      </footer>


      <button
        onClick={scrollToTop}
        className={`fixed bottom-4 sm:bottom-8 right-4 sm:right-8 p-3.5 sm:p-4 bg-gradient-to-r from-[#00C0FF] to-blue-400 text-white rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-50 ${showBackToTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
        aria-label="Back to top"
      >
        <IoArrowUp className="text-lg sm:text-xl" />
      </button>
    </>
  );
};

export default Footer;
