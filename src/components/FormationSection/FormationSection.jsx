import React from "react";
import "./FormationSection.scss";

const FormationSection = () => {
    return (
        <section id="formations" className="formations">
            <div className="content">
                <div className="formations-titles">
                    <div className="line-display">
                        <div className="line"> </div>
                        <h4>
                            Mon parcours
                        </h4>
                    </div>
                    <h3>
                        Formations
                    </h3>
                </div>
                <ul className="formations-list">
                    <li className="first">
                        <div>
                            <h5>
                                <a className="oclock" href="https://oclock.io/formations/developpeur-web" target="_blank">O'Clock </a>- Formation Développeur Web Fullstack PHP
                            </h5>
                            <p className="winter date">Juin 2023 - Novembre 2023</p>
                            <p>Formation en téléprésentiel. Les compétences que j'ai acquises durant cette formation sont : <br /> <span className="strong">HTML, CSS, JavaScript Vanilla, PHP, SQL et GitHub. </span><br />
                                Je me suis ensuite spécialisé en back-end avec le framework Symfony. <br />
                                Cette formation certifie le Titre Professionnel Développeur Web et Web Mobile niveau 5 (équivalent à un diplôme bac+2).</p>
                        </div>
                    </li>

                    <li className="second">
                        <div>
                            <h5>
                                <a className="oclock" href="https://oclock.io/formations/CDA-alternance" target="_blank">O'Clock </a>- Formation Concepteur Développeur d'Applications Web - Alternance
                            </h5>

                            <p className="salmon date">Fin Janvier 2024 - Septembre 2025</p>
                            <p>Formation en téléprésentiel. Les technologies que je vais acquérir durant cette formation sont : <span className="strong"><br />React en TypeScript, Node.js, Express.js, Nest.js, MongoDB, NoSQL et Docker.</span>
                                <br /> <span className="underline">Rythme</span>: 2 semaines en entreprise, 1 semaine d’école. <br />
                                <span className="underline">Durée</span >: 15 mois d’alternance + 3 mois 100% en entreprise. <br />
                                Cette formation certifie le Titre Professionnel Développeur Web et Web Mobile niveau 6 (équivalent à un diplôme bac+4).</p>

                        </div>
                    </li>
                    <li className="third">
                        <div>
                            <h5>
                                Autodidacte
                            </h5>
                            <p className="purple date">En cours - à l'avenir</p>
                            <p>De mon côté, je suis en train d'apprendre node.js en suivant une formation de <a className="link" href="https://grafikart.fr/tutoriels/javascript-server-nodejs-2080" target="_blank"> Grafikart</a>. L'objectif est de pouvoir m'amuser avec ce langage et monter des projets avec un ami développeur React. <br />
                                Ensuite, j'ai envie d'apprendre ce framework afin d'être à l'aise en front tout comme en back et de pouvoir jongler sur les deux tableaux.</p>
                        </div>
                    </li>
                </ul >
            </div >
        </section >
    );
};

export default FormationSection;