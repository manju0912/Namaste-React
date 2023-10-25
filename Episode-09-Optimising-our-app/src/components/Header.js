import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {

    const [btnName, setBtnName] = useState("Login");

    const onlineStatus = useOnlineStatus();

    return(
        <div className="container flex navbar">
            <div className="logo">
                <img src={require("../../food-logo.png")} alt="food-logo" />
            </div>
            <div className="nav">
                <ul className="flex">
                    <li>Online Status {onlineStatus ? "🟢" : "🔴"}</li>
                    <li><Link to="/" className="nav-item">Home</Link></li>
                    <li><Link to="/about" className="nav-item">About Us</Link></li>
                    <li><Link to="/contact" className="nav-item">Contact Us</Link></li>
                </ul>
            </div>
            <div className="icons flex">
                <i className="fa-solid fa-cart-shopping"></i>
                <button className="login-btn" onClick={() => {
                    btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
                }}>{btnName}</button>
            </div>
        </div>
    )
}

export default Header;