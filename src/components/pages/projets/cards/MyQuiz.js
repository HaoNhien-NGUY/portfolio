import React, { useState } from 'react';
import './projects-cards.css';
import { useSpring, animated } from 'react-spring';

import myquizImg from '../../../../assets/projects-screenshots/myQuiz1.png';

function MyQuiz() {

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
                    <h5>HAQuiz</h5>
                    <h4>Site de quiz</h4>
                    <div className="container-img">
                        <div className="image-wrapper">
                            <img data-src={myquizImg} alt="haoquiz-screenshot"></img>
                        </div>
                    </div>
                    <div className="technos row">
                        <div className="col s12" style={{ padding: 0 }}>
                            <span>Symfony5</span><span>MySQL</span><span>Twig</span>
                        </div>
                    </div>
                    <p>Site de Quiz avec possibilité de créer son propre quiz et de jouer aux quiz d'autres utilisateurs.</p>
                    <div className="links-projects">
                        <div>
                            {/* <a href="" target="_blank" className="button external-link">Démo</a> */}
                            <a href="https://github.com/HaoNhien-NGUY/MVC_My_Quiz/tree/master/My_Quiz" target="_blank" rel="noopener noreferrer" className="button gitcode">{'<'} Code {'/>'}</a>
                        </div>
                        <div className="show-details" onClick={() => set(state => !state)} >Détails <i className="small material-icons">arrow_forward</i></div>
                    </div>
                </div>
            </animated.div>

            <animated.div className="c front z-depth-" style={{ opacity, transform: transform.interpolate(t => `${t} rotateY(180deg)`) }} >
                <div className="card-content">
                    <div className="card-description">
                        <p style={{ marginTop: 0, paddingTop: "1.5rem" }}>Réalisé du 20 avril 2020 au 03 mai 2020</p>
                        <h5>Site de quiz</h5>
                        <p>Première introduction à Symfony5, site réalisé entièrement en PHP en utilisant une base de donnée fournie.</p>
                        <p>Possibilité de répondre aux quiz en tant que membre ou en anonyme.<br></br>Les membres peuvent créer leurs propres quiz et ont accès à l'historique des quiz passés.</p>
                        <p>Compte admin permettant de créer / mettre à jour / supprimer un compte ou un quiz.</p>
                    </div>
                    <div className="links-projects">
                        <div className="show-front" onClick={() => set(state => !state)} ><i className="small material-icons">arrow_back</i> Retour</div>
                    </div>
                </div>
            </animated.div>
        </>
    )
}

export default MyQuiz;
