import React from "react";
import "./MailInput.scss";

const MailInput = () => {
    return (
        <div className="email">
            <input type="text" id="email" name="email" placeholder="Email*" />
        </div>
    );
};

export default MailInput;
