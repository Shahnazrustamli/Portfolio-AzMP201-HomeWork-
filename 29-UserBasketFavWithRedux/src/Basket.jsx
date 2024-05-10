import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useSelector } from "react-redux";
function Basket() {
  const {baskets}= useSelector((store)=>store.basket)

  return (
    <>
     <div className="cards container">
        {baskets &&
          baskets.map((item, index) => {
            return (
              <Card style={{ width: "18rem" }}>
                <div className="cardImage"><Card.Img className="image" variant="top" src={item.image} /></div>
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>{item.price}</Card.Text>
                  <Button variant="primary">Basket</Button>
                  <Button variant="primary">Fav</Button>

                </Card.Body>
              </Card>
            );
          })}
    </div>
    </>
  );
}

export default Basket;
