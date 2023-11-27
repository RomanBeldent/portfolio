import React from "react";
import "./AboutSection.scss";
import profile from "../../assets/img/profile.png";

const AboutSection = () => {
    return (
        <section id="about" className="about">
            <div className="content">
                <div className="line-display">
                    <div className="line"> </div>
                    <h4>A propos</h4>
                </div>
                <h3>Qui je suis</h3>
                <div className="row">
                    <img style={{
                        width: 150,
                        height: 150,
                        marginTop: 25,
                        //Below lines will help to set the border radius
                        borderBottomLeftRadius: 150,
                        borderBottomRightRadius: 150,
                        borderTopRightRadius: 150,
                        borderTopLeftRadius: 150,
                        overflow: "hidden",
                        boxShadow: "1px 10px 30px #6477b4",
                    }} src={profile} alt="" />

                    <div className="resume">
                        <p>
                            Après 8ans dans l'audio-visuel (monteur son & bruiteur), j'ai décidé de me reconvertir dans le développement WEB avec <a className="link" href="https://oclock.io/" target="_blank">O'Clock</a>. <br /> Après 5 mois de formation intense, je souhaite continuer l'aventure avec eux dans une formation en alternance (fin Janvier 2024) «<a className="link" href="https://oclock.io/formations/CDA-alternance" target="_blank">concepteur développeur d'applications</a>», et suis à la recherche d'une entreprise. <br />
                            Durant cette première expérience avec eux, je me suis plus orienté back-end en apprenant le framework Symfony, et suis maintenant en train d'apprendre node.js en autodidacte. A l'avenir, j'aspire à décortiquer JavaScript de tous les côtés et devenir développeur MERN.
                            <br />
                            En dehors de mon travail, je suis passionné de golf, qui contraste bien avec les journées entières passées à coder ces derniers temps.
                        </p>
                        <a href="#" className="btn cv" target="_blank">télécharger mon cv</a>
                    </div>
                </div>
            </div>
        </section >
    );
};
export default AboutSection;