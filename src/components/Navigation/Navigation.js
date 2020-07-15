import React, { useRef, useEffect, useState } from 'react';
import { useSpring, animated, config } from 'react-spring';

import './navigation.css';
import linkedInImg from '../../assets/linkedInImg2.png';
import cvImg from '../../assets/curriculum-vitae.png';
import gitHubImg from '../../assets/GitHub-Mark-64px.png';
import cvPdf from '../../assets/CV_HaoNhien-NGUYEN.pdf';

const wrapperProps = { fontSize: "2.5rem", height: "8rem", padding: "2rem 0rem 2rem 0rem" }
const navItemsProps = { left: "50%", transform: "translateX(-50%)" };

function Navigation(props) {
    const { pageAnchor } = props;
    const navWrapper = useRef();
    const navItems = useRef();
    const [activeLi, setActiveLi] = useState();

    const [socialAppear, setSocialAppear] = useSpring(() => ({ opacity: 0, right: "-200px", config: { ...config.default } }));
    const [{fontSize, height, padding, left, transform, color, marginRight}, setSmallNav] = useSpring(() => ({
         ...wrapperProps, ...navItemsProps, color: "#555", marginRight:"90px", config: {friction: 28, tension:195}
        }));

    useEffect(() => {
        setActiveLi(pageAnchor.destination);
        if (pageAnchor.origin === 'accueil' && pageAnchor.destination !== 'accueil') {
            setSmallNav({ fontSize: "1.4rem", height: "3.5rem", padding: "0.5rem 0rem 2.5rem 0rem", left: "1.5%", transform: "translateX(0)", color: "#333", marginRight:"50px", delay: 100 });
            setSocialAppear({ opacity: 1, right: "0px", delay: 300 });
        }
        if (pageAnchor.origin !== 'accueil' && pageAnchor.destination === 'accueil') {
            setSmallNav({ ...wrapperProps, ...navItemsProps, color: "#555", marginRight:"90px", delay: 100 });   
            setSocialAppear({ opacity: 0, right: "-200px" });
        }
    }, [pageAnchor])

    return (
        <>
            <animated.div className="navbar-wrapper hide-on-med-and-down" ref={navWrapper} style={{fontSize, height, padding}}>
                <animated.div className="nav-items" ref={navItems} style={{left, transform}}>
                    <ul>
                        <animated.li style={{marginRight}}>
                            <animated.a href="#accueil" className={`noselect accueil ${activeLi === "accueil" ? "selected" : null}`} >Accueil</animated.a>
                        </animated.li>
                        <animated.li style={{marginRight}}>
                            <animated.a href="#competences" className={`noselect competences ${activeLi === "competences" ? "selected" : null}`}>Compétences</animated.a>
                        </animated.li>
                        <animated.li style={{marginRight}}>
                            <animated.a href="#projets" className={`noselect projets ${activeLi === "projets" ? "selected" : null}`} >Projets</animated.a>
                        </animated.li>
                        <li>
                            <animated.a href="#contact" className={`noselect contact ${activeLi === "contact" ? "selected" : null}`} >Contact</animated.a>
                        </li>
                    </ul>
                </animated.div>
                <div className="nav-socials noselect">
                    <animated.div className="imgs" style={socialAppear}>
                        <a href="https://github.com/HaoNhien-NGUY"><img src={gitHubImg}></img></a>
                        <a href="https://www.linkedin.com/in/haonhien-nguyen/" target="_blanc" rel="noopener noreferrer"><img src={linkedInImg}></img></a>
                        <a href={cvPdf} target="_blanc" rel="noopener noreferrer"><img src={cvImg}></img></a>
                    </animated.div>
                </div>
            </animated.div>
        </>
    )
}

export default Navigation;
