import RestaurantCard from "./RestaurantCard";
import restaurant from "../utils/mockData";
import { useState } from "react";

const Body = () => {

    const [restaurantList, setRestaurantList] = useState(restaurant);

    return(
        <div className="body-container">
            <div className="searchbar flex">
                <form>
                    <input type="text" id="search" name="search" placeholder="Search for cuisines, restaurants..."></input>
                    <button className="search-icon">
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </button>
                </form>
                <div>
                    <span>Sort By: </span>
                    <button className="filter-btn" onClick={() => {
                        const filteredList = restaurant.filter(
                            (res) => res.info.avgRating > 4);
                            console.log(filteredList);
                        setRestaurantList([...filteredList]);
                        }}>Top Rated</button>
                </div>
                    
            </div>
            <div className="rest-list flex">
                {
                    restaurantList.map((info) => (<RestaurantCard key={info.info.id} resData={info} />))
                }
            </div>
            
        </div>
    )
}

export default Body;