import { FaLinkedinIn, FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";
import { LuGithub } from "react-icons/lu";
import { MdOutlineMail, MdLocationOn, MdPhone } from "react-icons/md";
import { BiWorld } from "react-icons/bi";
import { FaBriefcase, FaBlog, FaHeart } from "react-icons/fa";
import { IoHome, IoPersonOutline, IoArrowUp } from "react-icons/io5";
import { useEffect, useState, useCallback, useRef } from 'react';

function Footer() {
    const [isVisible, setIsVisible] = useState(false);
    const [showBackToTop, setShowBackToTop] = useState(false);
    const [email, setEmail] = useState('');
    const [isSubscribed, setIsSubscribed] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [mousePosX, setMousePosX] = useState(0);
    const [mousePosY, setMousePosY] = useState(0);
    const footerRef = useRef(null);

    // Enhanced Intersection Observer for animation trigger
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1, rootMargin: '50px' }
        );

        const footerElement = document.getElementById('footer');
        if (footerElement) {
            observer.observe(footerElement);
        }

        return () => observer.disconnect();
    }, []);

    // Enhanced scroll handler with throttling
    useEffect(() => {
        let ticking = false;
        
        const handleScroll = () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    setShowBackToTop(window.scrollY > 300);
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Mouse movement for interactive background
    useEffect(() => {
        const handleMouseMove = (e) => {
            if (footerRef.current) {
                const rect = footerRef.current.getBoundingClientRect();
                setMousePosX(e.clientX - rect.left);
                setMousePosY(e.clientY - rect.top);
            }
        };

        const footer = footerRef.current;
        if (footer) {
            footer.addEventListener('mousemove', handleMouseMove);
            return () => footer.removeEventListener('mousemove', handleMouseMove);
        }
    }, []);

    const scrollToTop = useCallback(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }, []);

    // Enhanced newsletter subscription handler
    const handleSubscribe = useCallback(async (e) => {
        e.preventDefault();
        if (!email || !email.includes('@')) return;
        
        setIsLoading(true);
        
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        setIsSubscribed(true);
        setIsLoading(false);
        setEmail('');
        
        // Reset success state after 3 seconds
        setTimeout(() => setIsSubscribed(false), 3000);
    }, [email]);

    // Enhanced navigation with smooth scrolling
    const handleNavClick = useCallback((e, href) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }, []);

    const navigationLinks = [
        { name: "Home", icon: <IoHome />, href: "#home" },
        { name: "About", icon: <IoPersonOutline />, href: "#about" },
        { name: "Services", icon: <BiWorld />, href: "#services" },
        { name: "Portfolio", icon: <FaBriefcase />, href: "#portfolio" },
        { name: "Blogs", icon: <FaBlog />, href: "#blogs" },
        { name: "Contact", icon: <MdOutlineMail />, href: "#contact" }
    ];

    const socialLinks = [
        { name: "LinkedIn", icon: <FaLinkedinIn />, href: "https://linkedin.com", color: "hover:text-blue-400" },
        { name: "GitHub", icon: <LuGithub />, href: "https://github.com", color: "hover:text-gray-400" },
        { name: "Twitter", icon: <FaTwitter />, href: "https://twitter.com", color: "hover:text-blue-300" },
        { name: "Instagram", icon: <FaInstagram />, href: "https://instagram.com", color: "hover:text-pink-400" }
    ];

    const contactInfo = [
        { icon: <MdOutlineMail />, text: "hello@yourportfolio.com", href: "mailto:hello@yourportfolio.com" },
        { icon: <MdPhone />, text: "+1 (555) 123-4567", href: "tel:+15551234567" },
        { icon: <MdLocationOn />, text: "Your City, Country", href: "#" }
    ];

    const currentYear = new Date().getFullYear();

    return (
        <>
            <footer 
                id="footer"
                ref={footerRef}
                className="relative bg-gradient-to-br from-[#1E1345] via-[#2A1B5C] to-[#1E1345] text-white overflow-hidden"
                role="contentinfo"
                aria-label="Site footer"
            >
                {/* Enhanced Animated Background Elements */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-10 left-10 w-32 h-32 bg-[#00C0FF] rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute top-40 right-20 w-24 h-24 bg-blue-400 rounded-full blur-2xl animate-pulse delay-1000"></div>
                    <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-purple-400 rounded-full blur-3xl animate-pulse delay-2000"></div>
                    <div className="absolute bottom-40 right-1/3 w-28 h-28 bg-[#00C0FF] rounded-full blur-2xl animate-pulse delay-3000"></div>
                    
                    {/* Interactive mouse follower */}
                    <div 
                        className="absolute w-20 h-20 bg-gradient-to-r from-[#00C0FF] to-purple-400 rounded-full blur-2xl opacity-20 transition-all duration-300 ease-out pointer-events-none"
                        style={{
                            left: mousePosX - 40,
                            top: mousePosY - 40,
                            transform: 'scale(1.2)'
                        }}
                    ></div>
                </div>

                {/* Main Footer Content */}
                <div className="relative z-10 2xl:w-[75%] xl:w-[85%] sm:w-[85%] w-[95%] mx-auto py-16">
                    
                    {/* Top Section */}
                    <div className={`grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8 mb-12 transition-all duration-1000 ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}>
                        
                        {/* Brand Section */}
                        <div className="lg:col-span-1 md:col-span-2 transform hover:scale-105 transition-transform duration-300">
                            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-[#00C0FF] to-blue-400 bg-clip-text text-transparent">
                                Your Portfolio
                            </h3>
                            <p className="text-gray-300 mb-6 leading-relaxed">
                                Creating innovative digital experiences with modern technologies. 
                                Let's build something amazing together.
                            </p>
                            <div className="flex space-x-4">
                                {socialLinks.map((social, index) => (
                                    <a
                                        key={social.name}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`text-2xl p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:border-[#00C0FF] transition-all duration-300 hover:scale-110 hover:rotate-12 ${social.color} focus:outline-none focus:ring-2 focus:ring-[#00C0FF] focus:ring-offset-2 focus:ring-offset-transparent`}
                                        aria-label={`Follow us on ${social.name}`}
                                        style={{ animationDelay: `${index * 0.1}s` }}
                                    >
                                        {social.icon}
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div className={`transform transition-all duration-1000 delay-200 ${
                            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                        }`}>
                            <h4 className="text-xl font-semibold mb-6 text-[#00C0FF]">Quick Links</h4>
                            <nav aria-label="Footer navigation">
                                <ul className="space-y-3">
                                    {navigationLinks.map((link, index) => (
                                        <li key={link.name}>
                                            <a
                                                href={link.href}
                                                onClick={(e) => handleNavClick(e, link.href)}
                                                className="flex items-center space-x-3 text-gray-300 hover:text-[#00C0FF] transition-all duration-300 hover:translate-x-2 group focus:outline-none focus:text-[#00C0FF]"
                                            >
                                                <span className="text-lg group-hover:scale-125 transition-transform duration-300">
                                                    {link.icon}
                                                </span>
                                                <span>{link.name}</span>
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        </div>

                        {/* Contact Info */}
                        <div className={`transform transition-all duration-1000 delay-400 ${
                            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                        }`}>
                            <h4 className="text-xl font-semibold mb-6 text-[#00C0FF]">Get In Touch</h4>
                            <address className="not-italic">
                                <ul className="space-y-4">
                                    {contactInfo.map((contact, index) => (
                                        <li key={index}>
                                            <a
                                                href={contact.href}
                                                className="flex items-center space-x-3 text-gray-300 hover:text-[#00C0FF] transition-all duration-300 hover:translate-x-2 group focus:outline-none focus:text-[#00C0FF]"
                                            >
                                                <span className="text-lg group-hover:scale-125 transition-transform duration-300">
                                                    {contact.icon}
                                                </span>
                                                <span className="break-all">{contact.text}</span>
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </address>
                        </div>

                        {/* Enhanced Newsletter */}
                        <div className={`transform transition-all duration-1000 delay-600 ${
                            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                        }`}>
                            <h4 className="text-xl font-semibold mb-6 text-[#00C0FF]">Stay Updated</h4>
                            <p className="text-gray-300 mb-4">
                                Subscribe to get the latest updates and articles.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-2">
                                <div className="flex-1">
                                    <label htmlFor="email-input" className="sr-only">Email address</label>
                                    <input
                                        id="email-input"
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Enter your email"
                                        className="w-full px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg focus:outline-none focus:border-[#00C0FF] focus:ring-2 focus:ring-[#00C0FF] focus:ring-offset-2 focus:ring-offset-transparent transition-all duration-300 text-white placeholder-gray-400"
                                        disabled={isLoading}
                                    />
                                </div>
                                <button 
                                    onClick={handleSubscribe}
                                    disabled={isLoading || !email}
                                    className={`px-6 py-2 bg-gradient-to-r from-[#00C0FF] to-blue-400 rounded-lg hover:from-blue-400 hover:to-[#00C0FF] transition-all duration-300 hover:scale-105 font-medium focus:outline-none focus:ring-2 focus:ring-[#00C0FF] focus:ring-offset-2 focus:ring-offset-transparent disabled:opacity-50 disabled:cursor-not-allowed ${
                                        isSubscribed ? 'bg-green-500 from-green-500 to-green-600' : ''
                                    }`}
                                >
                                    {isLoading ? (
                                        <div className="flex items-center space-x-2">
                                            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                            <span>Subscribing...</span>
                                        </div>
                                    ) : isSubscribed ? (
                                        '✓ Subscribed!'
                                    ) : (
                                        'Subscribe'
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Animated Divider */}
                    <div className={`w-full h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent mb-8 transition-all duration-1000 delay-800 ${
                        isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
                    }`}></div>

                    {/* Enhanced Bottom Section */}
                    <div className={`flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 transition-all duration-1000 delay-1000 ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}>
                        <div className="flex items-center space-x-2 text-gray-300">
                            <span>© {currentYear} Your Portfolio. Made with</span>
                            <FaHeart className="text-red-400 animate-pulse" />
                            <span>and lots of ☕</span>
                        </div>
                        
                        <nav aria-label="Footer legal links">
                            <div className="flex space-x-6 text-sm text-gray-300">
                                <a href="#privacy" className="hover:text-[#00C0FF] transition-colors duration-300 focus:outline-none focus:text-[#00C0FF]">
                                    Privacy Policy
                                </a>
                                <a href="#terms" className="hover:text-[#00C0FF] transition-colors duration-300 focus:outline-none focus:text-[#00C0FF]">
                                    Terms of Service
                                </a>
                                <a href="#sitemap" className="hover:text-[#00C0FF] transition-colors duration-300 focus:outline-none focus:text-[#00C0FF]">
                                    Sitemap
                                </a>
                            </div>
                        </nav>
                    </div>
                </div>

                {/* Enhanced Decorative Wave */}
                <div className="absolute top-0 left-0 w-full">
                    <svg 
                        viewBox="0 0 1200 120" 
                        preserveAspectRatio="none" 
                        className="w-full h-16 fill-current text-white/5"
                        aria-hidden="true"
                    >
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
                    </svg>
                </div>
            </footer>

            {/* Enhanced Back to Top Button */}
            <button
                onClick={scrollToTop}
                className={`fixed bottom-8 right-8 z-50 p-4 bg-gradient-to-r from-[#00C0FF] to-blue-400 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#00C0FF] focus:ring-offset-2 focus:ring-offset-white group ${
                    showBackToTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
                }`}
                aria-label="Back to top"
            >
                <IoArrowUp className="text-xl group-hover:animate-bounce" />
            </button>
        </>
    );
}

export default Footer;