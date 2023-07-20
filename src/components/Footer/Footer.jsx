import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer section__padding bg__dark">
            <div className="container">
                <div className="footer__content grid text__light text__center">
                    <div className="footer__content--item">
                        <a href = "#home" className="footer__navlink">In Tech, Sibarani</a>
                        <p className="para__text">&copy; 2023 Sibarani-Dev. All rights reserved. Designed by Jeremia.</p>
                    </div>

                    <div className="footer__content--item">
                        <a href = "mailto:someone@gmail.com">jeremiasibarani51@gmail.com</a>
                        <p>+62 821 6740 1737</p>
                    </div>

                    <div className="footer__content--item">
                        <h3 className="footer__title">Projects</h3>
                        <ul className="footer__links">
                            <li><a href = "#about">About</a></li>
                            <li><a href = "#services">Services</a></li>
                            <li><a href = "#career">Career</a></li>
                        </ul>
                    </div>

                    <div className="footer__content--item">
                        <h3 className="footer__title">News</h3>
                        <ul className="footer__links">
                            <li><a href = "#event">Events</a></li>
                            <li><a href = "#contact">Contact</a></li>
                            <li><a href = "#legals">Legals</a></li>
                        </ul>
                    </div>

                    <div className="footer__content--item">
                        <h3 className="footer__title">Social LInks</h3>
                        <ul className="footer__links">
                            <li><a rel="noreferrer" target="_blank" href = "https://www.facebook.com/profile.php?id=100073694209236">Facebook</a></li>
                            <li><a rel="noreferrer" target="_blank" href = "https://www.linkedin.com/in/jeremia-sibarani-4a6a5b174/">Linkedin</a></li>
                            <li><a rel="noreferrer" target="_blank" href = "https://www.instagram.com/jeremiasbrni/">Instagram</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;