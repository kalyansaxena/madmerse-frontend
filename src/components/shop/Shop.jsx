import "./shop.scss";
import Navbar from "../navbar/Navbar";
import Products from "../products/Products";
import { useState } from "react";
import { useLocation } from "react-router-dom";

const Shop = () => {
  const location = useLocation();
  const category = location.pathname.split("/")[2];
  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("newest");

  const handleFilter = (e) => {
    setFilters({
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="shop">
      <Navbar />
      <div className="shop-section">
        <div className="shop-title">
          {category ? category.toUpperCase() : ""}
        </div>
        <div className="filter-sort-section">
          <div className="filter">
            <span className="filter-title">Filter:</span>
            <select name="size" onChange={handleFilter}>
              <option disabled>Size</option>
              <option>XS</option>
              <option>S</option>
              <option>M</option>
              <option>L</option>
              <option>XL</option>
            </select>
          </div>
          <div className="sort">
            <span className="sort-title">Sort:</span>
            <select name="sort" onChange={(e) => setSort(e.target.value)}>
              <option value="newest">Newest</option>
              <option value="asc">Price (asc)</option>
              <option value="desc">Price (desc)</option>
            </select>
          </div>
        </div>
      </div>
      <Products filters={filters} sort={sort} />
    </div>
  );
};

export default Shop;
