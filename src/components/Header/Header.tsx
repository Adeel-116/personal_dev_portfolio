import Logo from "../../assets/bg.png"
import { FaLinkedinIn } from "react-icons/fa";
import { LuGithub } from "react-icons/lu";
import { useEffect, useState, useCallback, useMemo } from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { IoHome } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import { BiWorld } from "react-icons/bi";
import { FaBriefcase } from "react-icons/fa";
import { FaBlog } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Throttled scroll handler for better performance
    const scrollHandler = useCallback(() => {
        const scrollPosition = window.scrollY;
        const shouldBeScrolled = scrollPosition > 50;
        
        if (shouldBeScrolled !== isScrolled) {
            setIsScrolled(shouldBeScrolled);
        }
    }, [isScrolled]);

    // Optimized scroll event with throttling
    useEffect(() => {
        let ticking = false;
        
        const requestTick = () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    scrollHandler();
                    ticking = false;
                });
                ticking = true;
            }
        };
        
        window.addEventListener("scroll", requestTick, { passive: true });
        return () => window.removeEventListener("scroll", requestTick);
    }, [scrollHandler]);

    // Memoized navigation data
    const navigationData = useMemo(() => ({
        responsiveIcon: [<IoHome />, <IoPersonOutline />, <BiWorld />, <FaBriefcase />, <FaBlog />, <MdOutlineMail />],
        text: ["Home", "About", "Services", "Portfolio", "Blogs", "Contact"],
        icons: [<FaLinkedinIn />, <LuGithub />],
    }), []);

    // Memoized header styles
    const headerStyles = useMemo(() => ({
        backgroundColor: isScrolled ? "#1E1345" : "transparent",
        transform: isScrolled ? "scaleY(0.9)" : "scaleY(1)",
        padding: isScrolled ? "20px 0px 25px 0px" : "35px 0px 40px 0px",
    }), [isScrolled]);

    const toggleMenu = useCallback(() => {
        setIsMenuOpen(prev => !prev);
    }, []);

    const closeMenu = useCallback(() => {
        setIsMenuOpen(false);
    }, []);

    return (
        <header 
            className="w-full fixed top-0 left-0 z-[100] flex justify-center transition-all duration-300 origin-top"
            style={headerStyles}
        >
            <div className="2xl:w-[75%] xl:w-[85%] sm:w-[85%] w-[95%] h-auto grid grid-cols-[auto_1fr] items-center">
                
                {/* Logo */}
                <div className="flex justify-center items-center">
                    <img 
                        src={Logo} 
                        className="xl:w-[230px] sm:w-[200px] w-[150px]" 
                        alt="Logo" 
                        loading="lazy"
                    />
                </div>

                {/* Desktop Navigation */}
                <nav className="lg:flex hidden gap-x-8 justify-end items-center">
                    <div className="flex xl:gap-x-7 lg:gap-x-6">
                        {navigationData.text.map((text, index) => (
                            <button 
                                key={text} 
                                className="text-lg text-white hover:text-blue-300 transition-colors duration-200 cursor-pointer"
                                aria-label={`Navigate to ${text}`}
                            >
                                {text}
                            </button>
                        ))}
                    </div>
                    
                    <div className="w-0.5 h-4 bg-gray-500" role="separator" />

                    <div className="flex gap-x-2">
                        {navigationData.icons.map((icon, index) => (
                            <button 
                                key={index} 
                                className="text-white text-lg hover:text-blue-300 transition-colors duration-200 p-2 rounded-full hover:bg-white/10"
                                aria-label={index === 0 ? "LinkedIn" : "GitHub"}
                            >
                                {icon}
                            </button>
                        ))}
                    </div>
                </nav>

                {/* Mobile Menu Button */}
                <div className="lg:hidden flex justify-end">
                    <button 
                        className="text-white text-3xl cursor-pointer p-2 rounded-full hover:bg-white/10 transition-colors duration-200"
                        onClick={toggleMenu}
                        aria-label="Toggle mobile menu"
                        aria-expanded={isMenuOpen}
                    >
                        <RxHamburgerMenu />
                    </button>
                </div>

                {/* Mobile Menu */}
                <div 
                    className={`lg:hidden fixed top-0 right-0 h-screen bg-[#00C0FF] z-[200] transition-all duration-300 ease-in-out flex flex-col px-20 justify-center
                        ${isMenuOpen ? 'translate-x-0 w-[40%] opacity-100' : 'translate-x-full w-0 opacity-0'}`}
                    aria-hidden={!isMenuOpen}
                >
                    
                    {/* Close Button */}
                    <button 
                        className="absolute top-15 left-10 text-white text-6xl cursor-pointer p-2 rounded-full hover:bg-white/10 transition-colors duration-200"
                        onClick={closeMenu}
                        aria-label="Close mobile menu"
                    >
                        <IoMdClose />
                    </button>

                    {/* Mobile Navigation */}
                    <nav className="flex flex-col gap-y-14 text-left">
                        {navigationData.text.map((text, index) => (
                            <button 
                                key={text} 
                                className="flex items-center gap-x-3 text-left hover:translate-x-1 transition-transform duration-200"
                                onClick={closeMenu}
                                aria-label={`Navigate to ${text}`}
                            >
                                <span className="text-2xl text-white">{navigationData.responsiveIcon[index]}</span>
                                <span className="text-2xl text-white">{text}</span>
                            </button>
                        ))}
                    </nav>

                    <div className="w-full h-0.5 bg-gray-300/50 mt-10" role="separator" />
                    
                    {/* Mobile Social Icons */}
                    <div className="flex flex-row justify-center gap-x-5 mt-6">
                        {navigationData.icons.map((icon, index) => (
                            <button 
                                key={index} 
                                className="text-3xl p-3 text-white border-2 border-white rounded-full hover:bg-white hover:text-[#00C0FF] transition-all duration-200"
                                aria-label={index === 0 ? "LinkedIn" : "GitHub"}
                            >
                                {icon}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;