import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const {resData} = props;
    
    const {cloudinaryImageId, name, avgRating, cuisines, areaName} = resData?.info;

    return(
        <div className="card-container">
            <img src={CDN_URL + cloudinaryImageId} />
            <div className="card-content">
                <h4>{name}</h4>
                <h4><i className="fa-solid fa-star"></i> {avgRating}</h4>
                <p>{cuisines.join(", ")}</p>
                <p>{areaName}</p>
            </div>
        </div>
    )
}

const RestaurantList = () => {
    return(
        <div className="restaurant-list">
            <RestaurantCard />
        </div>
    )
}

export default RestaurantCard;