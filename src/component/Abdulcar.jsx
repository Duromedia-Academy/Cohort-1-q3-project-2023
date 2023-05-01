
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
            items:2
        },
        768:{
            items:5
        }
    }
};

        const Abdulcar = () => {
            return (
                <OwlCarousel className="owl-carousel owl-theme bg-bg-white " {...options}>

               

                  
                    <div className=" px-[10px] grid md-grid-cols-2 border-r border-black lg:px-[20px] ">
                    <div className="p-4"><video src={require('../assets/video/home-2.mp4')}></video></div>
                    <div className='pl-1 mt-36'>
                        <p>CARDPROTECTOR</p>
                        <p>4/6 cards</p>
                        <br />
                    </div>
                    </div>
                    <div className=" px-[10px] grid md-grid-cols-2 border-r border-black lg:px-[20px] ">
                    <div className="p-4"><video src={require('../assets/video/webbandwallet.mp4')}></video></div>
                    <div className='pl-1 mt-36'>
                        <p>CARDPROTECTOR</p>
                        <p>4/6 cards</p>
                        <br />
                    </div>
                    </div>
                    <div className=" px-[10px] grid md-grid-cols-2 border-r border-black lg:px-[20px] ">
                    <div className="p-4"><video src={require('../assets/video/home-2.mp4')}></video></div>
                    <div className='pl-1 mt-36'>
                        <p>CARDPROTECTOR</p>
                        <p>4/6 cards</p>
                        <br />
                    </div>
                    </div>
                    <div className=" px-[10px] grid md-grid-cols-2 border-r border-black lg:px-[20px] ">
                    <div className="p-4"><video src={require('../assets/video/home-2.mp4')}></video></div>
                    <div className='pl-1 mt-36'>
                        <p>10 colors</p>
                        <p>CARDPROTECTOR</p>
                        <p>4/6 cards</p>
                    </div>
                    </div>
                    <div className=" px-[10px] grid md-grid-cols-2 border-r border-black lg:px-[20px] r-0 border-l-0">
                    <div className="p-4"><video src={require('../assets/video/webbandwallet.mp4')}></video></div>
                    <div className='pl-1 mt-36'>
                        <p>CARDPROTECTOR</p>
                        <p>4/6 cards</p>
                        <br />
                    </div>
                    </div>
                    <div className=" px-[10px] grid md-grid-cols-2 border-r border-black lg:px-[20px] ">
                    <div className="p-4"><video src={require('../assets/video/webmoneyband.mp4')}></video></div>
                    <div className='pl-1 mt-36'>
                        <p>10 colors</p>
                        <p>CARDPROTECTOR</p>
                        <p>4/6 cards</p>
                    </div>
                    </div>
                    <div className=" px-[10px] grid md-grid-cols-2 border-r border-black lg:px-[20px] ">
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