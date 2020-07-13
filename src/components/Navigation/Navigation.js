import React, { useRef, useEffect, useState } from 'react';
import { useSpring, animated, config } from 'react-spring';

import './navigation.css';
import linkedInImg from '../../assets/linkedInImg2.png';
import cvImg from '../../assets/curriculum-vitae.png';
import gitHubImg from '../../assets/GitHub-Mark-64px.png';
import cvPdf from '../../assets/CV_HaoNhien-NGUYEN.pdf';


function Navigation(props) {
    const { pageAnchor, inView } = props;
    const navWrapper = useRef();
    const navItems = useRef();
    const [activeLi, setActiveLi] = useState();

    const [socialAppear, setSocialAppear] = useSpring(() => ({ opacity: 0, right: "-200px", config: {...config.default} }));

    function toggle() {
        navWrapper.current.classList.toggle('navbar-small');
        navItems.current.classList.toggle('navbar-small');
    }

    useEffect(() => {
        if (inView) {
            toggle();
        } else {
            toggle();
        }
    }, [inView])

    useEffect(() => {
        setActiveLi(pageAnchor.destination);
        if (pageAnchor.origin === 'accueil' && pageAnchor.destination !== 'accueil')
            setSocialAppear({ opacity: 1, right: "0px" });
        if (pageAnchor.origin !== 'accueil' && pageAnchor.destination === 'accueil')
            setSocialAppear({ opacity: 0, right: "-200px" });
    }, [pageAnchor])

    return (
        <>
            <div className="navbar-wrapper hide-on-med-and-down" ref={navWrapper}>
                <div className="nav-items" ref={navItems}>
                    <ul>
                        <li>
                            <a href="#accueil" className={`noselect accueil ${activeLi === "accueil" ? "selected" : null}`} >Accueil</a>
                        </li>
                        <li>
                            <a href="#competences" className={`noselect competences ${activeLi === "competences" ? "selected" : null}`}>Compétences</a>
                        </li>
                        <li>
                            <a href="#projets" className={`noselect projets ${activeLi === "projets" ? "selected" : null}`} >Projets</a>
                        </li>
                        <li>
                            <a href="#contact" className={`noselect contact ${activeLi === "contact" ? "selected" : null}`} >Contact</a>
                        </li>
                    </ul>
                </div>
                <div className="nav-socials noselect">
                    <animated.div className="imgs" style={socialAppear}>
                        <a href="https://github.com/HaoNhien-NGUY"><img src={gitHubImg}></img></a>
                        <a href="https://www.linkedin.com/in/haonhien-nguyen/" target="_blanc" rel="noopener noreferrer"><img src={linkedInImg}></img></a>
                        <a href={cvPdf} target="_blanc" rel="noopener noreferrer"><img src={cvImg}></img></a>
                    </animated.div>
                </div>
            </div>
        </>
    )
}

export default Navigation;
