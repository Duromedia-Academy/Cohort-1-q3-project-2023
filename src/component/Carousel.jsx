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

const Carousel = () => {
    return(



        <OwlCarousel className="owl-carousel owl-theme " {...options} >

<div className="mt-[60px] mb-[60px] lg:max-w-full">
        <div className="flex justify-center  sm:w-[450px]">
            <div className="w-[200px] border-r-[1px] border-black p-[5px]">
                <div className="m-[10px] ">
                    <img className="w-[200px] h-[250px]" src={require ("../assets/anifimg/third.png")} alt="" />
                </div>
                <p className="font-bold mt-[10px] mb-[10px]"> ROUGHEN UP THE FELT PADS </p>
                <p>The red felt pads inside your cardprotector krrp your card in place.This felt pads may 
                    wear off after a few years of use, causing a looser grip on cards.You can temporarily fix this issue at home  
                    by gently rubbing the felt pads with a key to roughen them up again. The best long term solution is to replace them 
                    at a care and repair point </p>
            </div>
            <div className="w-[200px] border-r-[1px] border-black p-[5px]">
                <div className="m-[10px] ">
                <img className="w-[200px] h-[100px]" src={require ("../assets/anifimg/fourth.png")} alt="" />
                </div>
                <p className="font-bold mt-[10px] mb-[10px]">REGISTER YOUR WALLET</p>
                <p>Did you know that by registering your wallet,you can extend its two-year warranty by one year ?
                    Enter the unique code engraved inside the wallet <u>here</u>. With this registration, we can 
                    ehsure the authencity of your wallet and spot copycats.
                </p>
            </div>
            <div className="w-[200px] border-r-[1px] border-black p-[5px]">
                <div className="m-[10px] ">
                <img className="w-[200px] h-[250px]" src={require ("../assets/anifimg/fifyh.png")} alt="" />
                </div>
                <p className="font-bold mt-[10px] mb-[10px]">VINTAGE LEATHER</p>
                <p>If you see color difference in your vintage wallet, it's alright. Our vintage leather has natural chromatic variations that makes 
                    each wallet unique. However,if your vintage wallet needs to be cleaned,gently wipe it down with a damp cloth 
                </p>
            </div>
            <div className="w-[200px] border-r-[1px] border-black p-[5px]">
                <div className="m-[10px] ">
                <img className="w-[200px] h-[100px]" src={require ("../assets/anifimg/third.png")} alt="" />
                </div>
                <p className="font-bold mt-[10px] mb-[10px]">USE 4 TO 6 CARDS</p>
                <p>Did you know that your wallet functions best with four to six cards?
                     If you see credit caerds with embossed numbers,leave one card out of easier use. </p>
            </div>
            <div className="w-[200px] border-r-[1px] border-black p-[5px]">
                <div className="m-[10px] ">
                <img className="w-[200px] h-[200px]" src={require ("../assets/anifimg/fourth.png")} alt="" />
                </div>
                <p className="font-bold mt-[10px] mb-[10px]">FIX A LOOSE LEVER</p>
                <p>Your button is hanging loose,and your cards aren't coming out properly? No worries! In 2016,
                    we launched the salammmander lever, which can restore it's self.Press the ejector lever firmly back
                    into the cardprotector until you hear a strong click.Your cardprotector should now work properly again.   </p>
            </div>
            <div className="w-[200px] p-[5px]">
                <div className="m-[10px] ">
                <img className="w-[200px] h-[300px]" src={require ("../assets/anifimg/fifyh.png")} alt="" />
                </div>
                <p className="font-bold mt-[10px] mb-[10px]">VISIT A CARE & REPAIR POINT</p>
                <p>Secrid currently has more than 250 care & repair points you can visit to get your wallet repaired orrefurbished.
                    Use the Care & Repair locator above to find the nearest Care & Repair points.
                </p>
            </div>
        </div>
    </div>
        </OwlCarousel>
    );
}
export default Carousel;
