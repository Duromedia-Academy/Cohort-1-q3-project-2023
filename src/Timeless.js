import Niel from './component/Niel';
import Yokun from './component/Yokun';
import Kunc from './component/Kunc';
import Explore from './component/Explore';


const Timeless = () => {
    return(

        <div className="bg-bg-white ">

            {/* header */}
            <div className="bg-[rgb(87,147,93)] ">
                <img className='w-[100vw] h-[1000px]  p-[50px]  ' src={require('./assets/collimg/4a.jpeg')} alt="" />
            </div>
            {/* header end */}

            {/* section 1 */}
            <p className='lg:p-[100px] p-[50px] text-[25px] font-noto font-[800] text-center lg:text-[50px]  ' >Sustainability starts with products that last. This also means timeless
                 designs that never go out of style. With a neutral colour palette, these 
                 wallets are ideal for everyday use for years to come. This is the essence of The Original Collection.</p>
            {/* section 1 end */}

            {/* section 2 */}
            <div className="  py-[90px] px-[25px] md:px-[35px] lg:grid lg:grid-cols-2 ">
                <div className="">
                    <img className='w-[100vw] border-b border-black pb-[21px] lg:border-0 lg:pr-[20px] xl ' src={require('./assets/collimg/4b.jpeg')} alt="" />
                    <h1 className='text-black py-[10px] hidden lg:block' >Miniwallet Original Red-Red </h1>
                </div>
                <div className="">
                    <img className='w-[100vw] pt-[20px] lg:border-l lg:pt-0 lg:pl-[20px] lg:border-black ' src={require('./assets/collimg/4c.jpeg')} alt="" />
                    <h1 className='text-black py-[10px] lg:hidden' >Miniwallet Original Red-Red </h1>
                </div>
            </div>
            {/* section 2 end */}

            {/* section 3 */}
            <div className="mb-[50px] ">
            <Niel/>
            </div>
            {/* section 3 end */}

            {/* section 4  */}
            <div className=" bg-[rgb(214,206,186)]  p-[25px] md:p-[35px] xl:p-[50px] lg:grid lg:grid-cols-3 ">
                <div className="">
                    <img className='w-[100vw] border-b border-black pb-[21px] lg:border-0 lg:pr-[20px] ' src={require('./assets/collimg/4g.jpeg')} alt="" />
                </div>
                <div className="">
                    <img className='w-[100vw] py-[20px] lg:border-x lg:pt-0 lg:px-[20px] lg:border-black ' src={require('./assets/collimg/4h.jpeg')} alt="" />
                </div>
                <div className="">
                    <img className='w-[100vw] border-t border-black pt-[21px] lg:border-0 lg:pr-[10px] lg:pt-0 lg:pl-[20px] ' src={require('./assets/collimg/4i.jpeg')} alt="" />
                </div>
            </div>
            {/* section 4 end */}

            {/* section 5 */}
            <div className="  py-[140px] px-[25px] md:px-[35px] lg:grid lg:grid-cols-3 ">
                <div className="lg:col-span-2">
                    <img className='w-[100vw]  pb-[121px] lg:pr-[20px]  ' src={require('./assets/collimg/4j.jpeg')} alt="" />
                   
                </div>
                <div className="border-l border-black pl-[10px] md:pl-[20px] lg:pt-[650px] ">
                    <h1 className='pt-[150px] pb-[10px] md:pb-[20px] lg:pb-[30px] text-20px font-[600] md:text-[30px] lg:text-[35px] lg:font-[700] ' >THE FIRST CARDPROTECTOR</h1>
                    <h1 className='md:pr-[90px] md:text-[28px] lg:text-[15px] lg:pr-0 ' >
                        Secrid is the first company to introduce a Cardprotector to the market. A functional, durable and aesthetically pleasing card holder. It has won international awards for its quality and innovative features. The Cardprotector also has a predecessor, the Bodycard. The Bodycard design marks the entry into the world of cardholders and wallets. The adventure as 'wallet makers' starts with the application for the first cardholder patent, filed on 11 August 1995. Because more than ten years of experience had already been gained with the Bodycard and because Marianne and René,
                         the founders of Secrid, realised that during the economic crisis of 2008 nobody develops new products, they decided to fully concentrate on the development of 'the best card holder in the world' in 2009. This is also an opportunity to organise the design process as they see fit, with time and attention for design and distribution. A wish that arose from the work with SPIRID, the product development agency that Marianne and René had for Secrid. This time, the design is inspired by the iPhone introduced in 2007 in terms of contours and materials. At the time, Apple changed the design world by working with high quality materials: metal and glass instead of plastics. This sent Secrid in the direction of an aluminium Cardprotector.</h1>
                </div>
            </div>
            {/* section 5 end */}

            {/* section 6 */}
            <div className="mb-[60px] ">
                <Yokun/>
            </div>    
            {/*section 6 end  */}

            {/* section 7 */}
            <div className="bg-[rgb(145,158,131)] lg:grid lg:grid-cols-3 p-[30px] mb-[90px] ">
                <div className="col-span-2">
                <img className="lg:pr-[10px]" src={require('./assets/collimg/4o.jpeg')} alt="" />

                </div>
                <div className=" py-[40px] px-[10px] ">
                    <h1 className='text-[rgb(186,76,64)] italic text-[20px] py-[10px] font-[900] font-noto lg:text-[30px] lg:pr-[180px] ' > Designed to last</h1>
                    <p className='text-white md:pr-[90px] md:text-[25px] lg:pr-0 '>
                        Secrid is driven by creativity, an interest in people and a holistic approach to design. This has led to our vision of product development. We call this the 'Industrial Evolution'. The general guideline is simple: every new product has to be better than the previous one. Sometimes this is visible, think of new material, but sometimes there are many improvements that you cannot see, like the inside of the Cardprotector. The first version of the Cardprotector won the Red Dot Design Award in 2010. In the same year we launched our line of leather wallets. Two years later Secrid won the European Aluminium Award with the Miniwallet. Secrid protects its inventions through patents. This gives us a unique position compared to the competition. It gives us an edge and a quality advantage. Secrid uses its patents to challenge itself; new products must be truly new and inventive.</p>
                </div>
            </div>
            {/* section 7 end */}

            {/* section 8 */}
            <div className="mb-[60px]">
            <Kunc/>
            </div>
            {/* section 8 end */}

            {/* section 9 */}
            <div className="pb-[90px] grid grid-cols-1 lg:grid-cols-2 ">

                <div className="p-[10px] lg:p-0  ">
                <img className='lg:border-r lg:border-[#474747]  lg:ml-[70px] lg:pr-[50px] xl:ml-[80px] xl:pr-[60px] w-[100vw]' src={require('./assets/collimg/4t.jpeg')} alt="" />
                </div>

                <div className="grid grid-cols-2 px-[10px] md:px-5 lg:grid-cols-1 lg:ml-[70px] xl:ml-[90px]  ">

                    <div className="border-r border-[#474747] pr-[10px] md:pr-[30px] lg:border-0 lg:pl-[40px] xl:pr-0 ">
                        <img className='xl:w-[500px]' src={require('./assets/collimg/4u.jpeg')} alt="" />

                        <h1 className='text-[15px] pt-[5px]'>
                            Matte Black
                        </h1>
                        <h1 className='font-[600] py-[5px] uppercase' >
                            TWINWALLET
                        </h1>
                        
                    </div>

                    <div className="pl-[10px] md:pl-[40px] lg ">
                        <img className='xl:w-[500px]' src={require('./assets/collimg/4v.jpeg')} alt="" />

                        <h1 className='text-[15px] pt-[5px]'> Matte Black</h1>
                        <h1 className='font-[600] py-[5px] uppercase'>miniwallet</h1>
                    </div>

                </div>

            </div>  
            {/* section 9 end */}

            {/* footer */}
            <div className=" bg-[rgb(49,42,36)] py-[50px] ">
                <h1 className='uppercase text-[30px] tracking-[1px] text-center font-[600] text-white ' >
                    Explore
                </h1>
                <div className="py-[30px]">
                    <Explore/>
                </div>
            </div>
            {/* footer */}

        </div>
       
    );
}

export default Timeless;