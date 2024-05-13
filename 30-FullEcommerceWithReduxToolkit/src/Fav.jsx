import React from "react";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import { removeFromWishlist } from "./redux/slices/favSlices";

function Fav() {
  const dispatch = useDispatch();
  const { favorites } = useSelector((store) => store.wishlist);
  
  const removeFromFavorites = (itemId) => {
    dispatch(removeFromWishlist(itemId));
  };

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
                  <button>
                    <i className="fa-solid fa-cart-shopping"></i>
                  </button>
                  <button onClick={() => removeFromFavorites(item.id)}>
                    <i className="fa-solid fa-trash"></i>
                  </button>
                </Card.Body>
              </Card>
            );
          })}
      </div>
    </>
  );
}

export default Fav;
