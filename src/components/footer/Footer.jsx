import React from "react";
import social from "../../assets/img/contact-sprite.svg"
import "./footer.scss";

const Footer = () => {
    return (
        <footer id="contact" className="footer">
            <div className="footer__social">
                <h3>Contact me</h3>
                <ul className="footer__social-list">
                    <li>
                        <svg width="30" height="30">
                            <use href={`${social}#icon-mail`}></use>
                        </svg>
                        <a href="mailto:dariia.palij@gmail.com">
                            dariia.palij@gmail.com
                        </a>
                    </li>
                    <li>
                        <svg width="30" height="30">
                            <use href={`${social}#icon-telegram`}></use>
                        </svg>
                        <span>@daria_pl</span>
                    </li>
                    <li>
                        <svg width="30" height="30">
                            <use href={`${social}#icon-github`}></use>
                        </svg>
                        <a href="https://github.com/darraa" target="_blank">
                            https://github.com/darraa
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;
