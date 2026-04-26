import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import { resList } from "../utils/mockData";

const Body = () => {
  const [listOfRes, setListOfRes] = useState(resList);
  const btnFilter = () => {
    setListOfRes(listOfRes.filter((res) => res.info.avgRating > 4));
  };

  return (
    <main>
      <div>
        <div className="search">
          <input type="text" placeholder="Search" />
        </div>
        <div>
          <button onClick={btnFilter}>Top rated Restaurants</button>
        </div>
      </div>
      <ul className="restaurant-list">
        {listOfRes.map((res) => (
          <RestaurantCard key={res.info.id} resData={res} />
        ))}
      </ul>
    </main>
  );
};

export default Body;
