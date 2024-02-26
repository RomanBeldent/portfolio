import React from "react";
import "./ProjectSection.scss";
import melodica from "../../assets/img/melodica.png";
import pokedex from "../../assets/img/pokedex.png";
import pokeball from "../../assets/img/pokeball.png";

const ProjectSection = () => {
    return (
        <section id="projects" className="projects">
            <div className="projects-titles">
                <div className="content">
                    <div className="line-display">
                        <div className="line"> </div>
                        <h4>
                            Mes projets
                        </h4>
                    </div>
                    <h3>
                        Mélodica
                    </h3>
                </div>
                <div className="projects-content">
                    <div className="project-solo">
                        <p>
                            Durant mon projet de fin de formation, j'ai eu l'occasion de réaliser Mélodica avec une équipe formidable. J'ai codé la partie back-end du site avec Symfony. J'ai également eu l'opportunité de travailler sur le design du site, après des recherches et un brainstorming avec l'équipe. L'objectif de ce site web, est de mettre en contact des artistes de musique, avec des organisateurs d'événements et inversement (professionnel ou particulier). Le site n'est pas déployé, cependant, nous voulons continuer à l'avenir ce projet qui nous tient à cœur et qui, je pense, a un vrai potentiel.
                            <img style=
                                {{
                                    padding: 20,
                                    borderRadius: 30,
                                }}
                                src={melodica}
                                alt="melodica-img" />
                        </p>
                    </div>
                </div>
                <div className="project-img">
                <img className="pokeball" src={pokeball} alt="pokeball-img" />
                <h3>
                    Pokédex
                </h3>
                <img className="pokeball" src={pokeball} alt="pokeball-img" />
                </div>
                <div className="projects-content">
                    <div className="project-solo">
                        <p>
                            
                            J'ai réalisé un pokédex en utilisant React grâce à une formation de Simon Dieny. Ce tuto m'a donné de bonnes bases pour progresser sur React, et je me suis lancé dans des sides-projects perso grâce à cette formation ! 
                            <img style=
                                {{
                                    padding: 20,
                                    borderRadius: 30,
                                }}
                                src={pokedex}
                                alt="pokedex-img" />
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectSection;