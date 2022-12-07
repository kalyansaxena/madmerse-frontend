import { Link } from "react-router-dom";
import "./categoryItem.scss";

const CategoryItem = ({ item }) => {
  return (
    <div className="categoryItem">
      <img src={item.img} alt="categoryImage" className="categoryImage" />
      <div className="info">
        <div className="title">{item.title}</div>
        <button className="shop-now-button">
          <Link to={`/shop/${item.category}`} className="link">
            SHOP NOW
          </Link>
        </button>
      </div>
    </div>
  );
};

export default CategoryItem;
