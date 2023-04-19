import React from "react";

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


 // owl carousel settings
const options = {
    loop:false,
    items:4,
    margin:0,
    autoplay:true,
    dots:false,
    smartSpeed:850,
    nav:false,
    responsive: {
        0: {
            items: 1.3
        },
        600: {
            items: 2
        },
        1000: {
            items: 4
        },
        
       
       
    }

};

const Oheebca = () => {
    return(

        <OwlCarousel className= " owl-carousel owl-theme" {...options}>

                                         
         <div className="bg-[#485c3f] px-10 py-20 ">

            <div className="flex flex-col text-center items-center">

                <svg width="118" height="118" viewBox="0 0 118 118" fill="none" xmlns="http://www.w3.org/2000/svg" className="pb-5">
    <path d="M58.3095 113.635C58.2836 113.632 58.2677 113.628 58.2591 113.625L58.2404 113.606L58.1981 113.581C36.1832 100.372 25.3201 86.4435 20.2049 77.0655C16.3141 69.8915 14.2447 61.6188 14.2447 52.9759V4.90406C14.2447 4.62706 14.3353 4.42731 14.4648 4.29782C14.5943 4.16832 14.7941 4.07773 15.071 4.07773H102.14C102.417 4.07773 102.617 4.16832 102.746 4.29782C102.876 4.42731 102.966 4.62706 102.966 4.90406V52.9759C102.966 61.6188 100.897 69.8915 97.0061 77.0655C91.8904 86.4443 81.15 100.372 59.0151 113.457L58.9136 113.517L58.8609 113.623C58.8597 113.625 58.8586 113.627 58.8578 113.628C58.8557 113.629 58.8526 113.63 58.8482 113.631C58.8318 113.636 58.8052 113.641 58.7618 113.644C58.7175 113.647 58.6692 113.647 58.6055 113.647C58.4755 113.647 58.3832 113.646 58.3095 113.635ZM16.2974 5.73038H15.8974V6.13038V52.9759C15.8974 61.2531 17.8735 69.4154 21.7121 76.2262C26.7736 85.361 37.1238 98.9017 58.3994 111.692L58.6055 111.816L58.8116 111.692C80.0849 98.9031 90.5598 85.3627 95.5006 76.2232C99.3368 69.2926 101.314 61.2546 101.314 52.9759V6.13038V5.73038H100.914H16.2974Z" fill="#F5F4F0" stroke="#44503F" strokeWidth="0.8"/>
    </svg>

    <h1 className=" text-white text-2xl italic pb-2">Preventing</h1>
    <p className=" text-white">Through our design philosophy, sourcing and local production we are able to limit our impact even before the impact is created.</p>
            </div>
         </div>

         <div className="bg-[#c68d46] px-10 py-20 ">

                <div className="flex flex-col text-center items-center">

                <svg width="118" height="118" viewBox="0 0 118 118" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.8004 59.4H103.6C103.7 59.4 103.8 59.4 103.9 59.3C104 59.2 104 59.1 104 59C104 58.9 104 58.8 103.9 58.7C103.8 58.6 103.7 58.6 103.6 58.6H13.8004C13.7004 58.6 13.6004 58.6 13.5004 58.7C13.4004 58.8 13.4004 58.9 13.4004 59C13.4004 59.1 13.4004 59.2 13.5004 59.3C13.5004 59.3 13.6004 59.4 13.8004 59.4Z" fill="#F5F4F0"/>
                <path d="M13.4004 58.8C13.4004 58.9 13.4004 58.9 13.4004 59C13.4004 59.1 13.4004 59.1 13.4004 59.2C13.4004 59.3 13.5004 59.3 13.5004 59.3L30.2004 76L30.3004 76.1L30.7004 75.2L14.4004 59L14.8004 58.6L30.7004 42.7C30.8004 42.6 30.8004 42.5 30.8004 42.4C30.8004 42.3 30.8004 42.2 30.7004 42.1C30.6004 42 30.5004 42 30.4004 42C30.3004 42 30.2004 42 30.1004 42.1L13.4004 58.6C13.4004 58.7 13.4004 58.7 13.4004 58.8Z" fill="#F5F4F0"/>
                <path d="M86.7 76C86.8 76 86.9 76.1 86.9 76.1C87 76.1 87 76.1 87.1 76.1C87.2 76.1 87.2 76 87.2 76L103.9 59.3L104 59.2C104 59.1 104 59.1 104 59C104 58.9 104 58.9 104 58.8C104 58.7 103.9 58.7 103.9 58.7L87.3 42C87.2 41.9 87.1 41.9 87 41.9C86.9 41.9 86.8 41.9 86.7 42C86.6 42.1 86.6 42.2 86.6 42.3C86.6 42.4 86.6 42.5 86.7 42.6L103 58.9L102.6 59.4L86.6 75.3C86.5 75.4 86.5 75.4 86.5 75.5C86.5 75.6 86.5 75.7 86.5 75.8C86.6 75.9 86.6 76 86.7 76Z" fill="#F5F4F0"/>
                <path d="M109.3 8.5C109.3 8.4 109.2 8.2 109.2 8.1C109.1 8 109 8 108.8 8H8.5C8.4 8 8.2 8.1 8.1 8.1C8.1 8.2 8 8.4 8 8.5V108.8C8 108.9 8.1 109.1 8.1 109.2C8.2 109.3 8.3 109.3 8.5 109.3H108.8C108.9 109.3 109.1 109.2 109.2 109.2C109.3 109.1 109.3 109 109.3 108.8V8.5ZM108.3 108.3H9V9H108.3V108.3Z" fill="#F5F4F0"/>
                </svg>

                <h1 className=" text-white text-2xl italic pb-2">Measuring</h1>
                <p className=" text-white">We measure the environmental footprint of our products from cradle to consumer, meaning from raw material extraction to the moment when products arrive at the customers.</p>
            </div>

 
         </div>

         <div className="bg-[#a69b87] px-10 py-20 ">

         <div className="flex flex-col text-center items-center">
         <svg width="118" height="118" viewBox="0 0 118 118" fill="none" xmlns="http://www.w3.org/2000/svg">
         <circle cx="58.7379" cy="59.1329" r="58.2242" stroke="#E2E0D4"/>
         <line x1="59.2383" y1="0.615723" x2="59.2383" y2="117.857" stroke="#E2E0D4"/>
         </svg>

         <h1 className=" text-white text-2xl italic pb-2">Offsetting</h1>
         <p className=" text-white">We take responsibility for the impact of our products by offsetting the carbon footprint in partnership with Fair Climate Fund. This way we balance emissions that cannot be eliminated.

         </p>
</div>



         </div>

         <div className="bg-[#934b3b] px-10 py-20 ">


         <div className="flex flex-col text-center items-center">

         <svg width="118" height="116" viewBox="0 0 118 116" fill="none" xmlns="http://www.w3.org/2000/svg">
         <line x1="29.7305" y1="0.805664" x2="29.7305" y2="30.7226" stroke="#F5F4F0" strokeLinecap="round"/>
         <line x1="29.8086" y1="30.4941" x2="0.509773" y2="30.4941" stroke="#F5F4F0" strokeLinecap="round"/>
         <line x1="87.7246" y1="114.781" x2="87.7246" y2="84.8638" stroke="#F5F4F0" strokeLinecap="round"/>
         <line x1="87.6465" y1="85.0923" x2="116.945" y2="85.0924" stroke="#F5F4F0" strokeLinecap="round"/>
         <line x1="116.945" y1="30.3354" x2="87.0283" y2="30.3354" stroke="#F5F4F0" strokeLinecap="round"/>
         <line x1="87.2559" y1="30.4136" x2="87.2559" y2="1.11481" stroke="#F5F4F0" strokeLinecap="round"/>
         <line x1="0.509766" y1="85.251" x2="30.4267" y2="85.251" stroke="#F5F4F0" strokeLinecap="round"/>
         <line x1="30.1992" y1="85.1728" x2="30.1992" y2="114.472" stroke="#F5F4F0" strokeLinecap="round"/>
         </svg>

         <h1 className=" text-white text-2xl italic pb-2">Reducing</h1>
         <p className=" text-white">We use lessons learned from our impact to create an effective strategy to reduce our impact.</p>
</div>

         </div>


        </OwlCarousel>
       
    );
}

export default Oheebca;