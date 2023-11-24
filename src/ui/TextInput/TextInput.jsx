import React from "react";
import "./TextInput.scss";

const TextInput = () => {
    return (
        <div className="TextInput">
            <span className="input-label">Nom : </span>
            <input
                className="form-input"
                type="text"
                placeholder="Entrez votre nom"
            />{" "}
        </div>
    );
};

export default TextInput;
