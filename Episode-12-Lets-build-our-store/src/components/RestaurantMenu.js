import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";


const RestaurantMenu = () => {

    const {resId} = useParams();

    const resInfo = useRestaurantMenu(resId);

    const [showIndex, setShowIndex] = useState(null);


    if(resInfo === null) return <Shimmer />;

    const {name, areaName, avgRating, costForTwoMessage, cuisines, totalRatingsString} = resInfo?.cards[0]?.card?.card?.info;

    const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    const {cards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR;

    console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

    const categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c => c.card?.card?.["@type"] === 
    "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

    console.log("categories", resInfo?.cards[0]?.card?.card?.info);
    
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
                <h4 className="font-bold">{costForTwoMessage}</h4>
            </div>

            <div className="my-8">
                <div className="menu-list">
                    <div className="flex pb-5 border-b">
                        <h4>Veg Only</h4>

                        <input type="checkbox" id="switch" className="checkbox hidden" />
                        <label htmlFor="switch" className="toggle relative inline-block w-[40px] h-5 bg-[#d4d4d4] rounded ml-[10px] after:absolute after:w-4 after:h-4 after:bg-[#f8f9fa] after:rounded after:top-[2px] after:left-[2px] after:transition after:duration-50"></label>
                    </div>

                    {/* Item List Accordion */}
                    {
                        categories.map((category, index) => (
                            <RestaurantCategory
                            key={category?.card?.card?.id} 
                            data={category?.card?.card}
                            showItems={index === showIndex ? true : false} 
                            setShowIndex={() => setShowIndex(index)}
                            />
                        ))
                    }
                    
                    

                    
                </div>
            </div>
            
        </div>
    )
}

export default RestaurantMenu;