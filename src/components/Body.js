import RestaurantCard from "./RestaurantCard";
import { resList } from "../utils/mockData";

const Body = () => {
  const btnFilter = () => console.log("clicked");
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
        {resList.map((res) => (
          <RestaurantCard key={res.info.id} resData={res} />
        ))}
      </ul>
    </main>
  );
};

export default Body;
