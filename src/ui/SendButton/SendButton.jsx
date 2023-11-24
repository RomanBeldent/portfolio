import React from "react";
/* eslint-disable react/button-has-type */
import "./SendButton.scss";

const SendButton = () => {
    return (
        <div className="SendButton">
            <button className="send-button" type="submit">
                Envoyer
            </button>
        </div>
    );
};

export default SendButton;
