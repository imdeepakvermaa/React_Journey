import { useState } from "react";
import ItemList from "./ItemList";


const RestaurantCategories = ({data , showItems , setShowIndex}) => {
    // const [showItems , setShowItems] = useState(false);

    const handleClick = () => {
        setShowIndex();

    }
    return (
        <div>
            <div className="w-6/12 mb-4 shadow-lg bg-gray-100 mx-auto my-4 ">
                <div className="flex justify-between cursor-pointer"
                    onClick={handleClick}
                
                >
                    <span className="font-bold text-xl p-3">{data.title} ({data.itemCards.length})</span>
                    <span className=""><i class="fa-solid fa-caret-down p-4"></i></span>
                </div>
                {showItems && <ItemList items={data.itemCards}/>}
            </div>
        </div>
    )

}

export default RestaurantCategories ;