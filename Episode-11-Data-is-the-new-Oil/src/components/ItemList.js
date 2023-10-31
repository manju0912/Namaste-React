import {IMG_URL} from "../utils/constants";

const ItemList = ({items}) => {
    
    return (
        <div>
            {
                items.map((item) => (
                    <div className="flex justify-between py-[30px] border-b max-w-full" key={item.card.info.id}>
                        <div className="w-10/12 pr-5">
                            <h4 className="font-medium">{item.card.info.name}</h4>
                            <p> ₹ {item.card.info.price/100}</p>
                            <p className="text-gray-600">{item.card.info.description}</p>
                        </div>
                        <div className="w-2/12 relative">
                            <img className="w-[120px] h-[90px] max-w-full rounded-md object-cover float-right" src={IMG_URL + item.card.info.imageId} />
                            <div className="absolute -bottom-2 ml-[35%]">
                                <button className=" bg-slate-100 text-xs px-5 py-2 rounded font-bold hover:shadow-lg hover:shadow-slate-100 border border-gray-300">ADD +</button>
                            </div>
                            
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default ItemList;