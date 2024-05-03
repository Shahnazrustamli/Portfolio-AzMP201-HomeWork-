import React, { useState } from "react";
import "../../../App.css";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import { postData } from "../../../services/provider";
import { BASE_URL, endPoints } from "../../../services/api";

const Post = () => {
  const [inputValue, SetInputValue] = useState({
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

  return (
    <form className="post">
      <label htmlFor="">Name</label>
      <input
        type="text"
        value={inputValue.name}
        onChange={(e) => {
          SetInputValue({ ...inputValue, name: e.target.value });
        }}
      />
      <label htmlFor="">Price</label>
      <input
        type="text"
        value={inputValue.price}
        onChange={(e) => {
          SetInputValue({ ...inputValue, price: e.target.value });
        }}
      />
      <label htmlFor="">Description</label>
      <input
        type="text"
        value={inputValue.description}
        onChange={(e) => {
          SetInputValue({ ...inputValue, description: e.target.value });
        }}
      />
      <label htmlFor="">Category</label>
      <input
        type="text"
        value={inputValue.category}
        onChange={(e) => {
          SetInputValue({ ...inputValue, category: e.target.value });
        }}
      />
      <label htmlFor="">Image</label>
      <input
        type="text"
        value={inputValue.image}
        onChange={(e) => {
          SetInputValue({ ...inputValue, image: e.target.value });
        }}
      />
      <label htmlFor="">Rate</label>
      <input
        type="text"
        value={inputValue.rating.rate}
        onChange={(e) => {
          SetInputValue({ ...inputValue, raiting: { rate: e.target.value } });
        }}
      />
      <label htmlFor="">Count</label>
      <input
        type="text"
        value={inputValue.rating.count}
        onChange={(e) => {
          SetInputValue({ ...inputValue, raiting: { count: e.target.value } });
        }}
      />
      <button
        onClick={(e) => {
          e.preventDefault();
          postData(endPoints.suppliers, uuidv4);
          SetInputValue({
            name: "",
            description: "",
            category: "",
            image: "",
            rating: {
              rate: 0,
              count: 0,
            },
            price: 0,
          });
        }}
      >
        Submit
      </button>
    </form>
  );
};

export default Post;
