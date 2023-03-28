import React from "react";

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';



   //Owl Carousel Settings
const options = {
    loop: true,
    items: 3,
    margin: 0,
    autoplay: true,
    dots: true,
    autoplayTimeout: 8500,
    smartSpeed: 450,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 4
        }
    }
};

const Carousel1 = () => {
    return (



        <OwlCarousel className=" owl-carousel owl-theme border-b border-black" {...options} >

        

                <div className="flex gap-3">
                    <svg viewBox="0 0 26.34 43.4"  className=" w-20 h-20 sc-79bfc0d9-0 gQrtxx sc-f4cfc0ed-6 gcgfPx"><path d="M26.28.4a.8.8 0 0 0-.18-.23L26 .06.57 0 .31.07 0 .44v38.63l.28.37H2.4C1.45 40 .78 40.51.7 41.68a2.46 2.46 0 0 0 .3 1.44.89.89 0 0 0 .72.28 5.3 5.3 0 0 0 1.14-.19h.1c.33-.16 3.73-1.7 4-1.81a.76.76 0 0 0 .35-1 5.45 5.45 0 0 0-.31-.94l18.82.06h.11l.39-.27.02-38.74Zm-.94 38.12H1V1h24.34Z"></path> </svg>

                    <div className="">
                        <h1 className="font-[700] text-xl">CARDPROTECTOR</h1>
                        <p className="-mt-2 ">The original</p>
                        <p className="-mt-2">6 cards</p>
                    </div>
                </div>
                    <div className="flex gap-3 pl-2">
                        <svg viewBox="0 0 28.87 43.37"  className="w-20 h-20 sc-6e7127ad-0 exYpec sc-f4cfc0ed-6 gcgfPx"><path d="M20.72 19.93a1.87 1.87 0 1 0 1.87-1.81 1.85 1.85 0 0 0-1.87 1.81Zm1.87-.86a.87.87 0 1 1-.92.86.89.89 0 0 1 .92-.86Zm5.33-2.92V2.85A2.86 2.86 0 0 0 25 0H0v40.09h2.29a2.09 2.09 0 0 0-.77 1.57 2.44 2.44 0 0 0 .31 1.41.89.89 0 0 0 .72.27 4.85 4.85 0 0 0 1.05-.14l.18-.06c.35-.16 3.8-1.73 4.05-1.83a.75.75 0 0 0 .34-.94 2.87 2.87 0 0 0-.09-.28H25a2.86 2.86 0 0 0 2.85-2.85V23.71a.94.94 0 0 0 .95-.95V17.1a1 1 0 0 0-.88-.95Zm-1 21.09a1.91 1.91 0 0 1-1.9 1.9H1V1h24a1.9 1.9 0 0 1 1.9 1.9v13.3h-5.54a2.81 2.81 0 0 0-2.81 2.8v1.9a2.81 2.81 0 0 0 2.81 2.81h5.57Zm1-14.48h-6.56a1.86 1.86 0 0 1-1.86-1.86V19a1.86 1.86 0 0 1 1.86-1.86h6.56ZM4.1 3.12H2.15v-.76H4.1Zm3.12-.76H5.27v.76h2Zm3.12 0H8.39v.76h1.95Zm3.12 0h-2v.76h2Zm3.12 0h-1.95v.76h1.95Zm3.12 0h-1.95v.76h1.95ZM4.1 37H2.15v.76H4.1Zm3.12 0H5.27v.76h2Zm3.12 0H8.39v.76h1.95Zm3.12 0h-2v.76h2Zm3.12 0h-1.95v.76h1.95Zm3.12 0h-1.95v.76h1.95Zm5.6-27.66h-.76v1.72h.76Zm0-2.74h-.76v1.71h.76Zm0 22.3h-.76v1.75h.76Zm0 2.8h-.76v1.75h.76ZM22.54 3.14l.06-.74a13.21 13.21 0 0 0-1.72 0v.76Zm1.69.57.56-.52a2.14 2.14 0 0 0-1.31-.67l-.16.73a1.92 1.92 0 0 1 .91.46Zm.25.46a6.42 6.42 0 0 1 .06 1.4h.76A6.9 6.9 0 0 0 25.2 4Zm-.87 9.91-.07-.76-2.06.13.06.76Zm-3.3.29-.15-.74a5.75 5.75 0 0 0-2.19.85l.43.64a6.35 6.35 0 0 1 1.91-.75Zm-3.72 3.43a4.86 4.86 0 0 1 .88-1.86l-.59-.47a5 5 0 0 0-1 2.14Zm-.95 1.2a12.79 12.79 0 0 0 0 2.22l.74-.07a14.78 14.78 0 0 1 0-2.08Zm.22 3.54a5.69 5.69 0 0 0 1 2.13l.6-.45a6.6 6.6 0 0 1-.83-1.86ZM20 26.56l.17-.74a6.19 6.19 0 0 1-1.86-.82l-.43.61a5.58 5.58 0 0 0 2.12.95Zm3.44-.46s-1.62 0-2-.13l-.08.79 2.09.1Zm1.83 1.75V27a.74.74 0 0 0-.61-.74l-.23.74h.08v.83ZM22.6 37.7l-.06-.7h-1.66v.75c.59.01 1.72-.05 1.72-.05Zm.88-.13c.3 0 1.21-.43 1.3-.68l-.55-.51a2.12 2.12 0 0 1-.91.46Zm1-1.65.72.19a3.77 3.77 0 0 0 .1-.75v-.86h-.76a6.46 6.46 0 0 1-.06 1.42Zm.05-22.87-.09.07.37.67a1 1 0 0 0 .48-.93v-.78h-.75s.02.86-.01.97Z"></path></svg>

                    <div className="">
                        <h1 className="font-[700] text-xl">MINIWALLET</h1>
                        <p className="-mt-2">With Button</p>
                        <p className="-mt-2">12 cards</p>
                    </div>
                </div>
                    <div className="flex gap-3">
                        <svg viewBox="0 0 27.15 43.39"  className=" w-20 h-20 sc-eaf461f2-0 gReGQQ sc-f4cfc0ed-6 gcgfPx"><path d="M24.15 0H0v40.13h2a2.22 2.22 0 0 0-.66 1.52 2.46 2.46 0 0 0 .29 1.42.84.84 0 0 0 .71.29 4.9 4.9 0 0 0 1.09-.19h.11c.3-.16 3.52-1.73 3.77-1.85a.79.79 0 0 0 .34-.94l-.07-.24h16.57a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3Zm2 37.13a2 2 0 0 1-2 2H1v-1.36h1.71V37H1V3.16h1.71v-.8H1V1h23.15a2 2 0 0 1 2 2ZM8.74 2.36h2v.8h-2v-.8Zm4 34.61h2v.8h-2V37Zm4-34.61h2v.8h-2v-.8ZM4.72 37h2v.8h-2V37Zm10-33.81h-2v-.8h2v.8ZM8.74 37h2v.8h-2V37Zm14 .21.16.36a3 3 0 0 1-1.15.23h-1V37h1a2.32 2.32 0 0 0 .84-.16ZM4.72 2.36h2v.8h-2v-.8ZM16.77 37h2v.8h-2V37Zm7.62-24.26h.4v2.1H24v-2.1Zm0-4.2h.4v2.1H24V8.51Zm.17-4.3a3 3 0 0 1 .23 1.15v1H24v-1a2.14 2.14 0 0 0-.17-.84l.37-.15Zm-.17 12.71h.4V19H24v-2.1Zm-2.6-14.59a3 3 0 0 1 1.15.23l-.16.41-.15.37a2.14 2.14 0 0 0-.84-.17h-1v-.8Zm2.6 31.36h.4v1.05a2.91 2.91 0 0 1-.23 1.15l-.37-.15-.37-.16a2.1 2.1 0 0 0 .17-.84v-1.05Zm0-4.2h.4v2.1H24v-2.1Zm0-4.2h.4v2.1H24v-2.1Zm0-4.2h.4v2.1H24v-2.1Z"></path></svg>

                    <div className="">
                        <h1 className="font-[700] text-xl">SLIMWALLET</h1>
                        <p className="-mt-2">No button</p>
                        <p className="-mt-2">12 cards</p>
                    </div>
                    </div>
                    <div className="flex gap-3">
                        <svg viewBox="0 0 27.15 43.39"  className="w-20 h-20 sc-eaf461f2-0 gReGQQ sc-f4cfc0ed-6 gcgfPx"><path d="M24.15 0H0v40.13h2a2.22 2.22 0 0 0-.66 1.52 2.46 2.46 0 0 0 .29 1.42.84.84 0 0 0 .71.29 4.9 4.9 0 0 0 1.09-.19h.11c.3-.16 3.52-1.73 3.77-1.85a.79.79 0 0 0 .34-.94l-.07-.24h16.57a3 3 0 0 0 3-3V3a3 3 0 0 0-3-3Zm2 37.13a2 2 0 0 1-2 2H1v-1.36h1.71V37H1V3.16h1.71v-.8H1V1h23.15a2 2 0 0 1 2 2ZM8.74 2.36h2v.8h-2v-.8Zm4 34.61h2v.8h-2V37Zm4-34.61h2v.8h-2v-.8ZM4.72 37h2v.8h-2V37Zm10-33.81h-2v-.8h2v.8ZM8.74 37h2v.8h-2V37Zm14 .21.16.36a3 3 0 0 1-1.15.23h-1V37h1a2.32 2.32 0 0 0 .84-.16ZM4.72 2.36h2v.8h-2v-.8ZM16.77 37h2v.8h-2V37Zm7.62-24.26h.4v2.1H24v-2.1Zm0-4.2h.4v2.1H24V8.51Zm.17-4.3a3 3 0 0 1 .23 1.15v1H24v-1a2.14 2.14 0 0 0-.17-.84l.37-.15Zm-.17 12.71h.4V19H24v-2.1Zm-2.6-14.59a3 3 0 0 1 1.15.23l-.16.41-.15.37a2.14 2.14 0 0 0-.84-.17h-1v-.8Zm2.6 31.36h.4v1.05a2.91 2.91 0 0 1-.23 1.15l-.37-.15-.37-.16a2.1 2.1 0 0 0 .17-.84v-1.05Zm0-4.2h.4v2.1H24v-2.1Zm0-4.2h.4v2.1H24v-2.1Zm0-4.2h.4v2.1H24v-2.1Z"></path></svg>
                    <div className="">
                        <h1 className="font-[700] text-xl">TWINWALLET</h1>
                        <p className="-mt-2">Double wallet</p>
                        <p className="-mt-2">16 cards</p>
                    </div>
                    </div>
                    <div className="flex gap-3">
                        <svg viewBox="0 0 28.21 45.3"  className="w-20 h-20 sc-4978eb12-0 bGVOQj sc-f4cfc0ed-6 gcgfPx"><path d="M27.53 6.16h-1V1.62h1ZM13.42 19.5h-1v19.18h1ZM3.52 39h1V19.5h-1ZM11 19.5h-1v9H7v-9H6v10h5ZM28.21 18h-.68v23.38h-1V18H25.5v21.88a1.5 1.5 0 0 1-1.5 1.5H7.64l.2.69c.15.55.12 1-.23 1.17L4.75 45a2.4 2.4 0 0 1-1.33.34c-.7-.18-.74-.66-.77-1.61a2.79 2.79 0 0 1 1.29-2.31h-.72a1.5 1.5 0 0 1-1.5-1.5V18.35H0V6.85h1.72V1.5A1.5 1.5 0 0 1 3.22 0H24a1.5 1.5 0 0 1 1.5 1.5v5.72h2.71Zm-1-9.74H4.09V17h23.12ZM2.72 6.86H4v.36h20.5V1.5A.5.5 0 0 0 24 1H3.22a.5.5 0 0 0-.5.5ZM1 17.35h2V7.86H1Zm23.5.65H4v.39H2.72v21.49a.5.5 0 0 0 .5.5H24a.5.5 0 0 0 .5-.5ZM7 3.49h3V6h1V2.49H6V6h1Zm6.46-1h-1v3.69h1Zm-8.95 0h-1v3.69h1Z"></path> </svg>

                    <div className="">
                        <h1 className="font-[700] text-xl">BANDWALLET</h1>
                        <p className="-mt-2">With band</p>
                        <p className="-mt-2">12 cards</p>
                    </div>
                </div>
                    <div className="flex gap-3">
                        <svg viewBox="0 0 30.8 43.4"  className="w-20 h-20 sc-23147118-0 iswiMe sc-f4cfc0ed-6 gcgfPx"><path d="M30 5.36h-1V0h1ZM1.29 0h-1v24.1h1ZM30 10.71h-1V24.1h1ZM28.12 24.1H2.68V0h25.44Zm-1-23.1H3.68v22.1h23.44Zm-23 27.12h-1v5.36h1Zm8 0h-1v5.36h1Zm-5.35 0h-1v5.36h1Zm8 0h-1v5.36h1Zm5.36 0h-1v5.36h1Zm-10.71 0h-1v5.36h1Zm8 0h-1v5.36h1Zm5.35 0h-1v5.36h1Zm2.68 0h-1v5.36h1Zm2.68 0h-1v5.36h1Zm2.58-2.8V36H30v4.13h-1V36h-1.28v4H9.91c0 .16.08.31.1.42a1 1 0 0 1 0 .51.79.79 0 0 1-.27.38l-.1.06-.33.2-1 .58-1.52.92-.19-.3.19.3H6.6a4.68 4.68 0 0 1-.61.16 1.38 1.38 0 0 1-.41 0 .82.82 0 0 1-.4-.21l-.18.06a.59.59 0 0 1-.07-.14 1.77 1.77 0 0 1-.06-.17v-.36a6.12 6.12 0 0 1 0-.69 2.46 2.46 0 0 1 .42-1.35 3 3 0 0 1 .18-.37H3.08v-4H1.29v4.13h-1V36H0V25.32ZM5.57 42.69l-.16.11ZM26.72 36H4.08v3h22.64Zm3.08-9.71H1V35h28.8Z"></path> </svg>
                    <div className="">
                        <h1 className="font-[700] text-xl">CARDSLIDE</h1>
                        <p className="-mt-2">Withhardcover</p>
                        <p className="-mt-2">8 cards</p>
                    </div>
                </div>
                    <div className="flex gap-3">
                        <svg viewBox="0 0 27.58 42.89"  className="w-20 h-20 sc-3a90f397-0 jWtMkV sc-f4cfc0ed-6 gcgfPx"><path d="M1.31 42.89H.88v-.05H.67L.72 42v-.13a1.44 1.44 0 0 1 .51-1.05 6.27 6.27 0 0 1 1-.62l.27-.2-1.71-.1-.11-.1a.68.68 0 0 1-.13-.18l-.05-.21V.46L.75.11 1.08 0h25.43a.62.62 0 0 1 .49.18 1.18 1.18 0 0 1 .21.26l.07.11v39l-.17.26a.57.57 0 0 1-.16.13l-.25.06H6.56l.05.08c0 .1.09.17.13.26L7 41l-2.38.91-1.42.54-.52.19-.39.1a6 6 0 0 1-.7.12 1.84 1.84 0 0 1-.28.03Zm1.7-2-.33.11a5.37 5.37 0 0 0-.79.52.36.36 0 0 0-.17.3l.4-.08.21-.05.55-.2L4.3 41l1.33-.52-.75-.74ZM4.13 39h22.1V1H1.5v38Z"></path><path d="M18.46 15.09v-.28H9.12v.28H0v9.8h9.12v.28h9.34v-.28h9.12v-9.8ZM1.92 23.62h-.64v-7.26h.64Zm1.93 0h-.64v-7.26h.64Zm1.92 0h-.64v-7.26h.64Zm1.93 0h-.64v-7.26h.64Zm10.76 1H9.12v-9.25h9.34Zm2.14-1H20v-7.26h.64Zm1.92 0h-.64v-7.26h.64Zm1.92 0h-.64v-7.26h.64Zm1.93 0h-.64v-7.26h.64Z"></path></svg>

                    <div className="">
                        <h1 className="font-[700] text-xl">MONEYBAND</h1>
                        <p className="-mt-2">Attach things</p>
                    </div>
                    </div>
            
    
        </OwlCarousel>

       



    );
}
 
export default Carousel1;