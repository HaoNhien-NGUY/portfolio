import React, { useRef, useEffect } from 'react';
import './navigation.css';

function Navigation(props) {
    const navWrapper = useRef();
    const navItems = useRef();

    function toggle(){
        navWrapper.current.classList.toggle('navbar-small');
        navItems.current.classList.toggle('navbar-small');
    }

    useEffect(() => {
        
        if(props.inView) {
            toggle();
        } else {
            toggle();
        }
    }, [props.inView])

    return (
        <>
            <div className="navbar-wrapper" ref={navWrapper}>
                <div className="nav-items" ref={navItems}>
                    <ul>
                        <li>HOME</li>
                        <li onClick={props.scrolldiv}>PROJECTS</li>
                        <li>CONTACT</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navigation;
