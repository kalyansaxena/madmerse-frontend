import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { clearCart } from "../../redux/cartRedux";
import { useDispatch } from "react-redux";
import "./success.scss";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";

function Success() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearCart());
  }, [dispatch]);

  return (
    <div>
      <Navbar />
      <div className="checkout-success">
        <div className="title">Thank you for your order</div>
        <p className="description">
          we are currently processing your order and will send you a
          confirmation email shortly
        </p>
        <button className="shop-button">
          <Link to="/" className="link">
            Continue Shopping
          </Link>
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default Success;
