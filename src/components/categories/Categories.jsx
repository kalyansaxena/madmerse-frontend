import "./categories.scss";
import { categories } from "../../data";
import CategoryItem from "../categoryItem/CategoryItem";

const Categories = () => {
  return (
    <div className="categories">
      {categories.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Categories;
