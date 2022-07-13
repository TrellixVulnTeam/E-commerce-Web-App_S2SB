import { useContext } from "react";
import { CategoriesContext } from "../../contexts/Categories";
import ProductCard from "../../components/Product-Card/ProductCard";

import "./Shop.scss";
import { Fragment } from "react/cjs/react.production.min";

const Shop = () => {
  const { categorysMap } = useContext(CategoriesContext);
  return (
    <>
      {Object.keys(categorysMap).map((title) => (
        <Fragment key={title}>
          <h2>{title}</h2>
          <div className='products-container'>
            {categorysMap[title].map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </Fragment>
      ))}
    </>
  );
};

export default Shop;
