import React, { useState } from 'react';
import './projects-cards.css';
import { useSpring, animated, config } from 'react-spring';

import puissance4Img from '../../../../assets/projects-screenshots/puissance4.png';

function Puissance4() {

    const [flipped, set] = useState(false)
    const { transform, opacity } = useSpring({
        opacity: flipped ? 1 : 0,
        transform: `perspective(900px) rotateY(${flipped ? 180 : 0}deg)`,
        config: { mass: 5, tension: 500, friction: 80 }
    })
    return (
        <>
            <animated.div class="c back" style={{ opacity: opacity.interpolate(o => 1 - o), transform, zIndex: +!flipped }} >
                <div className="card-content">
                    <h5>puissance4</h5>
                    <h4>Jeu du Puissance 4</h4>
                    <div class="container-img">
                        <div class="image-wrapper">
                            <img data-src={puissance4Img}></img>
                        </div>
                    </div>
                    <div className="technos row">
                        <div className="col s12" style={{ padding: 0 }}>
                            <span>Javascript</span><span>jQuery</span>
                        </div>
                    </div>
                    <p>Plugin jQuery prenant differents paramètres pour faire un puissance 4 dynamique.</p>
                    <div className="links-projects">
                        <div>
                            <a href="https://haonhien-nguy.github.io/puissance4/" target="_blank" className="button external-link">Démo</a>
                            <a href="https://github.com/HaoNhien-NGUY/puissance4" target="_blank" className="button gitcode">{'<'} Code {'/>'}</a>
                        </div>
                        <div className="show-details" onClick={() => set(state => !state)} >Détails <i class="small material-icons">arrow_forward</i></div>
                    </div>
                </div>
            </animated.div>

            <animated.div class="c front z-depth-" style={{ opacity, transform: transform.interpolate(t => `${t} rotateY(180deg)`) }} >
                <div className="card-content">
                    <div className="card-description">
                        <p style={{ marginTop: 0, paddingTop: "1.5rem" }}>Réalisé du 02 mars 2020 au 08 mars 2020</p>
                        <h5>Jeu du Puissance 4</h5>
                        <p></p>
                    </div>
                    <div className="links-projects">
                        <div className="show-front" onClick={() => set(state => !state)} ><i class="small material-icons">arrow_back</i> Retour</div>
                    </div>
                </div>
            </animated.div>
        </>
    )
}

export default Puissance4;
