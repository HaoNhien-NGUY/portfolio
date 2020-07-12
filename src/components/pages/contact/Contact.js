import React from 'react';
import './contact.css';

function Contact() {
    return (
        <div className="container contact">
            <h3 className="title center-align">Intéressé par mon profil ? &nbsp;Contactez moi.</h3>
            <h4 className="center-align">Email</h4>
            <h3 className="center-align"><a href="mailto:hao-nhien.nguyen@epitech.eu">hao-nhien.nguyen@epitech.eu</a></h3>
            <h4 className="center-align">Téléphone</h4>
            <h3 className="center-align">06 46 04 29 37</h3>
        </div>
    )
}

export default Contact;
