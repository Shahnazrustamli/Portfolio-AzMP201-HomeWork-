import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCard } from "./redux/slices/cardSlices";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { addToCard } from "./redux/slices/basketSlices";
import { addToWishlist } from "./redux/slices/favSlices";

const Home = () => {
  const dispatch = useDispatch();
  const { card } = useSelector((state) => state.card);
  useEffect(() => {
    dispatch(getCard());
  }, []);
  const addToBasket = (item) => {
    dispatch(addToCard(item));
  };
  const addToFav=(item)=>{
    dispatch(addToWishlist(item))
  }
  return (
    <div className="cards container">
      {card &&
        card.map((item, index) => {
          return (
            <Card style={{ width: "18rem" }}>
              <div className="cardImage">
                <Card.Img className="image" variant="top" src={item.image} />
              </div>
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.price}</Card.Text>
                <Button
                  variant="primary"
                  onClick={() => {
                    addToBasket(item);
                  }}
                >
                  Basket
                </Button>
                <Button
                  // variant="primary"
                  onClick={() => {
                    addToFav(item);
                  }}
                >
                  Fav
                </Button>
              </Card.Body>
            </Card>
          );
        })}
    </div>
  );
};

export default Home;
