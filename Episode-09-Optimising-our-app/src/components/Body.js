import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {

    const [restaurantList, setRestaurantList] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);

    const [searchText, setSearchText] = useState("");


    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.3164945&lng=78.03219179999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        
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
        <div className="body-container">
            <div className="searchbar flex">
                <div>
                    <input type="text" id="search" name="search" value={searchText} onChange={(e) => {setSearchText(e.target.value);}} placeholder="Search for cuisines, restaurants..."></input>
                    <button className="search-icon" onClick={() => {
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
                    <button className="filter-btn" onClick={() => {
                        const filteredList = restaurantList.filter(
                            (res) => res.info.avgRating > 4);
                            setFilteredRestaurant(filteredList);
                        }}>Top Rated</button>
                </div>
                    
            </div>
            <div className="rest-list flex">
                {
                    filteredRestaurant.map((info) => (<Link to={"/restaurants/" + info.info.id} key={info.info.id} className="link"><RestaurantCard resData={info} /></Link>))
                }
            </div>
            
        </div>
    )
}

export default Body;