import React from "react";
import "./NameInput.scss";

const NameInput = () => {
    return (
        <div className="name">
            <input type="text" id="name" name="name" placeholder="Nom*" />
        </div>
    );
};

export default NameInput;
