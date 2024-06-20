import React from "react";
import "./ProjectSection.scss";
import melodica from "../../assets/img/melodica.png";
import pokedex from "../../assets/img/pokedex.png";
import pokeball from "../../assets/img/pokeball.png";
import melodicaIcon from "../../assets/img/melodica-icon.png";
import rocketIcon from "../../assets/img/rocket-icon.png"
import spacexHome from "../../assets/img/spacex-home.jpg"
import spacexDetail from "../../assets/img/spacex-detail.jpg"


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
                </div>
                <div className="project-img">
                    <img className="melodica-icon" src={melodicaIcon} alt="melodica-icon-img" />
                    <h3>
                        Mélodica
                    </h3>
                    <img className="melodica-icon n2" src={melodicaIcon} alt="melodica-icon-img" />
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
                    <img className="pokeball n2" src={pokeball} alt="pokeball-img" />
                </div>
                <div className="projects-content">
                    <div className="project-solo">
                        <p>

                            J'ai réalisé le grand, le fameux, l'incontournable, et surtout l'original, accueillons le bien fort : LE POKEDEX ! J'ai utilisé React grâce à une formation de Simon Dieny. Ce tuto m'a donné de bonnes bases pour progresser sur React, et je me suis lancé dans des sides-projects perso grâce à cette formation. Merci Simon ! Vous pouvez y faire un petit tour <a className="link" href="https://react-pokemons-app-tau.vercel.app/pokemons" target="_blank">ici</a>.
                            <a href="https://react-pokemons-app-tau.vercel.app/pokemons" target="_blank">
                                <img style=
                                    {{
                                        padding: 20,
                                        borderRadius: 30,
                                    }}
                                    src={pokedex}
                                    alt="pokedex-img" />
                            </a>
                        </p>
                    </div>
                </div>
                <div className="project-img">
                    <img className="rocket" src={rocketIcon} alt="pokeball-img" />
                    <h3>
                        SpaceX Rocket
                    </h3>
                    <img className="rocket n2" src={rocketIcon} alt="pokeball-img" />
                </div>
                <div className="projects-content">
                    <div className="project-solo">
                        <p>
                            J'ai réalisé ce mini-projet en quelques jours. L'application consiste à lister des fusées de l'entreprise américaine <a href="https://www.spacex.com/">SpaceX</a>. <br/> Cela m'a mené à me former sur différentes technologies que je ne connaissais pas et que je voulais découvrir. En front-end, j'ai utilisé le framework Vue 3 et Electron. Côté back-end j'ai utilisé Node.js, express, MongoDB et l'ODM mongoose. Vous pouvez accéder librement au code sur mon profil <a href="https://github.com/RomanBeldent" target="_blank">GitHub</a>.
                                <img style=
                                    {{
                                        padding: 20,
                                        borderRadius: 30,
                                    }}
                                    src={spacexHome}
                                    alt="spaceX-home" />
                                     <img style=
                                    {{
                                        padding: 20,
                                        borderRadius: 30,
                                    }}
                                    src={spacexDetail}
                                    alt="spaceX-detail" />
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectSection;