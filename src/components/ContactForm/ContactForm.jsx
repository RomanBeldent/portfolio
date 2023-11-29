import NameInput from "../../ui/NameInput/NameInput";
import MessageInput from "../../ui/MessageInput/MessageInput";
import SendButton from "../../ui/SendButton/SendButton";
import MailInput from "../../ui/MailInput/MailInput";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./ContactForm.scss";

const ContactForm = () => {

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        alert("Votre message a bien été envoyé !")

        emailjs.sendForm('service_z9wvty6', 'template_bc3ff3b', form.current, '61ULQhZH5gMzi652c')
            .then((result) => {
                console.log(result.text);
                console.log("Message envoyé");
            }, (error) => {
                console.log(error.text);
            });
    };

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
                        <form ref={form} onSubmit={sendEmail} id="contactForm" name="contact">
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
