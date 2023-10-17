import { CDN_URL } from "../utils/constants";

const ResContainer = (props) => {
    const {resData} = props;
    return (
            <div className="h-[260px] w-[240px] mt-5 rounded-xl">
                <img className="h-[150px] w-[220px] rounded-2xl shadow-xl mt-3 " src={CDN_URL + resData.info.cloudinaryImageId} alt="none" />
                <h5 className="font-bold font-sans text-4sm truncate pl-2">{resData.info.name}</h5>
                <div className="flex pl-2"> 
                    <i className="fa-solid fa-star mt-1 text-sm"></i>
                    <p className="pl-1 font-bold text-sm">{resData.info.avgRatingString}</p>
                </div>
            
                <p className="text-sm font-normal truncate pl-2">{resData.info.cuisines.join(", ")}</p>
                <p className="text-sm font-normal pl-2">{resData.info.costForTwo}</p>
                <p className="text-sm font-normal pl-2">{resData.info.sla.deliveryTime} minutes</p>
                
            </div>
    );
};
export default ResContainer;