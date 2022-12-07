import React, { useEffect, useState } from "react";
import { useStripe } from "@stripe/react-stripe-js";
import "./checkout.scss";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import { useSelector } from "react-redux";

const Checkout = () => {
  const [email, setEmail] = useState("");
  const [items, setItems] = useState([]);
  const stripe = useStripe();
  const cartData = useSelector((state) => state.cart);

  useEffect(() => {
    const shoppingItems = cartData.products.map((p) => ({
      id: p.id,
      quantity: p.quantity,
    }));
    setItems(shoppingItems);
  }, [cartData.products]);

  const fetchCheckoutSession = async () => {
    try {
      const res = await fetch(
        "https://madmerse-backend.onrender.com/payment/create-checkout-session",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            items,
            customer_email: email,
          }),
        }
      );

      return res.json();
    } catch (error) {
      console.log(error);
    }
  };

  const handleCheckout = async (e) => {
    e.preventDefault();
    const { sessionId } = await fetchCheckoutSession();
    const { error } = await stripe.redirectToCheckout({
      sessionId,
    });
    if (error) {
      console.log(error);
    }
  };

  return (
    <div className="checkout">
      <Navbar />
      {cartData.cartQuantity > 0 ? (
        <div className="checkout-wrapper">
          <div className="summary">
            <div className="summary-title">Checkout summary</div>
            <div className="total-items">
              Total items: {cartData.cartQuantity}
            </div>
            <div className="total-amount">Amount: &#8377; {cartData.total}</div>
            <div className="checkout-section">
              <form className="checkout-form" onSubmit={handleCheckout}>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <button type="submit" className="checkout-button">
                    CHECKOUT
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      ) : (
        <div className="empty-cart">
          <h2>Cart is empty, can't proceed to checkout</h2>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Checkout;
