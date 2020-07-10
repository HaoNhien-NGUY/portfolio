import React, { useState } from 'react';
import './projects-cards.css';
import { useSpring, animated } from 'react-spring';

import img1 from '../../../../assets/projects-screenshots/ecommerce2.png';

function Ecommerce() {

    const [flipped, set] = useState(false)
    const { transform, opacity, zIndex } = useSpring({
        opacity: flipped ? 1 : 0,
        transform: `perspective(1100px) rotateY(${flipped ? 180 : 0}deg)`,
        config: { mass: 5, tension: 500, friction: 80 }
    })
    return (
        <>
            <animated.div class="c back" style={{ opacity: opacity.interpolate(o => 1 - o), transform, zIndex: +!flipped }} >
                <div className="card-content">
                    <h5>Blueprint.</h5>
                    <h4>Projet E-commerce</h4>
                    <img data-src={img1}></img>
                    <p className="technos">Node.js - Symfony5</p>
                    <div className="links-projects">
                        <div>
                            <a href="https://e-8commerce-client.herokuapp.com/" target="_blank" className="button">Live Demo</a>
                            <a href="https://github.com/HaoNhien-NGUY/8-commerce" target="_blank" className="button gitcode">{'<'} Code {'/>'}</a>
                        </div>
                        <div className="show-details" onClick={() => set(state => !state)} >Détails <i class="small material-icons">arrow_forward</i></div>
                    </div>
                </div>
            </animated.div>

            <animated.div class="c front" style={{ opacity, transform: transform.interpolate(t => `${t} rotateY(180deg)`), zIndex: +flipped }} >
                <div className="card-content">
                    <div className="card-description">
                        <p style={{marginTop: 0, paddingTop: "1.5rem"}}>Du 01 juin 2020 au 30 juin 2020</p>
                        <h3>Description</h3>
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

export default Ecommerce;
