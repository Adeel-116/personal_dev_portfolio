import Logo from "../../assets/bg.png";
import { FaLinkedinIn } from "react-icons/fa";
import { LuGithub } from "react-icons/lu";
import { Link } from "react-scroll";

// Icons
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";

// Hooks
import { useEffect, useState, useCallback, useMemo } from 'react';

function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const scrollHandler = useCallback(() => {
        const scrollPosition = window.scrollY;
        setIsScrolled(scrollPosition > 50);
    }, []);

    useEffect(() => {
        const handleScroll = () => requestAnimationFrame(scrollHandler);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, [scrollHandler]);

    // Navigation data
    const navigationData = useMemo(() => ({
        text: ["Home", "About", "Services", "Portfolio", "Blogs", "Contact"],
        scrollTargets: ["home", "about", "services", "portfolio", "blogs", "contact"],
        icons: [
            { icon: <FaLinkedinIn />, link: "https://linkedin.com", target: "_blank" },
            { icon: <LuGithub />, link: "https://github.com", target: "_blank" },
        ],
    }), []);

    const headerStyles = useMemo(() => ({
        backgroundColor: isScrolled ? "#432D92" : "transparent",
        transform: isScrolled ? "scaleY(0.96)" : "scaleY(1)",
        padding: isScrolled ? "15px 0px 20px 0px" : "20px 0px 25px 0px",
        boxShadow: isScrolled ? '0 4px 12px rgba(0, 0, 0, 0.15)' : 'none',
    }), [isScrolled]);

    const toggleMenu = useCallback(() => setIsMenuOpen(prev => !prev), []);
    const closeMenu = useCallback(() => setIsMenuOpen(false), []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isMenuOpen && !event.target.closest('.mobile-menu') && !event.target.closest('.menu-toggle')) {
                closeMenu();
            }
        };

        const handleEscapeKey = (event) => {
            if (event.key === 'Escape' && isMenuOpen) {
                closeMenu();
            }
        };

        if (isMenuOpen) {
            document.addEventListener('click', handleClickOutside);
            document.addEventListener('keydown', handleEscapeKey);
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.removeEventListener('click', handleClickOutside);
            document.removeEventListener('keydown', handleEscapeKey);
            document.body.style.overflow = 'unset';
        };
    }, [isMenuOpen, closeMenu]);

    return (
        <>
            <header className="w-full fixed top-0 left-0 z-[100] flex justify-center transition-all duration-300 origin-top" style={headerStyles}>
                <div className="2xl:w-[75%] xl:w-[85%] lg:w-[90%] md:w-[95%] w-[98%] h-auto flex items-center justify-between px-2 sm:px-4">
                    
                    {/* Logo */}
                    <div className="flex justify-center items-center flex-shrink-0">
                        <img 
                            src={Logo} 
                            className="xl:w-[230px] lg:w-[200px] md:w-[180px] sm:w-[160px] w-[120px] h-auto" 
                            alt="Logo" 
                            loading="lazy" 
                        />
                    </div>

                    {/* Hamburger Menu */}
                    <div className="flex justify-end">
                        <button
                            className="menu-toggle text-white sm:text-3xl text-2xl cursor-pointer p-2 rounded-full hover:bg-[#00c0ff]/10 transition-all duration-200 hover:scale-110"
                            onClick={toggleMenu}
                            aria-label="Toggle menu"
                            aria-expanded={isMenuOpen}
                        >
                            <RxHamburgerMenu />
                        </button>
                    </div>
                </div>
            </header>

            {/* Menu Overlay */}
            <div
                className={`fixed inset-0 bg-[#432D92]/95 backdrop-blur-sm z-[200] transition-all duration-500 ease-in-out ${
                    isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}
                onClick={closeMenu}
            >
                {/* Close Button */}
                <button
                    className="absolute top-6 right-6 sm:top-8 sm:right-8 text-white text-3xl sm:text-4xl cursor-pointer p-2 rounded-full hover:bg-[#00c0ff]/10 transition-all duration-200 hover:scale-110 hover:rotate-90 z-[210]"
                    onClick={closeMenu}
                    aria-label="Close menu"
                >
                    <IoMdClose />
                </button>

                {/* Menu Content */}
                <div
                    className={`mobile-menu w-full h-full flex flex-col items-center justify-center transition-all duration-700 ease-out ${
                        isMenuOpen ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
                    }`}
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Main Navigation */}
                    <nav className="flex flex-col items-center gap-y-4 sm:gap-y-6 lg:gap-y-8 mb-8 sm:mb-12">
                        {navigationData.text.map((text, index) => (
                            <Link
                                key={text}
                                to={navigationData.scrollTargets[index]}
                                smooth={true}
                                duration={500}
                                offset={-80}
                                onClick={closeMenu}
                                className="group flex items-center gap-x-4 text-center hover:scale-105 transition-all duration-300 cursor-pointer"
                                style={{
                                    transitionDelay: isMenuOpen ? `${index * 100}ms` : '0ms'
                                }}
                            >
                                <span className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-white font-light group-hover:text-[#00C0FF] transition-colors duration-300">
                                    {text}
                                </span>
                            </Link>
                        ))}
                    </nav>

                    {/* Line Separator */}
                    <div className="w-32 sm:w-48 h-0.5 bg-gradient-to-r from-transparent via-white/50 to-transparent mb-8 sm:mb-12" />

                    {/* Social Icons */}
                    <div className="flex gap-x-6 sm:gap-x-8">
                        {navigationData.icons.map(({ icon, link, target }, index) => (
                            <a
                                key={index}
                                href={link}
                                target={target}
                                rel="noopener noreferrer"
                                className="text-2xl sm:text-3xl lg:text-4xl p-3 sm:p-4 text-white/80 border-2 border-white/30 rounded-full hover:bg-[#00C0FF] hover:text-white hover:border-[#00C0FF] hover:scale-110 transition-all duration-300 backdrop-blur-sm"
                                style={{
                                    transitionDelay: isMenuOpen ? `${(navigationData.text.length + index) * 100}ms` : '0ms'
                                }}
                            >
                                {icon}
                            </a>
                        ))}
                    </div>

                    {/* Background Animations */}
                    <div className="absolute inset-0 pointer-events-none">
                        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-[#00C0FF]/10 rounded-full blur-3xl animate-pulse" />
                        <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
                        <div className="absolute bottom-1/4 left-1/3 w-20 h-20 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-500" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;
