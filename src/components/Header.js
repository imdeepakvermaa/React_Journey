import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
// import { useSelector } from "react-redux";

const Header = () => {
  const [btnNameReact, setbtnNameReact] = useState("Login");

  const onlineStatus = useOnlineStatus();

  // const cartItems = useSelector((store) => store.cart.items);
  // console.log(cartItems);


  return (
    <header className="flex w-100 h-20 shadow-xl" >
      <div className="flex items-center justify-center pl-[120px]">
        <Link>
          <img className="w-[120px]" src="https://download.logo.wine/logo/Just_Eat/Just_Eat-Logo.wine.png" alt="Logo" />
        </Link>
        <div className="flex pl-8">
          <i className="fa-solid fa-location-dot mt-1"></i>
          <h2 className="pl-1 font-medium underline">Faridabad-Haryana</h2>
        </div>
      </div>



      <div className="flex items-center justify-center pl-[300px]">
        <div className="flex">
        <i class="fa-solid fa-globe pl-[30px] mt-1"></i>
        <h2 className="pl-1 font-medium">Status</h2>
        <p className="pl-1">
          {onlineStatus ? "✅" : "🔴"} 
        </p>
        </div>

        <Link to="/about">
          <div className="flex pl-10 ">
            <i class="fa-solid fa-house pl-[35px] mt-1"></i>
            <h2 className="pl-1 font-medium">About Us</h2> 
          </div>
        </Link>



        <Link to="/contact-us">
          <div className="flex pl-10">
            <i class="fa-solid fa-handshake-angle pl-[30px] mt-1"></i>
            <h2 className="pl-1 font-medium">Help</h2>
          </div>
        </Link>


        <div className="flex pl-10">
          <i class="fa-solid fa-cart-shopping pl-[30px] mt-1"></i>  
          <h2 className="pl-1 font-medium">Cart</h2> 
        </div>


        <div className="flex pl-10">
          <i class="fa-solid fa-user pl-[30px] mt-1"></i>   
          <div className="btn pl-1">
            <button
              className="Logout font-medium"
              onClick={() => {
                btnNameReact === "Logout"
                  ? setbtnNameReact("Login")
                  : setbtnNameReact("Logout");
              }}
            >
              {btnNameReact}
            </button>
          </div> 
        </div>
      </div>
      
    </header>
  );
};

export default Header;
