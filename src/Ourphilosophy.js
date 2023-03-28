// import React from 'react';
import Carousel5 from "./component/Carousel5" ;
// import Aboutblog from "./component/Aboutblog";
import { Link } from "react-router-dom";


const Ourphilosophy = () => {
    return (
        <div className="container max-w-[1200px] bg-bg-white">

            {/* header section */}

        <div className="js-show-on-scroll " >
            <div className="bg-orange-400 bg-cover  ">

            <div className="text-[50px] font-[600] bold p-[10px] md:text-[80px]   ">
            <div className=" ">
            <div className="heada leading-6 pt-[15px] md:pb-[10px] md:pt-[30px] md:h-24">
                <h1 className="">A BETTER </h1>
            </div>
            <div className="headb md:text-center md:flex md:justify-center md:pl-[170px] md:h-40 ">
                <h1 >WORLD</h1>
                <div className="hidden text-[20px] text-white  text-right font-noto italic md:block md:pt-[50px]">
            <p className="md:leading-3">A creative journey that</p>
            <p > changes the way we look</p>
            <p className="md:leading-3">at our daily essentials</p>

            </div>
            </div>
            </div>
            <div className="head2 ">
            <div className="leading-[3rem] sm: text-right md:flex md:space-x-6 md:h-20">
                <div className="headc ">
                    <h1>STARTS </h1>
                </div>

                <div className="headd ">
                    <h1>IN</h1>
                </div>
            </div>

            <div className=" md:justify-end md:flex md:space-x-6 leading-[3rem] md:leading-[5rem] md:pt-[20px]">
            <div className="heade ">
                    <h1 className="">YOUR</h1>
            </div>
                <div className="headf">
                    <h1>POCKET</h1>
            </div>
            </div>               
            </div>

            <div className="text-[20px] text-white  text-right font-noto italic md:hidden">
                <h6>A creative journey that</h6>
                <h6>changes the way we look</h6>
                <h6>at our daily essentials</h6>
            </div>
            </div>
            <div className="relative">
            <div className='pb-[200px]'>
                <img className=" w-[100%] p-3 md:w-[60%] " src = {require('./assets/mayoimg/1.sc.jfif')} alt="" />

            </div>

            <div className="p-1 bg-white max-w-[300px] absolute right-[10px] bottom-[150px] md:right-[150px] md:bottom-[500px]">
            <div className="border border-black  flex flex-col text-[12px] ">
                <div className="p-2 text-[12px] font-[600] text-center">
                    <p>DUTCH WALLET MAKERS SINCE 1995</p>
                </div>

                <div className="flex space-x-2 border-t border-black justify-evenly">
                    <div className="m-1 p-1  border-black ">
                    <p> Made in</p>
                    <h1 className='font-[600]'>HOLLAND</h1>
                    </div>
                    <div className="m-1 p-1 border-l border-black">
                        <p>Socially</p>
                        <h1 className='font-[600]'>RESPONSIBLE</h1>
                    </div>
                    <div className="border-l border-black m-1 p-1">
                        <p>Carbon</p>
                        <h1 className='font-[600]'>NEUTRAL</h1>
                    </div>

                </div>
            </div>
            </div>
            <div className="uppercase border rounded-full h-24 w-24 m-2 p-[6px] text-center 
            text-[15px] text-red-800 border-red-800
                rotate-[-18deg] absolute bottom-[55px] left-[150px]  md:left-[580px] md:bottom-[550px]" >
                <p className='text-[10px] pb-3'> since</p>
                <p className='leading-[.5rem]'>pocket</p>
                <p className='pb-2'>wear</p>
                <p className='text-[10px]'>1995</p>
            </div>    
            </div>
            </div>
        </div>

            {/* body section */}
            <div className="p-[15px] pt-[50px]">
                <div className="border-l-2 border-black p-[15px] grid grid-cols-1  lg:grid-cols-2 pb-[20px] mb-[40px]  ">
                    <div className=" text-[30px] leading-[2rem] italic font-[500] font-noto pr-[70px] pb-[20px] md:text-[50px] md:leading-[3rem] md:pr-[150px] lg:pr-[160px] lg:text-[50px] lg:leading-[3rem] ">
                        <p>"Since the start of the Secrid journey 27
                            years ago, we have continued to merge our backgrounds
                            in fashion and product design to create 
                            pocket-sized essentials, right here in the Netherlands." </p>
                    </div>
                    <div className="text-[10px] md:text-[20px]">
                        <h6 className='font-[600] italic pb-[10px]'>How it all started</h6>
                        <p>
                            
                        The Cardprotector launched in 2009, but our Secrid journey started over a decade earlier.
                        In the 1990s, we were running our design agency Spirid, when we noticed a shift in the content of our pockets as the first electronic payment systems were introduced in the Netherlands. In 1995,
                        as cash made way for cards, we created our first minimal wallet: the Secrid Bodycard. <br /> <br />

                        Design work for clients such as ING, Maxi Cosi and Quooker remained our focus professionally, but Secrid was always at the back of our minds
                        as we noticed our pockets undergoing a change again in the early 2000s. While smartphones put the world at our fingertips, almost all essential documents shrank to pocket size. We carried less, 
                        but what we carried was held dearer than ever before. <br /> <br />

                        The financial crisis hit Europe in 2008 and work from our clients dried up. With 25 years’ experience of working and living together, we felt this was the moment to follow our dream of building our own brand
                        with a vision to change the way people view their pockets. It was then that Secrid shifted from a side project to our main focus. <br /> <br />

                        Since the start of the Secrid journey 27 years ago, we have continued to merge our backgrounds in fashion and product design to create pocket-sized essentials, right here in the Netherlands. We are honoured to have
                        won awards and even more by being able to see the number of happy Secrid fans grow throughout the years. Today, our products can be found in over 8.500 selected stores worldwide while we work together with our three
                            children and more than 100 colleagues in a renovated industrial warehouse: a big family home serving as a creative centre for new pocket-sized products and services. We are proud to be B Corp since 2022, a milestone on 
                            the path we have been on since the start of Secrid in 2009.<br /> <br />

                            We have many more milestones. Check out the complete timeline for all our milestones. That starts in 1979 when the founders met.


                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-[10px] mb-[20px]">
                    <div className="lg:border-r-2 lg:border-black pr-[15px]">
                        <img className='w-full h-full' src={require('./assets/mayoimg/2ia.JPG')} alt="" />
                    </div>
                    <div className="  border-t border-black pt-[10px] lg:border-0">
                        <img className='w-full h-full  lg:pl-[5px] ' src={require('./assets/mayoimg/2ib.jpeg')} alt="" />
                    </div>
                </div>

            </div>
            <div className="bg-[#919E83]  md:mt-[10px] md:pt-[20px] lg:pt-[50px] lg:pr-[50px] lg:pl-[50px] lg:pb-[20px]">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:space-x-40 ">

                    <div className="lg:">
                        <div className="w-full h-full p-[20px] pb-[20px] md:w-[120%]  ">
                            <img src = {require('./assets/mayoimg/3i.jpeg')} alt="" />
                        </div>
                    </div>
                    

                    <div className="p-[10px] md:ml-[60px] ">
                        <div className="border-l border-black p-[5px] md:pr-[10px] md:border-0  lg:border-l lg:border-black  " >
                            <h1 className='font-[600] font-noto text-[20px] pb-2'> Secrid’s Mission</h1>
                            <p className='text-[12px] '>In 2009, Secrid introduced its first Cardprotector. In addition to being surprisingly handy,
                                it is also beautiful and magical. Behind this pocketwear from Secrid lies a new world. A practical and innovative product line which has received multiple international awards for its quality and innovative features. Millions of people around the world have been using them daily for years. <br /> <br />
                                But most importantly, we want people to discover how much influence their consumer behaviour has, because with every purchase, a piece of the world changes. We link this awareness to our products. With Secrid, you're carrying something good: an ethical product that is socially and sustainably produced, long-lasting and – should the need arise – repairable. As a consumer you have more power than you think, because with every purchase you make, you influence the industry. Our products are therefore not only practical, but also an inspiration to consume in a more conscious way. With an eye for the world and the people around us. <br /> <br />
                                Industrial design and fashion come together in our pocket-sized essentials. Made in the Netherlands,
                                with the greatest care for quality, people and the environment. Secrid prioritises personal, lasting relationships with our retailers, suppliers and customers. Our core principle is that the entire production and distribution chain is a way to make a positive impact on the industry and on people, through local production and assembly in sheltered workshops. Secrid maintains high standards of quality and sustainability, and by working locally with specialist suppliers we are able to raise those standards even higher each year. Because we are fully committed to the challenge of delivering the best quality.
                                </p>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div className="p-[15px]">
                <div className="p-5 flex justify-center mt-[40px] md:mt-[80px]  ">
                    <img src= {require('./assets/mayoimg/acom.jpeg')} alt="" />
                </div>
                <div className="py-[30px] md:flex md:space-x-4 md:px-[20px] lg:px-[150px] ">
                    <div className="">
                        <p>
                        Our company is driven by creativity, interest in people and a holistic approach to sustainability. This has led to our new vision of product development. We call it the Industrial Evolution. The general guideline is simple: every new product must be better than the previous ones. When all consumers start demanding
                        </p>
                    </div>
                    <div className="">
                        <p>
                        this of companies, the world will change for the better. With products that last longer and contribute to sustainability. Big changes happen in small steps, one after the other. Drops become rivers. Everyone contributes to this. A better world starts in your pocket.
                        </p>
                    </div>
                </div>
            </div>

            <div className="text-[10px] p-[20px] ">
                <div className="grid grid-cols-2 md:grid-cols-3 md:gap-[20px] lg:grid-cols-5 ">
                    <div className="border-r border-black pr-[20px]  lg:grid lg:grid-cols-1 lg:content-center ">
                        <div className="py-[10px] lg:grid lg:content-center">
                            <img src= {require('./assets/mayoimg/4a.jpeg')} alt="" />
                            <h6> Anouk Moerman</h6>
                            <p>Photographer</p>
                        </div>
                        <div className="py-[10px] lg:grid lg:content-center">
                           <img src= {require('./assets/mayoimg/4b.jpeg')} alt="" />
                           <h6> Made in Holland employee</h6>
                            <p>Assembly</p>
                        </div>
                        <div className="py-[10px] lg:hidden">
                           <img src= {require('./assets/mayoimg/4c.jpeg')} alt="" />
                           <h6> Reene & Marienne</h6>
                            <p>Founders</p>
                        </div>
                        <div className="md:hidden py-[10px]">
                            <img src= {require('./assets/mayoimg/4d.jpeg')} alt="" />
                            <h6> Fan</h6>
                            <p>Secrid Community</p>
                        </div>
                        
                    </div>

                    <div className="hidden lg:block">

                    <div className="py-[10px]">
                           <img src= {require('./assets/mayoimg/4c.jpeg')} alt="" />
                           <h6> Reene & Marienne</h6>
                            <p>Founders</p>
                        </div>
                        <div className="py-[10px]">
                            <img src= {require('./assets/mayoimg/4d.jpeg')} alt="" />
                            <h6> Fan</h6>
                            <p>Secrid Community</p>
                        </div>
                        <div className="py-[10px]">
                        <img src= {require('./assets/mayoimg/4e.jpeg')} alt="" />
                            <h6> Ria, Made in Holland</h6>
                            <p> Assembly</p>
                            
                        </div>

                    </div>
                    <div className="pl-[20px] md:grid md:content-center md:pl-0 lg:border-l lg:border-black lg:pl-4 lg:grid-cols-1 ">
                        <div className="py-[20px] text-center text-[30px] font-[600] leading-[2rem] text-black md:text-[40px] md:leading-[3rem]  ">
                            <h1> WE</h1>
                            <h1>CARE</h1>
                            <h1>ABOUT</h1>
                            <h1>OUR</h1>
                            <h1>PEOPLE</h1>
                            
                        </div>
                        <div className="md:hidden py-[10px]">
                          <img src= {require('./assets/mayoimg/4e.jpeg')} alt="" />
                            <h6> Ria, Made in Holland</h6>
                            <p> Assembly</p>

                        </div>
                        <div className="md:hidden py-[10px] lg:block">
                             <img src= {require('./assets/mayoimg/4f.jpeg')} alt="" />
                            <h6> Wiktoria Braniewicz</h6>
                            <p> Secrid Community</p>

                        </div>
                        <div className="hidden md:block py-[10px] lg:hidden">
                            <img src= {require('./assets/mayoimg/4d.jpeg')} alt="" />
                            <h6> Fan</h6>
                            <p>Secrid Community</p>
                        </div>
                        <div className="md:hidden py-[10px]">
                              <img src= {require('./assets/mayoimg/4g.jpeg')} alt="" />
                            <h6> Danielle & Yeelen</h6>
                            <p> Collection</p>
                        </div>

                    </div>
                    <div className="hidden md:block  md:border-l md:border-black md:ml-5 lg:ml-0 ">
                        <div className="md:pl-[20px]">
                        <div className="py-[10px] lg:hidden ">
                            <img src= {require('./assets/mayoimg/4e.jpeg')} alt="" />
                            <h6> Ria, Made in Holland</h6>
                            <p> Assembly</p>
                        </div>
                        <div className="py-[10px] lg:hidden">
                            <img src= {require('./assets/mayoimg/4f.jpeg')} alt="" />
                            <h6> Wiktoria Braniewicz</h6>
                            <p> Secrid Community</p>
                        </div>
                        <div className="py-[10px]">
                            <img src= {require('./assets/mayoimg/4g.jpeg')} alt="" />
                            <h6> Danielle & Yeelen</h6>
                            <p> Collection</p>
                        </div>
                        <div className="py-[10px] md:hidden lg:block" >
                            <img src= {require('./assets/mayoimg/4h.png')} alt="" />
                            <h6> Alumero employee</h6>
                            <p> Aluminum production</p>
                        </div>
                        <div className="py-[10px] md:hidden lg:block">
                            <img src= {require('./assets/mayoimg/4k.png')} alt="" />
                            <h6> Jamaha, Made in Holland</h6>
                            <p> Collection</p>
                        </div>
                        </div>
                        

                    </div>
                    <div className="hidden  lg:grid lg:grid-cols-1 lg:content-center lg:border-l lg:border-black lg:pl-5 ">
                        <div className="py-[10px]">
                            <img src= {require('./assets/mayoimg/4i.png')} alt="" />
                            <h6> Nathen & Marjoletn</h6>
                            <p> Collection</p>
                        </div>
                        <div className="py-[10px]">
                             <img src= {require('./assets/mayoimg/4j.png')} alt="" />
                            <h6> Rompa lesther employee</h6>
                            <p> Production</p>
                        </div>
                    </div> 
                </div>
            </div>

             <div className="bg-[#d9d6d6] mx-[10px] my-[50px] grid grid-cols-1 px-[20px] py-[50px] text-[10px] md:grid-cols-3 md:text-center md:px-[50px] lg:px-[90px]">
                <div className="flex space-x-4 py-[20px] md:flex-col  ">
                    <div className="md:flex md:justify-center">
                        <img src= {require('./assets/mayoimg/leatheri.png')} alt="" />
                    </div>

                    <div className="">
                        <h1 className='font-[600] text-[15px] md:text-[20px]  '>EUROPEAN </h1>
                        <h1 className='font-[600] text-[15px] md:text-[20px] '>LEATHER </h1>
                        <p>Our leather hides are chosen with utmost</p>
                        <p>care for labour standards</p>
                        <p>and the enviroment</p>
                    </div>
                    
                </div>
                <div className="flex space-x-4 py-[20px] md:flex-col ">
                    <div className="md:flex md:justify-center pr-[0px] md:pr-0 md:pl-[20px]">
                        <img src= {require('./assets/mayoimg/carboni.png')} alt="" />
                    </div>
                    <div className="">
                        <h1 className='font-[600] text-[15px] md:text-[20px] '>CARBON</h1>
                        <h1 className='font-[600] text-[15px] md:text-[20px] '>NEUTRAL</h1>
                        <p>We can proudly say that we have been a co2 compensated  </p>
                        <p>  company since 2009 and c02 neutral company since 2022</p>
                    </div>
                    
                </div>
                <div className="flex space-x-4 py-[20px] md:flex-col ">
                    <div className="md:flex md:justify-center">
                     <img src= {require('./assets/mayoimg/rosei.png')} alt="" />
                    </div>
                    <div className="">
                        <h1 className='font-[600] text-[15px] md:text-[20px] '>MADE IN</h1>
                        <h1 className='font-[600] text-[15px] md:text-[20px] '>HOLLAND</h1>
                        <p>Our products are made in</p>
                        <p>Holland (EU) and are assembled</p>
                        <p>in social enterprise</p>
                    </div>
                   
                </div>
             </div>
            
            <div className="p-[15px] pb-[60px]">
                <div className="text-[20px] font-[600] py-[20px] ">
                    <h1 >MORE ABOUT US</h1>
                </div>
                <section className="md:hidden">
                    <Link to="/aboutblog" >
                    <Carousel5/>
                    </Link>
                </section>
            <Link to = '/aboutblog'> 
                <div className="hidden md:block  ">
                    <div className="md:grid md:grid-cols-3  ">
                        <div className="md:border-r md:border-black md:pr-[10px] md:mr-[10px] lg:border-0 lg:pr-0 lg:mr-0 ">
                           
                             <img className='h-[300px] w-[250px] lg:h-[300px] lg:w-[300px] ' src= {require('./assets/mayoimg/4e.jpeg')} alt=""/>
                            <h1 className="md:font-[600]" ><Link to = "/aboutblog">MADE IN HOLLAND</Link></h1>
                            <p>Made in holland with great care for quality and the enviroment. Ethically .made Designed to last.</p>
                            
                        </div>
                        <div className="md:border-r md:border-black md:pr-[10px] lg:border-0 lg:border-l  lg:border-black lg:pl-[20px]  ">
                            <img className='h-[300px] w-[250px] lg:h-[300px] lg:w-[300px] ' src= {require('./assets/mayoimg/5b.jpeg')} alt="" />
                            <h1 className="md:font-[600]">SECRID IS A CERTIFIED B CORP</h1>
                            <p>Secrid believes that a brand can only be succesful when as many people as possible are part of the success</p>
                        </div>
                        <div className="md:ml-[10px]    lg:border-black lg:border-l lg:pl-[20px]  ">
                            <img className='h-[300px] w-[250px] lg:h-[300px] lg:w-[300px] ' src= {require('./assets/mayoimg/5c.jpeg')} alt="" />
                            <h1 className="md:font-[600]">THE INDUSTRIAL EVOLUTION</h1>
                            <p>A shift from industrial revolution to the industrial evolution</p>
                        </div>
                    </div>
                </div>
            </Link>
            </div>
    </div>
     );
}
 
export default Ourphilosophy;