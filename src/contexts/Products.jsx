import { createContext, useContext, useState } from "react";
import SHOP_DATA from "../shop-data.json";

export const ProductsContext = createContext({
  products: [],
});

export const ProdutctsProvider = ({ children }) => {
  const [products, setProducts] = useState(SHOP_DATA);
  const value = { products };

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
