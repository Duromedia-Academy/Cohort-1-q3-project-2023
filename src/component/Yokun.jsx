import React from "react";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


 // owl carousel settings
const options = {
    loop:false,
    items:4,
    margin:0,
    autoplay:false,
    dots:false,
    // autoPlayTimeout:8500,
    smartSpeed:450,
    nav:false,
    responsive: {
        0: {
            items: 2
        },
        768:{
            items:3
        },
        1024:{
            items:4
        },
        1440:{
            items:4
        },
        
       
       
    }

};

const Yokun = () => {
    return(

        <OwlCarousel className= " owl-carousel owl-theme    " {...options}>
        <div className="border-r border-black px-[10px]">
            <img className="h-[250px] md:h-[400px] md:w-[350px] w-[350px] lg:h-[100vh] lg:w-[100vw]   xl:px-[20px] " src={require('../assets/collimg/4k.jpeg')} alt="" />

            <h1 className="py-[5px] xl:px-[20px]"  >Original Silver</h1>
            <h1 className = "font-[600] pb-[5px] xl:px-[20px]"  >CARDPROTECTOR</h1>
            <h1 className="xl:px-[20px]">4/6 cards </h1>
            
          
        </div>

         <div className="px-[10px]">
            <img className="h-[250px] md:h-[400px] md:w-[350px] lg:h-[100vh] lg:w-[100vw] w-[350px] xl:px-[20px] " src={require('../assets/collimg/4l.jpeg')} alt="" />
            <h1 className="py-[5px] xl:px-[20px]"  >Original Black</h1>
            <h1 className = "font-[600] pb-[5px] xl:px-[20px]"  >CARDPROTECTOR</h1>
            <h1 className="xl:px-[20px]">4/6 cards </h1>
        </div>

         <div className="border-l border-black px-[10px]">
            <img className="h-[250px] md:h-[400px] md:w-[350px] lg:h-[100vh] lg:w-[100vw] w-[350px] xl:px-[20px] " src={require('../assets/collimg/4m.jpeg')} alt="" />
            <h1 className="py-[5px] xl:px-[20px]"  >Original Sand</h1>
            <h1 className = "font-[600] pb-[5px] xl:px-[20px]"  >CARDPROTECTOR</h1>
            <h1 className="xl:px-[20px]">4/6 cards </h1>
            
        </div>

        <div className=" border-l border-black  px-[10px]">
            <img className="h-[250px] md:h-[400px] md:w-[350px] lg:h-[100vh] lg:w-[100vw] w-[350px] xl:px-[20px] " src={require('../assets/collimg/4n.jpeg')} alt="" />
            <h1 className="py-[5px] xl:px-[20px]"  >Original Brown</h1>
            <h1 className = "font-[600] pb-[5px] xl:px-[20px]"  >CARDPROTECTOR</h1>
            <h1 className="xl:px-[20px]">4/6 cards<br /> 
                
            </h1>
        </div>

        
 </OwlCarousel>
       
    );
}

export default Yokun;