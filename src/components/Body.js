import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import { resList } from "../utils/mockData";
import ShimmerUI from "./ShimmerUI";

const Body = () => {
  // mock data
  // const [listOfRes, setListOfRes] = useState(resList);

  // live data
  const [listOfRes, setListOfRes] = useState([]);
  // keep a copy of the full fetched list so we can restore on "Clear"
  const [allRes, setAllRes] = useState([]);
  const [searchText, setSearchText] = useState("");
  // debounce timer id
  const [debounceTimer, setDebounceTimer] = useState(null);

  const btnFilter = () => {
    setListOfRes(allRes.filter((res) => res.info.avgRating > 4));
  };

  const btnClear = () => {
    setListOfRes(allRes);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.38430&lng=78.45830&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
    );
    const json = await data.json();

    console.log(json);

    const restaurants =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || [];

    setAllRes(restaurants);
    setListOfRes(restaurants);
  };

  return (
    <main>
      <div>
        <div className="search">
          <input
            type="text"
            placeholder="Search"
            value={searchText}
            onChange={(e) => {
              const val = e.target.value;
              setSearchText(val);
              if (debounceTimer) clearTimeout(debounceTimer);
              const timer = setTimeout(() => {
                const filtered = allRes.filter((res) =>
                  res?.info?.name?.toLowerCase().includes(val.toLowerCase()),
                );
                setListOfRes(filtered);
              }, 300);
              setDebounceTimer(timer);
            }}
          />
        </div>
        <div>
          <button onClick={btnFilter}>Top rated Restaurants</button>
          <button onClick={btnClear}>Clear Filters</button>
        </div>
      </div>

      {listOfRes.length > 0 ? (
        <ul className="restaurant-list">
          {listOfRes.map((res) => (
            <RestaurantCard key={res.info.id} resData={res} />
          ))}
        </ul>
      ) : (
        <ShimmerUI />
      )}
    </main>
  );
};

export default Body;
