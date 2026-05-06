import { useState, useEffect } from "react";
import ShimmerUI from "./ShimmerUI";
import { RESMENU, ITEMIMG } from "../utils/constants";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();

  const fetchMenu = async () => {
    const data = await fetch(
      RESMENU + resId,
      // "https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.38430&lng=78.45830&restaurantId=408177&catalog_qa=undefined&submitAction=ENTER",
    );
    const json = await data.json();
    console.log(json);
    setResInfo(json.data);
  };

  useEffect(() => {
    fetchMenu();
  }, []);

  if (resInfo === null) return <ShimmerUI />;

  const { name, costForTwoMessage, cuisines, avgRating } =
    resInfo?.cards?.[2]?.card?.card?.info || {};

  // console.log(name);

  const itemCards =
    resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
      ?.itemCards;

  console.log(itemCards);

  return (
    <div className="res-details">
      <div>
        <h1>{name}</h1>
        <p>{avgRating} stars</p>
        <p>
          {cuisines?.join(", ")} - {costForTwoMessage}
        </p>
      </div>
      <hr />
      <div>
        <h2>Menu</h2>
        <ul>
          {itemCards.map((itemCard) => (
            <li key={itemCard?.card?.info?.id}>
              <div className="item-card">
                <div>
                  <h3>
                    {itemCard?.card?.info?.name} -{" "}
                    {(itemCard?.card?.info?.defaultPrice ||
                      itemCard?.card?.info?.price) / 100}
                    /-
                  </h3>
                  <p>{itemCard?.card?.info?.description}</p>
                </div>
                <div>
                  <img src={ITEMIMG + itemCard?.card?.info?.imageId} alt="" />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
