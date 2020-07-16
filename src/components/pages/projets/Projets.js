import React, { useEffect, useRef } from 'react';
import Swiper, { Pagination, Keyboard, Navigation } from 'swiper';
import { useSpring, animated, config } from 'react-spring';

import 'swiper/swiper-bundle.css';
import './projets.css'

import Ecommerce from './cards/Ecommerce';
import MyIrc from './cards/MyIrc';
import Puissance4 from './cards/Puissance4';
import MySnapchat from './cards/MySnapchat';
import MyQuiz from './cards/MyQuiz'

function Projets(props) {
    const { pageAnchor } = props;
    const firstTime = useRef(true);

    // const [eCommerceHover, setECommerceHover] = useSpring(() => ({ transform: "scale(1)", config: config.default }));
    const [slideIn, setSlideIn] = useSpring(() => ({ right: "-100vw", opacity: 0, config: { tension: 90 } }));

    useEffect(() => {
        if(firstTime.current && pageAnchor.destination == "projets") {
            setSlideIn({right: "0vw", opacity: 1, delay: 100});
            firstTime.current = false;
        }
    }, [pageAnchor])


    useEffect(() => {
        Swiper.use([Pagination, Keyboard, Navigation]);
        var swiper = new Swiper('.swiper-container', {
            slidesPerView: 1,
            spaceBetween: 10,
            initialSlide: 1,
            keyboard: {
                enabled: true,
            },
            resistanceRatio: 0.7,
            threshold: 25,
            centeredSlides: true,
            navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
            breakpoints: {
                640: { slidesPerView: 2, spaceBetween: 30 },
                992: { slidesPerView: 2, spaceBetween: 40 },
                1250: { slidesPerView: 3, spaceBetween: 40 },
                1600: { slidesPerView: 4, spaceBetween: 60 },
            }
        });

    }, []);

    return (
        <>
            <div className="container info-projets">
                <div className="row">
                    <div className="col xl6 l9 m12">
                        <h4><span>Quelques projets</span></h4>
                        <p>Toujours en plein apprentissage, voici une selection de projets realisés au cours de mes 7 premiers mois au Samsung Campus.</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="swiper-container" >
                    <animated.div className="swiper-wrapper" style={slideIn}>
                        <div className="swiper-slide project-card ecommerce"
                        // onMouseEnter={() => setECommerceHover({ transform: "scale(1.05)" })}
                        // onMouseLeave={() => setECommerceHover({ transform: "scale(1)" })}
                        // style={eCommerceHover} 
                        >
                            <Ecommerce />
                        </div>
                        <div className="swiper-slide project-card">
                            <MyIrc />
                        </div>
                        <div className="swiper-slide project-card">
                            <MySnapchat />
                        </div>
                        <div className="swiper-slide project-card">
                            <MyQuiz />
                        </div>
                        <div className="swiper-slide project-card">
                            <Puissance4 />
                        </div>
                    </animated.div>

                    <div className="carousel-nav hide-on-med-and-down">
                        <div className="swiper-button-prev"></div>
                        <div className="swiper-button-next"></div>
                    </div>
                    {/* <div className="swiper-pagination"></div> */}
                </div>
            </div>
        </>
    )
}

export default Projets;
