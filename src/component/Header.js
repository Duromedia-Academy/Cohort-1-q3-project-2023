
import { useState } from "react";
import { Link } from "react-router-dom";










const Header = () => {
  const [menu, setMenu] = useState(false)

  const open = () => {
   setMenu(true)
}
  const close = () => {
   setMenu(false)
}

  

    return (
      // secrid header part
       <div className="   fixed w-full z-10  pt-4 m-auto max-w-full  ">
         <div className="   relative pt-2 pb-2  m-auto max-w-[425px]  bg-bg-white ">

               <div className="secrid  m-auto max-w-[400px] border-2 border-black border-solid bg-bg-white h-auto p-[2px]   ">
            
            <div className="text-center text-[20px] font-extrabold "> <Link to = "/"> SECRID</Link></div> 

            {/* icons in the secrid header */}
            <div className="space-x-[329px] pb-[5px]">
            <div className="flex space-x-1 absolute top-[20px]">
             {/* the menu click */}
               <div className="menu">
                  {
                  !menu  ?
                  <div className=" ">
                      <button onClick={open} className="menu border-r-2 border-black  px-[4px] transition-all duration-500   ">
                   <img src={require ('../assets/img/menu.png')} alt="" />
                  </button>
                      </div>
                   : 
                   <div className=" ">
                    <button onClick={close}  className="   px-[4px] border-r-2 border-black transition-all duration-500  ">
                    <img src={require ('../assets/img/close.png')} alt="" /> 
                     </button>

                   </div>
             }
               </div>
            {/*menu click end  */}

             {/* search btn */}
               <div className="search">
               <button className="search  ">
               

                   <img src={require ('../assets/img/search.png')} alt="" />
                  </button>
               </div>
               {/* search btn end*/}
             
               </div> 
             <div className="flex space-x-1 absolute top-[20px]">
               {/* location btn */}
               <div className="location">
               <button  className="location  border-r-2 border-black px-[4px] "><img src={require ('../assets/img/location.png')} alt="" /></button>

               </div>
               {/* location btn end */}
               {/* shop btn */}
               <div className="shop ">
               <button className="shop ">< img src={require ('../assets/img/briefcase.png')} alt="" /></button>
               </div>
               {/* shop btn end */}
             
               </div> 

              
            </div>
            

      </div>
      
         </div>

         {
               !menu  ?
                   ""
                   : 
                   <div onClick={close}  className="  bg-black bg-opacity-75 w-full h-[100vh] fixed -top-0 -z-[50] transition-[ease] duration-500 ">
                   <div  className="fixed top-[70px]   ">
                   <div  className=" fixed left-[50px] right-[50px] transition-all duration-500 mx-auto max-w-[425px]  ">
                   <div className="popup-wrapper relative bg-bg-white  border-x border-b border-transparent text-center transition-all duration-500 " >
                      <ul className="list1 font-extrabold pt-[15px]  ">
                      {/* <button onClick={close} className=" close absolute  top-[-40px] left-[-20px] sm:left-[20px]       border border-black px-[4px] text-sm transition-all duration-500 ">x</button> */}
                      <li className=  " transition-all duration-400 hover:underline hover:text-[25px]  "> <Link to="/wallets ">  WALLETS</Link></li>
                         <li className=  " transition-all duration-400 hover:underline hover:text-[25px]  " ><Link to = "/stories"> STORIES</Link></li>
                         <li className=  " transition-all duration-400 hover:underline hover:text-[25px]  " ><Link to = "/collections"> COLLECTIONS</Link></li>
                      </ul>
                      <ul className="list2 border-b border-black pt-[15px] pb-[15px]">
                      <li className=  " transition-all duration-400 hover:underline hover:text-[25px]  " > <Link to = "/carerepair"> CARE&REPAIR</Link></li>
                      <li className=  " transition-all duration-400 hover:underline hover:text-[25px]  " ><Link to = "/ourphilosophy"> OUR PHILOSOPHY</Link></li>
                      <li className=  " transition-all duration-400 hover:underline hover:text-[25px]  " ><Link to = "/careclimate"> CARE FOR CLIMATE</Link></li>
                      
                      </ul>
             
                      <div className="dark-mode-setting grid grid-cols-2 p-[10px]">
                         <div className="dark-mode border-r border-black">
                            Dark mode
                         </div>
                         <div className="setting flex space-x-1 pl-[13px]">
                         <img src={require('../assets/img/setting.png')} alt="setting" />
    
                      <Link to = "">
                      
                      settings
                      </Link>
                   
                         
                         </div>
                      </div>
                   
                   <div className="social-medias flex space-x-16 justify-center border-t border-black p-[10px]">
                      <button className="insta">
                      <Link to = "https://www.instagram.com/secrid/">
                      <img src={require('../assets/img/ig.png')} alt="" />
    
                      </Link>
                      </button>
                      <button className="insta">
                      <Link to = "https://www.facebook.com/secrid">
                      <img src={require('../assets/img/fb.png')} alt="" />
    
                      </Link>
                      </button>
                      <button className="insta">
                      <Link to = " https://www.linkedin.com/company/secrid/">
                      <img src={require('../assets/img/in.png')} alt="" />
    
                      </Link>
                      </button>
             
                   </div>
                   </div>
                   </div>
                   </div>
                   </div>
                   
             }


    
       </div>
   
    );


   
}
 
export default Header;