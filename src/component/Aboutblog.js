// import Ourphilosophy from '../Ourphilosophy';
import { Link } from 'react-router-dom';
const Aboutblog = () => {
    return (
        <div className=" bg-bg-white pt-[75px] md:pt-[20px] ">
            <div className="flex text-[13px] justify-between p-[10px]">
                <div className="flex space-x-[40px] ">
                    <div className="">
                        <p className = "text-[10px]">
                            Published
                        </p>
                        <h1 className='font-[600] text-[15px] '>
                            MAR 17'23
                        </h1>
                    </div>
                    <div className="border-l border-black pl-[5px]">
                        <p>
                            Reading time
                        </p>
                        <h1 className='font-[600] text-[15px] '>
                           1M
                        </h1>
                    </div>
                    
                </div>
                <div className="flex space-x-[50px] ">
                    <div className="border-l border-black pl-[5px]">
                        <p>
                            Category
                        </p>
                        <h1 className='font-[600] text-[15px] '>
                            ABOUT
                        </h1>
                    </div>
                    <div className="border-l border-black pl-[5px]">
                        <p>
                            Article nr:
                        </p>
                        <h1 className='font-[600] text-[15px] '>
                           5
                        </h1>
                    </div>

                </div>
            </div>

            <div className="m-[5px] md:grid md:grid-cols-2 md:p-[15px]">
                <div className="flex justify-center">
                    <img className='md:border-r md:border-black md:pr-[10px] ' src={require('../assets/mayoimg/6a.jpeg')} alt="" />
                </div>
                <div className="my-[40px] border-l border-black pl-[10px] lg:flex lg:flex-row-reverse lg:my-0">
                    <div className="lg:pl-[10px]">
                        <h1  className='font-[600] text-[60px] ' >MADE IN</h1>
                        <h1 className='font-[600] text-[65px] leading-3 pb-[50px]'>HOLLAND</h1>
                        <h1 className='font-noto text-[20px] pb-[25px] '>A better world starts in your pocket</h1>
                        <p>By 2009, the leather industry had practically abandoned the Netherlands in favour of low-income countries.
                             Secrid brought this industry back to our home country.
                             By developing a radically different product and production process,
                             wallets are once again Made in Holland on a large scale. More efficiently
                              and cleaner than ever, in a quantity that has never been seen in our tiny country.</p>
                        
                    </div>
                    <div className="lg:border-r lg:border-black lg:pr-[10px]">
                        
                            <img src= {require('../assets/mayoimg/6ai.jpeg')} alt="" />
                       
                            <h6 className='font-noto'>Written by</h6>    
                            <p className='font-[600]'> RENE VAN GEER</p>
                            <p className='font-noto'>Co-founder</p>                    
                       
                    </div>
                </div>
            </div>

            <div className="bg-[#5C5648] p-[20px] pb-[50px] md:grid md:grid-cols-2 md:pt-8">
                <div className="">
                 <img className='border-b border-white pb-[10px] md:border-0 md:pb-0 md:pr-[10px]' src={require('../assets/mayoimg/6b.jpeg')} alt="" />
                </div>
                <div className="">
                 <img className='pt-[7px] md:pt-0 md:border-l md:border-white md:pl-[10px]' src= {require('../assets/mayoimg/6c.jpeg')} alt="" />
                </div>
            </div>

            <div className="px-[10px] pb-[80px] md:grid md:grid-cols-2 md:pt-[60px]">
                <div className="italic font-[600] font-noto text-[30px] leading-[35px] p-[20px] pr-[45px] md:pr-[120px] ">
                    <h1>
                        "Every day, close to 100 people assemble our products enthusiastically."
                    </h1>
                </div>
                <div className="border-l border-black pl-[10px] md:ml-[80px] ">
                    <p>
                    Close cooperation with our 50 suppliers is therefore very important: from the sewing workshop
                     in Vlaardingen to the social enterprise. Producing in favourable conditions and with due care for the environment, we have
                     already created more than 200 jobs in the Netherlands.
                     <br /> <br />
                     Every day, close to 100 people assemble our products
                      enthusiastically and with great precision at social enterprises in Leiden,
                       Delft and Haarlem. Together with these colleagues, we are constantly developing 
                       the tools and processes to maintain the quality of the product and the working conditions. After all the various
                        components have been assembled, every wallet receives its unique serial number as a proof of authenticity.
                    </p>
                </div>
            </div>
            <div className="relative">
                <video className='autoplay m-auto max-w-[400px] md:max-w-[700px] lg:max-w-[900px]'  src={require('../assets/mayoimg/all.mp4')} autoPlay loop></video>

                <div className="   ">
                   <img className='absolute top-[40%] bottom-[50%] left-[50%] right-[50%]' src={require('../assets/mayoimg/play.png')} alt="" />
                </div>
            </div>

            <div className="my-[50px]">
                <div className="text-[24px] px-[10px] font-[600] md:px-[20px] lg:px-[80px] py-[20px] ">
                    STORIES
                </div>
                <div className="text-center italic"> <Link to = "/ourphilosophy">
                    -/-Return </Link>
                </div>
            
                <div className="grid grid-cols-2 p-2 md:grid-cols-3 md:p-[20px] lg:grid-cols-4 lg:px-[80px] ">
                    <div className="border-r border-black pr-[10px] mb-[10px] md:mb-[20px] xl:mr-[20px] ">
                        <img className=' ' src={require('../assets/mayoimg/7a.jpeg')} alt="" /> 
                        <h1 className= "font-[600]">
                        THE POWER OF SMALL
                        </h1>
                        <p className = "text-[10px]">
                        Our patented mechanism, designed by Secrid's co-founder,inspired by his father.

                        </p>
                    </div>
                    <div className="pl-[10px] mb-[20px] md:border-r md:border-black md:pr-[10px] md:mb-[20px]  xl:mr-[10px] ">
                        <img className=' ' src={require('../assets/mayoimg/7b.jpeg')} alt="" />
                        <h1 className= "font-[600]">
                        OUR HEADQUARTERS
                        </h1>
                        <p className = "text-[10px]">
                        IN 2009, three people started the secrid adventure.Marlene,Rene and paul.Thirteen years later,our creative family consists of more than 100 collagues and we keep growing steadily.

                        </p>
                    </div>
                    <div className="border-r border-black pr-[10px] mb-[10px] md:border-0 md:pr-0 md:pl-[10px] lg:border-r lg:border-black lg:pr-[10px] xl:mr-[20px]  ">
                        <img className=' ' src={require('../assets/mayoimg/7c.jpeg')} alt="" />
                        <h1 className= "font-[600]">
                            HOW IT ALL STARTED
                        </h1>
                        <p className = "text-[10px]">
                            Secrid is a family business and 100% owned by van geer family. 
                            The company was founded by Rene van Geer family.The company was founded by Rene van Geer and marianne van Sasse Van Yseelt.

                        </p>
                    </div>
                    <div className="pl-[10px] mb-[20px] border-r border-black pr-[10px] lg:border-0 ">
                        <img className=' ' src={require('../assets/mayoimg/7d.jpeg')} alt="" />
                        <h1 className= "font-[600]">
                            MEET THE SECRID COMMUNITY
                        </h1>
                        <p className = "text-[10px]">
                            I'm always with my head in the clouds and super chaotic, Because
                            of this i always lost my cards.The Cardprotector is the Perfect gift to keep my cards safely togetherer.

                        </p>
                    </div>
                    <div className="border-r border-black pr-[10px] mb-[10px] md:pl-[10px] xl:mr-[20px]">
                        <img className=' ' src={require('../assets/mayoimg/7e.jpeg')} alt="" />
                        <h1 className= "font-[600]">
                            THE INDUSTRIAL EVOLUTION

                        </h1>
                        <p className = "text-[10px]">
                        Instead of chapter and worse; new products must be developed which are instriniscally 'better, more sustainable and more valuable'
                         than products that came before.
                        </p>
                    </div>
                    <div className="pl-[10px] mb-[20px]">
                        <img className=' ' src={require('../assets/mayoimg/7f.jpeg')} alt="" />
                        <h1 className= "font-[600]">
                            SECRID IS A CERTIFIED B CORP

                        </h1>
                        <p className = "text-[10px]">
                            While too many companies strive only to make as much profit as possibleat all costs.
                             B corporations primarily look at the
                             consequences for people, nature and the planet. 

                        </p>
                    </div>
                </div>
            </div>
        </div>

    );
}
 
export default Aboutblog;