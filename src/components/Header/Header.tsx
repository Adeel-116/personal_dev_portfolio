import Logo from "../../assets/logo.png"
import { BsFacebook } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { LuGithub } from "react-icons/lu";
import { useEffect, useState } from 'react';

function Header() {
    const [scrollPosition, setScrollPosition] = useState(0)


    useEffect(() => {
        const scrollHandler = () => {
            setScrollPosition(window.scrollY)
        }
        return (
            window.addEventListener("scroll", scrollHandler)
        )
    }, [])

    const headerText = {
        text: ["Home", "About", "Services", "Portfolio", "Blogs", "Contact"],
        icons: [<BsFacebook />, <FaLinkedinIn />, <LuGithub />],
    };

    return (
        <div className={`w-full fixed top-0 left-0 z-[100] flex justify-center transition-all duration-300 origin-top`}
            style={{ 
                
                backgroundColor: scrollPosition > 0 ? "#1E1345" : "transparent",
                transform: scrollPosition > 0 ? "scaleY(0.9)" : "scaleY(1)", // Height shrink karega
                padding: scrollPosition > 0 ? "35px 0px 35px 0px" : "50px 0px 50px 0px", 
            }}

        >
            <div className="w-[70%] h-auto grid grid-cols-[auto_1fr] items-center">
                <div className="flex justify-center items-center">
                    <img src={Logo} width={"200px"} alt="" />
                </div>

                <div className="flex gap-x-8 justify-end items-center">
                    <div className="flex gap-x-9">
                        {headerText.text.map((text) => (
                            <div className="text-lg text-white">{text}</div>
                        ))}
                    </div>
                    <div className="w-0.5 h-4 bg-gray-500"></div>

                    {headerText.icons.map((icon) => (
                        <div className="text-white text-lg">{icon}</div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Header
