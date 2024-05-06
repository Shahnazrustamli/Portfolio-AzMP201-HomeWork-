// import useHistory from "react-router-dom";
import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import { getAllData, deleteById } from "../../../services/provider";
import "../../../App.css";
import SortUsers from "../../layout/sort/SortUsers";
 
const Users = ({ dispatch }) => {
  const [users, setUsers] = useState([]);
  // let history = useHistory();
  // function handleClick() {
  //   history.push("home");
  // }
  // let { userId } = useParams();
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getAllData("/users");
        setUsers(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteById("/users/", id);
      setUsers(users.filter((user) => user.id !== id));
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return (
    <div className="users container">
      <h1>Users</h1>
      <SortUsers dispatch={dispatch} />
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>USERNAME</th>
            <th>PASSWORD</th>
            <th>GENDER</th>
            <th>DATE</th>
            <th>ADMIN</th>
            <th>DELETE</th>
            <th>EDIT</th>
            <th>DETAIL</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.password}</td>
              <td>{user.gender}</td>
              <td>{user.registrationDate}</td>
              <td>{user.isAdmin ? "Yes" : "No"}</td>
              <td>
                <button onClick={() => handleDelete(user.id)}>Delete</button>
              </td>
              <td>
                <Link className="td" to={`/edit/${user.id}`}>
                  <button> Edit</button>
                </Link>
              </td>
              <td>
                <button>Detail</button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Users;
