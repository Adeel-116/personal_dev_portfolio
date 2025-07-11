import Logo from "../../assets/bg.png";
import { FaLinkedinIn } from "react-icons/fa";
import { LuGithub } from "react-icons/lu";
import { Link } from "react-scroll"; // ✅ react-scroll ka Link

// Icons
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { IoHome, IoPersonOutline } from "react-icons/io5";
import { BiWorld } from "react-icons/bi";
import { FaBriefcase, FaBlog } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

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
        responsiveIcon: [<IoHome />, <IoPersonOutline />, <BiWorld />, <FaBriefcase />, <FaBlog />, <MdOutlineMail />],
        text: ["Home", "About", "Services", "Portfolio", "Blogs", "Contact"],
        scrollTargets: ["home", "about", "services", "portfolio", "blogs", "contact"], // ✅ Element names
        icons: [
            { icon: <FaLinkedinIn />, link: "https://linkedin.com", target: "_blank" },
            { icon: <LuGithub />, link: "https://github.com", target: "_blank" },
        ],
    }), []);

    const headerStyles = useMemo(() => ({
        backgroundColor: isScrolled ? "#1E1345" : "transparent",
        transform: isScrolled ? "scaleY(0.9)" : "scaleY(1)",
        padding: isScrolled ? "20px 0px 25px 0px" : "35px 0px 40px 0px",
    }), [isScrolled]);

    const toggleMenu = useCallback(() => setIsMenuOpen(prev => !prev), []);
    const closeMenu = useCallback(() => setIsMenuOpen(false), []);

    return (
        <header className="w-full fixed top-0 left-0 z-[100] flex justify-center transition-all duration-300 origin-top" style={headerStyles}>
            <div className="2xl:w-[75%] xl:w-[85%] sm:w-[85%] w-[95%] h-auto grid grid-cols-[auto_1fr] items-center">
                
                {/* Logo */}
                <div className="flex justify-center items-center">
                    <img src={Logo} className="xl:w-[230px] sm:w-[200px] w-[150px]" alt="Logo" loading="lazy" />
                </div>

                {/* Desktop Navigation */}
                <nav className="lg:flex hidden gap-x-8 justify-end items-center">
                    <div className="flex xl:gap-x-7 lg:gap-x-6">
                        {navigationData.text.map((text, index) => (
                            <Link
                               activeClass="active"
                               isDynamic= {true}
                                key={text}
                                to={navigationData.scrollTargets[index]}
                                smooth={true}
                                duration={500}
                                offset={-80}
                                className="text-lg text-white hover:text-blue-300 transition-colors duration-200 cursor-pointer"
                            >
                                {text}
                            </Link>
                        ))}
                    </div>

                    <div className="w-0.5 h-4 bg-gray-500" role="separator" />

                    <div className="flex gap-x-2">
                        {navigationData.icons.map(({ icon, link, target }, index) => (
                            <a
                                key={index}
                                href={link}
                                target={target}
                                rel="noopener noreferrer"
                                className="text-white text-lg hover:text-blue-300 transition-colors duration-200 p-2 rounded-full hover:bg-white/10"
                            >
                                {icon}
                            </a>
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
                            <Link
                                key={text}
                                to={navigationData.scrollTargets[index]}
                                smooth={true}
                                duration={500}
                                offset={-80}
                                onClick={closeMenu}
                                className="flex items-center gap-x-3 text-left hover:translate-x-1 transition-transform duration-200 cursor-pointer"
                            >
                                <span className="text-2xl text-white">{navigationData.responsiveIcon[index]}</span>
                                <span className="text-2xl text-white">{text}</span>
                            </Link>
                        ))}
                    </nav>

                    <div className="w-full h-0.5 bg-gray-300/50 mt-10" role="separator" />

                    <div className="flex flex-row justify-center gap-x-5 mt-6">
                        {navigationData.icons.map(({ icon, link, target }, index) => (
                            <a
                                key={index}
                                href={link}
                                target={target}
                                rel="noopener noreferrer"
                                className="text-3xl p-3 text-white border-2 border-white rounded-full hover:bg-white hover:text-[#00C0FF] transition-all duration-200"
                            >
                                {icon}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
