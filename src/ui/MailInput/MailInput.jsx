import React from "react";
import "./MailInput.scss";

const MailInput = () => {
    return (
        <div className="email">
            <input type="email" id="email" name="user_email" placeholder="Email*" required/>
        </div>
    );
};

export default MailInput;
