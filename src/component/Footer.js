import { Link } from "react-router-dom";

const Footer = () => {
    return (  
        <div className=" max-w-full bg-footer text-bg-white p-[10px] relative">
            <div className="p1 md:grid grid-cols-2 md:border-b  ">

                <div className="p1a text-center pb-[20px] md:border-r md:mb-[10px]">
                    <p className="flex justify-center pb-[10px]">
                    <img src={require ('../assets/img/footerimg2.jpeg')} alt="" />

                    </p>

                    <p className="font-noto text-[20px]">Visit one of our 8500 retailers</p>

                    <Link  className="find border-b border-bg-white pb-[3px]  " to={''}>  FIND NEAREST  </Link>
                </div>

                <div className="p1b text-center pb-[30px] pt-[40px] border-t border-b mt-[10px] md:border-none ">
                    <h1 className="font-noto text-[30px] font-medium leading-3 md:text-[40px]">Secrid </h1>
                    <h1 className="font-noto text-[30px] font-medium  md:text-[40px]">Newsletter</h1>

                    <h4 className="text-[10px]">Get occasionally news and </h4>
                    <h4 className="text-[10px] pb-[20px]"> product releases.</h4>
                    <input className="inp border-b border-bg-white bg-footer text-center" type="text" placeholder="EMAIL " />
                </div>
                
            </div>

            <div className="absolute right-[50px] bottom-[590px] border p-[5px] bg-footer border-hidden md:bottom-[400px]">
                <img src= {require ('../assets/img/circleb.png')} alt="" />
            </div>


             <div className="grid grid-cols-2 mt-[10px] mb-[50px] md:grid-cols-4">
                <div className="pt-[60px]">
                    <ul className="pb-4 font-bold text-white">
                        <li> <Link to = "/wallets ">WALLETS</Link> </li>
                    </ul>
                    <ul className="text-[10px]  ">
                        <li className=" hover:underline "> <Link to = "/wallets"> All wallets </Link> </li>
                        <li className=" hover:underline "> <Link to = "/collections">  Collections</Link> </li>
                        <li className=" hover:underline "> <Link to = " "> Leather </Link> </li>
                        <li className=" hover:underline "> <Link to = " "> Mix & Match </Link> </li>
                        <li className=" hover:underline "> <Link to = " "> Corporate gifts </Link> </li>
                        <li className=" hover:underline "> <Link to = " "> Chipolo wallet tracker </Link> </li>
                    </ul>
                </div>
                
                <div className="border-l pt-[60px] pl-[10px]">
                    <ul  className="pb-4 font-bold text-white">
                        <li> <Link to = "carerepair "> WE CARE</Link> </li>
                    </ul>
                    <ul className="text-[10px]">
                        <li className=" hover:underline "> <Link to = " "> Support </Link> </li>
                        <li className=" hover:underline "> <Link to = " ">  User manual</Link> </li>
                        <li className=" hover:underline "> <Link to = "/carerepair "> Care & Repair </Link> </li>
                        <li className=" hover:underline "> <Link to = " "> Register wallet </Link> </li>
                        <li className=" hover:underline "> <Link to = " "> Contact </Link> </li>
                        <li className=" hover:underline "> <Link to = " "> Sustainability </Link> </li>
                    </ul>
    
                </div>
    
                <div className="  md:border-l md:pl-[10px] md:pt-[12px]">
                    <ul  className="pb-4 pt-12 font-bold text-white ">
                        <li> <Link to = "/ourphilosophy">ABOUT</Link> </li>
                    </ul>
                    <ul className="text-[10px]">
                        <li className=" hover:underline "> <Link to = "/ourphilosophy"> Our philosophy</Link> </li>
                        <li className=" hover:underline "> <Link to = " ">  Trade fair calendar</Link> </li>
                        <li className=" hover:underline "> <Link to = " "> Stores </Link> </li>
                        <li className=" hover:underline "> <Link to = " "> How it started </Link> </li>
                    </ul>
                </div>
    
                <div className="border-l pl-[10px] pb-[60px] md:pt-[8px]">
                    <ul  className="pb-4 pt-12 font-bold text-white">
                        <li> <Link to = "https://www.instagram.com/secrid/"> INSTAGRAM </Link> </li>
                        <li> <Link to = " https://www.facebook.com/secrid">FACEBOOK</Link> </li>
                        <li> <Link to = " https://www.linkedin.com/company/secrid/">LINKEDIN</Link> </li>
                    </ul>
                   
                   <h6 className="text-[10px] leading-3">Location</h6>
                  <p className="font-bold pb-[10px] text-white">
                   <Link to = "">REST OF WORLD </Link>
                   </p>
                   <h6 className="text-[10px] border-t pt-[10px] leading-3">Language</h6>
                   <p className="font-bold text-white">
                   <Link to = "">ENGLISH </Link>
                   </p>
                   
                </div>
            
        </div>

        <div className="border-t p-[20px] text-center text-[10px]">
            <h6 className="opacity-100"> From Holland with care © 2023 Secrid BV</h6>
            <h6 className="opacity-[0.3]">Terms and conditions / Privacy Policy</h6>

        </div>
          
        </div>
    );
}
 
export default Footer;