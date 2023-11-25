import React from "react";
import linkedin from "./../../assets/icons/linkedin.png";
import github from "./../../assets/icons/github.png";
import "./Footer.scss";

const Footer = () => {
    return (
        <div className="Footer">
            <div className="footer-icons">
                <img src={linkedin} alt="" width="60" />
                <img src={github} alt="" width="60" />
            </div>
        </div>
    );
};

export default Footer;
