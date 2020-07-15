import React, { useState } from 'react';
import './projects-cards.css';
import { useSpring, animated, config } from 'react-spring';

import myirc1 from '../../../../assets/projects-screenshots/myirc3.png';

function MyIrc() {

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
                    <h5>my irc</h5>
                    <h4>Serveur de chat IRC</h4>
                    <div className="container-img">
                        <div className="image-wrapper">
                            <img data-src={myirc1} alt="myirc-screenshot"></img>
                        </div>
                    </div>
                    <div className="technos row">
                        <div className="col s12" style={{ padding: 0 }}>
                            <span>React.js</span><span>Node.js</span><span>Express.js</span><span>Socket.IO</span>
                        </div>
                    </div>
                    <p>Chat instantané avec possibilité de connexion à plusieurs channels simultanément.</p>
                    <div className="links-projects">
                        <div>
                            <a href="https://haonhien-my-irc.herokuapp.com/" target="_blank" rel="noopener noreferrer" className="button external-link">Démo</a>
                            <a href="https://github.com/HaoNhien-NGUY/my_irc" target="_blank" rel="noopener noreferrer" className="button gitcode">{'<'} Code {'/>'}</a>
                        </div>
                        <div className="show-details" onClick={() => set(state => !state)} >Détails <i className="small material-icons">arrow_forward</i></div>
                    </div>
                </div>
            </animated.div>

            <animated.div className="c front z-depth-" style={{ opacity, transform: transform.interpolate(t => `${t} rotateY(180deg)`) }} >
                <div className="card-content">
                    <div className="card-description">
                        <p style={{ marginTop: 0, paddingTop: "1.5rem" }}>Réalisé du 11 mai 2020 au 24 mai 2020</p>
                        <h5>Serveur de chat IRC</h5>
                        <p>Réalisation d'un serveur IRC grâce à Node.js / Express.js / Socket.IO et React.js en front.</p>
                        <p>Ce projet est ma vraie première expérience avec React.js et aussi ma première introduction aux WebSockets notamment avec Socket.IO.</p>
                    </div>
                    <div className="links-projects">
                        <div className="show-front" onClick={() => set(state => !state)} ><i className="small material-icons">arrow_back</i> Retour</div>
                    </div>
                </div>
            </animated.div>
        </>
    )
}

export default MyIrc;
