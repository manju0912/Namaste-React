import ItemList from "./ItemList";


const RestaurantCategory = ({data, showItems, setShowIndex}) => {

    console.log(data);

    const handleClick = () => {
        setShowIndex();
    };

    return (
        <div className="py-[15px]">
            <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                <h3 className="text-xl font-semibold">{data.title} ({data.itemCards.length})</h3>
                <h3 className="text-2xl font-semibold">+</h3>
            </div>
            {showItems && <ItemList items={data.itemCards}/>}
            <hr className="border-none py-[3px] bg-gray-200 mt-1 rounded" />
                
        </div>
        
        
    )
}

export default RestaurantCategory;