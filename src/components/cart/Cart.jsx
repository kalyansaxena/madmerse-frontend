import Navbar from "../navbar/Navbar";
import "./cart.scss";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeProduct, updateProduct } from "../../redux/cartRedux";
import Footer from "../footer/Footer";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onCheckout = () => {
    navigate("/check-out");
  };

  const updateQuantity = (type, product) => {
    if (type === "dec") {
      if (product.quantity > 1) {
        dispatch(
          updateProduct({
            ...product,
            quantity: product.quantity - 1,
          })
        );
      } else {
        dispatch(
          removeProduct({
            id: product.id,
            cartItemId: product.cartItemId,
            title: product.title,
          })
        );
        if (cart.cartQuantity - 1 === 0) {
          navigate("/shop");
        }
      }
    } else if (type === "inc") {
      dispatch(
        updateProduct({
          ...product,
          quantity: product.quantity + 1,
        })
      );
    }
  };

  return (
    <div className="cart">
      <Navbar />
      {cart.products.length === 0 ? (
        <div className="empty-cart">
          <h2>Cart is empty</h2>
        </div>
      ) : (
        <div className="cart-wrapper">
          <div className="info-container">
            {cart.products.map((item) => (
              <div className="cart-item" key={item.cartItemId}>
                <div className="item-details">
                  <img
                    src={item.image}
                    alt="cart-item-img"
                    className="cart-item-img"
                  />
                  <div className="details">
                    <span className="item-name">
                      <b>Product:</b> {item.title}
                    </span>
                    <span className="item-size">
                      <b>Size:</b> {item.size}
                    </span>
                  </div>
                </div>
                <div className="item-price-details">
                  <div className="product-quantity-container">
                    <AddIcon
                      onClick={() => updateQuantity("inc", item)}
                      className="icon"
                    />
                    <span className="quantity">{item.quantity}</span>
                    <RemoveIcon
                      onClick={() => updateQuantity("dec", item)}
                      className="icon"
                    />
                  </div>
                  <div className="product-total-price">
                    &#8377; {item.price * item.quantity}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="summary-container">
            <div className="summary-title">ORDER SUMMARY</div>
            <div className="summary-item">
              <span className="summary-item-title">Subtotal</span>
              <span className="summary-item-price"> &#8377; {cart.total}</span>
            </div>
            <div className="summary-item">
              <span className="summary-item-title">Estimated Shipping</span>
              <span className="summary-item-price"> &#8377; 5</span>
            </div>
            <div className="summary-item">
              <span className="summary-item-title">Shipping Discount</span>
              <span className="summary-item-price">&#8377; 5</span>
            </div>
            <div className="summary-item">
              <span className="summary-item-title">Total</span>
              <span className="summary-item-price">&#8377; {cart.total}</span>
            </div>
            <button className="checkout-now-button" onClick={onCheckout}>
              CHECKOUT NOW
            </button>
          </div>
        </div>
      )}
      <div></div>
      <Footer />
    </div>
  );
};

export default Cart;
