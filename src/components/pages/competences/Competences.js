import React from 'react';
import './competences.css';

function Competences() {
    return (
        <div className="container competences">
            <h3>Formation</h3>
            <div className="row cards z-depth-1">
                <div className="col l6 m12 formation" style={{ paddingRight: "25px" }}>
                    <p style={{ fontSize: "1.3rem", color: "#333" }}><b>Samsung Campus - EPITECH</b> &nbsp;&nbsp;|&nbsp;&nbsp; 2019 - 2021<br></br>Intégrateur - Développeur Web Full Stack</p>
                    <p>La pédagogie par projet m'a appris à travailler en autonomie et m'a donnée confiance en mes capacités d'apprentissages.</p>
                    <br></br>
                </div>
                <div className="col l6 m12 recherche">
                    <p>En recherche d'une <b>alternance</b> en contrat de professionnalisation.</p>
                    <p>Du<b> 2 novembre 2020</b> au <b>29 octobre 2021</b> au rythme de <br></br><b>3 semaines en entreprises / 1 semaine en formation.</b></p>
                </div>
            </div>
            <h3 className=""style={{marginTop: "3.8rem"}}>Compétences</h3>
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
        </div>
    )
}

export default Competences;
