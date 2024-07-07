import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNave = () => {
  const [categories, setCatagories] = useState([]);
  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCatagories(data));
  }, []);
  return (
    <div className="space-y-6">
      <h1 className="text-2xl p-4"> All Cata </h1>
      {
        categories.map(category =>
        <Link className=" bg-gray-100 mb-3 block border p-2 ml-4 text-xl font-semibold "
        to={`/category/${category.id}`}
         key={category.id}
        >{category.name} 
        </Link>)
      }
    </div>
  );
};

export default LeftSideNave;
