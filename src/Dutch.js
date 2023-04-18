import Explore from './component/Explore';

const Dutch = () => {
    return(

        <div className="bg-bg-white">
            {/* header */}
            <div className="  ">
                <img className='w-[100vw]  h-[100vh]' src={require('./assets/collimg/3a.jpeg')} alt="" />
            </div>
            {/* header end */}

            {/* section 1 */}
            <div className=" md:grid md:grid-cols-3 pb-[60px] ">
                <div className="text-[15px] font-[600] px-[15px] pt-[40px] pb-[20px] md:text-[30px] xl:text-[50px] ">
                    <h1>ART COLLECTION</h1>
                </div>
                <div className="px-[15px] text-[25px] pr-[90px] font-noto font-[600] md:pr-0 md:col-span-2 md:p-[30px] md:text-[30px] italic xl:text-[50px] ">
                        <p>
                        With these wallets four masterpieces are literally within reach: 
                        The Girl with a Pearl Earring, Still Life with Flowers, The Goldfinch and The Night Watch. 
                        Timeless creations depicted on high-quality leather, which faithfully 
                        reproduces even the smallest details of the painting.
                        </p>
                </div>

            </div>
            {/* section 1 end */}

            {/* section 2 begin */}
                <div className="bg-[rgb(72,78,61)] px-[20px] py-[50px] lg:px-[50px] xl:p-[80px] ">
                    <img className='w-[100vw]' src={require('./assets/collimg/3b.jpeg')} alt="" />
                    <h1 className='text-white' >Miniwallet Art Flowers</h1>
                </div>
            {/* section 2 end */}

            {/* section 3 begin */}
                <div className="py-[90px] px-[15px] md:px-[30px] lg:grid lg:grid-cols-3 ">

                    <div className="pb-[100px] lg:col-span-2 ">
                      <img className='lg:pr-[20px] xl:ml-[30px] ' src={require('./assets/collimg/3c.jpeg')} alt="" />
                      <div className="flex my-[10px] hover:scale-100 lg:hidden ">
                         <div className=" p-[10px] border border-black  ">
                        < img src={require('./assets/collimg/i.jpeg')} alt="" />
                         </div>
                         <div className=" p-[10px] pr-[20px] border border-black  ">
                            <h1>
                                Art flowers
                            </h1>
                            <h1 className='font-[600]' >MINIWALLET</h1>
                         </div>
                      </div>
                    </div>

                    <div className="border-l border-black xl:pl-[40px] xl:pt-[20px] ">
                    <img className='ml-[60px] pb-[30px] md:ml-[80px] lg:ml-[20px] lg:pt-[40px]  ' src={require('./assets/collimg/3d.jpeg')} alt="" />
                    <h1 className='pl-[15px] md:pl-[25px] text-[30px] font-[600] pb-[10px] ' >STILL LIFE OF <br /> FLOWERS WITH <br /> CROWN</h1>
                    <p  className='pl-[15px] ms:pl-[25px] pr-[30px] md:text-[30px] md:pr-[50px] '>Symbols of Dutch culture to this very day, flowers were a favoured
                         subject in the Golden Age of Dutch art. The lively colours of this 
                         17th century still-life make our small wallet stand out in a big way. The richness of
                         this painting makes this wallet an ideal fashion accessory.</p>
                    <div className="hidden lg:block lg:ml-[20px] ">
                        <div className="flex my-[10px] hover:scale-100  ">
                            <div className=" p-[10px] border border-black  ">
                                < img src={require('./assets/collimg/i.jpeg')} alt="" />
                            </div>
                            <div className=" p-[10px] pr-[20px] border border-black  ">
                                <h1>
                                    Art flowers
                                </h1>
                                <h1 className='font-[600]' >MINIWALLET</h1>
                            </div>
                        </div>
                    </div>

                    </div>
                </div>
            {/* section 3 end */}

            {/* section 4 begin */}
            <div className="bg-[rgb(72,78,61)]  py-[90px] px-[25px] md:px-[35px] xl:grid xl:grid-cols-2 ">
                <div className="">
                    <img className='w-[100vw] border-b border-white pb-[21px] xl:border-0 lg:pr-[10px] ' src={require('./assets/collimg/3e.jpeg')} alt="" />
                    <h1 className='text-white py-[10px] hidden lg:block' >Mainwallet Art pearl Barring </h1>
                </div>
                <div className="">
                    <img className='w-[100vw] pt-[20px] lg:border-l lg:pt-0 lg:pl-[20px] lg:border-white ' src={require('./assets/collimg/3f.jpeg')} alt="" />
                    <h1 className='text-white py-[10px] lg:hidden' >Mainwallet Art pearl Barring </h1>
                </div>
            </div>
            {/* section 4 end */}

            {/* section 5 begin */}
                    <div className="py-[90px] px-[15px] md:px-[30px] lg:grid lg:grid-cols-3 ">

                    <div className="pb-[100px] lg:col-span-2 ">
                      <img className='lg:pr-[20px] xl:ml-[30px] ' src={require('./assets/collimg/3g.jpeg')} alt="" />
                      <div className="flex my-[10px] hover:scale-100 lg:hidden ">
                         <div className=" p-[10px] border border-black  ">
                        < img src={require('./assets/collimg/ii.jpeg')} alt="" />
                         </div>
                         <div className=" p-[10px] pr-[20px] border border-black  ">
                            <h1>
                                Art Pearl Earring
                            </h1>
                            <h1 className='font-[600]' >MINIWALLET</h1>
                         </div>
                      </div>
                    </div>

                    <div className="border-l border-black xl:pl-[40px] xl:pt-[20px] ">
                    <img className='ml-[60px] pb-[30px] md:ml-[80px] lg:ml-[20px] lg:pt-[40px]  ' src={require('./assets/collimg/3h.jpeg')} alt="" />
                    <h1 className='pl-[15px] md:pl-[25px] text-[30px] font-[600] pb-[10px] ' >GIRL WITH <br /> THE PEARL <br /> EARRING</h1>
                    <p  className='pl-[15px] ms:pl-[25px] pr-[30px] md:text-[30px] md:pr-[50px] '>Vermeer’s Girl with the Pearl Earring, sometimes called the Mona Lisa of the North,
                         has fascinated many millions all around the world. Inspiring books, films and art from 
                         all fields. We set the pearl right at the center of the composition, showing Vermeer’s
                          unparalleled skill in playing with light. While the girl’s mysterious glance and smile are
                           on the back of the wallet, adding to her mysterious allure.</p>
                    <div className="hidden lg:block lg:ml-[20px] ">
                        <div className="flex my-[10px] hover:scale-100  ">
                            <div className=" p-[10px] border border-black  ">
                                < img src={require('./assets/collimg/ii.jpeg')} alt="" />
                            </div>
                            <div className=" p-[10px] pr-[20px] border border-black  ">
                                <h1>
                                    Art Pearl Earrin
                                </h1>
                                <h1 className='font-[600]' >MINIWALLET</h1>
                            </div>
                        </div>
                    </div>

                    </div>
                </div>

            {/* section 5 end */}

            {/* section 6 begin */}
                <div className="bg-[rgb(72,78,61)] px-[20px] py-[50px]  md:px-[50px] xl:px-[50px] xl:py-[65px] ">
                    <img className='w-[100vw] ' src={require('./assets/collimg/3i.jpeg')} alt="" />
                    <h1 className='text-white md:text-[15px] xl:text-[30px] ' >Miniwallet Art Goldfinch</h1>
                </div>
            {/* section 6 end */}

            {/* section 7 begin */}
                     <div className="py-[90px] px-[15px] md:px-[30px] lg:grid lg:grid-cols-3 ">

                    <div className="pb-[100px] lg:col-span-2 ">
                         <img className='lg:pr-[20px] xl:ml-[30px] ' src={require('./assets/collimg/3j.jpeg')} alt="" />
                      <div className="flex my-[10px] hover:scale-100 lg:hidden ">
                         <div className=" p-[10px] border border-black  ">
                             < img src={require('./assets/collimg/iii.jpeg')} alt="" />
                         </div>
                         <div className=" p-[10px] pr-[20px] border border-black  ">
                            <h1>
                               Art Goldfinch
                            </h1>
                            <h1 className='font-[600]' >MINIWALLET</h1>
                         </div>
                      </div>
                    </div>

                    <div className="border-l border-black xl:pl-[40px] xl:pt-[20px] ">
                    <img className='ml-[60px] pb-[30px] md:ml-[80px] lg:ml-[20px] lg:pt-[40px]  ' src={require('./assets/collimg/3k.jpeg')} alt="" />
                    <h1 className='pl-[15px] md:pl-[25px] text-[30px] font-[600] pb-[10px] ' >THE <br /> GOLDFINCH</h1>
                    <p  className='pl-[15px] ms:pl-[25px] pr-[30px] md:text-[30px] md:pr-[50px] '>The Goldfinch has always been a favourite of art-lovers, but it recently
                         became an international phenomenon in after the success of Donna Tart’s best-selling 
                         novel and subsequent film of the same title. Fans of the book from all over the world 
                         flocked to the Netherlands to see the painting. Now they can carry it with them in their pocket
                         .</p>
                    <div className="hidden lg:block lg:ml-[20px] ">
                        <div className="flex my-[10px] hover:scale-100  ">
                            <div className=" p-[10px] border border-black  ">
                                < img src={require('./assets/collimg/iii.jpeg')} alt="" />
                            </div>
                            <div className=" p-[10px] pr-[20px] border border-black  ">
                                <h1>
                                   Art Goldfinch
                                </h1>
                                <h1 className='font-[600]' >MINIWALLET</h1>
                            </div>
                        </div>
                    </div>

                    </div>
                </div>
            {/* section 7 end */}

            {/* {section 8 begin} */}
                <div className="bg-[rgb(72,78,61)]  py-[90px] px-[25px] md:px-[35px] xl:grid xl:grid-cols-2 ">
                <div className="">
                    <img className='w-[100vw] border-b border-white pb-[21px] xl:border-0 lg:pr-[10px] ' src={require('./assets/collimg/3l.jpeg')} alt="" />
                    <h1 className='text-white py-[10px] hidden lg:block' >Mainwallet Art Art Night Watch </h1>
                </div>
                <div className="">
                    <img className='w-[100vw] pt-[20px] lg:border-l lg:pt-0 lg:pl-[20px] lg:border-white ' src={require('./assets/collimg/3m.jpeg')} alt="" />
                    <h1 className='text-white py-[10px] lg:hidden' >Mainwallet Art Art Night Watch </h1>
                </div>
            </div>
            {/* {section 9 begin} */}
                <div className="py-[90px] px-[15px] md:px-[30px] lg:grid lg:grid-cols-3 ">

                    <div className="pb-[100px] lg:col-span-2 ">
                         <img className='lg:pr-[20px] xl:ml-[30px] ' src={require('./assets/collimg/3n.jpeg')} alt="" />
                      <div className="flex my-[10px] hover:scale-100 lg:hidden ">
                         <div className=" p-[10px] border border-black  ">
                             < img src={require('./assets/collimg/iii.jpeg')} alt="" />
                         </div>
                         <div className=" p-[10px] pr-[20px] border border-black  ">
                            <h1>
                               Art Night Watch
                            </h1>
                            <h1 className='font-[600]' >MINIWALLET</h1>
                         </div>
                      </div>
                    </div>

                    <div className="border-l border-black xl:pl-[40px] xl:pt-[20px] ">
                    <img className='ml-[60px] pb-[30px] md:ml-[80px] lg:ml-[20px] lg:pt-[40px]  ' src={require('./assets/collimg/3o.jpeg')} alt="" />
                    <h1 className='pl-[15px] md:pl-[25px] text-[30px] font-[600] pb-[10px] ' >THE NIGHT <br /> WATCH</h1>
                    <p  className='pl-[15px] ms:pl-[25px] pr-[30px] md:text-[30px] md:pr-[50px] '>Master of light and shadow, Rembrandt shows his full talent in
                         this iconic work. It is for this reason that the Night Watch is the centerpiece
                          of the Rijksmuseum and a national treasure of the Netherlands. The original is
                           noteworthy also for its impressive size, but we are sure it is just as inspiring in pocket-size
                           .</p>
                    <div className="hidden lg:block lg:ml-[20px] ">
                        <div className="flex my-[10px] hover:scale-100  ">
                            <div className=" p-[10px] border border-black  ">
                                < img src={require('./assets/collimg/iii.jpeg')} alt="" />
                            </div>
                            <div className=" p-[10px] pr-[20px] border border-black  ">
                                <h1>
                                   Art Night Watch
                                </h1>
                                <h1 className='font-[600]' >MINIWALLET</h1>
                            </div>
                        </div>
                    </div>

                    </div>
                </div>
            {/* {section 9 end} */}

                {/* footer */}
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

export default Dutch;