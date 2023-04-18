import React from "react";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


 // owl carousel settings
const options = {
    loop:true,
    items:3,
    margin:0,
    autoplay:true,
    dots:false,
    autoPlayTimeout:8500,
    smartSpeed:950,
    nav:false,
    responsive: {
        0: {
            items: 1.5
        },
        768:{
            items:2.5
        },
        1024:{
            items:3
        },
        
       
       
    }

};

const Explore = () => {
    return(

        <OwlCarousel className= " owl-carousel owl-theme    " {...options}>
             <div className="border-l border-r border-[#a9aaaa] px-[15px]">
                <img className="h-[500px] w-[500px] px-[20px] " src={require('../assets/collimg/1e.jpeg')} alt="" />
            </div>
             <div className="px-[10px]">
                <img className="h-[500px] w-[500px] px-[20px] " src={require('../assets/collimg/1h.jpeg')} alt="" />
            </div>
             <div className="border-l border-[#a9aaaa] pl-[10px]">
                <img className="h-[500px] w-[500px] px-[20px] " src={require('../assets/collimg/1b.jpeg')} alt="" />
            </div>
        </OwlCarousel>
       
    );
}

export default Explore;