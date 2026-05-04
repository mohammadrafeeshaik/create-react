import { useState, useEffect } from "react";
import ShimmerUI from "./ShimmerUI";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const fetchMenu = async () => {
    const data = await fetch(
      // "https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.38430&lng=78.45830&restaurantId=603116&catalog_qa=undefined&submitAction=ENTER",
      "https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.38430&lng=78.45830&restaurantId=408177&catalog_qa=undefined&submitAction=ENTER",
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

  console.log(name);

  const itemCards =
    resInfo?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
      ?.itemCards;

  console.log(itemCards);

  return (
    <div className="res-details">
      <h1>{name}</h1>
      <p>{avgRating} stars</p>
      <p>
        {cuisines?.join(", ")} - {costForTwoMessage}
      </p>
      <h2>Menu</h2>
      <ul>
        <li>Biryani</li>
        <li>Veg Biryani</li>
      </ul>
    </div>
  );
};

export default RestaurantMenu;
