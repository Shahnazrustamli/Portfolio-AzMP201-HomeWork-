import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCard } from "./redux/slices/cardSlices";
import Card from "react-bootstrap/Card";
import { addToCard } from "./redux/slices/basketSlices";
import { addToWishlist } from "./redux/slices/favSlices";

const Home = () => {
  const dispatch = useDispatch();
  const { card } = useSelector((state) => state.card);
  const [favorites, setFavorites] = useState([]);
  
  useEffect(() => {
    dispatch(getCard());
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []);

  const addToBasket = (item) => {
    dispatch(addToCard(item));
  };

  const toggleFav = (item) => {
    const index = favorites.findIndex((favItem) => favItem.id === item.id);
    if (index === -1) {
      dispatch(addToWishlist(item));
      setFavorites([...favorites, item]);
    } else {
      const updatedFavorites = favorites.filter((favItem) => favItem.id !== item.id);
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      setFavorites(updatedFavorites);
    }
  };

  const isFavorite = (item) => {
    return favorites.some((favItem) => favItem.id === item.id);
  };

  return (
    <div className="cards container">
      {card &&
        card.map((item, index) => {
          const isFav = isFavorite(item);
          return (
            <Card key={index} style={{ width: "18rem" }}>
              <div className="cardImage">
                <Card.Img className="image" variant="top" src={item.image} />
              </div>
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.price}</Card.Text>
                <button
                  onClick={() => {
                    alert("Added to Basket");
                    addToBasket(item);
                  }}
                >
                  <i className="fa-solid fa-cart-shopping"></i>
                </button>
                <button
                  onClick={() => {
                    toggleFav(item);
                  }}
                >
                  {isFav ? (
                    <i className="fa-solid fa-heart"></i>
                  ) : (
                    <i className="fa-regular fa-heart"></i>
                  )}
                </button>
              </Card.Body>
            </Card>
          );
        })}
    </div>
  );
};

export default Home;
