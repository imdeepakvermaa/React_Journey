import ResContainer from "./ResContainer";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom"; 
import useOnlineStatus from "../utils/useOnlineStatus";


const SecondPage = () => {
  const [listOfRes, setlistOfRes] = useState([]);
  const [filteredRes, seetfilteredRes] = useState([]);
  const [searchText, setsearchText] = useState("");

  console.log(listOfRes); 

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5729847&lng=77.32490430000001&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING#"
    );
    const json = await data.json();
    const arrayOfCards = json.data.cards;
    const restaurant_list = "restaurant_grid_listing";

    for (const cardObj of arrayOfCards) {
      if (cardObj.card.card && cardObj.card.card.id === restaurant_list) {
        const resData =
          cardObj.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setlistOfRes(resData);
        seetfilteredRes(resData);
      }
    }
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) return (<h1>Looks Like You're Offline Please Check Your Internet Connection.</h1>);



  return listOfRes.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="mt-4">
      <div className="flex justify-center items-center ">
        <div className="flex justify-center mt-8 shadow-xl rounded-lg text-center ">
          <input
            placeholder="What's on your mind?"
            type="text"
            className="w-[200px] h-[30px] rounded-s-xl text-center"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          />
          <div className="w-10 rounded-e-lg border-black bg-orange-400  ">
            <i 
              onClick={() => {
                const filteredData = listOfRes.filter((res) =>
                  res.info.name.toLowerCase().includes(searchText.toLowerCase())
                );
                seetfilteredRes(filteredData);
              }}
              class="fa-solid  fa-magnifying-glass h-[10px] mt-[3px]  font-bold text-xl text-center hover: cursor-pointer ">
              
            </i>
          </div>
        </div>
        <div className="pl-[100px] flex justify-center items-center">
          <button
            className=" w-[200px] h-[30px] rounded-xl text-center font-bold mt-8 bg-orange-300 border-solid border-2 border-gray-900 hover:bg-orange-400"
            onClick={() => {
              const filterData = listOfRes.filter(
                (res) => res.info.avgRatingString > 4
              );
              seetfilteredRes(filterData);
            }}
          >
            Top-Rated-Restaurants
          </button>
        </div>
        
      </div>

      <div className="ml-[150px] mr-[150px] mt-8">
        <div className="flex flex-wrap m-4 pr-4 gap-[40px] justify-center items-center">
          {filteredRes.map((restaurant) => (
            <Link
              key={restaurant.info.id}
              to={"/restaurants/" + restaurant.info.id}
            >
              <ResContainer resData={restaurant} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SecondPage;
