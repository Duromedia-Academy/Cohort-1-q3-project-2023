import Explore from './component/Explore';

const Progressive = () => {

   
    return(

        <div className="bg-bg-white">
            {/* header */}
            <div className=" relative ">
                <div className=" ">
                <img className='h-[100vh] w-[100vw] ' src={require('./assets/collimg/2aii.webp')} alt="" />
                </div>
                <div className="absolute top-[200px] right-[10px] lg:top-[300px] xl:top-[200px] ">
                    <h1 className='text-[#4b4c4d] text-[40px] font-[600] md:text-[65px] md:pr-[90px] lg:text-[75px] xl:text-[85px] '>PROGRESSIVE</h1>
                    <h1 className='text-[#4b4c4d] text-[40px] font-[600] md:text-[65px] pl-[70px] md:pl-[120px] lg:text-[75px] xl:text-[85px]'>AESTHETICS</h1>
                    <h1 className='text-white text-[20px] italic font-noto font-[600] md:text-[30px] xl:text-[50px] ' >Bold highlights and</h1>
                    <h1 className='text-white text-[20px] italic font-noto font-[600] md:text-[30px] xl:text-[50px]' >laser precision style</h1>
                </div>
            </div>
            {/* header end */}
            {/* section 2 */}
            <div className="">
                <h1 className='px-[20px] text-[20px] text-center  font-[600] italic font-noto py-[120px] md:py-[150px] lg:text-[35px] '>
                A collection for people who want to do <br /> better
                 and go faster. Bold highlights and <br /> laser-precision style.
                </h1>

                <div className="px-[40px] ">
                        <div className="grid grid-cols-1 lg:grid-cols-2 ">
                            <div className="lg:hidden ">
                                <img className='w-[100%] border-b border-[#c2c5c5] pb-[10px] lg:border-0 lg:pb-0 '  src={require('./assets/collimg/2c.jpeg')} alt="" />
                            </div>
                            <div className="pt-[10px] lg:pt-0 lg:hidden">
                             <img  className='w-[100%] lg:border-l lg:border-[#c2c5c5] lg:ol  ' src={require('./assets/collimg/2d.jpeg')} alt="" />
                            </div>
                            <div className="pt-[10px] lg:pt-0 hidden lg:block">
                             <img  className='w-[100%] lg:border-r lg:border-[#c2c5c5] pr-[10px]  ' src={require('./assets/collimg/2d.jpeg')} alt="" />
                            </div>
                            <div className=" hidden lg:block ">
                                <img className='w-[100%] pl-[10px] lg:border-0 lg:pb-0 '  src={require('./assets/collimg/2c.jpeg')} alt="" />
                            </div>
                            
                        </div>

                        <p className='text-[10px] pt-[3px] lg:pt-0  '>
                        Miniwallet Optical
                        Black Titanium, Twinwallet Optical Black Blue Titanium
                        </p>
                </div>
            </div>
            {/* section 2 end */}

            {/* section 3 */}
            <div className="py-[70px] ">
                <h1 className='text-center text-[30px] font-[600] tracking-[1px] py-[20px] '>
                    OPTICAL
                </h1>

                <div className="px-[10px] grid grid-cols-2  lg:grid-cols-3 md:px-5 ">

                    <div className="   border-b border-[#474747] border-r lg:border-b-0 xl:pr-[70px] xl:pl-[80px] ">
                        <div className="">
                         <img className=' border-[#474747] pr-[10px]  ' src={require('./assets/collimg/2e.jpeg')} alt="" />
                        </div>
                        <div className="">
                            <h1 className='text-[15px] pt-[5px] '>
                            Optical Black
                            </h1>
                            
                            <h1 className='font-[600] py-[5px] mb-[0px] uppercase '>Miniwallet</h1>
                        </div>
                    </div>

                    <div className="pl-[10px] border-b border-[#474747] pb-[20px] md:pl-[50px] lg:border-b-0 lg:pb-0 lg:pl-[10px] lg:pr-[10px] xl:pr-[70px] xl:pl-[80px] ">
                        <div className="">
                            <img  src={require('./assets/collimg/2f.jpeg')} alt="" />
                        </div>
                        <div className="">
                            <h1 className='text-[15px] pt-[5px]' >
                            Optical Black
                            </h1>
                            <h1 className='font-[600] py-[5px] uppercase ' >
                            slimwallet
                            </h1>
                            <h1 className='text-[15px]'>
                            4/6 cards <br />
                            +6 extra cards <br />
                            banknotes, receipts, cards
                            </h1>
                       </div>
                    </div>

                    <div className="  ">
                        <div className="  pr-[20px] pt-[15px] lg:pt-0  lg:border-[#474747] lg:border-l lg:pr-[0px] lg:pl-[10px] xl:pr-[70px] xl:pl-[80px] ">
                            <div className="">
                            <img src={require('./assets/collimg/2g.jpeg')} alt="" />
                            </div>
                            <div className="">
                                <h1 className='text-[15px] pt-[5px]'>
                                Optical Titanium
                                </h1>
                                <h1 className='font-[600] py-[5px] uppercase '>
                                Twinwallet
                                </h1>
                                <h1 className='text-[15px]'>
                                8/12 cards <br />
                                +4 extra cards <br />
                                banknotes, business cards, receipts
                                </h1>
                            </div>       
                        </div>
                    </div>

                </div>
            </div>
            {/* section 3 end */}

            {/* section 4 */}
            <div className=" bg-[rgb(82,95,101)] p-[40px] xl:p-[50px] ">
              <img className='xl:w-[100vw]' src={require('./assets/collimg/2h.jpeg')} alt="" />

              <h1 className='text-bg-white text-[9px] pt-[5px] xl:text-[20px] '>Miniwallet Carbon Cool Grey,
                 Slimwallet Carbon Black, Twinwallet Carbon Cool Grey
                 </h1>

            </div>
            {/* section 4 end */}

            {/* section 5 */}
            <div className="">
                <h1 className='text-center font-[600] tracking-[1px] text-[30px] uppercase py-[30px] ' >
                    carbon
                </h1>

                <div className="grid grid-cols-2 px-[10px] pb-[100px] md:px-[20px] lg:grid-cols-3 xl:grid-cols-4 xl:px-[20px]">

                    <div className="border-r border-[#474747] pr-[10px] lg:pr-0 xl:mr-[20px]  ">
                         <img className='md:h-[75%] ' src={require('./assets/collimg/2i.jpeg')} alt="" />
                       
                         <h1 className='text-[15px] pt-[5px]' >
                            Carbon Black
                        </h1>
                            
                            <h1 className='font-[600] py-[5px] uppercase '>
                            Slimwallet 
                            </h1>
                            <h1>
                            4/6 cards <br />
                            +6 extra cards <br />
                            banknotes, reciepts, cards
                            </h1>
                       
                    </div>

                    <div className="pl-[10px] md:pl-[60px] lg:pl-[20px]  ">
                        <img className='md:h-[75%] ' src={require('./assets/collimg/2j.jpeg')} alt="" />
                        <h1  className='text-[15px] pt-[5px]'>
                            Carbon Khaki
                        </h1>
                        <h1 className='font-[600] py-[5px] uppercase '>
                        Miniwallet
                        </h1>
                    </div>

                </div>
            </div>
            {/* section 5 end */}

            {/* section 6 */}
            <div className="pb-[90px] grid grid-cols-1 lg:grid-cols-2 ">

                <div className="p-[10px] lg:p-0  ">
                <img className='lg:border-r lg:border-[#474747]  lg:ml-[70px] lg:pr-[50px] xl:ml-[80px] xl:pr-[60px]' src={require('./assets/collimg/2k.jpeg')} alt="" />
                </div>

                <div className="grid grid-cols-2 px-[10px] md:px-5 lg:grid-cols-1 lg:ml-[70px] xl:ml-[90px]  ">

                    <div className="border-r border-[#474747] pr-[10px] md:pr-[30px] lg:border-0 lg:pl-[40px] xl:pr-0 ">
                        <img className='xl:w-[500px]' src={require('./assets/collimg/2l.jpeg')} alt="" />

                        <h1 className='text-[15px] pt-[5px]'>
                            Matte Nightblue & Orange
                        </h1>
                        <h1 className='font-[600] py-[5px] uppercase' >
                            slimwallet
                        </h1>
                        <h1>
                            4/6 cards <br />
                            +6 extra cards <br />
                            banknotes, reciepts, cards
                        </h1>
                    </div>

                    <div className="pl-[10px] md:pl-[40px] lg ">
                        <img className='xl:w-[500px]' src={require('./assets/collimg/2m.jpeg')} alt="" />

                        <h1 className='text-[15px] pt-[5px]'> Matte Nightblue & Orange</h1>
                        <h1 className='font-[600] py-[5px] uppercase'>miniwallet</h1>
                    </div>

                </div>

            </div>    
            {/*section 6 end  */}
            {/* section 7 */}
            <div className=" bg-[rgb(49,42,36)] py-[50px] ">
                <h1 className='uppercase text-[30px] tracking-[1px] text-center font-[600] text-white ' >
                    Explore
                </h1>
                <div className="py-[30px]">
                    <Explore/>
                </div>
            </div>
        </div>
       
    );
}

export default Progressive;