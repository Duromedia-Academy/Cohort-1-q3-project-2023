import { Link } from "react-router-dom";

const Collections = () => {
    return ( 
        <div className="max-w-full ">

            <div className="bg-[#312A24] pt-[80px] pb-[20px] lg:pt-[100px] x ">

                <div className=" grid grid-cols-2 gap-[5px] px-[5px]  lg:grid-cols-3 xl:gap-[0] ">

                    <div className="border-r border-[rgb(141,139,139)] px-[20px] xl:px-[0] xl:pl-[90px] xl:pr-[90px] ">
                        <div className="py-[20px] ">
                           <Link to= '/progressive'>
                             <img src= {require('./assets/collimg/1a.jpeg')} alt="" />
                           </Link>
                        </div>
                        
                        <div className="py-[10px] lg:hidden ">
                        <Link to= '/dutch'>
                         <img src= {require('./assets/collimg/1h.jpeg')} alt="" />
                         </Link>

                        </div>
                       
                       <Link to= '/timeless' >
                        <div className="py-[10px] lg:hidden ">
                         <img src= {require('./assets/collimg/1f.jpeg')} alt="" />

                        </div>
                        </Link>
                        <div className="py-[10px] hidden lg:block">
                         <img src= {require('./assets/collimg/1b.jpeg')} alt="" />

                        </div>
                        <div className="py-[10px] ">
                         <img src= {require('./assets/collimg/1c.jpeg')} alt="" />

                        </div>
                        <div className="py-[10px] hidden lg:block">
                         <img src= {require('./assets/collimg/1d.jpeg')} alt="" />

                        </div>
                        <div className="py-[10px] lg:hidden ">
                         <img src= {require('./assets/collimg/1j.jpeg')} alt="" />

                        </div>
                    </div>


                    <div className="hidden lg:block lg:px-[20px] lg:border-r lg:border-[rgb(141,139,139)] lg:h-[1400px] xl:px-[0] xl:border-0 xl:pl-[70px] ">
                        <div className="py-[10px]  ">
                             <img src= {require('./assets/collimg/1e.jpeg')} alt="" />                                       
                        </div>

                        <Link to= '/timeless' >
                        <div className="py-[10px] ">
                            <img src= {require('./assets/collimg/1f.jpeg')} alt="" />           
                        </div>
                        </Link>
                        
                        <div className="py-[10px] ">
                            <img src= {require('./assets/collimg/1g.jpeg')} alt="" />           
                        </div>
                        
                    </div>


                    <div className="px-[20px] xl:px-[0] xl:border-l xl:border-[rgb(141,139,139)] xl:h-[1550px] xl:pl-[80px] ">
                    <Link to= '/dutch'>
                        <div className="py-[10px] hidden lg:block">
                        <img src= {require('./assets/collimg/1h.jpeg')} alt="" />
                        </div>
                      </Link>  
                        <div className="py-[10px] lg:hidden">
                        <img src= {require('./assets/collimg/1e.jpeg')} alt="" />
                        </div>
                        <div className="py-[10px] lg:hidden">
                        <img src= {require('./assets/collimg/1b.jpeg')} alt="" />
                        </div>
                        <div className="py-[10px] ">
                        <img src= {require('./assets/collimg/1i.jpeg')} alt="" />
                        </div>
                        <div className="py-[10px] lg:hidden">
                        <img src= {require('./assets/collimg/1g.jpeg')} alt="" />
                        </div>
                        <div className="py-[10px] lg:hidden">
                        <img src= {require('./assets/collimg/1d.jpeg')} alt="" />
                        </div>
                        <div className="py-[10px] hidden lg:block ">
                        <img src= {require('./assets/collimg/1j.jpeg')} alt="" />
                        </div>
                        
                    </div>
                </div>
            </div>
            
        </div>
     );
}
 
export default Collections;