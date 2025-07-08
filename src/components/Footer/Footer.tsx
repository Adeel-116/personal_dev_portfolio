import { FaLinkedinIn, FaTwitter, FaInstagram, FaBriefcase, FaBlog, FaHeart } from "react-icons/fa";
import { LuGithub } from "react-icons/lu";
import { MdOutlineMail, MdLocationOn, MdPhone } from "react-icons/md";
import { BiWorld } from "react-icons/bi";
import { IoHome, IoPersonOutline, IoArrowUp } from "react-icons/io5";
import { useEffect, useState, useCallback, useRef } from "react";
import Logo from "../../assets/bg.png";

const Footer = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [showBackToTop, setShowBackToTop] = useState(false);
    const [email, setEmail] = useState('');
    const [isSubscribed, setIsSubscribed] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [mousePosX, setMousePosX] = useState(0);
    const [mousePosY, setMousePosY] = useState(0);
    const footerRef = useRef<HTMLElement | null>(null);

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

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            if (footerRef.current) {
                const rect = footerRef.current.getBoundingClientRect();
                setMousePosX(e.clientX - rect.left);
                setMousePosY(e.clientY - rect.top);
            }
        };
        const footer = footerRef.current;
        footer?.addEventListener('mousemove', handleMouseMove);
        return () => footer?.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const scrollToTop = useCallback(() => window.scrollTo({ top: 0, behavior: 'smooth' }), []);

    const handleSubscribe = useCallback(async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email.includes('@')) return;
        setIsLoading(true);
        await new Promise(resolve => setTimeout(resolve, 1500));
        setIsSubscribed(true);
        setIsLoading(false);
        setEmail('');
        setTimeout(() => setIsSubscribed(false), 3000);
    }, [email]);

    const handleNavClick = useCallback((e: React.MouseEvent, href: string) => {
        e.preventDefault();
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
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
        { icon: <MdOutlineMail />, text: "adeel8128377@gmail.com", href: "mailto:adeel8128377@gmail.com" },
        { icon: <MdPhone />, text: "+1 (555) 123-4567", href: "tel:+15551234567" },
        { icon: <MdLocationOn />, text: "Karachi, Pakistan", href: "#" }
    ];

    const currentYear = new Date().getFullYear();

    return (
        <>
            <footer id="footer" ref={footerRef} className="relative bg-gradient-to-br from-[#1E1345] via-[#2A1B5C] to-[#1E1345] text-white overflow-hidden">
                {/* Gradient Background Elements */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-10 left-10 w-32 h-32 bg-[#00C0FF] rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute top-40 right-20 w-24 h-24 bg-blue-400 rounded-full blur-2xl animate-pulse delay-1000"></div>
                    <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-purple-400 rounded-full blur-3xl animate-pulse delay-2000"></div>
                    <div className="absolute bottom-40 right-1/3 w-28 h-28 bg-[#00C0FF] rounded-full blur-2xl animate-pulse delay-3000"></div>
                    <div className="absolute w-20 h-20 bg-gradient-to-r from-[#00C0FF] to-purple-400 rounded-full blur-2xl opacity-20" style={{ left: mousePosX - 40, top: mousePosY - 40 }}></div>
                </div>

                <div className="relative z-10 2xl:w-[75%] xl:w-[85%] sm:w-[85%] w-[95%] mx-auto py-16">
                    <div className={`grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8 mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        
                        {/* Logo & Description */}
                        <div className="lg:col-span-1 md:col-span-2 flex flex-col items-center">
                            <img src={Logo} alt="Logo" className="w-[170px] h-auto object-contain mb-2" />
                            <p className="text-gray-300 mb-2 leading-relaxed text-center">
                                A passionate developer crafting creative digital solutions and seamless user experiences.
                            </p>
                            <div className="flex space-x-4">
                                {socialLinks.map((social) => (
                                    <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" className={`text-2xl p-3 rounded-full bg-white/10 hover:scale-110 transition-all duration-300 ${social.color}`}>
                                        {social.icon}
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div className="transition-all duration-1000 delay-200">
                            <h4 className="text-xl font-semibold mb-6 text-[#00C0FF] text-center">Quick Links</h4>
                            <ul className="space-y-3">
                                {navigationLinks.map((link) => (
                                    <li key={link.name} className="flex justify-center">
                                        <a href={link.href} onClick={(e) => handleNavClick(e, link.href)} className="flex items-center gap-3 text-gray-300 hover:text-[#00C0FF]">
                                            <span className="text-lg">{link.icon}</span>
                                            <span>{link.name}</span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact */}
                        <div className="transition-all duration-1000 delay-400">
                            <h4 className="text-xl font-semibold mb-6 text-[#00C0FF] text-left">Get In Touch</h4>
                            <ul className="space-y-4">
                                {contactInfo.map((contact, idx) => (
                                    <li key={idx}>
                                        <a href={contact.href} className="flex items-center gap-3 text-gray-300 hover:text-[#00C0FF]">
                                            <span className="text-lg">{contact.icon}</span>
                                            <span className="break-all">{contact.text}</span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Newsletter */}
                        <div className="transition-all duration-1000 delay-600">
                            <h4 className="text-xl font-semibold mb-6 text-[#00C0FF] text-left">Stay Updated</h4>
                            <p className="text-gray-300 mb-4 text-left">Subscribe to get the latest updates and articles.</p>
                            <div className="flex gap-2">
                                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" className="flex-1 px-4 py-2 bg-white/10 text-white rounded-lg" />
                                <button onClick={handleSubscribe} className="px-6 py-2 bg-gradient-to-r from-[#00C0FF] to-blue-400 rounded-lg">
                                    {isLoading ? 'Loading...' : isSubscribed ? 'Subscribed ✓' : 'Subscribe'}
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent mb-8"></div>

                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="flex items-center space-x-2 text-gray-300">
                            <span>© {currentYear} Muhammad Adeel. Developed & Designed by me</span>
                            <FaHeart className="text-red-400 animate-pulse" />
                        </div>
                    </div>
                </div>
            </footer>

            {/* Back to Top */}
            <button onClick={scrollToTop} className={`fixed bottom-8 right-8 p-4 bg-gradient-to-r from-[#00C0FF] to-blue-400 text-white rounded-full shadow-lg transition-all duration-300 ${showBackToTop ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                <IoArrowUp className="text-xl" />
            </button>
        </>
    );
};

export default Footer;
