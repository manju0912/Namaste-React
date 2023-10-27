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
        <div className="px-[200px] py-10 text-gray-800">

            <div className="flex justify-between py-5">
                <div className="res-info">
                    <h2 className="font-bold text-2xl">{name}</h2>
                    <p>{cuisines.join(", ")}</p>
                    <p >{areaName}</p>
                </div>
                <div className="border rounded p-3">
                    <h4 className="font-semibold"><i className="fa-solid fa-star text-green-800"></i> {avgRating}</h4>
                    <hr className="my-2"/>
                    <p className="text-sm text-gray-700">{totalRatingsString}</p>
                </div>
            </div>
            <p className="pb-5 border-b-2 border-dashed border-gray-800"><i className="fas fa-thin fa-circle-info"></i> Based on distance, an additional delivery fee will apply</p>

            <div className="py-5">
                <h4 className="font-medium">{costForTwoMessage}</h4>
            </div>

            <div className="my-8">
                <div className="menu-list">
                    <div className="flex pb-5 border-b">
                        <h4>Veg Only</h4>

                        <input type="checkbox" id="switch" className="checkbox hidden" />
                        <label htmlFor="switch" className="toggle relative inline-block w-[40px] h-5 bg-[#d4d4d4] rounded ml-[10px] after:absolute after:w-4 after:h-4 after:bg-[#f8f9fa] after:rounded after:top-[2px] after:left-[2px] after:transition after:duration-50"></label>
                    </div>

                    {/* {cards[1] && ( */}
                    <div className="py-[30px]">
                        <h3 className="text-xl font-semibold">{cards[1].card.card.title}</h3>
                        {
                            itemCards.map((item) => (
                                <div className="flex justify-between py-[30px] border-b" key={item.card.info.id}>
                                    <div className="menu-info">
                                        <h4 className="font-medium">{item.card.info.name}</h4>
                                        <p> ₹ {item.card.info.price/100}</p>
                                        <p className="pr-[100px]">{item.card.info.description}</p>
                                    </div>
                                    <div>
                                        <img className="w-[120px] h-[100px] max-w-full rounded-md object-cover" src={IMG_URL + item.card.info.imageId} />
                                    </div>
                                </div>
                            ))
                        } 
                    
                    </div>
                    {/* )} */}
                    <hr className="border-none py-1 bg-gray-200" />

                    
                </div>
            </div>
            
        </div>
    )
}

export default RestaurantMenu;