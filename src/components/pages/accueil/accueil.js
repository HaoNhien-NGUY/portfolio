import React from 'react';
import githubImg from '../../../assets/GitHub-Mark-64px.png';
import linkedInImg from './../../../assets/linkedInImg2.png';
import cvImg from './../../../assets/curriculum-vitae.png';
import cvPdf from './../../../assets/CV_HaoNhien-NGUYEN.pdf';
import './accueil.css';

function accueil() {
    return (
        <div className="container accueil">
            <div className="row" style={{paddingBottom: "1rem"}}>
                <div className="col s8 offset-s2 main-frame">
                    <h1 style={{marginBottom: "10px", marginTop: 0}}>NGUYEN<br></br> Hao-Nhien</h1>
                    <h3 style={{marginTop: 0, marginBottom: "2.5rem"}}>Développeur Web Full Stack.</h3>
                    <p className="flow-text bio">Blabla bla bla je suis etudiant au samsung campus en premiere annee. Blabla bla bla je suis etudiant au samsung campus en premiere annee. Blabla bla bla je suis etudiant au samsung campus en premiere annee.</p>
                    <div className="socials">
                        <a href="https://github.com/HaoNhien-NGUY" target="_blanc"><img src={githubImg}></img></a>
                        <a href="https://www.linkedin.com/in/haonhien-nguyen/" target="_blanc"><img src={linkedInImg}></img></a>
                        <a href={cvPdf} target="_blanc"><img src={cvImg}></img></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default accueil;
