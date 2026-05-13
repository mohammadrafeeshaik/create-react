import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import ShimmerUI from "./ShimmerUI";
import { Link } from "react-router-dom";
import useRestaurants from "../utils/useRestaurants";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const { listOfRes, allRes, isLoading, error } = useRestaurants();
  const [filteredRes, setFilteredRes] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [debounceTimer, setDebounceTimer] = useState(null);
  const onlineStatus = useOnlineStatus();

  console.log(listOfRes);

  useEffect(() => {
    setFilteredRes(listOfRes);
  }, [listOfRes]);

  const handleSearchChange = (value) => {
    setSearchText(value);
    if (debounceTimer) clearTimeout(debounceTimer);

    const timer = setTimeout(() => {
      const filtered = allRes.filter((res) =>
        res?.info?.name?.toLowerCase().includes(value.toLowerCase()),
      );
      setFilteredRes(filtered);
    }, 300);

    setDebounceTimer(timer);
  };

  const handleTopRated = () => {
    setFilteredRes(allRes.filter((res) => res?.info?.avgRating > 4));
  };

  const handleClear = () => {
    setFilteredRes(allRes);
  };

  if (!onlineStatus) {
    return <h1>Looks like you're offline. Please check internet connection</h1>;
  }

  return (
    <main>
      <div>
        <div className="search">
          <input
            type="text"
            placeholder="Search"
            value={searchText}
            onChange={(e) => handleSearchChange(e.target.value)}
          />
        </div>
        <div>
          <button onClick={handleTopRated}>Top rated Restaurants</button>
          <button onClick={handleClear}>Clear Filters</button>
        </div>
      </div>

      {isLoading ? (
        <ShimmerUI />
      ) : error ? (
        <div>{error}</div>
      ) : filteredRes.length > 0 ? (
        <ul className="restaurant-list">
          {filteredRes.map((res) => (
            <Link to={`/restaurants/${res.info.id}`} key={res.info.id}>
              <RestaurantCard resData={res} />
            </Link>
          ))}
        </ul>
      ) : (
        <div>No restaurants found.</div>
      )}
    </main>
  );
};

export default Body;
