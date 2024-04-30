import React, { useEffect, useReducer, useState } from "react";
import Table from "react-bootstrap/Table";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import "../App.css";
import Button from "react-bootstrap/Button";

function reducer(state, action) {
  switch (action.type) {
    case "SetData":
      return { ...state, data: action.data };
    case "AddToBasket":
      const existingItemIndex = state.basket.findIndex(
        (item) => item.id === action.item.id
      );
      if (existingItemIndex !== -1) {
        const updatedBasket = [...state.basket];
        const existingItem = updatedBasket[existingItemIndex];
        existingItem.quantity += 1;
        existingItem.totalPrice =
          existingItem.unitPrice * existingItem.quantity;
        return { ...state, basket: updatedBasket };
      } else {
        const newItem = {
          ...action.item,
          quantity: 1,
          totalPrice: action.item.unitPrice,
        };
        return { ...state, basket: [...state.basket, newItem] };
      }
    case "DeleteData":
      const updatedDataAfterDelete = state.data.filter(
        (elem) => elem.id !== action.id
      );
      const updatedBasketAfterDelete = state.basket.filter(
        (item) => item.id !== action.id
      );
      return {
        ...state,
        data: updatedDataAfterDelete,
        basket: updatedBasketAfterDelete,
      };
    default:
      break;
  }
}

const Admin = () => {
  const [state, dispatch] = useReducer(reducer, {
    data: [],
    basket: [],
  });

  useEffect(() => {
    axios("https://northwind.vercel.app/api/products")
      .then((res) => {
        dispatch({ type: "SetData", data: res.data });
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  function DeleteData(id) {
    axios
      .delete(`https://northwind.vercel.app/api/products/${id}`)
      .then(() => {
        // let arr = state.data.filter((elem) => elem.id != id);
        dispatch({ type: "DeleteData", id: id });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
  function EditData(id) {
    const newName = prompt("Enter new name:", state.data.name); //!inputun icerisine defolt olaraq kohne ad yazilmir :/
    if (newName) {
      axios
        .patch(`https://northwind.vercel.app/api/products/${id}`, {
          name: newName,
        })
        .then(() => {
          const newData = state.data.map((item) => {
            if (item.id === id) {
              return { ...item, name: newName };
            }
            return item;
          });
          dispatch({ type: "SetData", data: newData });
        })
        .catch((error) => {
          console.error("Error updating product:", error);
        });
    }
  }
  const AddToBasket = (item) => {
    dispatch({ type: "AddToBasket", item: item });
  };
  const totalPrice = state.basket.reduce(
    (total, item) => total + item.totalPrice,
    0
  );

  return (
    <div className="admin-table">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>UnitPrice</th>
            <th>Delete</th>
            <th>Edit</th>
            <th>Basket</th>
          </tr>
        </thead>
        <tbody>
          {state.data.map((el) => {
            return (
              <tr key={uuidv4()}>
                <td>{el.id}</td>
                <td>{el.name}</td>
                <td>{el.unitPrice}</td>
                <td>
                  <Button
                    onClick={() => {
                      DeleteData(el.id);
                      //   dispatch({
                      //     type: "SetData",
                      //     data: state.data,
                      //   });
                    }}
                    variant="danger"
                  >
                    Delete
                  </Button>
                </td>
                <td>
                  <Button
                    onClick={() => {
                      EditData(el.id);
                      //   dispatch({
                      //     type: "SetData",
                      //     data: state.data,
                      //   });
                    }}
                    variant="warning"
                  >
                    Edit
                  </Button>
                </td>
                <td>
                  <Button
                    variant="success"
                    onClick={() => {
                      AddToBasket(el);
                      //   dispatch({ type: "AddToBasket", basket: state.basket });
                    }}
                  >
                    Basket
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <div className="basket">
        <h1>Basket</h1>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Quantity</th>
              <th>Total Price</th>
            </tr>
          </thead>
          <tbody>
            {state.basket.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>{item.totalPrice}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        <p>Total Price: {totalPrice}</p>
      </div>
    </div>
  );
};

export default Admin;
