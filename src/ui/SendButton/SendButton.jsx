import React from "react";
/* eslint-disable react/button-has-type */
import "./SendButton.scss";

const SendButton = () => {
    return (
        <div className="button-form">
            <button className="btn send" type="submit">
                Envoyer
            </button>
        </div>
    );
};

export default SendButton;
