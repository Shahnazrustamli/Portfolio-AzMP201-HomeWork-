import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
function Fav() {
  const { favorites } = useSelector((store) => store.wishlist);
  console.log(favorites);
  return (
    <>
      <div className="cards container">
        {favorites &&
          favorites.map((item, index) => {
            return (
              <Card key={index} style={{ width: "18rem" }}>
                <div className="cardImage">
                  <Card.Img className="image" variant="top" src={item.image} />
                </div>
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

export default Fav;
