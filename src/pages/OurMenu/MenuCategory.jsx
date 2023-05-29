import { Link } from "react-router-dom";
import Cover from "../Shared/Cover/Cover";
import MenuItem from "../Shared/MenuItem/MenuItem";
import { useEffect, useState } from "react";

const MenuCategory = ({ items, title, img }) => {
  const [orderedButton, steOrderedButton] = useState(false);
  useEffect(() => {
    const newButton = items.filter((item) => item.category === "offered");
  
    if (newButton.length > 0) {
      steOrderedButton(false);
    } else {
      steOrderedButton(true);
    }
  }, [items]);
  return (
    <div>
      {title && <Cover img={img} title={title}></Cover>}
      <div className="grid md:grid-cols-2 gap-10 my-10">
        {items.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      {orderedButton && (
        <div className=" flex justify-center">
          <Link
            to={`../ordered/${title}`}
            className="btn btn-outline mb-5 mx-auto "
          >
            {" "}
            ordered
          </Link>
        </div>
      )}
    </div>
  );
};

export default MenuCategory;
