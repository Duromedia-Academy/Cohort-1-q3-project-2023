import React from "react";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';



// owl carousel setting

const options = {
    loop:true,
    items:7,
    margin:0,
    autoplay:true,
    autoPlayTimeout:8500,
    smartspeed:450,
    nav:true,
    dots:false,
    responsive:{
        0:{
            items:7
        },
        768:{
            items:7
        }
    }
};

        const Carousel4 = () => {
            return (
                <OwlCarousel className="owl-carousel owl-theme" {...options}>


                </OwlCarousel>
            );
        }
         
        export default Carousel4;