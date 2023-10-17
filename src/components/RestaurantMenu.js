import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestraurantMenu";
import RestaurantCategories from "./RestaurantCategories";
import { useState } from "react";


const RestaurantMenu = () => {

const { resId } = useParams();


const restaurantInfo = useRestaurantMenu(resId);

const [showIndex , setShowIndex] = useState(1);


  if (!restaurantInfo) {
    return <Shimmer/>; 
  }

  const {
    name,
    logo,
    id,
    cuisines,
    city,
    avgRatings,
    totalratings,
    itemCards,
  } = restaurantInfo;

  // console.log(restaurantInfo);




  const restaurantcategory = restaurantInfo.itemCards.filter((c) => {
    return (
      c?.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  });

  console.log(restaurantcategory);
  return (
    <div className="text-center mt-[50px] shadow">
      <h1 className="font-extrabold text-2xl " >{name}</h1>
      <p className="font-sm">{cuisines.join(" , ")}</p>
      <p className="text-sm font-sm">-----------------------------------------------------------------------------------------------------------------------------------</p>
      <p>
        {restaurantcategory.map((category , index ) => (
          <RestaurantCategories key={category?.card?.card?.title}
          data={category.card.card}
          showItems = {index === showIndex ? true : false}
          setShowIndex = {() => setShowIndex(index)}
          />
          
        ))}
      </p>
    </div>
  );
};

export default RestaurantMenu;
