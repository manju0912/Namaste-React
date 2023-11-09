import { useDispatch } from "react-redux";
import {IMG_URL} from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({items}) => {
    
    const dispatch = useDispatch();

    const handleAddItem = (item) => {
        //dispatch an action
        dispatch(addItem(item));
    }

    return (
        <div>
            {
                items.map((item) => (
                    <div data-testid="foodItems" className="flex justify-between py-[30px] border-b max-w-full" key={item.card.info.id}>
                        <div className="w-10/12 pr-5">
                            <h4 className="font-medium">{item.card.info.name}</h4>
                            <p> ₹ {item.card.info.price/100 || item.card.info.defaultPrice/100}</p>
                            <p className="text-gray-600">{item.card.info.description}</p>
                        </div>
                        <div className="w-2/12">
                            <img className="relative w-[120px] h-[90px] max-w-full rounded-md object-cover float-right" src={IMG_URL + item.card.info.imageId} />
                            <div className="mt-[45%] ml-[35%]">
                                <button className="absolute bg-slate-100 text-xs px-5 py-2 rounded font-bold hover:shadow-lg hover:shadow-slate-100 border border-gray-300" onClick={() => handleAddItem(item)}>ADD +</button>
                            </div>
                            
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default ItemList;