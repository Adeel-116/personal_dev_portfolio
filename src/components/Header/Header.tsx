import Logo from "../../assets/bg.png";
import { FaLinkedinIn } from "react-icons/fa";
import { LuGithub } from "react-icons/lu";
import { Link } from "react-scroll";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { useEffect, useState, useCallback, useMemo } from 'react';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Navigation data
    const navigationData = useMemo(() => ({
        text: ["Home", "About", "Services", "Portfolio", "Testimonials", "Contact"],
        scrollTargets: ["home", "about", "services", "portfolio", "testimonials", "contact"],
        icons: [
            { icon: <FaLinkedinIn />, link: "https://linkedin.com", target: "_blank" },
            { icon: <LuGithub />, link: "https://github.com", target: "_blank" },
        ],
    }), []);

    const toggleMenu = useCallback(() => setIsMenuOpen(prev => !prev), []);
    const closeMenu = useCallback(() => setIsMenuOpen(false), []);

    useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
        const target = event.target as HTMLElement;
        if (
            isMenuOpen &&
            !target.closest('.mobile-menu') &&
            !target.closest('.menu-toggle')
        ) {
            closeMenu();
        }
    };

    const handleEscapeKey = (event: KeyboardEvent) => {
        if (event.key === 'Escape' && isMenuOpen) {
            closeMenu();
        }
    };

    if (isMenuOpen) {
        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('keydown', handleEscapeKey);
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'unset';
    }

    return () => {
        document.removeEventListener('mousedown', handleClickOutside);
        document.removeEventListener('keydown', handleEscapeKey);
        document.body.style.overflow = 'unset';
    };
}, [isMenuOpen, closeMenu]);

    return (
        <>
            <header className="w-full flex justify-center transition-all duration-300 origin-top">
                <div className="2xl:w-[75%] xl:w-[85%] lg:w-[90%] md:w-[95%] w-[98%] md:px-0 px-4 h-auto flex items-center justify-between py-5">
                    
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
            {isMenuOpen && (
                <div
                    className="fixed inset-0 bg-[#1c184c]/95 backdrop-blur-sm z-[999] transition-all duration-500 ease-in-out"
                    onClick={closeMenu}
                >
                    {/* Close Button */}
                    <button
                        className="absolute top-6 right-6 sm:top-8 sm:right-8 text-white text-3xl sm:text-4xl cursor-pointer p-2 rounded-full hover:bg-[#00c0ff]/10 transition-all duration-200 hover:scale-110 hover:rotate-90 z-[1000]"
                        onClick={closeMenu}
                        aria-label="Close menu"
                    >
                        <IoMdClose />
                    </button>

                    {/* Menu Content */}
                    <div
                        className="mobile-menu w-full h-full flex flex-col items-center justify-center"
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
                                >
                                    {icon}
                                </a>
                            ))}
                        </div>

                        {/* Background Animations */}
                        <div className="fixed inset-0 pointer-events-none z-[-1]">
                            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-[#00C0FF]/10 rounded-full blur-3xl animate-pulse" />
                            <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}} />
                            <div className="absolute bottom-1/4 left-1/3 w-20 h-20 bg-pink-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '0.5s'}} />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Header;