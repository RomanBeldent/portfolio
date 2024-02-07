import React from "react";
import "./ProjectSection.scss";
import melodica from "../../assets/img/melodica.png"

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
                        Durant mon projet de fin de formation, j'ai eu l'occasion de réaliser la partie back-end de Mélodica avec une équipe formidable. L'objectif de ce site web, est de mettre en contact des artistes de musique, avec des organisateurs d'événements et inversement (professionnel ou particulier).
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
            </div>
        </section>
    );
};

export default ProjectSection;