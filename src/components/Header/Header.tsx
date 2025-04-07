import Logo from "../../assets/bg.png"
import { FaLinkedinIn } from "react-icons/fa";
import { LuGithub } from "react-icons/lu";
import { useEffect, useState } from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { IoHome } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import { BiWorld } from "react-icons/bi";
import { FaBriefcase } from "react-icons/fa";
import { FaBlog } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

function Header() {
    const [scrollPosition, setScrollPosition] = useState(0)
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        const scrollHandler = () => {
            setScrollPosition(window.scrollY)
        }
        window.addEventListener("scroll", scrollHandler)
        return () => window.removeEventListener("scroll", scrollHandler)
    }, [])

    const headerText = {
        responsiveIcon: [<IoHome />, <IoPersonOutline />, <BiWorld />, <FaBriefcase />, <FaBlog />, <MdOutlineMail />],
        text: ["Home", "About", "Services", "Portfolio", "Blogs", "Contact"],
        icons: [<FaLinkedinIn />, <LuGithub />],
    };

    return (
        <div className={`w-full fixed top-0 left-0 z-[100] flex justify-center transition-all duration-300 origin-top`}
            style={{
                backgroundColor: scrollPosition > 0 ? "#1E1345" : "transparent",
                transform: scrollPosition > 0 ? "scaleY(0.9)" : "scaleY(1)",
                padding: scrollPosition > 0 ? "30px 0px 35px 0px" : "45px 0px 50px 0px",
            }}
        >
            <div className="2xl:w-[75%] xl:w-[85%] sm:w-[85%] w-[95%] h-auto grid grid-cols-[auto_1fr] items-center ">
                <div className="flex justify-center items-center">
                    <img src={Logo} className="xl:w-[230px] sm:w-[200px] w-[150px]" alt="" />
                </div>

                <div className="lg:flex hidden gap-x-8 justify-end items-center">
                    <div className="flex xl:gap-x-7 lg:gap-x-6">
                        {headerText.text.map((text, index) => (
                            <div key={index} className="text-lg text-white">{text}</div>
                        ))}
                    </div>
                    <div className="w-0.5 h-4 bg-gray-500"></div>

                    {headerText.icons.map((icon, index) => (
                        <div key={index} className="text-white text-lg">{icon}</div>
                    ))}
                </div>

                <div className="lg:hidden flex justify-end">
                    <div className="text-white text-3xl cursor-pointer"
                        onClick={() => setIsOpen(true)}>
                        <RxHamburgerMenu />
                    </div>
                </div>

                {/* Mobile Menu */}
                <div className={`lg:hidden fixed top-0 right-0 h-screen bg-[#00C0FF] z-[200] transition-all duration-300 ease-in-out flex flex-col px-20 justify-center
                    ${isOpen ? 'translate-x-0 w-[40%]' : 'translate-x-full w-0'}`}>
                    
                    <div className="absolute top-15 left-10 text-white text-6xl cursor-pointer"
                        onClick={() => setIsOpen(false)}>
                        <IoMdClose />
                    </div>

                    <div className="flex flex-col gap-y-14 text-left">
                        {headerText.text.map((text, index) => (
                            <div key={index} className="flex items-center gap-x-3">
                                <div className="text-2xl text-white">{headerText.responsiveIcon[index]}</div>
                                <div className="text-2xl text-white">{text}</div>
                            </div>
                        ))}
                    </div>

                    <div className="w-full h-0.5 bg-gray-500 mt-10"></div>
                    
                    <div className="flex flex-row justify-center gap-x-5 mt-6 text-left">
                        {headerText.icons.map((icon, index) => (
                            <div key={index} className="text-3xl p-1 text-white border-2">{icon}</div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header