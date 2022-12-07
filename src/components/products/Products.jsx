import "./products.scss";
import { popularProducts } from "../../data";
import ProductItem from "../productItem/ProductItem";
import { useEffect, useState } from "react";
import Footer from "../footer/Footer";

const Products = ({ filters, sort }) => {
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else if (sort === "desc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    } else {
      setFilteredProducts([...popularProducts]);
    }
  }, [sort]);

  return (
    <div className="products">
      {filteredProducts.map((product) => (
        <ProductItem product={product} key={product.id} />
      ))}
      <Footer />
    </div>
  );
};

export default Products;
