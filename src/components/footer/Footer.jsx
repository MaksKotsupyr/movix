import React from "react";
import {
    FaTelegram,
    FaInstagram,
    FaLinkedin,
    FaGithub
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <ContentWrapper>
                <ul className="menuItems">
                    <li className="menuItem">Terms Of Use</li>
                    <li className="menuItem">Privacy-Policy</li>
                    <li className="menuItem">About</li>
                    <li className="menuItem">Blog</li>
                    <li className="menuItem">FAQ</li>
                </ul>
                <div className="infoText">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.
                </div>
                <div className="socialIcons">
                    <a href="https://t.me/Maksym_Kotsupyr" target="_blank" className="icon">
                      <FaTelegram />
                    </a>
                    <a href="https://www.instagram.com/maks_kotsupyr/" target="_blank" className="icon">
                      <FaInstagram />
                    </a>
                    <a href="https://github.com/MaksKotsupyr?tab=repositories" target="_blank" className="icon">
                      <FaGithub />
                    </a>
                    <a href="https://www.linkedin.com/in/maksym-kotsupyr-b4321021b/" target="_blank" className="icon">
                      <FaLinkedin />
                    </a>
                </div>
            </ContentWrapper>
        </footer>
    );
};

export default Footer;