import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { postData } from "../../../services/provider";
import { endPoints } from "../../../services/api";

const Post = () => {
  const [inputValue, setInputValue] = useState({
    name: "",
    description: "",
    category: "",
    image: "",
    rating: {
      rate: "",
      count: "",
    },
    price: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await postData(endPoints.suppliers, { ...inputValue, id: uuidv4() });
    setInputValue({
      name: "",
      description: "",
      category: "",
      image: "",
      rating: {
        rate: "",
        count: "",
      },
      price: "",
    });
  };

  return (
    <form className="post">
      <label htmlFor="">Name</label>
      <input
        type="text"
        value={inputValue.name}
        onChange={(e) => setInputValue({ ...inputValue, name: e.target.value })}
      />
      <label htmlFor="">Price</label>
      <input
        type="text"
        value={inputValue.price}
        onChange={(e) => setInputValue({ ...inputValue, price: e.target.value })}
      />
      <label htmlFor="">Description</label>
      <input
        type="text"
        value={inputValue.description}
        onChange={(e) => setInputValue({ ...inputValue, description: e.target.value })}
      />
      <label htmlFor="">Category</label>
      <input
        type="text"
        value={inputValue.category}
        onChange={(e) => setInputValue({ ...inputValue, category: e.target.value })}
      />
      <label htmlFor="">Image</label>
      <input
        type="text"
        value={inputValue.image}
        onChange={(e) => setInputValue({ ...inputValue, image: e.target.value })}
      />
      <label htmlFor="">Rate</label>
      <input
        type="text"
        value={inputValue.rating.rate}
        onChange={(e) => setInputValue({ ...inputValue, rating: { ...inputValue.rating, rate: e.target.value } })}
      />
      <label htmlFor="">Count</label>
      <input
        type="text"
        value={inputValue.rating.count}
        onChange={(e) => setInputValue({ ...inputValue, rating: { ...inputValue.rating, count: e.target.value } })}
      />
      <button onClick={handleSubmit}>Submit</button>
    </form>
  );
};

export default Post;
