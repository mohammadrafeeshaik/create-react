import { resImg } from "../utils/constants";

const RestaurantCard = (props) => {
  const { cloudinaryImageId, name, cuisines, costForTwo, avgRating, sla } =
    props?.resData?.info;

  return (
    <li>
      <div className="restaurant-item">
        <div className="restaurant-img-wrapper">
          <img
            className="res-image"
            src={resImg + cloudinaryImageId}
            alt="res-image"
          />
        </div>
        <div className="restaurant-details">
          <h2>{name}</h2>
          <p>{cuisines.join(", ")}</p>
          <p>{avgRating} Stars</p>
          <p>{costForTwo}</p>
        </div>
      </div>
    </li>
  );
};

export default RestaurantCard;
