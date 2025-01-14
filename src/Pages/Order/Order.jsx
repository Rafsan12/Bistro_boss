import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import OrderImg from "../../assets/shop/banner2.jpg";
import Cover from "../../components/Cover/Cover";
import { UseMenu } from "../../hooks/UseMenu";
import OrderTab from "./OrderTab";

export default function Order() {
  const categories = ["Salad", "pizza", "soup", "desserts", "drinks"];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category.toLowerCase());
  const [tabIndex, setTabIndex] = useState(initialIndex);

  const [menu] = UseMenu();
  const dessert = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");
  const drinks = menu.filter((item) => item.category === "drinks");
  return (
    <>
      <Helmet>
        <title>Bistro Boss | Order</title>
      </Helmet>
      <Cover
        bgImg={OrderImg}
        title={"Order Food"}
        subTitle={"Would you like to try a dish?"}
      />
      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList className="flex items-center justify-center mt-4 mb-4 space-x-4 p-2">
          <Tab>Salad</Tab>
          <Tab>Pizza</Tab>
          <Tab>Soups</Tab>
          <Tab>Desserts</Tab>
          <Tab>Drinks</Tab>
        </TabList>
        <TabPanel>
          <OrderTab items={salad} />
        </TabPanel>
        <TabPanel>
          <OrderTab items={pizza} />
        </TabPanel>
        <TabPanel>
          <OrderTab items={soup} />
        </TabPanel>
        <TabPanel>
          <OrderTab items={dessert} />
        </TabPanel>
        <TabPanel>
          <OrderTab items={drinks} />
        </TabPanel>
      </Tabs>
    </>
  );
}
