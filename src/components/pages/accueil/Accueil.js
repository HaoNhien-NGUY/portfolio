import React, { useEffect, useRef, useState } from 'react';
import { useSpring, animated, config } from 'react-spring';

import githubImg from '../../../assets/GitHub-Mark-64px.png';
import linkedInImg from './../../../assets/linkedInImg2.png';
import cvImg from './../../../assets/curriculum-vitae.png';
import cvPdf from './../../../assets/CV_HaoNhien-NGUYEN.pdf';
import './accueil.css';

const toFrom = {
    to: { opacity: 1, top: "0px" },
    from: { opacity: 0, top: "30px" }
};
const conf = config.default;
const socialsConfig = {tension: 250, friction: 20};

function Accueil() {
    const titleName = useRef();
    const titleRole = useRef();

    const enterPageH1 = useSpring({ ...toFrom, config: conf, delay: 200 });
    const enterPageH3 = useSpring({ ...toFrom, config: conf, delay: 400 });
    const enterPageP = useSpring({ ...toFrom, config: conf, delay: 600 });
    const enterPageSocials = useSpring({ to: { opacity: 1, bottom: "-3.8rem" }, from: { opacity: 0, bottom: "-5.8rem" }, config: conf, delay: 600 });
    const [githubHover, setGithubHover] = useSpring(() => ({ top: "0px", config: socialsConfig } ));
    const [linkedInHover, setLinkedInHover] = useSpring(() => ({ top: "0px", config: socialsConfig }));
    const [cvHover, setCvHover] = useSpring(() => ({ top: "0px", width: "2.5rem", config: socialsConfig }));

    return (
        <div className="container accueil">
            <div className="row">
                <div className="col l8 m12 offset-l2 main-frame">
                    <animated.h1 className="position-relative" style={enterPageH1}>NGUYEN<br></br> Hao-Nhien</animated.h1>
                    <animated.h3 className="position-relative" style={enterPageH3}>Développeur Web Full Stack.</animated.h3>
                    <animated.p className="flow-text bio position-relative" style={enterPageP}>Blabla bla bla je suis etudiant au samsung campus en premiere annee. Blabla bla bla je suis etudiant au samsung campus en premiere annee. Blabla bla bla je suis etudiant au samsung campus en premiere annee.</animated.p>
                    <animated.div className="socials" style={enterPageSocials}>
                        <animated.a href="https://github.com/HaoNhien-NGUY" target="_blanc"
                            onMouseEnter={() => setGithubHover({ top: "-5px" })}
                            onMouseLeave={() => setGithubHover({ top: "0px" })}
                            style={githubHover}>
                            <img src={githubImg} alt="github logo"></img>
                        </animated.a>
                        <animated.a href="https://www.linkedin.com/in/haonhien-nguyen/" target="_blanc" 
                            onMouseEnter={() => setLinkedInHover({ top: "-5px" })}
                            onMouseLeave={() => setLinkedInHover({ top: "0px" })}
                            style={linkedInHover}>
                            <img src={linkedInImg} alt="linkedIn logo"></img>
                        </animated.a>
                        <animated.a href={cvPdf} target="_blanc" 
                            onMouseEnter={() => setCvHover({ top: "-5px",width: "6rem" })}
                            onMouseLeave={() => setCvHover({ top: "0px" })}
                            style={cvHover}>
                            <img src={cvImg} alt="cv logo"></img>
                        </animated.a>
                    </animated.div>
                </div>
            </div>
        </div>
    )
}

export default Accueil;
