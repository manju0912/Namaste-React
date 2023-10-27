import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const {resData} = props;
    
    const {cloudinaryImageId, name, avgRating, cuisines, areaName} = resData?.info;

    return(
        <div className="w-[200px] rounded mb-7 hover:scale-[0.95] transition duration-[0.15s] hover:ease-in">
            <img src={CDN_URL + cloudinaryImageId} className="rounded h-[150px] w-[100%] object-cover"/>
            <div className="p-2">
                <h4 className="font-semibold truncate w-[20ch]">{name}</h4>
                <h4 className="font-medium"><i className="fa-solid fa-star text-green-900"></i> {avgRating}</h4>
                <p className="text-gray-800 truncate w-[20ch]">{cuisines.join(", ")}</p>
                <p className="text-gray-800">{areaName}</p>
            </div>
        </div>
    )
}



export default RestaurantCard;