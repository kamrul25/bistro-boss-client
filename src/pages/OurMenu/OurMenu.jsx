import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover/Cover";
import menuImg from "../../assets/menu/banner3.jpg";
import dessert from "../../assets/menu/dessert-bg.jpeg";
import pizza from "../../assets/menu/pizza-bg.jpg";
import salad from "../../assets/menu/salad-bg.jpg";
import soup from "../../assets/menu/soup-bg.jpg";

import useMenu from "../../hooks/useMenu";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import MenuCategory from "./MenuCategory";

const OurMenu = () => {
  const [menu] = useMenu();
  const desserts = menu.filter((items) => items.category === "dessert");
  const salads = menu.filter((items) => items.category === "salad");
  const pizzas = menu.filter((items) => items.category === "pizza");
  const soups = menu.filter((items) => items.category === "soup");
  const offered = menu.filter((items) => items.category === "offered");
  console.log(menu);
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Our Menu</title>
      </Helmet>
      <Cover img={menuImg} title="our menu"></Cover>
      <SectionTitle
        subHeading="Don't miss"
        heading="Today's offered"
      ></SectionTitle>
      <MenuCategory  items={offered}></MenuCategory>
      <MenuCategory
        items={desserts}
        title="dissert"
        img={dessert}
      ></MenuCategory>
      <MenuCategory items={pizzas} title="pizza" img={pizza}></MenuCategory>
      <MenuCategory items={salads} title="salad" img={salad}></MenuCategory>
      <MenuCategory items={soups} title="soup" img={soup}></MenuCategory>
    </div>
  );
};

export default OurMenu;
