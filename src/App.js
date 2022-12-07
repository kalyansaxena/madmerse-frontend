import "./App.css";
import Checkout from "./components/checkout/Checkout";
import Success from "./components/checkout-success/Success";
import Canceled from "./components/checkout-canceled/Canceled";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Shop from "./components/shop/Shop";
import SingleProduct from "./components/singleProduct/SingleProduct";
import Cart from "./components/cart/Cart";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:category" element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/shop/product/:id" element={<SingleProduct />} />
          <Route path="/check-out" element={<Checkout />} />
          <Route path="/success" element={<Success />} />
          <Route path="/canceled" element={<Canceled />} />
        </Routes>
      </Router>
      <ToastContainer />
    </div>
  );
}

export default App;
