import React from "react";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


// owl carousel

const options = {
    loop: true,
    items: 7,
    margin: 0,
    autoplay: true,
    autoPlayTimeout: 8500,
    smartspeed: 450,
    nav: false,
    dots: false,
    responsive:{
        0:{
            items:0
        },
        768:{
            items:5
        }
    }
};

const Imamcar = () => {
    return (
        <OwlCarousel className="owl-carousel owl-theme" {...options}>
        
        <div>
           <img className="h-[] w-[10]" src={require ('../assets/img/bandwallet-tpu-header.webp')} alt="" />
        </div>
        <div>
            <h1 className='text-4xl mb-6'>THE POWDER <br /> COLLECTION</h1>
            <p className='mb-6'>we continue our journey <br /> towards a zero carbon footprint <br /> and a zero-waste supply chain.</p>
        </div>
        <div>
           <img className="h-[] w-[10]" src={require ('../assets/img/how-it-all-started-thumnail-small (1).webp')} alt="" />
        </div>
        <div>
            <h1 className='text-4xl mb-6'>HOW IT ALL <br /> STARTED</h1>
            <p className='mb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Quisquam sit voluptate veniam, vel ex quia provident vero laborum <br /> mollitia odio maiores eaque culpa aperiam?</p>
        </div>
        <div>
           <img className="h-[] w-[10]" src={require ('../assets/img/classics-thumbnail-small.webp')} alt="" />
        </div>
        <div>
        <h1 className='text-4xl mb-6'>HOW IT ALL STARTED</h1>
            <p className='mb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Quisquam sit voluptate veniam, vel ex quia provident vero laborum mollitia <br /> odio maiores eaque culpa aperiam?</p>
        </div>
        <div>
           <img className="h-[] w-[10]" src={require ('../assets/img/yard-thumbnail-small.webp')} alt="" />
        </div>
        <div>
        <h1 className='text-4xl mb-6'>HOW IT ALL STARTED</h1>
            <p className='mb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Quisquam sit voluptate veniam, vel ex quia provident vero laborum mollitia <br /> odio maiores eaque culpa aperiam?</p>
        </div>
    
        </OwlCarousel>
    );
}
 
export default Imamcar;
