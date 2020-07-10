import React, { useState } from 'react';
import './projects-cards.css';
import { useSpring, animated, config } from 'react-spring';

import myirc1 from '../../../../assets/projects-screenshots/myirc2.png';

function MyIrc() {

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
                    <h5>my_irc</h5>
                    <h4>Serveur de chat IRC</h4>
                    <img data-src={myirc1}></img>
                    <p>bla bla ce projet consiste a contruire un tank pour faire le Paris-Dakar</p>
                    <div className="links-projects">
                        <div>
                            <a href="https://haonhien-my-irc.herokuapp.com/" target="_blank" className="button">Live Demo</a>
                            <a href="https://github.com/HaoNhien-NGUY/my_irc" target="_blank" className="button gitcode">{'<'} Code {'/>'}</a>
                        </div>
                        <div className="show-details" onClick={() => set(state => !state)} >Détails <i class="small material-icons">arrow_forward</i></div>
                    </div>
                </div>
            </animated.div>

            <animated.div class="c front z-depth-" style={{ opacity, transform: transform.interpolate(t => `${t} rotateY(180deg)`) }} >
                <div className="card-content">
                    <div className="links-projects">
                        <div className="show-front" onClick={() => set(state => !state)} ><i class="small material-icons">arrow_back</i> Retour</div>
                    </div>
                </div>
            </animated.div>
        </>
    )
}

export default MyIrc;
