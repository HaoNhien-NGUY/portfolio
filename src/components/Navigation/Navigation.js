import React, { useRef, useEffect, useState } from 'react';
import './navigation.css';

function Navigation(props) {
    const { pageAnchor, inView } = props;
    const navWrapper = useRef();
    const navItems = useRef();
    const [activeLi, setActiveLi] = useState();

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
                            <a href="#projets" className={`noselect projets ${activeLi === "projets" ? "selected" : null}`} >Projets</a>
                        </li>
                        <li>
                            <a href="#competences" className={`noselect competences ${activeLi === "competences" ? "selected" : null}`}>Compétences</a>
                        </li>
                        <li>
                            <a href="#contact" className={`noselect contact ${activeLi === "contact" ? "selected" : null}`} >Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navigation;
