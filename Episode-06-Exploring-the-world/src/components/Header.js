import { useState } from "react";

const Header = () => {

    const [btnName, setBtnName] = useState("Login");

    return(
        <div className="container flex navbar">
            <div className="logo">
                <img src={require("../../food-logo.png")} alt="food-logo" />
            </div>
            <div className="nav">
                <ul className="flex">
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Offers</li>
                    <li>Contact Us</li>
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