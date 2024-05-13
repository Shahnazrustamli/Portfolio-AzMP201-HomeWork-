import React, { useContext } from "react";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import "../../../App.css";
import Sort from "../../layout/sort/Sort";
import { productContext } from "../../../context/productContext";
const Admin = ({ state, dispatch }) => {
  const { product, setProduct } = useContext(productContext);
  return (
    <div className="container">
      <Sort dispatch={dispatch} />
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>PRICE</th>
            <th>CATEGORY</th>
            <th>IMAGE</th>
            <th>RATE</th>
            <th>COUNT</th>
            <th>EDIT</th>
          </tr>
        </thead>
        <tbody>
          {product.map((elem) => {
            return (
              <tr key={elem.id}>
                <td>{elem.id}</td>
                <td>{elem.title}</td>
                <td>{elem.price}</td>
                <td>{elem.category}</td>
                <td>
                  <img src={elem.image} alt="" />
                </td>
                <td>{elem.rating.rate}</td>
                <td>{elem.rating.count}</td>
                <td>
                  <Link className="td" to={`/admin/${elem.id}`}>
                    Edit
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default Admin;
