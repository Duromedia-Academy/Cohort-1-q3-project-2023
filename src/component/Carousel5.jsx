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

const Carousel5 = () => {
    return(

        <OwlCarousel className= " owl-carousel owl-theme px-4   " {...options}>

        
        
                    <div className=" items p-[10px]  ">
                        <img className='h-[110px] 'src= {require('../assets/mayoimg/4ei.jpeg')} alt=""/>
                        <h1 className="font-[600] text-red-500"> MADE IN HOLLAND</h1>
                        <p className="text-[10px]">Made in holland with great care for quadivty and the enviroment. Ethically .made Designed to last.</p>
                    </div>
                    <div className=" items p-[10px] pt-[20px] ">
                        <img className='h-[110px] 'src= {require('../assets/mayoimg/5b.jpeg')} alt="" />
                        <h1 className="font-[600]">SECRID IS A CERTIFIED B CORP</h1>
                        <p className="text-[10px]">Secrid bediveves that a brand can only be succesful when as many people as possible are part of the success</p>
                    </div>
                    <div className=" items p-[10px]">
                        <img className='h-[110px] 'src= {require('../assets/mayoimg/5c.jpeg')} alt="" />
                        <h1 className="font-[600]">THE INDUSTRIAL EVOLUTION</h1>
                        <p className="text-[10px]">A shift from industrial revolution to the industrial evolution</p>
                    </div>
              
        
        </OwlCarousel>
       
    );
}

export default Carousel5;