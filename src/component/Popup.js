import { Link} from "react-router-dom";

const Popup = ({setModalOn}) => {
    const close = () => {
        setModalOn(false)


    }
    return (
        <div onClick={close} className=" fixed left-[50px] right-[50px] top-[50px] bg-black bg-opacity-30 bg-contain">
        <div className="popup-wrapper relative bg-white  border border-black text-center m-auto max-w-[300px]" >
           <ul className="list1 font-extrabold pt-[15px] ">
           <button onClick={close} className=" close absolute  top-[-30px]  left-[10px]  border border-black px-[4px] text-sm ">x</button>
             <li> <Link to="/wallets">  WALLETS</Link></li>
              <li><Link to = "/stories"> STORIES</Link></li>
              <li><Link to = "/collections"> COLLECTIONS</Link></li>
           </ul>
           <ul className="list2 border-b border-black pt-[15px] pb-[15px]">
             <li> <Link to = "/carerepair"> CARE&REPAIR</Link></li>
             <li><Link to = "/ourphilosophy"> OUR PHILOSOPHY</Link></li>
             <li><Link to = "/careclimate"> CARE FOR CLIMATE</Link></li>
             
           </ul>
  
           <div className="dark-mode-setting grid grid-cols-2 p-[10px]">
              <div className="dark-mode border-r border-black">
                 Dark mode
              </div>
              <div className="setting flex space-x-2 pl-[20px]">
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
          
    );
}
 
export default Popup;