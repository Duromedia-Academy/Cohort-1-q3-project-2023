import React from "react";

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';



// owl carousel settings
const options = {
    loop: true,
    items: 3,
    margin: 0,
    autoplay:true,
    autoplayTimeout: 8500,
    smartSpeed: 450,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
};

const carousel = () => {
    return(



        <OwlCarousel className="owl-carousel owl-theme " {...options} >


        </OwlCarousel>
    )
}
