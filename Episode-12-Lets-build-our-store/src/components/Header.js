import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";

const Header = () => {

    const [btnName, setBtnName] = useState("Login");

    const onlineStatus = useOnlineStatus();

    //Subscribing to the store using Selector

    const cartItems = useSelector((store) => store.cart.items);

    return(
        <div className="flex px-8 py-5 justify-between bg-[#003049] text-[#eae2b7]">
            <div className="logo w-14">
                <img src={require("../../food-logo.png")} alt="food-logo" />
            </div>
            <div className="flex items-center">
                <ul className="flex">
                    <li className="px-3">Online Status {onlineStatus ? "🟢" : "🔴"}</li>
                    <li className="px-3"><Link to="/" className="nav-item">Home</Link></li>
                    <li className="px-3"><Link to="/about" className="nav-item">About Us</Link></li>
                    <li className="px-3"><Link to="/contact" className="nav-item">Contact Us</Link></li>
                </ul>
            </div>
            <div className="flex items-center">
                <Link to="/cart">
                <i className="fa-solid fa-cart-shopping text-2xl"></i><span className="mr-4">({cartItems.length})</span>
                </Link>
                <button className="px-4 py-1 border border-solid bg-[#eae2b7] text-[#003049] font-medium rounded-md active:bg-slate-100" onClick={() => {
                    btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
                }}>{btnName}</button>
            </div>
        </div>
    )
}

export default Header;