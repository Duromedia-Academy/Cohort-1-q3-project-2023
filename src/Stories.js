import Carousel from "./component/Carousel";

const Stories = () => {
    return ( 
        <div className="">
                       {/* FIRST SECTION */}
    <div class="all  mt-[50px]">
           <Carousel/>
        <div class="d0wn mt-[10px]">
            <div class="lg:flex ">
                <div class="p-[10px]">       
                    <img class="h-[500px] w-[800px]" src={ require ("./assets/olaimg/made.png")} alt=""/>
                </div>
                <div class="m-[10px] p-[10px] lg:sticky">
                    <h1 class="font-bold text-[3rem]">MADE IN HOLLAND</h1>
                    <p class="">made in holland with greate care for quality , people and the environment.Ethically made.Designed to last</p>
                    <button class="font-bold"> <u>Read more</u>  </button>

                    <div class="flex mt-[20px]">
                        <div class="image">
                            <img class="w-[50px] h-[50px] rounded-full" src={ require ("./assets/olaimg/new.jpg")} alt=""/>
                        </div>
                        <div class="d">
                            <p>written by</p>
                            <p class="font-bold ">RENE  VAN GEER</p>
                            <p>co-founder </p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
            
        
    </div>
   {/* FIRST SECTION END */}

<br/><br/><br/>
    {/* SECOND SECTION */}
    <div class="mt-[60px] mb-[60px]">
        <div class="lg:flex">
                  <div class="m-[70px] w-[400px]">
            <h2 class="mb-[10px] border-b-[1px] font-bold border-black">MOST READ</h2>
            <div class="flex border-b-[1px] border-black">
                <div class="image">
                    <p class="font-bold text-red-700 text-[2rem] mr-[5px]">01</p>
                </div>
                <div class="d">
                    <p class="font-bold ">How it all started</p>
                    <p>about</p>
                </div>
            </div>
            <div class="flex border-b-[1px] border-black">
                <div class="image">
                    <p  class="font-bold text-red-700 text-[2rem] mr-[5px]">02</p>
                </div>
                <div class="d">
                    <p class="font-bold ">Our headquarters</p>
                    <p>News</p>
                </div>
            </div>
            <div class="flex border-b-[1px] border-black">
                <div class="image">
                    <p  class="font-bold text-red-700 text-[2rem] mr-[5px]">03</p>
                </div>
                <div class="d">
                    <p class="font-bold ">The indostrial evolution</p>
                    <p>philosophy</p>
                </div>
                
            </div>
           
        </div>
      <Carousel/>
      
        </div>
       
        
    </div>


    {/* SECOND SECTION END */}

<br/><br/><br/>
     {/* THIRD SECTION */}
     <div class="max-w-full xs:w-full mb-[50px] mt-[50px]">
       
       <div class="lg:flex justify-center bg-green-500 ml-[20px]">
           <div class="">
           <img class="w-[800px] h-[800px]" src={require ("./assets/olaimg/new2.jpg")} alt=""/>
           </div>
           <div class=" w-[600px]">
               <div class="m-[50px] p-[10px]">
                   
               <div class="p-[10px] sm:mr-[10px] ">
                   <div class="font-bold   text-8xl text-white pr-8">
                       <h1>IT ALL</h1>
                   </div>
                   
                   <div class="font-bold   text-8xl text-white pr-8  sm:mr-[10px] ">
                       <h1  class="" >BEGAN</h1>
                   </div>
                   <div class="flex">
                       <h1 class="font-bold   text-8xl text-white mt-7 sm:ml-[]">HERE  </h1>
               
                       <div class=" mt-11 sm:font-xs  font-noto font-bold text-red sm:mr-[]">
                           <p>A creative journey</p>
                            <p>that changes the </p>
                           <p>way we look at our</p>
                           <p>daily essentials</p>
                       </div>
                   </div>
                   <button class="border-[1px] border-white hover:text-red-700 hover:bg-white text-white mb-10 w-[80px]">click here </button>
               </div> 
               </div>
               
           </div>
       </div>
     </div>
     {/* THIRD SECTION END */}
<br/><br/><br/>

{/* FOURTH SECTION */}
<Carousel/>

      {/* FOURTH SECTION END */}
<br/><br/><br/>
    {/* FIFTH SECTION  */}
    <div class="bg-green-500 m-[20px]">
        <p class="text-center text-white font-bold"> FEATURED STORIES </p>
       <Carousel/>
    </div>
   {/* FIFTH SECTION END */}

      {/* SIXTH SECTION  */}
      <div class="mt-[60px] mb-[60px]">
      <Carousel/>
        <div class="m-[60px] w-[400px]">
            <h2 class="mb-[10px] border-b-[1px] font-bold border-black">TOP AUTHORS</h2>
            <div class="flex border-b-[1px] border-black">
                <div class="image">
                    <img class="w-[50px] h-[50px] rounded-full" src={require ("./assets/olaimg/new4.jpg")} alt="" />
                </div>
                <div class="d">
                    <p class="font-bold ">ANOUK MOERMAN</p>
                    <p>content creation</p>
                </div>
            </div>
            <div class="flex border-b-[1px] border-black">
                <div class="image">
                <img class="w-[50px] h-[50px] rounded-full" src={require ("./assets/olaimg/new.jpg")} alt="" />
                </div>
                <div class="d">
                    <p class="font-bold ">RENE VAN GEER</p>
                    <p>co-founder</p>
                </div>
            </div>
            <div class="flex border-b-[1px] border-black">
                <div class="image">
                <img class="w-[50px] h-[50px] rounded-full" src={require ("./assets/olaimg/new3.jpg")} alt="" />
                </div>
                <div class="d">
                    <p class="font-bold ">MILA  STOLK</p>
                    <p>copy writer</p>
                </div>
                
            </div>
           
        </div>
    </div>

       {/* SIXTH SECTION END */}
        </div>
     );
}
 
export default Stories;