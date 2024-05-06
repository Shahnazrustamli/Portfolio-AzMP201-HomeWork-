import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getAllData, putData } from "../../../services/provider";
import { endPoints } from "../../../services/api";
import { BASE_URL } from "../../../services/api";
const Edit = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({
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

  useEffect(() => {
    fetchData();
  }, [id]);

  const fetchData = async () => {
    try {
      const response = await getAllData(
        `${BASE_URL}${endPoints.suppliers}/${id}`
      );
      setProduct(response);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await putData(endPoints.suppliers + "/" + id, product);
      history.push("/"); 
    } catch (error) {
      console.error("Error updating data:", error);
    }
  };

  // return (
  //   <div className="edit">
  //     <h2>Edit Product</h2>
  //     <form onSubmit={handleSubmit}>
  //       <div>
  //         <label htmlFor="name">Name:</label>
  //         <input
  //           type="text"
  //           id="name"
  //           name="name"
  //           value={product.name}
  //           onChange={handleChange}
  //         />
  //       </div>
  //       <div>
  //         <label htmlFor="description">Description:</label>
  //         <input
  //           type="text"
  //           id="description"
  //           name="description"
  //           value={product.description}
  //           onChange={handleChange}
  //         />
  //       </div>
  //       <div>
  //         <label htmlFor="category">Category:</label>
  //         <input
  //           type="text"
  //           id="category"
  //           name="category"
  //           value={product.category}
  //           onChange={handleChange}
  //         />
  //       </div>
  //       <div>
  //         <label htmlFor="image">Image:</label>
  //         <input
  //           type="text"
  //           id="image"
  //           name="image"
  //           value={product.image}
  //           onChange={handleChange}
  //         />
  //       </div>
  //       <div>
  //         <label htmlFor="ratingRate">Rating Rate:</label>
  //         <input
  //           type="text"
  //           id="ratingRate"
  //           name="rating.rate"
  //           value={product.rating.rate}
  //           onChange={handleChange}
  //         />
  //       </div>
  //       <div>
  //         <label htmlFor="ratingCount">Rating Count:</label>
  //         <input
  //           type="text"
  //           id="ratingCount"
  //           name="rating.count"
  //           value={product.rating.count}
  //           onChange={handleChange}
  //         />
  //       </div>
  //       <div>
  //         <label htmlFor="price">Price:</label>
  //         <input
  //           type="text"
  //           id="price"
  //           name="price"
  //           value={product.price}
  //           onChange={handleChange}
  //         />
  //       </div>
  //       <button type="submit">Update</button>
  //     </form>
  //   </div>
  // );
};

export default Edit;
