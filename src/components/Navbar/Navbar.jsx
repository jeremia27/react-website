import React, { useEffect, useState } from "react";
import images from "../../constants/images";
import "./Navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";


const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    useEffect(() => {
        console.log("toggle", toggleMenu);
    }, [toggleMenu]);

    // const scrollToTestimonials = () => {
    //     const testimonialsSection = document.getElementById("sectionId");
    //     testimonialsSection.scrollIntoView({ behavior: "smooth" });
    //   };

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        section.scrollIntoView({ behavior: "smooth" });
      };

    return (
        <nav className="navbar">
            <div className="container flex">
                <div className="brand__and__toggler flex">
                    <a href="index.html" alt="" className="navbar__brand">
                        <img src={images.logo} alt="site logo" />
                    </a>
                    <button type="button" className="navbar__open--btn text__light" onClick={() => {
                        setToggleMenu(true);
                        console.log("toogle", toggleMenu);
                    }}>
                        <FaBars size={26} />
                    </button>
                </div>

                <div className="navbar__collapse">
                    <ul className="navbar__nav">
                        <li className="nav__item">
                            <a href="#home" className="nav__link text__upper fw__6 text__light nav__active" onClick={() => scrollToSection("home")}>home</a>
                        </li>
                        <li className="nav__item">
                            <a href="#about" className="nav__link text__upper fw_6 text__light" onClick={() => scrollToSection("about")}>about</a>
                        </li>
                        <li className="nav__item">
                            <a href="#work" className="nav__link text__upper fw_6 text__light" onClick={() => scrollToSection("work")}>work</a>
                        </li>
                        <li className="nav__item">
                            <a href="#process" className="nav__link text__upper fw_6 text__light" onClick={() => scrollToSection("process")} >process</a>
                        </li>
                        <li className="nav__item">
                            <a href="#services" className="nav__link text__upper fw_6 text__light" onClick={() => scrollToSection("services")}>services</a>
                        </li>
                        <li className="nav__item">
                            <a href="#testimonials" className="nav__link text__upper fw_6 text__light" onClick={() => scrollToSection("testimonials")}>testimonials</a>
                        </li>
                        <li className="nav__item">
                            <a href="#contact" className="nav__link text__upper fw_6 text__light"onClick={() => scrollToSection("contact")}>contact</a>
                        </li>
                    </ul>
                </div>

                {toggleMenu && (
                    <div className="navbar__smallscreen">
                        <button type="button" className="navbar__close--btn text__light" onClick={() => setToggleMenu(false)}>
                            <FaTimes size={32} />
                        </button>
                        <ul className="navbar__nav--smallscreen text__light">
                            <li className="nav__item">
                                <a href="#home" className="nav__link text__upper fw__6 nav__active text__light">home</a>
                            </li>
                            <li className="nav__item">
                                <a href="#about" className="nav__link text__upper fw__6 text__light">about</a>
                            </li>
                            <li className="nav__item">
                                <a href="#work" className="nav__link text__upper fw__6 text__light">work</a>
                            </li>
                            <li className="nav__item">
                                <a href="#process" className="nav__link text__upper fw__6 text__light">process</a>
                            </li>
                            <li className="nav__item">
                                <a href="#services" className="nav__link text__upper fw__6 text__light">services</a>
                            </li>
                            <li className="nav__item">
                                <a href="#testimonials" className="nav__link text__upper fw__6 text__light">testimonials</a>
                            </li>
                            <li className="nav__item">
                                <a href="#contact" className="nav__link text__upper fw__6 text__light">contact</a>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar;