import Popup from "./Popup";
import { useState } from "react";
import { Link } from "react-router-dom";




const Header = () => {
  const [modalOn,setModalOn] = useState(false)
    
   // menu click
   const clicked =() => {
      setModalOn(true)
      
   }

  

    return (
      // secrid header part
       <div className="   fixed w-full z-10  pt-4 m-auto max-w-[1200px]">
         <div className="  bg-white relative pt-2 pb-2  m-auto max-w-[425px]   ">

               <div className="secrid  m-auto max-w-[400px] border-2 border-black border-solid bg-white h-auto p-[2px]   ">
            
            <div className="text-center text-[20px] font-extrabold "> <Link to = "/"> SECRID</Link></div> 

            {/* icons in the secrid header */}
            <div className="space-x-[329px] pb-[5px]">
            <div className="flex space-x-1 absolute top-[20px]">
               <div className="menu">

            {/* addede the menu click */}
               <button onClick={clicked} className="menu  border-r-2 border-black px-[4px] ">
                  <img src={require ('../assets/img/menu.png')} alt="" />
               </button>
            {/* end  */}
               </div>

               <div className="search">
               <button className="search  ">
               

                   <img src={require ('../assets/img/search.png')} alt="" />
                  </button>
               </div>
             
               </div> 
             <div className="flex space-x-1 absolute top-[20px]">
               <div className="menu">
               <button  className="menu  border-r-2 border-black px-[4px] "><img src={require ('../assets/img/location.png')} alt="" /></button>

               </div>

               <div className="search ">
               <button className="search ">< img src={require ('../assets/img/briefcase.png')} alt="" /></button>
               </div>
             
               </div> 

              
            </div>
            

      </div>
      
         </div>
        {/* secrid navmenu   */}
            {modalOn && <Popup setModalOn={setModalOn}/> }

    
       </div>
   
    );


   
}
 
export default Header;