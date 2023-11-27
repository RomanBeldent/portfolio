import NameInput from "../../ui/NameInput/NameInput";
import MessageInput from "../../ui/MessageInput/MessageInput";
import SendButton from "../../ui/SendButton/SendButton";
import MailInput from "../../ui/MailInput/MailInput";
import React from "react";
import "./ContactForm.scss";

const ContactForm = () => {
    return (
        <section id="contact" className="contact">
            <div className="content">
                <div className="line-display">
                    <div className="line"> </div>
                    <h4>
                        Où me trouver
                    </h4>
                </div>
                <h3>
                    Contact
                </h3>
                <div className="row">
                    <div className="info-form">
                        <p>Si vous avez des questions ou un projet à me soumettre, n'hésitez pas à utiliser le formulaire ci-dessous pour me contacter. <br />
                            Je serai ravi de vous aider dans la mesure de mes compétences </p>
                    </div>
                    <div className="input-area">
                        <form id="contactForm" name="contact">
                            <NameInput />
                            <MailInput />
                            <MessageInput />
                            <SendButton />
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ContactForm;
