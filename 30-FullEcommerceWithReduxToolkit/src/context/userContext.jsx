import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const usersContext = createContext();

export const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios("http://localhost:3000/users").then((res) => {
    //   console.log(res.data);
      setUsers(res.data);
    });
  }, []);
  // console.log(users);
  return (
    <usersContext.Provider value={{ users, setUsers }}>
      {children}
    </usersContext.Provider>
  );
};
