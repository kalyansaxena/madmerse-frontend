import { useLocation } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import "./singleProduct.scss";
import { popularProducts } from "../../data";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useState } from "react";
import { addProduct } from "../../redux/cartRedux";
import { useDispatch, useSelector } from "react-redux";

const SingleProduct = () => {
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("XS");
  const location = useLocation();
  const dispatch = useDispatch();
  const path = location.pathname.split("/")[3];
  const product = popularProducts.find((p) => p.id.toString() === path);
  const cart = useSelector((state) => state.cart);

  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else if (type === "inc") {
      setQuantity(quantity + 1);
    }
  };

  const handleAddToCart = () => {
    dispatch(
      addProduct({
        ...product,
        quantity,
        size,
        cartItemId: cart.products.length + 1,
      })
    );
  };

  return (
    <div className="single-product">
      <Navbar />
      <div className="p-wrapper">
        <div className="p-image-container">
          <img src={product.image} alt="single-product" className="p-image" />
        </div>
        <div className="p-info-container">
          <div className="p-title">{product.title}</div>
          <div className="p-desc">{product.description}</div>
          <div className="p-price">&#8377; {product.price}</div>
          <div className="p-filters">
            <span className="p-filter-title">Size:</span>
            <select onChange={(e) => setSize(e.target.value)}>
              <option value={"XS"}>XS</option>
              <option value={"S"}>S</option>
              <option value={"M"}>M</option>
              <option value={"L"}>L</option>
              <option value={"XL"}>XL</option>
            </select>
          </div>
          <div className="add-container">
            <div className="quantity-container">
              <AddIcon onClick={() => handleQuantity("inc")} className="icon" />
              <span className="quantity">{quantity}</span>
              <RemoveIcon
                onClick={() => handleQuantity("dec")}
                className="icon"
              />
            </div>
            <div className="add-to-cart">
              <button className="add-to-cart-button" onClick={handleAddToCart}>
                ADD TO CART &nbsp;
                <ShoppingCartOutlinedIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SingleProduct;
