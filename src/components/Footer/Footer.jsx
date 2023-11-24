import React from "react";
import linkedin from "./../../assets/icons/linkedin.png";
import twitter from "./../../assets/icons/twitter.png";
import gmail from "./../../assets/icons/gmail.png";
import "./Footer.scss";

const Footer = () => {
    return (
        <div className="Footer">
            <div className="footer-icons">
                <img src={linkedin} alt="" width="60" />
                <img src={twitter} alt="" width="60" />
                <img src={gmail} alt="" width="60" />
            </div>
        </div>
    );
};

export default Footer;
