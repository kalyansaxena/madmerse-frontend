import "./footer.scss";
import { Link } from "react-router-dom";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import PhoneIcon from "@mui/icons-material/Phone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const Footer = () => {
  const date = new Date();
  const handleSocialClick = (type) => {
    if (type === "linkedin") {
      window.open("https://www.linkedin.com/in/kalyan-saxena/", "_blank");
    } else if (type === "github") {
      window.open("https://github.com/kalyansaxena", "_blank");
    } else if (type === "instagram") {
      window.open("https://www.instagram.com/kalyan_saxena/", "_blank");
    }
  };

  return (
    <div className="footer">
      <div className="left">
        <div className="logo">MADMERSE &#169; {date.getFullYear()}</div>
        <p className="desc">
          MADMERSE is an E-Commerce Personal Test Project created by using MERN
          Stack with the intention of learning purpose.
        </p>
        <div className="social-container">
          <div className="social-icon">
            <LinkedInIcon onClick={() => handleSocialClick("linkedin")} />
          </div>
          <div className="social-icon">
            <GitHubIcon onClick={() => handleSocialClick("github")} />
          </div>
          <div className="social-icon">
            <InstagramIcon onClick={() => handleSocialClick("instagram")} />
          </div>
        </div>
      </div>
      <div className="center">
        <div className="title">USEFUL LINKS</div>
        <ul className="links">
          <li>
            <Link to="/" className="link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/shop" className="link">
              Shop
            </Link>
          </li>
          <li>
            <Link to="/cart" className="link">
              Cart
            </Link>
          </li>
        </ul>
      </div>
      <div className="right">
        <div className="title">CONTACT</div>
        <div className="contact-item">
          <LocationOnIcon className="icon" />
          <div className="location">INDIA</div>
        </div>
        <div className="contact-item">
          <PhoneIcon className="icon" />
          <div className="ph-no">+91 9701169690</div>
        </div>
        <div className="contact-item">
          <MailOutlineIcon className="icon" />
          <div className="email">kalyansaxena123@gmail.com</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
