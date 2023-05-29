import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Cover from "../Shared/Cover/Cover";
import img from "../../assets/shop/banner2.jpg";
import useMenu from "../../hooks/useMenu";
import ShopItems from "./ShopItems";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const OurShop = () => {
  const categories = ["salad", "pizza", "dessert", "soup", "drinks"];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = useMenu();

  const desserts = menu.filter((item) => item.category === "dessert");
  const soups = menu.filter((item) => item.category === "soup");
  const salads = menu.filter((item) => item.category === "salad");
  const pizzas = menu.filter((item) => item.category === "pizza");
  const drinks = menu.filter((item) => item.category === "drinks");
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Order Food</title>
      </Helmet>
      <Cover img={img} title="Order Food"></Cover>
      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Dessert</Tab>
          <Tab>Soup</Tab>
          <Tab>Drinks</Tab>
        </TabList>
        <TabPanel>
          <ShopItems items={salads}></ShopItems>
        </TabPanel>
        <TabPanel>
          <ShopItems items={pizzas}></ShopItems>
        </TabPanel>
        <TabPanel>
          <ShopItems items={desserts}></ShopItems>
        </TabPanel>
        <TabPanel>
          <ShopItems items={soups}></ShopItems>
        </TabPanel>
        <TabPanel>
          <ShopItems items={drinks}></ShopItems>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default OurShop;
