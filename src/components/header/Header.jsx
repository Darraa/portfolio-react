import React, { useState, useEffect } from "react";
import HeaderLinkElement from "../headerLinkElement/HeaderLinkElement";
import "./header.scss";
import { initScroll } from "../../utils/js/scroll";

const Header = ({isModalOpen}) => {
    const [isActive, setIsActive] = useState("Home");
    const linksName = ["Home", "About me", "Skills", "Portfolio", "Contact me"];

    const renderLinks = () => {
        return linksName.map((item) => {
            let className = item === isActive ? "active" : "";
            return (
                <HeaderLinkElement
                    linkName={item}
                    setIsActive={setIsActive}
                    className={className}
                />
            );
        });
    };

    useEffect(() => {
        initScroll();
    }, []);

    return (
        <nav className={`nav ${isModalOpen ? "hide" : " "}`}>
            <ul className="nav__content">{renderLinks()}</ul>
        </nav>
    );
};

export default Header;
