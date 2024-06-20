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
                            <p>Formation en téléprésentiel. Les compétences que j'ai acquises durant cette formation sont : <br /> <span className="strong">HTML, CSS, JavaScript Vanilla, PHP, SQL, Git, méthodologie Agile. </span><br />
                                Je me suis ensuite spécialisé en back-end avec le framework Symfony. <br />
                                Cette formation certifie le Titre Professionnel Développeur Web et Web Mobile niveau 5 (équivalent à un diplôme bac+2).</p>
                        </div>
                    </li>

                    <li className="second">
                        <div>
                            <h5>
                                <a className="oclock" href="https://www.wildcodeschool.com/fr-fr/formations-developpement-web/formation-developpeur-web-alternance" target="_blank">WILD CODE SCHOOL </a>- Formation Concepteur Développeur d'Applications Web - Alternance
                            </h5>

                            <p className="salmon date">Disponible immédiatement</p>
                            <p>Formation en téléprésentiel. Dans les grandes lignes, les technologies qui seront abordées sont : <span className="strong"><br />React en TypeScript, React Native, Node.js, Express.js, Next.js, GraphQL, MongoDB, NoSQL et Docker.</span>
                                <br /> <span className="underline">Rythme</span>: 3 semaines en entreprise, 1 semaine d’école. <br />
                                <span className="underline">Durée</span >: 15 mois d’alternance + 3 mois 100% en entreprise. <br />
                                Cette formation certifie le Titre Professionnel Développeur Web et Web Mobile niveau 6 (équivalent à un diplôme bac+4).</p>

                        </div>
                    </li>
                    <li className="third">
                        <div>
                            <h5>
                                Autodidacte
                            </h5>
                            <p className="purple date">En ce moment - à l'avenir</p>
                            <p>Dernièrement, j'ai réalisé des applications telles, qu'un pokédex, en TypeScript et node.js. Ensuite, j'ai réalisé une application SpaceX Rocket avec une API fonctionnelle, qui consiste à lister des fusées provenant directement du site SpaceX. J'ai utilisé vue3, Electron, node.js et mongodb pour réaliser ce projet. En ce moment, je réalise le site d'une avocate en React. </p>
                        </div>
                    </li>
                </ul >
            </div >
        </section >
    );
};

export default FormationSection;