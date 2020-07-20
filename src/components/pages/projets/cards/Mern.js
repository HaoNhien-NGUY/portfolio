import React, { useState } from 'react';
import './projects-cards.css';
import { useSpring, animated } from 'react-spring';

import mysnapchat1 from '../../../../assets/projects-screenshots/mysnapchat5.png';

function Mern() {

    const [flipped, set] = useState(false)
    const { transform, opacity } = useSpring({
        opacity: flipped ? 1 : 0,
        transform: `perspective(900px) rotateY(${flipped ? 180 : 0}deg)`,
        config: { mass: 5, tension: 500, friction: 80 }
    })
    return (
        <>
            <animated.div className="c back" style={{ opacity: opacity.interpolate(o => 1 - o), transform, zIndex: +!flipped }} >
                <div className="card-content">
                    <h5>Psicine MERN</h5>
                    <h4>Initiation stack MERN</h4>
                    <div className="container-img">
                        <div className="image-wrapper">
                            <img src={mysnapchat1} alt="MERN-screenshot"></img>
                        </div>
                    </div>
                    <div className="technos row">
                        <div className="col s12" style={{ padding: 0 }}>
                            <span>React.js</span><span>API REST</span><span>JSON Web Token</span>
                        </div>
                    </div>
                    <p>Reproduction des fonctionnalité de Snapchat en utilisant l'API fournie par EPITECH.</p>
                    <div className="links-projects">
                        <div>
                            <a href="http://our-snapchat.surge.sh/" target="_blank" className="button external-link">Démo</a>
                            <a href="https://github.com/HaoNhien-NGUY/my_snapchat/tree/master/my_snapchat" target="_blank" rel="noopener noreferrer" rel="noopener noreferrer" className="button gitcode">{'<'} Code {'/>'}</a>
                        </div>
                        <div className="show-details" onClick={() => set(state => !state)} >Détails <i className="small material-icons">arrow_forward</i></div>
                    </div>
                </div>
            </animated.div>

            <animated.div className="c front z-depth-" style={{ opacity, transform: transform.interpolate(t => `${t} rotateY(180deg)`) }} >
                <div className="card-content">
                    <div className="card-description">
                        <p style={{ marginTop: 0, paddingTop: "1.5rem" }}>Réalisé du 25 mai 2020 au 31 mai 2020</p>
                        <h5>Imitation de Snapchat</h5>
                        <p>Login: <b>forsen@forsen.ee</b> - Password: <b>forsen</b></p>
                        <p>Envoie d'images à d'autres utilisateurs pour un laps de temps, qui seront supprimés par la suite.</p>
                        <p>Utilisation d'une API externe. <br></br>Le site a été réalisé pour être mobile first</p>
                    </div>
                    <div className="links-projects">
                        <div className="show-front" onClick={() => set(state => !state)} ><i className="small material-icons">arrow_back</i> Retour</div>
                    </div>
                </div>
            </animated.div>
        </>
    )
}

export default Mern;
