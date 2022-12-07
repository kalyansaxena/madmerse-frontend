import "./navbar.scss";
import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cartQuantity = useSelector((state) => state.cart.cartQuantity);

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="logo">
            <Link to="/" className="link">
              MADMERCE
            </Link>
          </div>
        </div>
        <div className="center">
          <div className="nav-items">
            <div className="nav-link">
              <Link to="/" className="link">
                HOME
              </Link>
            </div>
          </div>
          <div className="nav-items">
            <div className="nav-link">
              <Link to="/shop" className="link">
                SHOP
              </Link>
            </div>
          </div>
          {/* <div className="nav-items">
            <div className="nav-link">REGISTER</div>
          </div>
          <div className="nav-items">
            <div className="nav-link">SIGNIN</div>
          </div> */}
        </div>
        <div className="right">
          <div className="cart-icon">
            <Badge badgeContent={cartQuantity} color="primary">
              <Link to="/cart" className="link">
                <ShoppingCartOutlinedIcon style={{ fontSize: 30 }} />
              </Link>
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
