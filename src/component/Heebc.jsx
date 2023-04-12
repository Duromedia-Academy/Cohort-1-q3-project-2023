import React from "react";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


 // owl carousel settings
const options = {
    loop:true,
    items:3,
    margin:0,
    autoplay:false,
    dots:true,
    autoPlayTimeout:8500,
    smartSpeed:450,
    nav:false,
    responsive: {
        0: {
            items: 1
        },
        
       
       
    }

};

const Heebc = () => {
    return(

        <OwlCarousel className= " owl-carousel owl-theme   " {...options}>

        
        
                       
        </OwlCarousel>
       
    );
}

export default Heebc;