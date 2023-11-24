import TextInput from "../../ui/TextInput/TextInput";
import TextAreaInput from "../../ui/TextAreaInput/TextAreaInput";
import SendButton from "../../ui/SendButton/SendButton";
import MailInput from "../../ui/MailInput/MailInput";
import React from "react";
import "./ContactForm.scss";

const ContactForm = () => {
    return (
        <form className="ContactForm">
            <h2 className="form-title">Formulaire de Contact</h2>
            <div className="first-line-inputs">
                <TextInput />
                <MailInput />
            </div>
            <div className="textarea-input">
                <TextAreaInput />
                <SendButton />
            </div>
        </form>
    );
};

export default ContactForm;
