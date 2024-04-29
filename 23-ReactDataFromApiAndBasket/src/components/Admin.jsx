import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import "../App.css";
import Button from "react-bootstrap/Button";
// import Form from "./Form";
const Admin = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios("https://northwind.vercel.app/api/products")
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  return (
    <div className="admin-table">
      {/* <Form setData={setData} data={data} /> */}
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
          {data.map((el) => {
            return (
              <tr key={uuidv4()}>
                <td>{el.id}</td>
                <td>{el.name}</td>
                <td>{el.unitPrice}</td>
                <td>
                  <Button
                    onClick={() => {
                      let arr = data.filter((elem) => elem.id != el.id);
                      setData(arr);
                      axios.delete(
                        `https://northwind.vercel.app/api/products/${el.id}`
                      );
                    }}
                    variant="danger"
                  >
                    Delete
                  </Button>
                </td>
                <td>
                  <Button
                    onClick={() => {
                      let newName = prompt(`"${el.name}" change`, el.name);
                      let arr = data.map((elem) => {
                        if (elem.id == el.id) {
                          elem.name = newName;
                        }
                        return elem;
                      });
                      setData(arr);
                      axios.patch(
                        `https://northwind.vercel.app/api/products/${el.id}`,
                        { name: newName }
                      );
                    }}
                    variant="warning"
                  >
                    Edit
                  </Button>
                </td>
                <td>
                  <Button variant="success">Basket</Button>
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
