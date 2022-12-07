import Categories from "../categories/Categories";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Categories />
      <Footer />
    </div>
  );
};

export default Home;
