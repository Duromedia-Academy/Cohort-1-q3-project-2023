import React from "react";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


 // owl carousel settings
const options = {
    loop:false,
    items:3,
    margin:0,
    autoplay:true,
    dots:false,
    smartSpeed:150,
    nav:false,
    responsive: {
        0: {
            items: 2
        },
        700: {
            items: 3
        },
        
       
       
    }

};

const Heebc = () => {
    return(

        <OwlCarousel className= " owl-carousel owl-theme" {...options}>

            <div className="">
            <div className="w-[210px] h-[320px]">
               <img className=" object-cover h-[320px]" src={require('../assets/careimg/man.webp')} alt="" />
               <h1 className="font-bold pr-20 leading-[1] pt-1">THE INDUSTRIAL EVOLUTION</h1>
               <p className=" leading-[1] pt-3 text-md">A shift from Industrial Revolution to the Industrial Evolution</p>
            </div>
            </div>

            <div className="ml-2 pl-2 border-l border-black">
            <div className="w-[210px] h-full">
             
               <img className=" object-cover h-[320px]" src={require('../assets/careimg/woman.webp')} />
               <div className="">
               <h1 className="font-bold pr-10 leading-[1] pt-1">MADE IN HOLLAND</h1>
               <p className=" leading-[1] pt-3 text-md">Made in Holland with great care for quality, people and the environment. Ethically made. Designed to last</p>
               </div>
            </div>
            </div>

            <div className=" ml-2 pl-2 border-l border-black">
            <div className="w-[210px] ">
               <img className="object-cover h-[320px]" src={require('../assets/careimg/pen.webp')} alt="" />
               <div className="">
               <h1 className="font-bold leading-[1] pt-1">THE POWER OF SMALL</h1>
               <p className=" leading-[1] pt-3 text-md">Our patented mechanism, designed by Secrid's co-founder, inspired by his father.</p>
               </div>
               </div>
            </div>
                       
        </OwlCarousel>
       
    );
}

export default Heebc;