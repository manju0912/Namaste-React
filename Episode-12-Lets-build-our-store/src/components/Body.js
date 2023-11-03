import RestaurantCard, {offerLabel} from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { RES_API } from "../utils/constants";

const Body = () => {

    const [restaurantList, setRestaurantList] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);

    const [searchText, setSearchText] = useState("");

    const RestaurantCardOffer = offerLabel(RestaurantCard);

    console.log("Body rendered", restaurantList);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(RES_API);
        
            const jsonData = await data.json();

            console.log(jsonData);

        setRestaurantList(jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(jsonData?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    const onlineStatus = useOnlineStatus();

    if (onlineStatus === false)
    return(
        <h1 className="body-container">Looks like you're offline! Please check your internet connection.</h1>
    );

    return restaurantList.length === 0 ? (<Shimmer />) 
    : (
        <div className="px-[90px]">
            <div className="flex justify-between my-6 pt-4">
                <div>
                    <input type="text" id="search" name="search" value={searchText} onChange={(e) => {setSearchText(e.target.value);}} placeholder="Search for cuisines, restaurants..." className="shadow
                     px-3 w-[350px] py-2 rounded-l-md"></input>
                    <button className="shadow rounded-r w-10 h-10 bg-[#eae2b7] active:bg-slate-100" onClick={() => {
                        const filteredRestaurant = restaurantList.filter(
                            (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
                            );

                        setFilteredRestaurant(filteredRestaurant);
                    }}>
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </button>
                </div>
                <div>
                    <span>Sort By: </span>
                    <button className="w-24 shadow px-2 py-1 rounded active:bg-slate-100" onClick={() => {
                        const filteredList = restaurantList.filter(
                            (res) => res.info.avgRating > 4);
                            setFilteredRestaurant(filteredList);
                        }}>Top Rated</button>
                </div>
                    
            </div>
            <div className="flex justify-between flex-wrap py-10">
                {
                    filteredRestaurant.map((info) => (
                    <Link to={"/restaurants/" + info.info.id} 
                        key={info.info.id} className="link">
                        {
                            info.info.aggregatedDiscountInfoV3 ? <RestaurantCardOffer resData={info} /> : <RestaurantCard resData={info} />
                        }
                        
                    </Link>))
                }
            </div>
            
        </div>
    )
}

export default Body;