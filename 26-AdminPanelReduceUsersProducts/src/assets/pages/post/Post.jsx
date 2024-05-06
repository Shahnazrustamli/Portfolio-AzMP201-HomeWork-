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
  const [usersInputValue, setUsersInputValue] = useState({
    name: "",
    username: "",
    isAdmin: "",
    gender: "",
    password: "",
    registrationDate: "",
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
  const [optionValue, setOptionValue] = useState("");
  const handleChange = (e) => {
    setOptionValue(e.target.value);
  };
  return (
    <>
      <div className="container custom-select">
        <select onChange={handleChange}>
          <option disabled>Choose</option>
          <option value="PostUser">Post User</option>
          <option value="PostProduct">Post Product</option>
        </select>
      </div>
      {optionValue === "PostProduct" && (
        <form className="post">
          <label htmlFor="">Name</label>
          <input
            type="text"
            value={inputValue.name}
            onChange={(e) =>
              setInputValue({ ...inputValue, name: e.target.value })
            }
          />
          <label htmlFor="">Price</label>
          <input
            type="text"
            value={inputValue.price}
            onChange={(e) =>
              setInputValue({ ...inputValue, price: e.target.value })
            }
          />
          <label htmlFor="">Description</label>
          <input
            type="text"
            value={inputValue.description}
            onChange={(e) =>
              setInputValue({ ...inputValue, description: e.target.value })
            }
          />
          <label htmlFor="">Category</label>
          <input
            type="text"
            value={inputValue.category}
            onChange={(e) =>
              setInputValue({ ...inputValue, category: e.target.value })
            }
          />
          <label htmlFor="">Image</label>
          <input
            type="text"
            value={inputValue.image}
            onChange={(e) =>
              setInputValue({ ...inputValue, image: e.target.value })
            }
          />
          <label htmlFor="">Rate</label>
          <input
            type="text"
            value={inputValue.rating.rate}
            onChange={(e) =>
              setInputValue({
                ...inputValue,
                rating: { ...inputValue.rating, rate: e.target.value },
              })
            }
          />
          <label htmlFor="">Count</label>
          <input
            type="text"
            value={inputValue.rating.count}
            onChange={(e) =>
              setInputValue({
                ...inputValue,
                rating: { ...inputValue.rating, count: e.target.value },
              })
            }
          />
          <button onClick={handleSubmit}>Submit</button>
        </form>
      )}
      {optionValue === "PostUser" && (
        <form className="post">
          <label htmlFor="">Name</label>
          <input type="text" />
          <label htmlFor="">Username</label>
          <input
            type="text"
            // value={inputValue.price}
            // onChange={(e) =>
            //   setInputValue({ ...inputValue, price: e.target.value })
            // }
          />
          <label htmlFor="">Password</label>
          <input
            type="password"
            // value={inputValue.description}
            // onChange={(e) =>
            //   setInputValue({ ...inputValue, description: e.target.value })
            // }
          />
          <label htmlFor="">Gender</label>
          <div>
            <input id="male" name="gender" type="radio" value={"Male"} />
            <label htmlFor="male">Male</label>
            <input id="female" name="gender" type="radio" value={"Female"} />
            <label htmlFor="female">Female</label>

            <input id="other" name="gender" type="radio" value={"Other"} />
            <label htmlFor="other">Other</label>
          </div>
          <label htmlFor="">Date</label>
          <input type="date" />
          <label htmlFor="">Admin</label>
          <div>
            {" "}
            <input type="radio" name="admin" id="yes" />
            <label htmlFor="yes">Yes</label>
            <input type="radio" name="admin" id="no" />
            <label htmlFor="no">No</label>
          </div>
          <button onClick={handleSubmit}>Submit</button>
        </form>
      )}
    </>
  );
};

export default Post;
