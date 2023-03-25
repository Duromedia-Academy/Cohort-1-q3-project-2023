import React from "react";
import Carousel from "./component/Carousel";


const Carerepair = () => {
    return (  
        <div  className=" max-w-full p-[20px]  lg:max-w-full">
            {/* FIRST SECTION */}
            <div className="text-center bg-slate-400 p-[0] min-w-[320px]  sm:max-w-full">
                <div className="p-[10px]">
                    <div className="flex justify-center">
                        <h1 className="font-bold text-8xl text-red-600 mt-7 sm:ml-[]">CARE  </h1>
                
                        <div className=" mt-12 font-bold ">
                            <p>FOR</p>
                             <p>YOUR</p>
                            <p>WALLET</p>
                        </div>
                    </div>
                    <div className="font-bold text-7xl text-red-600 pr-8 ml-9 sm:mr-[10px] ">
                        <h1  className="" >&REPAIR</h1>
                    </div>
                </div> 
        
                <div className="text-center mt-5 font-bold">
                    <p>Reparing is better than replacing. <br /> See here how to take care of your wallet</p>
                </div>

                <div className=" p-5 ">
                 <img className="w-[2000px] h-[800px]" src={require ("./assets/anifimg/first.png")} alt=""/>
                </div>
            </div>
            {/* FIRST SECTION END */}

            {/* SECOND SECTION */}
    <div className="mt-[100px]  md:flex lg:flex justify-center mb-[100px] max-w-full">
        <div className="">
            <h4 className="m-[50px]  font-bold text-4xl text-gray-400">How can we help  you ? </h4>
            <div className="sm:invisible">
            <p className="ml-[50px] invinsible lg:visible   md:visible " >Repair</p>
            <p  className="ml-[50px] invinsible lg:visible   md:visible " >care</p>
            <p  className="ml-[50px] invinsible lg:visible  md:visible " >Warranty</p>
            </div>
          
        </div>
       
        

        <div className="border-l-[2px] m-[50px] border-l-black mt-[40px]">
            <div className="p-[7px] border-b-[2px] border-black ">
                <div className="invisible sm:visible lg:invisible md:invisible">
                    <p>Repair </p>
                </div>
                
                <div className="hidden md:block lg:block">
                    <p>My cards fall out of my Cardprotector</p>
                </div>

            </div>
            <div className="p-[7px] border-b-[2px] border-black">
                <p className="visible md:invisible lg:invisible">Care</p>
                <p  className="hidden md:block lg:block">I can't get my cards out of my Cardprotector</p>
            </div>
            <div className="p-[7px] lg:border-b-[2px] md:border-b-[2px] lg:border-black">
                <p className="visible md:invisible lg:invisible">Warranty</p>
                <p className="hidden lg:block"> My Cardprotector's lever is loose</p>
            </div>
            <div className="hidden md:block lg:block p-[7px]">
                <p>I have a different problem which is not listed here</p>
            </div>
            
        </div>
    </div>
    {/* SECOND SECTION END */}
<br/><br/>

    {/* THIRD SECTION */}
    <div className="lg:flex md:flex mt-[70px] mb-[50px] lg:relative">
        <div className="p-[10px]">       
            <img className="h-[700px] w-[6000px]" src={ require ("./assets/anifimg/second.png")} alt=""/>
        </div>
        <div className="m-[10px] p-[10px] lg:sticky">
            <h1 className="font-bold text-[3rem]">CARE & REPAIR POINTS</h1>
            <p className="">Drop by when your wallet doesn't work as intended,   or you could use a refurbishment. Most Care & Repair points can  fix issues
                 with the mechanism of your wallet in about  2 minutes. 
                Check the Care & Repair  locator below to find the nearest to you. 
                 We will repair your wallet for free during the guarantee period.</p>
        </div>
    </div>
    {/* THIRD SECTION END */}
    <br /><br /><br />

    {/* FOURTH SECTION */}
    <div className="max-w-full mt-[60px] mb-[60px]">
        <p className="font-bold font-noto text-center text-[2rem]">VIND HET DICHTSTBIJZIJNDE CARE & REPAIR PUNT</p>
    <div className="lg:flex md:flex lg:max-h-[700px] m-[20px] mt-[50px]">
        
        <div className="m-[10px]">
                <img className="h-[700px] w-[700px]" src={ require ("./assets/anifimg/map.png")} alt=""/>
            </div>
           
            <div className="lg:overflow-y-auto m-[10px]">
                <div className="border-b-[1px] border-black ">
                <input className="mb-[20px] w-[500px]  " type="text" placeholder="ADDRESS, CITY OR NAME" />
                </div>
                
            <div className="flex lg:space-x-20 border-b-[1px] border-black">
                <div className="m-[5px]">
                    <div className="lg:flex">
                        <h1 className="text-2xl">Scarcella Pelletterie</h1>
                         <p className=" lg:ml-[10px] border-[1px] border-black rounded-full p-[2px] p-l-[2px] text-[.7rem] lg:mt-[5px] sm:w-20">care & repair</p>
                    </div>
                  <p className="mt-[30px] text-sm">Via San Francesco d'Assisi, 87064, Corigliano Rossano</p>
                </div>
                <div className="s">
                    <p className="lg:mt-[10px]  text-sm text-red-700">3917.5 km away</p>
                </div>          
            </div>
            <div className="flex lg:space-x-5 border-b-[1px] border-black">
                <div className="m-[5px]">
                    <div className="lg:flex">
                        <h1 className="text-2xl">La Madrilene</h1>
                         <p className=" lg:ml-[10px] border-[1px] border-black rounded-full p-[2px] p-l-[2px] text-[.7rem] lg:mt-[5px] sm:w-20">care & repair</p>
                    </div>
                  <p className="mt-[30px] text-sm">Centre Commercial Labege 2 - La Grande Borde, 31670, Labege</p>
                </div>
                <div className="s">
                    <p className="lg:mt-[10px]  text-red-700  text-sm">4130.9 km away</p>
                </div>          
            </div>
            <div className="flex lg:space-x-5 border-b-[1px] border-black">
                <div className="m-[5px]">
                    <div className="lg:flex">
                        <h1 className="text-2xl">La Madrilene</h1>
                         <p className=" lg:ml-[10px] border-[1px] border-black rounded-full p-[2px] p-l-[2px] text-[.7rem] lg:mt-[5px] sm:w-20">care & repair</p>
                    </div>
                  <p className="mt-[30px] text-sm">Centre Commercial Merignac Soleil - 17 avenue de la Somme, 33700, Merignac</p>
                </div>
                <div className="s">
                    <p className="lg:mt-[10px]  text-red-700  text-sm">4287.1 km away</p>
                </div>          
            </div>
            <div className="flex lg:space-x-20 border-b-[1px] border-black">
                <div className="m-[5px]">
                    <div className="lg:flex">
                        <h1 className="text-2xl">Heureux comme un prince</h1>
                         <p className=" lg:ml-[10px] border-[1px] border-black rounded-full p-[2px] p-l-[2px] text-[.7rem] lg:mt-[5px] sm:w-20">care & repair</p>
                    </div>
                  <p className="mt-[30px] text-sm">41 rue de la Charité, 69002, Lyon</p>
                </div>
                <div className="s">
                    <p className="lg:mt-[10px]  text-red-700  text-sm">4373.8 km away</p>
                </div>          
            </div>
            <div className="flex lg:space-x-40 border-b-[1px] border-black">
                <div className="m-[5px]">
                    <div className="lg:flex">
                        <h1 className="text-2xl">Valigeria Marchino</h1>
                         <p className=" lg:ml-[10px] border-[1px] border-black rounded-full p-[2px] p-l-[2px] text-[.7rem] lg:mt-[5px] sm:w-20">care & repair</p>
                    </div>
                  <p className="mt-[30px] text-sm">Via urbano III n4, 20123, Milano</p>
                </div>
                <div className="s">
                    <p className="lg:mt-[10px]  text-red-700  text-sm">4375.0 km away</p>
                </div>          
            </div>
            <div className="flex lg:space-x-40 border-b-[1px] border-black">
                <div className="m-[5px]">
                    <div className="lg:flex">
                        <h1 className="text-2xl">Canevari</h1>
                         <p className=" lg:ml-[10px] border-[1px] border-black rounded-full p-[2px] p-l-[2px] text-[.7rem] lg:mt-[5px] sm:w-20">care & repair</p>
                    </div>
                  <p className="mt-[30px] text-sm">Via Pecchio 1 ( Ang. via Caretta), 20131, Milano</p>
                </div>
                <div className="s">
                    <p className="lg:mt-[10px]  text-red-700  text-sm">4378.3 km away</p>
                </div>          
            </div>
            <div className="flex lg:space-x-40 border-b-[1px] border-black">
                <div className="m-[5px]">
                    <div className="lg:flex">
                        <h1 className="text-2xl">La Triestina</h1>
                         <p className=" lg:ml-[10px] border-[1px] border-black rounded-full p-[2px] p-l-[2px] text-[.7rem] lg:mt-[5px] sm:w-20">care & repair</p>
                    </div>
                  <p className="mt-[30px] text-sm">Via Portici 30, 21047, Saronno</p>
                </div>
                <div className="s">
                    <p className="lg:mt-[10px]  text-red-700  text-sm">4391.7 km away</p>
                </div>          
            </div>
            <div className="flex lg:space-x-40 border-b-[1px] border-black">
                <div className="m-[5px]">
                    <div className="lg:flex">
                        <h1 className="text-2xl">Claire Regalo</h1>
                         <p className=" lg:ml-[10px] border-[1px] border-black rounded-full p-[2px] p-l-[2px] text-[.7rem] lg:mt-[5px] sm:w-20">care & repair</p>
                    </div>
                  <p className="mt-[30px] text-sm">Galleria Europa 5, 35137, Padova</p>
                </div>
                <div className="s">
                    <p className="lg:mt-[10px]  text-red-700  text-sm">4410.6 km away</p>
                </div>          
            </div>
            <div className="flex lg:space-x-40 border-b-[1px] border-black">
                <div className="m-[5px]">
                    <div className="lg:flex">
                        <h1 className="text-2xl">Buzzano</h1>
                         <p className=" lg:ml-[10px] border-[1px] border-black rounded-full p-[2px] p-l-[2px] text-[.7rem] lg:mt-[5px] sm:w-20">care & repair</p>
                    </div>
                  <p className="mt-[30px] text-sm">Boulevard Helvetique 25, 1207, Geneve</p>
                </div>
                <div className="s">
                    <p className="lg:mt-[10px]  text-red-700  text-sm">4429.7 km away</p>
                </div>          
            </div>
          
            
            </div>
    
        </div>
    </div>
   
       
    {/* FOURTH SECTION END */}
<br /><br /><br />
    {/* FIFTH SECTION */}
    <div className="mb-[50px] mt-[50px]">
        <div className="mt-[30px]  max-w-[800px] m-auto">
        <h3 className="text-center font-bold">What people say</h3>
        <h2 className="text-[3rem] mb-[10px] text-center font-bold font-noto">"Within a few days, I received my repaired Slimwallet and it is workin again as brfore!
            It's good to find such a customer-friendly company these days ."</h2>
            <p className="text-center">Review by</p>
            <h3 className="text-center font-bold">SECRID CUSTOMERS</h3>
    </div>
    </div>
    
    {/* FIFTH SECTION END */}

<br /><br /><br />
    {/* SIXTH SECTION */}
    <section className="lg:hidden">
      <Carousel/>
      </section>

      
<div className="hidden lg:max-w-full  mt-[60px] mb-[60px] lg:block">
        <div className="flex justify-center  ">
            <div className="w-[200px] border-r-[1px] border-black p-[5px]">
                <div className="m-[10px] ">
                    <img className="w-[200px] h-[250px]" src={require ("./assets/anifimg/third.png")} alt="" />
                </div>
                <p className="font-bold mt-[10px] mb-[10px]"> ROUGHEN UP THE FELT PADS </p>
                <p>The red felt pads inside your cardprotector krrp your card in place.This felt pads may 
                    wear off after a few years of use, causing a looser grip on cards.You can temporarily fix this issue at home  
                    by gently rubbing the felt pads with a key to roughen them up again. The best long term solution is to replace them 
                    at a care and repair point </p>
            </div>
            <div className="w-[200px] border-r-[1px] border-black p-[5px]">
                <div className="m-[10px] ">
                <img className="w-[200px] h-[100px]" src={require ("./assets/anifimg/fourth.png")} alt="" />
                </div>
                <p className="font-bold mt-[10px] mb-[10px]">REGISTER YOUR WALLET</p>
                <p>Did you know that by registering your wallet,you can extend its two-year warranty by one year ?
                    Enter the unique code engraved inside the wallet <u>here</u>. With this registration, we can 
                    ehsure the authencity of your wallet and spot copycats.
                </p>
            </div>
            <div className="w-[200px] border-r-[1px] border-black p-[5px]">
                <div className="m-[10px] ">
                <img className="w-[200px] h-[250px]" src={require ("./assets/anifimg/fifyh.png")} alt="" />
                </div>
                <p className="font-bold mt-[10px] mb-[10px]">VINTAGE LEATHER</p>
                <p>If you see color difference in your vintage wallet, it's alright. Our vintage leather has natural chromatic variations that makes 
                    each wallet unique. However,if your vintage wallet needs to be cleaned,gently wipe it down with a damp cloth 
                </p>
            </div>
            <div className="w-[200px] border-r-[1px] border-black p-[5px]">
                <div className="m-[10px] ">
                <img className="w-[200px] h-[100px]" src={require ("./assets/anifimg/third.png")} alt="" />
                </div>
                <p className="font-bold mt-[10px] mb-[10px]">USE 4 TO 6 CARDS</p>
                <p>Did you know that your wallet functions best with four to six cards?
                     If you see credit caerds with embossed numbers,leave one card out of easier use. </p>
            </div>
            <div className="w-[200px] border-r-[1px] border-black p-[5px]">
                <div className="m-[10px] ">
                <img className="w-[200px] h-[200px]" src={require ("./assets/anifimg/fourth.png")} alt="" />
                </div>
                <p className="font-bold mt-[10px] mb-[10px]">FIX A LOOSE LEVER</p>
                <p>Your button is hanging loose,and your cards aren't coming out properly? No worries! In 2016,
                    we launched the salammmander lever, which can restore it's self.Press the ejector lever firmly back
                    into the cardprotector until you hear a strong click.Your cardprotector should now work properly again.   </p>
            </div>
            <div className="w-[200px] p-[5px]">
                <div className="m-[10px] ">
                <img className="w-[200px] h-[300px]" src={require ("./assets/anifimg/fifyh.png")} alt="" />
                </div>
                <p className="font-bold mt-[10px] mb-[10px]">VISIT A CARE & REPAIR POINT</p>
                <p>Secrid currently has more than 250 care & repair points you can visit to get your wallet repaired orrefurbished.
                    Use the Care & Repair locator above to find the nearest Care & Repair points.
                </p>
            </div>
        </div>
    </div>
    {/* SIXTH SECTION END */}



<br /><br /><br />
    {/* SEVENTH SECTION */}
      <div className="max-w-full  mb-[50px] mt-[50px]">
       
        <div className="lg:flex md:flex justify-center bg-green-500 ml-[20px]">
            <div className="">
            <img className="w-[800px] h-[800px]" src={require ("./assets/anifimg/third.png")} alt=""/>
            </div>
            <div className=" w-[600px]">
                <div className="m-[50px] p-[10px]">
                    
                <div className="p-[10px] sm:mr-[10px] ">
                    <div className="font-bold  text-8xl text-amber-800 pr-8">
                        <h1>REPAIR</h1>
                    </div>
                    <div className="flex">
                        <h1 className="font-bold  text-8xl text-amber-800 mt-7 ">DON'T  </h1>
                
                        <div className=" mt-11 font-xs  font-noto font-bold text-white ">
                            <p>FOR PLANET</p>
                             <p>AND</p>
                            <p>WALLET POCKET</p>
                        </div>
                    </div>
                    <div className="font-bold  text-8xl text-amber-800 pr-8  sm:mr-[10px] ">
                        <h1  className="" >REPLACE</h1>
                    </div>
                    <button className="border-[1px] border-white hover:text-red-700 hover:bg-white text-white mb-10 w-[80px]">click here </button>
                </div> 
                </div>
                
            </div>
        </div>
      </div>
    {/* SEVENTH SECTION END */}
    <br /><br />

    {/* EIGHT SECTION */}
    <div className="max-w-full md:max-w-full mt-[60px]  mb-[50px]">
        <div className="font-bold font-noto text-[3rem] max-w-[400px] m-auto ">
            <div>
                <h1>TAKING</h1>
            </div>
        <div>
                <h1 className="ml-[120px]">CARE OF</h1>
        </div>
        <div>
            <h1>YOUR WALLET</h1>
        </div> 
        </div>
        <div className="lg:flex md:flex justify-center">
            <div className="w-[500px] w-full  lg:border-r-[1px] lg:border-b-transparent md:border-b-transparent md:border-r-[1px] sm:border-b-[1px] text-center p-[15px] border-black m-[10px]">
                <div className="image">
                <img className="w-[500px] sm:w-full " src={require ("./assets/anifimg/fourth.png")} alt=""/>
                </div>
                <p className="m-[20px]">CARDPROTECTOR CARE</p>
                <p className="m-[20px] font-bold font-noto">The Cardprotector is made of anodised aluminium, plastic and stainless steel and is impervious to water.</p>
                <p className="m-[20px]">You can clean the Cardprotector with a soft cloth and soap and rinse it with warm water.
                     However, the salt in seawater can affect the metals, so we recommend rinsing the Cardprotector
                     with fresh water after contact with salt water. Make sure the mechanism is dry before using your wallet again.</p>
            </div>
            <div className="w-[500px] sm:w-full m-[10px] p-[10px]">
                 <div className="image">
                     <img className="w-[500px] sm:w-full xs:full h-[800px]" src={require ("./assets/anifimg/fifyh.png")} alt=""/>
                 </div>

                 <p className="m-[20px]">LEATHER CARE</p>
                 <p className="m-[20px] font-bold font-noto ">No regular maintenance needed.
                     If your wallet gets dirty, the best way to clean 
                     it will depend on the type of leather the wallet is made of.</p>
                     <div className="flex">
                        <div className="m-[20px]">
                            <p className="font-bold mb-[10px]"> Water repellent</p>
                            <p className="p-[10px]">use a damp cloth.The leather is unlikely to absurb water or other
                                materials.Do not use any polish
                            </p>
                        </div>
                        <div className="m-[20px]">
                            <p className="font-bold mb-[10px]"> Water absorbing</p>
                            <p className="p-[10px]">We recommend not cleaning them.Any water used may change it's color
                                .If your wallet gets wet, use a soft cloth to carefully pat it dry </p>
                        </div>
                     </div>
            </div>
        </div>
    </div>
   
    {/* EIGHT SECTION END */}
<br /><br /><br />

    {/* NIGHT SECTION */}
    <div className="text-center mt-[50px] bg-gray-200 p-[70px] mb-[40px] max-w-full">
        <div>
            <h2 className="font-bold mb-[20px] text-[4rem]">GET IN CONTACT</h2>
        </div>
        <div className="lg:flex justify-center text-[1rem]">
            <div className=" border-b-[1px] md:border-r-[1px] sm:border-b-black md:border-r-transparent lg:border-r-black  lg:border-b-transparent md:border-b-black  lg:border-r-[1px] m-[10px] p-[20px]">
                <div className="icon">
                <img className="lg:ml-[60px] md:ml-[220px] mb-[10px] ml-[80px] lg:mb-[10px]" src={require ("./assets/anifimg/icons8-phone-50.png")} alt=""/>
                </div>
                <div className="mb-[10px]">
                  <h4 className="font-bold">CALL</h4>
                  <h4 className="font-bold">+31 (0)70 390 2180</h4>
                </div>   
                <p>Open from <br /> Monday till Friday <br />from 8:00 till 18:00 CET </p>
            </div>
             <div className=" border-b-[1px] md:border-r-[1px] sm:border-b-black md:border-r-transparent lg:border-r-black  lg:border-b-transparent md:border-b-black  lg:border-r-[1px] m-[10px] p-[20px]">
                <div className="icon">
                <img className=" lg:ml-[60px] md:ml-[220px] mb-[10px] ml-[80px] lg:mb-[10px] " src={require ("./assets/anifimg/icons8-mail-50.png")} alt=""/>
                </div>
                {/* ml-[70px] sm:ml- mb-[20px */}
                <div className="mb-[15px]">
                  <h4 className="font-bold">EMAIL</h4>
                  <h4 className="font-bold">INFO@SECRID.COM</h4>
                </div>   
                <p>We usually reply <br /> within 24hrs on working days</p>
            </div>
             <div className=" border-b-[1px] md:border-r-[1px] sm:border-b-black md:border-r-transparent lg:border-r-black  lg:border-b-transparent md:border-b-black  lg:border-r-[1px] m-[10px] p-[20px]">
                <div className="image">
                     <img className=" lg:ml-[60px] md:ml-[220px] mb-[10px] ml-[80px] lg:mb-[10px]]" src={require ("./assets/anifimg/icons8-region-50.png")} alt=""/>
                </div>
                <div className="mb-[10px]">
                  <h4 className="font-bold">VISIT OUR </h4>
                  <h4 className="font-bold"> BRAND STORE </h4>
                </div>   
                <p>meent nr.2 <br />3011 jj AG Rotterdam <br /> The Netherland </p>
            </div>
        </div>
    </div>
    {/* EIGHT SECTION END */}
        </div>
    );
}
 
export default Carerepair;
// lg:mr-[120px]
// md:ml-[220px]
// ml-[40px]  ml-[80px]