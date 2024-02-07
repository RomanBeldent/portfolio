import React from "react";
import "./AboutSection.scss";
import profile from "../../assets/img/profile.png";
import cv from "../../assets/img/RomanBeldentCV.pdf";
import { Link } from "react-scroll";

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
                            Après 8 ans dans l'audiovisuel (monteur son & bruiteur), j'ai décidé de me reconvertir dans le développement WEB avec <a className="link" href="https://oclock.io/" target="_blank">O'Clock</a>.
                            <br /> Après 5 mois de formation intense, je souhaite continuer a acquérir de nouvelles compétences via une alternance, «<a className="link" href="https://www.wildcodeschool.com/fr-fr/formations-developpement-web/formation-developpeur-web-alternance" target="_blank">concepteur développeur d'applications</a>» et je suis donc à la recherche d'une entreprise.

                            <br /> Durant cette première expérience, je me suis davantage orienté back-end en apprenant le framework Symfony. Le détail des langages étudiés durant cette formation et celle à venir est presenté <Link className="link" to="formations" spy={true} smooth={true} offset={-10} duration={500} >ci-dessous</Link>. À l'avenir, j'aspire à décortiquer JavaScript de tous les côtés et devenir développeur MERN.
                            <br />
                            En dehors de mon travail, je suis passionné de golf - ce qui contraste avec les journées entières passées à coder ces derniers temps.
                        </p>
                        <div className="cv-button">
                        <a href={cv} className="btn cv" target="_blank">télécharger mon cv</a>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
};
export default AboutSection;