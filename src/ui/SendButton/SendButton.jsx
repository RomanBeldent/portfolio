import React from "react";
/* eslint-disable react/button-has-type */
import "./SendButton.scss";

const SendButton = () => {
    return (
        <div className="button-form">
            <button id="form-submit" className="btn send" type="submit">
                Envoyer le message
            </button>
        </div >
    );
};

export default SendButton;
