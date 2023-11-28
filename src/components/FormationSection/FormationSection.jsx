import React from "react";
import "./FormationSection.scss";

const FormationSection = () => {
    return (
        <section id="formations" className="formations">
            <div className="content">
                <div className="line-display">
                    <div className="line"> </div>
                    <h4>
                        Mon parcours
                    </h4>
                </div>
                <h3>
                    Formations
                </h3>
                <ul className="formations-list">
                    <li className="first">
                        <div>
                            <h5>
                                O'Clock - terminé
                            </h5>
                            <p className="winter date">Juin 2023 - Novembre 2023</p>
                            <p>Formation à l'origine basée sur 3 ans visant à nous apprendre le métier de développeur. J'ai cessé ma formation à Epitech de part son coût et le fait que la façon dont Epitech fonctionne ne me correspondait pas.</p>
                        </div>
                    </li>

                    <li className="second">
                        <div>
                            <h5>
                                O'Clock - à venir
                            </h5>

                            <p className="salmon date">Fin Janvier 2024 - Septembre 2025</p>
                            <p>Le baccalauréat professionnel SEN aborde, dans ses trois options, l’ensemble des compétences professionnelles permettant au technicien d’exercer les activités liées à la préparation, l’installation, la réalisation, la mise en service et la maintenance préventive, corrective et curative (diagnostic, dépannage et réparation) de Systèmes Electroniques.</p>

                        </div>
                    </li>
                    <li className="third">
                        <div>
                            <h5>
                                Autodidacte
                            </h5>
                            <p className="purple date">Actuellement</p>
                            <p>Le diplôme du BEP Systèmes Electroniques Numériques (SEN) valide un ensemble de connaissances et de compétences générales et professionnelles, intégrées dans le référentiel du Baccalauréat Professionnel Systèmes Electroniques Numériques (SEN).</p>
                        </div>
                    </li>
                </ul>
            </div>
        </section >
    );
};

export default FormationSection;