import React from "react";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';



// owl carousel setting

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

        const Abdulcar = () => {
            return (
                <OwlCarousel className="owl-carousel owl-theme" {...options}>

               

                    <div className="grid grid-cols-2 border border-t-black border-black border-r-0 border-l-0 md:flex lg:flex-row">
                    <div className="p-4"><video controls src={require('../assets/video/home-2.mp4')}></video></div>
                    <div className='pl-1 pt-[100px]'>
                        <p>10 colors</p>
                        <p>CARDPROTECTOR</p>
                        <p>4/6 cards</p>
                    </div>
                    </div>
                    <div className="grid grid-cols-2 border border-b-black border-black border-r-0 border-l-0">
                    <div className="p-4"><video src={require('../assets/video/home-2.mp4')}></video></div>
                    <div className='pl-1 mt-36'>
                        <p></p>
                        <p>CARDPROTECTOR</p>
                        <p>4/6 cards</p>
                    </div>
                    </div>
                    <div className="grid grid-cols-2 border border-b-black border-black border-r-0 border-l-0">
                    <div className="p-4"><video src={require('../assets/video/webbandwallet.mp4')}></video></div>
                    <div className='pl-1 mt-36'>
                        <p></p>
                        <p>CARDPROTECTOR</p>
                        <p>4/6 cards</p>
                    </div>
                    </div>
                    <div className="grid grid-cols-2 border border-b-black border-black border-r-0 border-l-0">
                    <div className="p-4"><video src={require('../assets/video/home-2.mp4')}></video></div>
                    <div className='pl-1 mt-36'>
                        <p></p>
                        <p>CARDPROTECTOR</p>
                        <p>4/6 cards</p>
                    </div>
                    </div>
                    <div className="grid grid-cols-2 border border-b-black border-black border-r-0 border-l-0">
                    <div className="p-4"><video src={require('../assets/video/home-2.mp4')}></video></div>
                    <div className='pl-1 mt-36'>
                        <p>10 colors</p>
                        <p>CARDPROTECTOR</p>
                        <p>4/6 cards</p>
                    </div>
                    </div>
                    <div className="grid grid-cols-2 border border-b-black border-black border-r-0 border-l-0">
                    <div className="p-4"><video src={require('../assets/video/webbandwallet.mp4')}></video></div>
                    <div className='pl-1 mt-36'>
                        <p></p>
                        <p>CARDPROTECTOR</p>
                        <p>4/6 cards</p>
                    </div>
                    </div>
                    <div className="grid grid-cols-2 border border-black border-b-2 border-r-0 border-l-0">
                    <div className="p-4"><video src={require('../assets/video/webmoneyband.mp4')}></video></div>
                    <div className='pl-1 mt-36'>
                        <p>10 colors</p>
                        <p>CARDPROTECTOR</p>
                        <p>4/6 cards</p>
                    </div>
                    </div>
                    <div className="grid grid-cols-2 border  border-black border-b-2 border-r-0 border-l-0">
                    <div className="p-4"><video src={require('../assets/video/home-2.mp4')}></video></div>
                    <div className='pl-1 mt-36'>
                        <p>10 colors</p>
                        <p>CARDPROTECTOR</p>
                        <p>4/6 cards</p>
                    </div>
                    </div>
            
                </OwlCarousel>
            );
        }
         
        export default Abdulcar;