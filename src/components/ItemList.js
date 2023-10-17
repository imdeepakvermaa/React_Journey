import { CDN_URL } from "../utils/constants";

const itemList = ({items}) => {
    console.log(items);
    return (
        <div>
            {items.map((item)=> (
                <div key={item.card.info.id} className="flex justify-between"
                >
                    <div className="p-2 m-2 border-gray-200 border-b-2 text-left">
                        <span className="font-medium text-lg">{item.card.info.name}</span>
                        <br />
                        <i class="text-sm font-light fa-solid fa-indian-rupee-sign"></i>
                        <span>{item.card.info.price
                            ? item.card.info.price / 100
                            : item.card.info.defaultPrice / 100
                        
                        }</span>
                        <p className="w-[540px] font-extralight text-sm pt-5 pb-5">{item.card.info.description}</p>
                    </div>

                    <div className="h-[140px] w-[200px]">
                        <img className="h-[100px] w-[150px] rounded-lg object-right mb-2 absolute"  src={CDN_URL + item.card.info.imageId} alt="none" />

                        <button className="w-[100px] h-[30px] text-lime-400 border-solid border-2 border-black bg-white mt-[85px] mr-8 rounded-lg relative shadow-lg ">
                            Add +
                        </button>
                    </div>


                    

                </div>

            ))}
        </div>
    );

};

export default itemList;