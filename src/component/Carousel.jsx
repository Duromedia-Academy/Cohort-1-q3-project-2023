import React from "react";

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';



// owl carousel settings
const options = {
    loop: true,
    items: 3,
    margin: 0,
    autoPlay:true,
    autoPlayTimeout: 8500,
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

              <div class="top flex p-[10px] border-t-[1px] border-b-[1px] border-black mt-[50px]">
            <div class="first w-[400px] h-[300px] p-[10px]">
                <div class="flex">
                    <div class="image">
                        <img class="w-[400px] h-[200px]" src={require ("../assets/olaimg/secrid.png")} alt="" />
                    </div>
                    <div class="f">
                        <p class="font-bold mb-[30px]">THE FIRST SECRID BRAND STORE</p>
                        <p> You'll find our secrid Brandstore at the meent 
                            nr. 2. Since the start of secrid , we have been dreaming
                            of having our own Brandstore
                        </p>
                    </div>
                </div> 
            </div>
            <div class="first w-[400px]     h-[300px]  p-[10px]">
                <div class="flex">
                    <div class="image">
                    <img class="w-[400px]  h-[200px]" src={require ("../assets/olaimg/corp.png")} alt="" />
                    </div>
                    <div class="f">
                        <p class="font-bold mb-[30px]">SECRID IS A CERTIFIED B CORP</p>
                        <p> While too many companies strive only to make as much profit as possible at all 
                            cost, B corporations primarily look at the consequencies for people, nature 
                            and the planet.  
                        </p>
                    </div>
                </div> 
            </div>
            <div class="first w-[400px]  h-[300px] p-[10px]">
                <div class="flex">
                    <div class="image">
                        <img class="w-[400px] h-[200px]" src={require ("../assets/olaimg/meet.png")} alt="" />
                    </div>
                    <div class="f">
                        <p class="font-bold mb-[30px]">MEET THE SECRID COMMUNITY</p>
                        <p> I'm always with my head in the clouds and super chaotic, because of this 
                            I always lost my cardprotector is the perfect gift to keep my cards 
                        safely together </p>
                    </div>
                </div> 
            </div>
            <div class="first w-[400px]  h-[300px] p-[10px]">
                <div class="flex">
                    <div class="image">
                        <img class="w-[400px] h-[200px]" src={require ("../assets/olaimg/head.png")} alt="" />
                    </div>
                    <div class="f">
                        <p class="font-bold  mb-[30px]">OUR HEADQUARTERS</p>
                        <p className="h-[100px]"> in 2009, three people started the Secrid adventure;
                            Marianne, Rene and Paul . Thirteen years later ,our craetive family consists 
                            of more than 100 colleagues and we keep growing steadily.
                        </p>
                    </div>
                </div> 
            </div>
        </div>
       
        
        <div class="flex justify-center  ">
            <div class="w-[200px] border-r-[1px] border-black p-[5px]">
                <div class="m-[10px] ">
                    <img class="w-[200px] h-[250px]" src={require ("../assets/olaimg/corp.png")} alt="" />
                </div>
                <p class="font-bold mt-[10px] mb-[10px]">SECRID IS A CERTIFIED B CORP</p>
                <p>A creative journey that changes the way we look at our daily essentials.</p>
            </div>
            <div class="w-[200px] border-r-[1px] border-black p-[5px]">
                <div class="m-[10px] ">
                <img class="w-[200px] h-[100px]" src={require ("../assets/olaimg/industrial.png")} alt="" />
                </div>
                <p class="font-bold mt-[10px] mb-[10px]">THE INDUSTRIAL EVOLUTION</p>
                <p> A shift from industrial Revolution to the industrial Evolution
                </p>
            </div>
            <div class="w-[200px] border-r-[1px] border-black p-[5px]">
                <div class="m-[10px] ">
                <img class="w-[200px] h-[250px]" src={require ("../assets/olaimg/head.png")} alt="" />
                </div>
                <p class="font-bold mt-[10px] mb-[10px]">OUR HEADQUARTERS</p>
                <p> Designed by an in-house design team,this project was 
                    the starting point for secrid in creating a physical identity  .
                </p>
            </div>
            <div class="w-[200px] border-r-[1px] border-black p-[5px]">
                <div class="m-[10px] ">
                <img class="w-[200px] h-[100px]" src={require ("../assets/olaimg/how.png")} alt="" />
                </div>
                <p class="font-bold mt-[10px] mb-[10px]">HOW IT ALL STARTED </p>
                <p>Secrid believes that a brand can onlyt be successful whwn as many people as possible 
                    are part of the sucess. </p>
            </div>
           
        </div>


        <div class="mt-[60px] mb-[60px]">
        <div class="flex justify-center  ">
            <div class="w-[200px] border-r-[1px] border-black p-[5px]">
                <div class="m-[10px] ">
                    <img class="w-[200px] h-[250px]" src={require ("../assets/olaimg/small.png")} alt="" />
                </div>
                <p class="font-bold mt-[10px] mb-[10px]">THE POWER OF SMALL </p>
                <p>Our pantented mechanism, designed by Secris co-founder ,inspired by his father </p>
            </div>
            <div class="w-[200px] border-r-[1px] border-black p-[5px]">
                <div class="m-[10px] ">
                <img class="w-[200px] h-[100px]" src={require ("../assets/olaimg/head.png")} alt="" />
                </div>
                <p class="font-bold mt-[10px] mb-[10px]">OUR HEADQUARTERS</p>
                <p>in 2009, three people started the Secrid adventure;
                    Marianne, Rene and Paul . Thirteen years later ,our craetive family consists 
                    of more than 100 colleagues and we keep growing steadily.
                </p>
            </div>
            <div class="w-[200px] border-r-[1px] border-black p-[5px]">
                <div class="m-[10px] ">
                <img class="w-[200px] h-[250px]" src={require ("../assets/olaimg/how.png")} alt="" />
                </div>
                <p class="font-bold mt-[10px] mb-[10px]">HOW IT ALL STARTED</p>
                <p>SEcrid is a family business and 100% owned by Van Geer Family.The company was founded by Rene Van
                    Geer and Marianne Van Sasse Van Ysselt 
                </p>
            </div>
            <div class="w-[200px] border-r-[1px] border-black p-[5px]">
                <div class="m-[10px] ">
                <img class="w-[200px] h-[100px]" src={require ("../assets/olaimg/meet.png")} alt="" />
                </div>
                <p class="font-bold mt-[10px] mb-[10px]">MEET THE SECRID COMMUNITY</p>
                <p> I'm always with my head in the clouds and super chaotic, because of this 
                    I always lost my cardprotector is the perfect gift to keep my cards 
                safely together </p>
            </div>
            <div class="w-[200px] border-r-[1px] border-black p-[5px]">
                <div class="m-[10px] ">
                <img class="w-[200px] h-[200px]" src={require ("../assets/olaimg/industrial.png")} alt="" />
                </div>
                <p class="font-bold mt-[10px] mb-[10px]">THE INDUSTRIAL EVOLUTION</p>
                <p> Instead of 'cheaper and worse',new products must be developed which are instricically 'better,more sustainable and more 
                    valuable' than products that came before.  </p>
            </div>
            <div class="w-[200px] border-r-[1px] border-black p-[5px]">
                <div class="m-[10px] ">
                <img class="w-[200px] h-[250px]" src={require ("../assets/olaimg/corp.png")} alt="" />
                </div>
                <p class="font-bold mt-[10px] mb-[10px]">SECRID IS A CERTIFIED B CORP</p>
                <p> While too many companies strive only to make as much profit as possible at all 
                    cost, B corporations primarily look at the consequencies for people, nature 
                    and the planet. </p>
            </div>
           
        </div>
        
    </div>

    <div class="flex justify-center">
            <div class="image border-r-[1px] p-[20px] border-white">
                <img class="w-[300px] h-[500px] " src={require ("../assets/olaimg/fifth-1 (1).png")} alt="" />
            </div>
            <div class="image border-r-[1px] p-[20px] border-white">
                <img class="w-[300px] h-[500px] " src={require ("../assets/olaimg/fifth-1 (2).png")} alt="" />
            </div>
            <div class="image p-[20px]">
                <img class="w-[300px] h-[500px] " src={require ("../assets/olaimg/fifth-1 (3).png")} alt="" />
            </div>
        </div>

        <div class="flex justify-center  ">
            <div class="w-[200px] border-r-[1px] border-black p-[5px]">
                <div class="m-[10px] ">
                    <img class="w-[200px] h-[250px]" src={require ("../assets/olaimg/community.png")} alt="" />
                </div>
                <p class="font-bold mt-[10px] mb-[10px]">MEET THE SECRID COMMUNITY</p>
                <p >The secrid community,their wallet and their stories.Became their member too.</p>
            </div>
            <div class="w-[200px] border-r-[1px] border-black p-[5px]">
                <div class="m-[10px] ">
                <img class="w-[200px] h-[100px]" src={require ("../assets/olaimg/made.png")} alt="" />
                </div>
                <p class="font-bold mt-[10px] mb-[10px]">MADE IN HOLLAND</p>
                <p> Made in holland with great care for quality, people and the environment .Ethically made Designed to last.
                </p>
            </div>
            <div class="w-[200px] border-r-[1px] border-black p-[5px]">
                <div class="m-[10px] ">
                <img class="w-[200px] h-[250px]" src={require ("../assets/olaimg/head.png")} alt="" />
                </div>
                <p class="font-bold mt-[10px] mb-[10px]">OUR HEADQUARTERS</p>
                <p>Designed by an in-house design team , this project was the starting point for Secrid in creating a 
                    phusical identity.
                </p>
            </div>
            <div class="w-[200px] border-r-[1px] border-black p-[5px]">
                <div class="m-[10px] ">
                <img class="w-[200px] h-[100px]" src={require ("../assets/olaimg/small.png")} alt="" />
                </div>
                <p class="font-bold mt-[10px] mb-[10px]">THE POWER OF SMALL </p>
                <p>Our patent mechanism designed by Secrid's co-founder,inspired by his father.  </p>
            </div>
           
        </div>

        </OwlCarousel>

  

    );
}
export default Carousel;