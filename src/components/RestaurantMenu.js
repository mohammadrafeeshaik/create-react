import ShimmerUI from "./ShimmerUI";
import { ITEMIMG } from "../utils/constants";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <ShimmerUI />;

  const infoCard = resInfo?.cards?.find((card) => card?.card?.card?.info)?.card
    ?.card?.info;

  const { name, costForTwoMessage, cuisines, avgRating } = infoCard || {};

  const getItemCards = (data) => {
    const regularCards = data?.cards?.find(
      (card) => card?.groupedCard?.cardGroupMap?.REGULAR,
    )?.groupedCard?.cardGroupMap?.REGULAR?.cards;

    if (Array.isArray(regularCards)) {
      const itemCardsContainer = regularCards.find((card) =>
        Array.isArray(card?.card?.card?.itemCards),
      );
      if (itemCardsContainer) return itemCardsContainer.card.card.itemCards;
    }

    const searchForItemCards = (node) => {
      if (!node || typeof node !== "object") return null;
      if (Array.isArray(node)) {
        for (const child of node) {
          const found = searchForItemCards(child);
          if (found) return found;
        }
        return null;
      }
      if (Array.isArray(node.itemCards)) return node.itemCards;
      for (const key of Object.keys(node)) {
        const found = searchForItemCards(node[key]);
        if (found) return found;
      }
      return null;
    };

    return searchForItemCards(data);
  };

  const itemCards = getItemCards(resInfo) || [];

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
        {itemCards.length === 0 ? (
          <div>No menu items available for this restaurant.</div>
        ) : (
          <ul>
            {itemCards.map((itemCard) => (
              <li key={itemCard?.card?.info?.id}>
                <div className="item-card">
                  <div>
                    {itemCard?.card?.info?.category}
                    <h3>
                      {itemCard?.card?.info?.name} -{" "}
                      {(itemCard?.card?.info?.defaultPrice ||
                        itemCard?.card?.info?.price) / 100}
                      /-
                    </h3>
                    <p>{itemCard?.card?.info?.description}</p>
                  </div>
                  <div>
                    <img
                      src={ITEMIMG + itemCard?.card?.info?.imageId}
                      alt={itemCard?.card?.info?.name || "item"}
                    />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default RestaurantMenu;
