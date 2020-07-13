import React from 'react';
import './contact.css';

function Contact() {
    return (
        <div className="container contact">
            <h4 className="title center-align">Intéressé par mon profil ? &nbsp;Contactez moi.</h4>
            <h5 className="center-align">Email</h5>
            <h4 className="center-align"><a href="mailto:hao-nhien.nguyen@epitech.eu">hao-nhien.nguyen@epitech.eu</a></h4>
            <h5 className="center-align">LinkedIn</h5>
            <h4 className="center-align"><a href="https://www.linkedin.com/in/haonhien-nguyen" target="_blank" rel="noopener noreferrer">linkedin.com/in/haonhien-nguyen</a></h4>
        </div>
    )
}

export default Contact;