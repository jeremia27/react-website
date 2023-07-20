import React from "react";
import "./Header.css";
import Navbar from "../Navbar/Navbar";
import images from "../../constants/images";
import { FaArrowUp } from "react-icons/fa";

const Header = () => {

    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        section.scrollIntoView({ behavior: "smooth" });
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    return (

        <div id="home" className="header" style={{
            background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.2)), url(${images.header_bg}) center/cover no-repeat`
        }}>
            <button className="scroll-to-top" onClick={scrollToTop}>
                <FaArrowUp />
            </button>

            <Navbar />
            <div className="container">
                <div className="header__content text__center text__light flex flex__center">
                    <div className="header__content--left"></div>
                    <div className="header__content--right">
                        <h1 className="header__title fw__6">We Design and Develop</h1>
                        <p className="para__text">We are a new design studio based in USA. We have over 20 years of combined experience, and know a thing or two about designing websites and mobile apps.</p>
                        <a href="#contact" className="btn btn__blue" onClick={() => scrollToSection("contact")}>contact us</a>
                    </div>
                </div>
            </div>

        </div>
    )
}



export default Header;