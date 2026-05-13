import { useState, useEffect } from "react";
import { RESMENU, ITEMIMG } from "../utils/constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  const fetchMenu = async () => {
    if (!resId) return;
    setResInfo(null);

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
  }, [resId]);

  return resInfo;
};
export default useRestaurantMenu;
