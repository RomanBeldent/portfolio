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
                    <div className="profil-pic">
                        <img style={{
                            width: 150,
                            //Below lines will help to set the border radius
                            borderBottomLeftRadius: 150,
                            borderBottomRightRadius: 150,
                            borderTopRightRadius: 150,
                            borderTopLeftRadius: 150,
                            overflow: "hidden",
                            boxShadow: "1px 10px 30px #6477b4",
                        }} src={profile} alt="" />
                    </div>
                    <div className="resume">
                        <p>
                            En reconversion pro (anciennement technicien son et monteur son dans le cinéma), je viens de finir une formation Développeur FullStack chez O'Clock et souhaite continuer mon apprentissage avec eux. <br />Je suis donc en recherche d'alternance "Développeur concepteur d'applications" ! <br />

                            🌱 Je suis actuellement en train d'apprendre Node.js et de mettre en place un projet avec un développeur React.
                        </p>
                        <a href="#" className="btn cv" target="_blank">télécharger mon cv</a>
                    </div>
                </div>
            </div>
        </section >
    );
};
export default AboutSection;