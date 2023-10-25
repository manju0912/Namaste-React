import Shimmer from "./Shimmer";
// import { useState, useEffect } from "react";
import { IMG_URL } from "../utils/constants";
import { useParams } from "react-router-dom";
// import { MENU_API } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";


const RestaurantMenu = () => {

    // const [resInfo, setResInfo] = useState(null);

    const {resId} = useParams();

    const resInfo = useRestaurantMenu(resId);

    // useEffect(() => {
    //     fetchMenu();
    // }, []);

    // const fetchMenu = async () => {
    //     const data = await fetch(MENU_API + resId + "&submitAction=ENTER");

    //     const json = await data.json();

    //     console.log(json);

    //     setResInfo(json.data);

    // }


    if(resInfo === null) return <Shimmer />;

    const {name, areaName, avgRating, costForTwoMessage, cuisines, totalRatingsString} = resInfo?.cards[0]?.card?.card?.info;

    const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    const {cards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR;
    
    return (
        <div className="menu-container">

            <div className="restaurant-info flex">
                <div className="res-info">
                    <h2>{name}</h2>
                    <p>{cuisines.join(", ")}</p>
                    <p>{areaName}</p>
                </div>
                <div className="rating-box">
                    <h4><i className="fa-solid fa-star"></i> {avgRating}</h4>
                    <hr/>
                    <p>{totalRatingsString}</p>
                </div>
            </div>
            <p className="info"><i className="fas fa-thin fa-circle-info"></i> Based on distance, an additional delivery fee will apply</p>

            <div className="time-cost">
                <h4>{costForTwoMessage}</h4>
            </div>

            <div className="menu">
                <div className="menu-list">
                    <div className="toggle-div">
                        <h4>Veg Only</h4>

                        <input type="checkbox" id="switch" className="checkbox" />
                        <label htmlFor="switch" className="toggle"></label>
                    </div>

                    {/* {cards[1] && ( */}
                    <div className="menu-accordion">
                        <h3>{cards[1].card.card.title}</h3>
                        {
                            itemCards.map((item) => (
                                <div className="menus flex" key={item.card.info.id}>
                                    <div className="menu-info">
                                        <h4>{item.card.info.name}</h4>
                                        <p> ₹ {item.card.info.price/100}</p>
                                        <p>{item.card.info.description}</p>
                                    </div>
                                    <div className="menu-image">
                                        <img src={IMG_URL + item.card.info.imageId} />
                                    </div>
                                </div>
                            ))
                        } 
                    
                    </div>
                    {/* )} */}
                    <hr/>

                    
                </div>
            </div>
            
        </div>
    )
}

export default RestaurantMenu;