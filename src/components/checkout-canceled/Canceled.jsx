import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import "./canceled.scss";

function Canceled() {
  return (
    <div>
      <Navbar />
      <div className="checkout-canceled">
        <div className="title">Payment failed</div>
        <p className="description">payment was not successful</p>
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

export default Canceled;
