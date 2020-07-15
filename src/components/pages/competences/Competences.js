import React, { useEffect, useRef } from 'react';
import { useSpring, animated, config } from 'react-spring';

import './competences.css';

const from = { opacity: 0, top: "45px" };
const to = { opacity: 1, top: "0px" };

function Competences(props) {

    const { pageAnchor } = props;
    const firstTime = useRef(true);

    const [firstProps, setFirstProps] = useSpring(() => ({ ...from, config: config.slow }));
    const [secondProps, setSecondProps] = useSpring(() => ({ ...from, config: config.slow }));

    useEffect(() => {
        if (firstTime.current && pageAnchor.destination == "competences") {
            setFirstProps({ ...to, delay: 400 });
            setSecondProps({ ...to, delay: 700 });
            firstTime.current = false;
        }
    }, [pageAnchor])

    return (
        <div className="container competences">
            <animated.div className="wrap" style={firstProps}>
                <h4>Formation</h4>
                <div className="row cards z-depth-1">
                    <div className="col l6 m12 formation" style={{ paddingRight: "25px" }}>
                        <p style={{ fontSize: "1.3rem", color: "#333" }}><b>Samsung Campus - EPITECH</b> &nbsp;&nbsp;|&nbsp;&nbsp; 2019 - 2021<br></br>Intégrateur - Développeur Web Full Stack</p>
                        <p>Travailler sur des projets ciblés m'a permis de développer de nouvelles compétences, et une capacité d'adaptation rapide.</p>
                        <br></br>
                    </div>
                    <div className="col l6 m12 recherche">
                        <p>En recherche d'une <b>alternance</b> en contrat de professionnalisation.</p>
                        <p>Du<b> 2 novembre 2020</b> au <b>29 octobre 2021</b> au rythme de <br></br><b>3 semaines en entreprises / 1 semaine en formation.</b></p>
                    </div>
                </div>
            </animated.div>
            <animated.div className="wrap" style={secondProps}>
                <h4 className="" style={{ marginTop: "3.8rem" }}>Compétences</h4>
                <div className="row  skills">
                    <div className="col m6 offset-l0 l2">
                        <h4>Front-End</h4>
                        <p>HTML5 / CSS3</p>
                        <p>React.js / Redux</p>
                        <p>jQuery</p>
                        <p>Bootstrap</p>
                    </div>
                    <div className="col m6 offset-l3 l2">
                        <h4>Back-End</h4>
                        <p>Node.js / Express.js</p>
                        <p>mongoose</p>
                        <p>Socket.IO</p>
                        <p>Symfony5</p>
                        <p>Laravel</p>
                        <p>MongoDB</p>
                        <p>MySQL</p>
                    </div>
                    <div className="col m6 offset-l3 l2">
                        <h4 className="">Autres</h4>
                        <p className="">Git</p>
                        <p className="">GitHub / GitLab</p>
                        <p className="">Méthodologie Agile</p>
                    </div>
                </div>
            </animated.div>
        </div>
    )
}

export default Competences;
