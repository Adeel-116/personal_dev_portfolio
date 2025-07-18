import { FaLinkedinIn, FaTwitter, FaInstagram, FaHeart } from "react-icons/fa";
import { LuGithub } from "react-icons/lu";
import { MdOutlineMail, MdLocationOn, MdPhone } from "react-icons/md";
import { IoArrowUp } from "react-icons/io5";
import { useEffect, useState, useCallback, useRef } from "react";
import Logo from "../../assets/bg.png";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
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

  const handleSubscribe = useCallback(async (e:React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!email.includes('@')) return;
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubscribed(true);
    setIsLoading(false);
    setEmail('');
    setTimeout(() => setIsSubscribed(false), 3000);
  }, [email]);

  // const handleNavClick = useCallback((e, href) => {
  //   e.preventDefault();
  //   document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  // }, []);

  const navigationLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Blogs", href: "#blogs" },
    { name: "Contact", href: "#contact" }
  ];

  const socialLinks = [
    { name: "LinkedIn", icon: <FaLinkedinIn />, href: "https://linkedin.com", color: "hover:text-blue-400" },
    { name: "GitHub", icon: <LuGithub />, href: "https://github.com", color: "hover:text-gray-400" },
    { name: "Twitter", icon: <FaTwitter />, href: "https://twitter.com", color: "hover:text-blue-300" },
    { name: "Instagram", icon: <FaInstagram />, href: "https://instagram.com", color: "hover:text-pink-400" }
  ];

  const contactInfo = [
    { icon: <MdOutlineMail />, text: "adeel8128377@gmail.com", href: "mailto:adeel8128377@gmail.com" },
    { icon: <MdPhone />, text: "+1 (555) 123-4567", href: "tel:+15551234567" },
    { icon: <MdLocationOn />, text: "Karachi, Pakistan", href: "#" }
  ];

  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer id="footer" ref={footerRef} className="w-full relative bg-gradient-to-br from-[#1E1345] via-[#2A1B5C] to-[#1E1345] text-white overflow-hidden">
       

        <div className="relative z-10 2xl:w-[75%] xl:w-[85%] sm:w-[90%] mx-auto py-10 w-[95%]  py-16 px-4 sm:px-6 lg:px-8">
          <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

            {/* Logo */}
            <div className="flex flex-col items-center lg:items-start">
              <img src={Logo} alt="Logo" className="w-[120px] sm:w-[150px] lg:w-[170px] mb-4" />
              <p className="text-gray-300 text-center lg:text-left text-[15px] leading-relaxed mb-2">
                A passionate developer crafting creative digital solutions and seamless user experiences.
              </p>
              <div className="flex space-x-3">
                {socialLinks.map((social) => (
                  <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" className={`text-xl p-2 rounded-full bg-white/10 hover:scale-110 transition-all duration-300 ${social.color}`}>
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="text-center lg:text-left lg:pl-7">
              <h4 className="text-lg font-semibold text-[#00C0FF] mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {navigationLinks.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="text-gray-300 hover:text-[#00C0FF] text-[16px] transition-colors duration-300 text-sm">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="text-center lg:text-left">
              <h4 className="text-lg font-semibold text-[#00C0FF] mb-4">Get In Touch</h4>
              <ul className="space-y-3">
                {contactInfo.map((contact, idx) => (
                  <li key={idx} className="flex justify-center lg:justify-start items-center gap-3 text-gray-300 hover:text-[#00C0FF] text-[15px]">
                    <span>{contact.icon}</span>
                    <a href={contact.href} className="break-words">{contact.text}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-lg font-semibold text-[#00C0FF] mb-4">Stay Updated</h4>
              <p className="text-gray-300 text-[14px] mb-4">Subscribe to get the latest updates and articles.</p>
              <div className="flex flex-col sm:flex-row gap-2">
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" className="flex-1 px-3 py-2 bg-white/10 text-white rounded-md text-sm" />
                <button onClick={handleSubscribe} className="px-4 py-2 bg-gradient-to-r from-[#00C0FF] to-blue-400 rounded-md text-sm">
                  {isLoading ? 'Loading...' : isSubscribed ? 'Subscribed ✓' : 'Subscribe'}
                </button>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="mt-12 border-t border-white/20 pt-6 flex flex-col sm:flex-row items-center justify-between">
            <p className="text-[15px] text-gray-400 flex items-center gap-1">
              © {currentYear} Muhammad Adeel. Developed & Designed by me <FaHeart className="text-red-400 animate-pulse" />
            </p>
          </div>
        </div>
      </footer>

      {/* Back to Top */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-4 sm:bottom-8 right-4 sm:right-8 p-3 sm:p-4 bg-gradient-to-r from-[#00C0FF] to-blue-400 text-white rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-50 ${showBackToTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
        aria-label="Back to top"
      >
        <IoArrowUp className="text-lg sm:text-xl" />
      </button>
    </>
  );
};

export default Footer;
