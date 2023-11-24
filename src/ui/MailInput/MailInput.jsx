import React from "react";
import "./MailInput.scss";

const MailInput = () => {
    return (
        <div className="MailInput">
            <span className="input-label">Email : </span>
            <input
                className="form-input"
                type="email"
                placeholder="Entrez votre Email"
                // value=""
                // onChange={handleChange}
                required
            />{" "}
        </div>
    );
};

export default MailInput;
