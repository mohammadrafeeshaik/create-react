import { useState, useEffect } from "react";
import { RESTAURANTS_URL } from "./constants";

const useRestaurants = () => {
  const [listOfRes, setListOfRes] = useState([]);
  const [allRes, setAllRes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      setError(null);
      const response = await fetch(RESTAURANTS_URL);
      const json = await response.json();

      const restaurants =
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;

      setAllRes(restaurants || []);
      setListOfRes(restaurants || []);
    } catch (err) {
      setError(err?.message || "Failed to fetch restaurants");
      setAllRes([]);
      setListOfRes([]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { listOfRes, allRes, isLoading, error };
};

export default useRestaurants;
