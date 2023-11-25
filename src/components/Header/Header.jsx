import React from "react";
import "./Header.scss";

const Header = () => {
    return (
        <div className="content">
            <div className="intro">
                <h2>
                    Roman Beldent
                </h2>
                <h1>DÉVELOPPEUR WEB FULLSTACK</h1>
                <a href="#contact" className="contact-button">CONTACT</a>
                <ul>
                    <li className="github">
                        <a href="https://github.com/RomanBeldent"> <img height="30" width="42" src="https://cdn.simpleicons.org/github/white" /></a>
                    </li>
                    <li className="linkedin">
                        <a href="https://www.linkedin.com/in/romanbeldent"> <img height="30" width="42" src="https://cdn.simpleicons.org/linkedin/white" /></a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Header;