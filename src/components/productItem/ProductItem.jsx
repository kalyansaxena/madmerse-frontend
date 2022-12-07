import "./productItem.scss";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";

const ProductItem = ({ product }) => {
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate(`/shop/product/${product.id}`);
  };

  return (
    <div className="productItem">
      <img src={product.image} alt="productImage" className="productImage" />
      <div className="product-info">
        <div className="icon-section" onClick={handleSearch}>
          <SearchIcon />
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
