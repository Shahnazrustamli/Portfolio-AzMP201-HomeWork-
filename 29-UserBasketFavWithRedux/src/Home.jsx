import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCard } from "./redux/slices/cardSlices";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Home = () => {
  const dispatch = useDispatch();
  const { card } = useSelector((state) => state.card);
  useEffect(() => {
    dispatch(getCard());
  }, []);

  return (
    <div className="cards container">
        {card &&
          card.map((item, index) => {
            return (
              <Card style={{ width: "18rem" }}>
                {/* <div className="cardImage"><Card.Img className="image" variant="top" src={item.image} /></div> */}
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>{item.unitPrice}</Card.Text>
                  <Button variant="primary">Basket</Button>
                </Card.Body>
              </Card>
            );
          })}
    </div>
  );
};

export default Home;
