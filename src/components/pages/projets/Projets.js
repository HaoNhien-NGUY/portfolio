import React, { useEffect } from 'react';
import Swiper, { Pagination, Keyboard, Navigation } from 'swiper';
import 'swiper/swiper-bundle.css';
import './projets.css'

import Ecommerce from './cards/Ecommerce';

function Projets() {

    useEffect(() => {
        Swiper.use([Pagination, Keyboard, Navigation]);
        var swiper = new Swiper('.swiper-container', {
            slidesPerView: 1,
            spaceBetween: 10,
            initialSlide: 1,
            keyboard: {
                enabled: true,
            },
            centeredSlides: true,
            navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
            breakpoints: {
                640: { slidesPerView: 2, spaceBetween: 10 },
                992: { slidesPerView: 2, spaceBetween: 30 },
                1200: { slidesPerView: 3, spaceBetween: 30 },
                1600: { slidesPerView: 4, spaceBetween: 60 },
            }
        });

    }, []);

    return (
        <div>
            <div className="container info-projets">
                <div className="row">
                    <div className="col l7 m12">
                        <h4><span>Quelques projets</span></h4>
                        <p className="">Toujours en plein apprentissage, voici une selection de projets realisee au cours de mes 7 premiers mois au Samsung Campus.</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="swiper-container">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide project-card z-depth-3">
                            <Ecommerce />
                        </div>
                        <div className="swiper-slide project-card z-depth-3">

                        </div>
                        <div className="swiper-slide project-card z-depth-3">

                        </div>
                        <div className="swiper-slide project-card z-depth-3">

                        </div>
                        <div className="swiper-slide project-card z-depth-3">

                        </div>
                    </div>


                    <div className="swiper-button-next"></div>
                    <div className="swiper-button-prev"></div>
                    {/* <div class="swiper-pagination"></div> */}
                </div>
            </div>
        </div>
    )
}

export default Projets;
