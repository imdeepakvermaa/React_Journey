import { useEffect, useState } from "react";
import { MENU_API } from "./constants";

const useRestaurantMenu = (resId) => {
  const restaurantFormat = {
    name: "",
    logo: "",
    id: "",
    cuisines: [],
    areaname: "",
    avgrating: "",
    totalratings: "", 
    itemCards: [],
  };

  const [restaurant, setRestaurant] = useState(restaurantFormat);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const url = MENU_API + '/' + resId; 
      const data = await fetch(url);
      const json = await data.json();
      console.log(json);

      const card = json?.data?.cards[0]?.card?.card?.info;


      const cuisineDetails = (json?.data?.cards[1]?.groupedCard?.cardGroupMap?.REGULAR?.cards) ? (json?.data?.cards[1]?.groupedCard?.cardGroupMap?.REGULAR?.cards): (json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

      setRestaurant({
        name: card?.name,
        logo: card?.cloudinaryImageId,
        id: card?.id,
        cuisines: card?.cuisines,
        areaname: card?.city,
        avgrating: card?.avgrating,
        totalratings: card?.totalRatingsStrings, 
        itemCards: cuisineDetails,
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return restaurant;
};

export default useRestaurantMenu;
