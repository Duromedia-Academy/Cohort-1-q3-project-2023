const Stories = () => {
    return ( 
        <div className="">
                       {/* FIRST SECTION */}
    <div class="all  mt-[50px]">
        <div class="top flex p-[10px] border-t-[1px] border-b-[1px] border-black mt-[50px]">
            <div class="first w-[400px] p-[10px]">
                <div class="flex">
                    <div class="image">
                        <img class="w-[400px] h-[200px]" src={require ("./assets/olaimg/secrid.png")} alt="" />
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
            <div class="first w-[400px]      p-[10px]">
                <div class="flex">
                    <div class="image">
                    <img class="w-[400px] h-[200px]" src={require ("./assets/olaimg/corp.png")} alt="" />
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
            <div class="first w-[400px]  p-[10px]">
                <div class="flex">
                    <div class="image">
                        <img class="w-[400px] h-[200px]" src={require ("./assets/olaimg/meet.png")} alt="" />
                    </div>
                    <div class="f">
                        <p class="font-bold mb-[30px]">MEET THE SECRID COMMUNITY</p>
                        <p> I'm always with my head in the clouds and super chaotic, because of this 
                            I always lost my cardprotector is the perfect gift to keep my cards 
                        safely together </p>
                    </div>
                </div> 
            </div>
            <div class="first w-[400px]  p-[10px]">
                <div class="flex">
                    <div class="image">
                        <img class="w-[400px] h-[200px]" src={require ("./assets/olaimg/head.png")} alt="" />
                    </div>
                    <div class="f">
                        <p class="font-bold mb-[30px]">OUR HEADQUARTERS</p>
                        <p> in 2009, three people started the Secrid adventure;
                            Marianne, Rene and Paul . Thirteen years later ,our craetive family consists 
                            of more than 100 colleagues and we keep growing steadily.
                        </p>
                    </div>
                </div> 
            </div>
        </div>
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
                            {/* <img class="w-[50px] h-[50px] rounded-full" src= */}
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
             <div class="flex justify-center  ">
            <div class="w-[200px] border-r-[1px] border-black p-[5px]">
                <div class="m-[10px] ">
                    <img class="w-[200px] h-[250px]" src={require ("./assets/olaimg/corp.png")} alt="" />
                </div>
                <p class="font-bold mt-[10px] mb-[10px]">SECRID IS A CERTIFIED B CORP</p>
                <p>A creative journey that changes the way we look at our daily essentials.</p>
            </div>
            <div class="w-[200px] border-r-[1px] border-black p-[5px]">
                <div class="m-[10px] ">
                <img class="w-[200px] h-[100px]" src={require ("./assets/olaimg/industrial.png")} alt="" />
                </div>
                <p class="font-bold mt-[10px] mb-[10px]">THE INDUSTRIAL EVOLUTION</p>
                <p> A shift from industrial Revolution to the industrial Evolution
                </p>
            </div>
            <div class="w-[200px] border-r-[1px] border-black p-[5px]">
                <div class="m-[10px] ">
                <img class="w-[200px] h-[250px]" src={require ("./assets/olaimg/head.png")} alt="" />
                </div>
                <p class="font-bold mt-[10px] mb-[10px]">OUR HEADQUARTERS</p>
                <p> Designed by an in-house design team,this project was 
                    the starting point for secrid in creating a physical identity  .
                </p>
            </div>
            <div class="w-[200px] border-r-[1px] border-black p-[5px]">
                <div class="m-[10px] ">
                <img class="w-[200px] h-[100px]" src={require ("./assets/olaimg/how.png")} alt="" />
                </div>
                <p class="font-bold mt-[10px] mb-[10px]">HOW IT ALL STARTED </p>
                <p>Secrid believes that a brand can onlyt be successful whwn as many people as possible 
                    are part of the sucess. </p>
            </div>
           
        </div>
      
        </div>
       
        
    </div>


    {/* SECOND SECTION END */}

<br/><br/><br/>
     {/* THIRD SECTION */}
     <div class="max-w-full xs:w-full mb-[50px] mt-[50px]">
       
       <div class="lg:flex justify-center bg-green-500 ml-[20px]">
           <div class="">
           <img class="w-[800px] h-[800px]" src={require ("./assets/olaimg/corp.png")} alt=""/>
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
<div class="mt-[60px] mb-[60px]">
        <div class="flex justify-center  ">
            <div class="w-[200px] border-r-[1px] border-black p-[5px]">
                <div class="m-[10px] ">
                    <img class="w-[200px] h-[250px]" src={require ("./assets/olaimg/small.png")} alt="" />
                </div>
                <p class="font-bold mt-[10px] mb-[10px]">THE POWER OF SMALL </p>
                <p>Our pantented mechanism, designed by Secris co-founder ,inspired by his father </p>
            </div>
            <div class="w-[200px] border-r-[1px] border-black p-[5px]">
                <div class="m-[10px] ">
                <img class="w-[200px] h-[100px]" src={require ("./assets/olaimg/head.png")} alt="" />
                </div>
                <p class="font-bold mt-[10px] mb-[10px]">OUR HEADQUARTERS</p>
                <p>in 2009, three people started the Secrid adventure;
                    Marianne, Rene and Paul . Thirteen years later ,our craetive family consists 
                    of more than 100 colleagues and we keep growing steadily.
                </p>
            </div>
            <div class="w-[200px] border-r-[1px] border-black p-[5px]">
                <div class="m-[10px] ">
                <img class="w-[200px] h-[250px]" src={require ("./assets/olaimg/how.png")} alt="" />
                </div>
                <p class="font-bold mt-[10px] mb-[10px]">HOW IT ALL STARTED</p>
                <p>SEcrid is a family business and 100% owned by Van Geer Family.The company was founded by Rene Van
                    Geer and Marianne Van Sasse Van Ysselt 
                </p>
            </div>
            <div class="w-[200px] border-r-[1px] border-black p-[5px]">
                <div class="m-[10px] ">
                <img class="w-[200px] h-[100px]" src={require ("./assets/olaimg/meet.png")} alt="" />
                </div>
                <p class="font-bold mt-[10px] mb-[10px]">MEET THE SECRID COMMUNITY</p>
                <p> I'm always with my head in the clouds and super chaotic, because of this 
                    I always lost my cardprotector is the perfect gift to keep my cards 
                safely together </p>
            </div>
            <div class="w-[200px] border-r-[1px] border-black p-[5px]">
                <div class="m-[10px] ">
                <img class="w-[200px] h-[200px]" src={require ("./assets/olaimg/industrial.png")} alt="" />
                </div>
                <p class="font-bold mt-[10px] mb-[10px]">THE INDUSTRIAL EVOLUTION</p>
                <p> Instead of 'cheaper and worse',new products must be developed which are instricically 'better,more sustainable and more 
                    valuable' than products that came before.  </p>
            </div>
            <div class="w-[200px] border-r-[1px] border-black p-[5px]">
                <div class="m-[10px] ">
                <img class="w-[200px] h-[250px]" src={require ("./assets/olaimg/corp.png")} alt="" />
                </div>
                <p class="font-bold mt-[10px] mb-[10px]">SECRID IS A CERTIFIED B CORP</p>
                <p> While too many companies strive only to make as much profit as possible at all 
                    cost, B corporations primarily look at the consequencies for people, nature 
                    and the planet. </p>
            </div>
           
        </div>
        
    </div>

      {/* FOURTH SECTION END */}
<br/><br/><br/>
    {/* FIFTH SECTION  */}
    <div class="bg-green-500 m-[20px]">
        <p class="text-center text-white font-bold"> FEATURED STORIES </p>
        <div class="flex justify-center">
            <div class="image border-r-[1px] p-[20px] border-white">
                <img class="w-[300px] h-[500px] " src={require ("./assets/olaimg/fifth-1 (1).png")} alt="" />
            </div>
            <div class="image border-r-[1px] p-[20px] border-white">
                <img class="w-[300px] h-[500px] " src={require ("./assets/olaimg/fifth-1 (2).png")} alt="" />
            </div>
            <div class="image p-[20px]">
                <img class="w-[300px] h-[500px] " src={require ("./assets/olaimg/fifth-1 (3).png")} alt="" />
            </div>
        </div>
    </div>
   {/* FIFTH SECTION END */}

      {/* SIXTH SECTION  */}
      <div class="mt-[60px] mb-[60px]">
        <div class="flex justify-center  ">
            <div class="w-[200px] border-r-[1px] border-black p-[5px]">
                <div class="m-[10px] ">
                    <img class="w-[200px] h-[250px]" src={require ("./assets/olaimg/community.png")} alt="" />
                </div>
                <p class="font-bold mt-[10px] mb-[10px]">MEET THE SECRID COMMUNITY</p>
                <p >The secrid community,their wallet and their stories.Became their member too.</p>
            </div>
            <div class="w-[200px] border-r-[1px] border-black p-[5px]">
                <div class="m-[10px] ">
                <img class="w-[200px] h-[100px]" src={require ("./assets/olaimg/made.png")} alt="" />
                </div>
                <p class="font-bold mt-[10px] mb-[10px]">MADE IN HOLLAND</p>
                <p> Made in holland with great care for quality, people and the environment .Ethically made Designed to last.
                </p>
            </div>
            <div class="w-[200px] border-r-[1px] border-black p-[5px]">
                <div class="m-[10px] ">
                <img class="w-[200px] h-[250px]" src={require ("./assets/olaimg/head.png")} alt="" />
                </div>
                <p class="font-bold mt-[10px] mb-[10px]">OUR HEADQUARTERS</p>
                <p>Designed by an in-house design team , this project was the starting point for Secrid in creating a 
                    phusical identity.
                </p>
            </div>
            <div class="w-[200px] border-r-[1px] border-black p-[5px]">
                <div class="m-[10px] ">
                <img class="w-[200px] h-[100px]" src={require ("./assets/olaimg/small.png")} alt="" />
                </div>
                <p class="font-bold mt-[10px] mb-[10px]">THE POWER OF SMALL </p>
                <p>Our patent mechanism designed by Secrid's co-founder,inspired by his father.  </p>
            </div>
           
        </div>
        <div class="m-[60px] w-[400px]">
            <h2 class="mb-[10px] border-b-[1px] font-bold border-black">TOP AUTHORS</h2>
            <div class="flex border-b-[1px] border-black">
                <div class="image">
                    {/* <img class="w-[50px] h-[50px] rounded-full" src={require ("")} alt="" /> */}
                </div>
                <div class="d">
                    <p class="font-bold ">ANOUK MOERMAN</p>
                    <p>content creation</p>
                </div>
            </div>
            <div class="flex border-b-[1px] border-black">
                <div class="image">
                    {/* <img class="w-[50px] h-[50px] rounded-full" src={require ("")} alt="" /> */}
                </div>
                <div class="d">
                    <p class="font-bold ">RENE VAN GEER</p>
                    <p>co-founder</p>
                </div>
            </div>
            <div class="flex border-b-[1px] border-black">
                <div class="image">
                    {/* <img class="w-[50px] h-[50px] rounded-full" src={require ("")} alt="" /> */}
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