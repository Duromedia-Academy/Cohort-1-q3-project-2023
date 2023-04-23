import React from "react";
import Oheebca from "./component/Oheebca";
import Heebc from "./component/Heebc";

const Careclimate = () => {
    return ( 
        <div className=" max-w-full m-0 p-0 box-border w-[100vw] bg-bg-white">
           
           <div className="mx-2 mt-2 lg:relative">
         <div className=" bg-[#d2c9af] py-20 pt-40">

        <div className=" flex flex-col items-center justify-center px-auto">
        <div className="">
         <h1 className=" text-7xl lg:text-[12rem] font-[1000] text-[#485c3f] -mb-2 lg:-mb-4">OUR</h1>
         <div className="flex">
         <img className=" w-[140px] h-[140px] lg:w-52 lg:-ml-14 lg:h-full" src={require ('./assets/careimg/head-img.webp')}  />
         <div className=" text-7xl font-extrabold text-[#485c3f] -mt-1 lg:text-[10rem]">
            <h1>CARE</h1>
            <div className=" flex">
            <h1 className=" mt-1 lg:-mt-4">FOR</h1>
            <p className="text-2xl italic text-lime-800 hidden font-normal md:block md:text-xl lg:text-2xl">More than ever <br /> we need to slow down <br /> and radically <br /> change the way <br /> we create.</p>
            </div>
         </div>
         </div>
         <h1 className=" text-7xl font-extrabold text-[#485c3f] -mt-1 lg:text-[10rem] lg:-mt-6">CLIMATE</h1>
         </div>
         </div>

        <p className=" px-12 text-2xl italic text-lime-800 sm:block md:hidden lg:hidden">More than ever we need to <br /> slow down and radically <br /> change the way we create.</p>
            
            
         </div>
            </div>

         <div className=" text-center py-36 px-10 bg-white">
            <h1 className=" italic text-3xl md:text-6xl lg:px-36">We are commited to make a shift from the Industrial Revolution to the <span className=" underline">Industrial</span> <span className=" underline"> Evolution</span></h1>
            <p className=" italic text-lg pt-10 font-semibold">Mr. Omotosho Toheeb O.</p>
            <p className="">FOUNDERS OF SECRID</p>
         </div>


         <div className=" bg-[#485c3f]">
            <div className=" py-40 font-bold text-center ">
               <h1 className=" text-7xl text-lime-600 uppercase italic">Our<br />holistic<br />approach</h1>
               <p className="pt-4 text-white text-xl font-normal lg:px-[50px] md:text-2xl">Everything is connected. Hence we take care of all aspects to create a better<br/>future.</p>
            </div>
         </div>


      <div className=" text-center pt-32 font-noto font-extrabold pb-10 flex flex-col justify-center items-center md:mb-[-150px]">
         <h1 className=" text-6xl font-bold ml-[-40px] md:text-8xl">PRODUCING</h1>
         <div className="flex pl-7 gap-0">
            <h1 className=" text-6xl font-bold pr-24 md:text-8xl">LOCALLY</h1>
            <div className=" text-left leading-4 text-green-800 text-lg -ml-24 pt-2 pr-5 md:text-xl">
               <p>All Secrid <br />
               products are 100% <br />
               made in Europe</p>
            </div>
         </div>
      </div>

      <div className="pt-10 relative pb-36 md:z-[-5]">
         <img className=" h-[400px] lg:h-full object-cover" src={require('./assets/careimg/map.webp')} alt="" />

         <div className="">
            <div className="flex bg-[#eae3c8] border border-black w-[340px] gap-3 p-2 outline outline-[#eae3c8] outline-8 absolute top-[350px] right-[30px] lg:right-[100px]">
               <div className="">
               <img src={require('./assets/careimg/shake.webp')} alt="" />
               </div>
               <div className="pt-10">
                  <h1 className="text-2xl italic">List of suppliers</h1>
                  <a href="#" className=" underline">READ MORE</a>
               </div>
            </div>
         </div>
      </div>


      <div className=" px-5 pr-16 pb-20 lg:px-36 lg:mt-[-150px]">
         <h1 className="text-xl font-bold pb-8 italic lg:px-20 lg:text-2xl text-center">By producing as locally as possible, we can keep transport distances to a minimum.</h1>

         <div className=" md:flex gap-5 md:font-noto">
         <div className="">
         <p>It is our ambition to keep distances within our supply chain as short as possible. In our local production policy, we have stated that we prefer suppliers who are closest to our assembly locations, as long as they can provide the quality and craftsmanship required to make products that can last as long as possible. As a result, most parts are produced in the Netherlands </p> </div>

         <div className="">
         <p>
          and others in Italy. By producing as locally as possible, we can keep transport distances to a minimum, which enables us to minimise the impact on the environment. It also allows us to guarantee the quality of our products, facilitates efficient collaboration with our partners, and lets us continue to support local businesses.</p> </div>
          </div>

      </div>

      <div className="bg-[#c68d46] py-40 px-5 lg:flex lg:grid-cols-2 lg:flex-row-reverse lg:gap-5">
         <div className=" border-l border-gray-700 pl-2 lg:w-[100%]">
            <h1 className="text-5xl font-bold pb-5 lg:text-7xl">THE RELATION WITH OUR SUPPLIERS</h1>
            <p className="pb-6">Together with our suppliers we ensure that our products are consciously made in a responsible way, putting people and planet first. Because we believe that the best results are achieved by working together, we have created a Code of Conduct. Our Code of Conduct has been signed by all our suppliers, ensuring that our standards for People, Environment and Ethics are constantly met.</p>
            <a href="#" className="underline font-bold">LIST OF SUPPLIERS</a>
         </div>

         <div className=" grid grid-cols-2 gap-5 pt-20 border-l border-gray-700 pl-2 pb-10 lg:pt-0 lg:border-none">
      <img src={require('./assets/careimg/bw.jpg')} alt="" />
      <img src={require('./assets/careimg/bw2.jpg')} alt="" />
      <img src={require('./assets/careimg/bw2.jpg')} alt="" />
      <img src={require('./assets/careimg/bw.jpg')} alt="" />
         </div>
      </div>


      <div className=" px-5 pr-10 pb-20 pt-20 bg-white lg:grid lg:grid-cols-2 lg:gap-56">
         <h1 className="text-3xl font-semibold pb-8 italic lg:text-5xl lg:pl-20">"Our care for the environment"</h1>

         <div className="pl-5 border-l border-black lg:pb-10">
         <div className=" pb-10">
         <p>Companies play an important role in changing their industry in order to make the world a better place, little by little. That is why we think it is only natural that we should take responsibility for the impact we have on the world. In order to be able to take this responsibility, we first need to understand exactly where this impact lies.</p> </div>

         <div className="">
         <p>We have been conducting impact analyses for several years in order to provide insight into the environmental footprint of our company, our supply chain and our products. Based on this information, we then developed a plan to take responsibility for our impact. This plan is based on the principles of prevention, measurement, compensation and reduction.</p> </div>
          </div>

      </div>


      <div className=" pl-5 relative pb-28">

         <div className="">
   
            < Oheebca />

         </div>

         <div className=" pb-20">
            <div className="flex bg-[#eae3c8] border border-black gap-3 p-2 outline outline-[#eae3c8] absolute outline-8 top-[440px] left-[65px] z-[1]">
               <div className="">
               <img src={require('./assets/careimg/wallet.webp')} alt="" />
               </div>
               <div className="pt-10">
                  <h1 className="text-xl italic font-semibold">Repair don't replace</h1>
                  <a href="#" className=" underline font-bold">READ MORE</a>
               </div>
            </div>
         </div>

      </div>


      <div className="bg-[#d2c9af] py-20 px-5 flex flex-col text-center mx-2 items-center">
         <h1 className=" text-6xl text-[#485c3f] font-extrabold pb-5 lg:px-[21rem] lg:text-7xl">CARBON OFFSETTING</h1>
         <p className=" text-gray-800 text-2xl font-noto italic font-semibold lg:px-[19rem] ">From the start of Secrid in 2009 to 2021 we have released 24.947.855 kg CO2 eq. of greenhouse gas emissions. These emissions are distributed over scopes 1, 2 and 3.</p>

         <div className="pt-14 lg:flex lg:justify-around lg:gap-24">

            <div className="pt-10">
            <div className="border-2 border-[#b0b9acd4] text- text-7xl font-bold rounded-[50%] px-28 p-[100px] relative">2<span className=" text-lg font-bold absolute top-[110px]">%</span></div>

            <div className="pt-5">
               <h1 className=" italic text-2xl">Scope 1</h1>
               <p className=" font-bold pt-1 -mb-1">Direct Emissions</p>
               <p>example: heating our office</p>
            </div>
            </div>

            <div className=" pt-10">
            <div className="border-2 border-[#b0b9acd4] text- text-7xl font-bold rounded-[50%] px-28 p-[100px] relative">1<span className=" text-lg font-bold absolute top-[110px]">%</span></div>

            <div className="pt-5">
               <h1 className=" italic text-2xl">Scope 2</h1>
               <p className=" font-bold pt-1 -mb-1">Indirect Emissions from Energy</p>
               <p>example: purchased electricity</p>
            </div>
            </div>

            <div className=" pt-10">
            <div className="border-2 border-[#485c3f] text- text-7xl font-bold rounded-[50%] px-24 p-[100px] relative">97<span className=" text-lg font-bold absolute top-[110px]">%</span></div>

            <div className="pt-5">
               <h1 className=" italic text-2xl">Scope 3</h1>
               <p className=" font-bold pt-1 -mb-1">Indirect Emissions</p>
               <p>example: supplier emissions</p>
            </div>
            </div>



         </div>

            <h1 className=" pt-14 text-2xl px-10 lg:px-[23rem] lg:text-3xl">We can proudly say that we have compensated for all of this since 2009</h1>
      </div>


      <div className=" py-20 bg-white mx-3">
         <h1 className="text-xl font-bold lg:text-2xl">MORE ABOUT US</h1>

         
         <div className=" pt-3 pb-20">

            <Heebc />

         </div>
      </div>


        </div>
     );
}
 
export default Careclimate;