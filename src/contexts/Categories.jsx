import { createContext, useEffect, useState } from "react";
import SHOP_DATA from "../shop-data.js";

import { getcategoriesAndDocuments } from "../utils/firebase";

export const CategoriesContext = createContext({
  categorysMap: {},
});

export const CategoriesProvider = ({ children }) => {
  const [categorysMap, setCategorysMap] = useState({});

  useEffect(() => {
    const getcategoriesMap = async () => {
      const categoryMap = await getcategoriesAndDocuments();
      console.log(categoryMap);
      setCategorysMap(categoryMap);
    };

    getcategoriesMap();
  }, []);

  const value = { categorysMap };

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
