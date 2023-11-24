import React from "react";
import "./TextAreaInput.scss";

const TextAreaInput = () => {
    return (
        <div className="TextAreaInput">
            <div className="text-area-input">
                <textarea
                    name="band-description"
                    rows="8"
                    cols="120"
                    placeholder="Entrez votre message"
                //   onChange={handleChange}
                />
            </div>
        </div>
    );
};

export default TextAreaInput;
