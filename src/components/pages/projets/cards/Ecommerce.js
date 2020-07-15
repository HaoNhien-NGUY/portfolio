import React, { useState } from 'react';
import './projects-cards.css';
import { useSpring, animated } from 'react-spring';

import img1 from '../../../../assets/projects-screenshots/ecommerce2.png';

function Ecommerce() {

    const [flipped, set] = useState(false)
    const { transform, opacity } = useSpring({
        opacity: flipped ? 1 : 0,
        transform: `perspective(1100px) rotateY(${flipped ? 180 : 0}deg)`,
        config: { mass: 5, tension: 500, friction: 80 }
    })
    return (
        <>
            <animated.div className="c back" style={{ opacity: opacity.interpolate(o => 1 - o), transform, zIndex: +!flipped }} >
                <div className="card-content">
                    <h5>Blueprint.</h5>
                    <h4>Projet E-commerce</h4>
                    <div className="container-img">
                        <div className="image-wrapper">
                            <img data-src={img1} alt="ecommerce-screenshot"></img>
                        </div>
                    </div>
                    <div className="technos row">
                        <div className="col s12" style={{ padding: 0 }}>
                            <span>React.js</span><span>Redux</span><span>Symfony5</span><span>MySQL</span>
                        </div>
                    </div>
                    <p>Site E-commerce avec espace utilisateur et back admin complet. ( Statistiques, gestion de stock, etc...)</p>
                    <div className="links-projects">
                        <div>
                            <a href="https://e-8commerce-client.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="external-link button">Démo</a>
                            <a href="https://github.com/HaoNhien-NGUY/8-commerce" target="_blank" rel="noopener noreferrer" className="button gitcode">{'<'} Code {'/>'}</a>
                        </div>
                        <div className="show-details" onClick={() => set(state => !state)} >Détails <i className="small material-icons">arrow_forward</i></div>
                    </div>
                </div>
            </animated.div>

            <animated.div className="c front" style={{ opacity, transform: transform.interpolate(t => `${t} rotateY(180deg)`), zIndex: +flipped }} >
                <div className="card-content">
                    <div className="card-description">
                        <p style={{ marginTop: 0, paddingTop: "1.5rem" }}>Réalisé du 01 juin 2020 au 29 juin 2020</p>
                        <h5>Projet E-commerce</h5>
                        <p>Réalisé en groupe de 8 en utilisant la methodologie Agile et GitLab.</p>
                        <p>J'ai participé à la conception de l'API REST avec Symfony5 en back, à la mise en place de la base de donnée MySQL ainsi qu'à l'implementation de l'authentification avec Google OAuth.</p>
                        <p>#1 Victoire compétition Marketing décernée par l’ESSEC Business School (<a href="https://www.linkedin.com/feed/update/urn:li:activity:6685934491401256960/" target="_blank" rel="noopener noreferrer">Annoncée sur Linkedin</a>)</p>
                    </div>
                    <div className="links-projects">
                        <div className="show-front" onClick={() => set(state => !state)} ><i className="small material-icons">arrow_back</i> Retour</div>
                    </div>
                </div>
            </animated.div>
        </>
    )
}

export default Ecommerce;
