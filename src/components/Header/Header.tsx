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
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Navigation data
    const navigationData = useMemo(() => ({
        text: ["Home", "About", "Services", "Portfolio", "Contact"],
        scrollTargets: ["home", "about", "services", "portfolio", "contact"],
        icons: [
            { icon: <FaLinkedinIn />, link: "https://www.linkedin.com/in/muhammad-adeel-4561bb255", target: "_blank", ariaLabel: "LinkedIn" },
            { icon: <LuGithub />, link: "https://github.com/Adeel-116", target: "_blank", ariaLabel: "github"  },
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

        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('keydown', handleEscapeKey);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('keydown', handleEscapeKey);
        };
    }, [isMenuOpen]);

    return (
        <>
            <header className="w-full absolute top-0 left-0 z-[100] flex justify-center transition-all duration-300 origin-top py-3">
                <div className="2xl:w-[75%] xl:w-[85%] lg:w-[90%] md:w-[95%] w-[98%] md:px-0 px-4 h-auto flex items-center justify-between">

                    {/* Logo */}
                    <div className="flex justify-center items-center flex-shrink-0">
                        <img
                            src={Logo}
                            className="xl:w-[175px] lg:w-[100px] md:w-[180px] sm:w-[170px] w-[140px] h-auto"
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
                className={`fixed inset-0 bg-[#1c184c] backdrop-blur-sm z-[200] transition-all duration-500 ease-in-out ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
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
                    className={`mobile-menu w-full h-full flex flex-col items-center justify-center transition-all duration-700 ease-out ${isMenuOpen ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
                        }`}
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* Main Navigation */}
                    <nav className="flex flex-col items-center gap-y-3 mb-5">
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
                                <span className="2xl:text-2xl sm:text-3xl lg:text-2xl text-white font-light group-hover:text-[#00C0FF] transition-colors duration-300">
                                    {text}
                                </span>
                            </Link>
                        ))}
                    </nav>

                    {/* Line Separator */}
                    <div className="w-32 sm:w-48 h-0.5 bg-gradient-to-r from-transparent via-white/50 to-transparent mb-5" />

                    {/* Social Icons */}
                    <div className="flex gap-x-5 sm:gap-x-7">
                        {navigationData.icons.map(({ icon, link, target, ariaLabel }, index) => (
                            <a
                                key={index}
                                href={link}
                                target={target}
                                rel="noopener noreferrer"
                                aria-label={ariaLabel}
                                className="text-2xl sm:text-3xl lg:text-xl p-2 sm:p-3 text-white/80 border-2 border-white/30 rounded-full hover:bg-[#00C0FF] hover:text-white hover:border-[#00C0FF] hover:scale-110 transition-color duration-200 backdrop-blur-sm"
                                style={{
                                    transitionDelay: isMenuOpen ? `${(navigationData.text.length + index) * 0.11}ms` : '0ms'
                                }}

                            >
                                {icon}
                            </a>
                        ))}
                    </div>

                </div>
            </div>
        </>
    );
}

export default Header;