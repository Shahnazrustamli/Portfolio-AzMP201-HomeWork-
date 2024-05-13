import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const productContext = createContext();

export const ProdProvider = ({ children }) => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    axios("http://localhost:3000/suppliers").then((res) => {
      setProduct(res.data);
    });
  }, []);

  return (
    <productContext.Provider value={{ product, setProduct }}>
      {children}
    </productContext.Provider>
  );
};
