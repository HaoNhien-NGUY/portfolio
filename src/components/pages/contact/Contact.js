import React, { useEffect, useRef } from 'react';
import { useSpring, animated, config } from 'react-spring';

import './contact.css';

const from = { opacity: 0, top: "35px", transform: "scale(0.95)" };
const to = { opacity: 1, top: "0px", transform: "scale(1)" }

function Contact(props) {
    const { pageAnchor } = props;
    const firstTime = useRef(true);

    const [titleProps, setTitleProps] = useSpring(() => ({ ...from, config: config.slow }));
    const [mailProps, setMailProps] = useSpring(() => ({ ...from, config: config.slow }));
    const [linkedinProps, setLinkedinProps] = useSpring(() => ({ ...from, config: config.slow }));

    useEffect(() => {
        if(firstTime.current && pageAnchor.destination == "contact") {
            setTitleProps({...to, delay: 400});
            setMailProps({...to, delay: 1400});
            setLinkedinProps({...to, delay: 1800});
            firstTime.current = false;
        }
    }, [pageAnchor])

    return (
        <div className="container contact">
            <animated.h4 className="title center-align" style={titleProps}>Intéressé par mon profil ? &nbsp;Contactez moi.</animated.h4>
            <animated.h5 className="center-align" style={mailProps}>Email</animated.h5>
            <animated.h4 className="center-align" style={mailProps}><a href="mailto:hao-nhien.nguyen@epitech.eu">hao-nhien.nguyen@epitech.eu</a></animated.h4>
            <animated.h5 className="center-align" style={linkedinProps}>LinkedIn</animated.h5>
            <animated.h4 className="center-align" style={linkedinProps}><a href="https://www.linkedin.com/in/haonhien-nguyen" target="_blank" rel="noopener noreferrer">linkedin.com/in/haonhien-nguyen</a></animated.h4>
        </div>
    )
}

export default Contact;