import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import { removeFromBasket } from "./redux/slices/basketSlices";

function Basket() {
  const dispatch = useDispatch();

  const { baskets } = useSelector((store) => store.basket);

  const removeFromBasketHandler = (itemId) => {
    dispatch(removeFromBasket(itemId));
  };

  return (
    <>
      <div className="cards container">
        {baskets &&
          baskets.map((item, index) => {
            return (
              <Card key={index} style={{ width: "90rem" , display: "flex", flexDirection: "row"}}>
                <div className="cardImage">
                  <Card.Img className="image" variant="top" src={item.image} />
                </div>
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>{item.price}</Card.Text>
                  <Button onClick={() => removeFromBasketHandler(item.id)}>
                    <i className="fa-solid fa-trash"></i>
                  </Button>
                </Card.Body>
              </Card>
            );
          })}
      </div>
    </>
  );
}

export default Basket;
