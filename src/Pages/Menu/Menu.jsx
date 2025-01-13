import { Helmet } from "react-helmet-async";
import MenuImg from "../../assets/menu/banner3.jpg";
import DessertImg from "../../assets/menu/dessert-bg.jpeg";
import PizzaImg from "../../assets/menu/pizza-bg.jpg";
import SaladImg from "../../assets/menu/salad-bg.jpg";
import SoupImg from "../../assets/menu/soup-bg.jpg";
import Cover from "../../components/Cover/Cover";
import MenuCategory from "../../components/MenuCategory/MenuCategory";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { UseMenu } from "../../hooks/UseMenu";

export default function Menu() {
  const [menu] = UseMenu();
  const dessert = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");
  const offered = menu.filter((item) => item.category === "offered");
  return (
    <>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Cover
        bgImg={MenuImg}
        title={"Our Menu"}
        subTitle={"Would you like to try a dish?"}
      />
      <SectionTitle subHeading={"Don't miss"} heading={"TODAY'S OFFER"} />
      <MenuCategory items={offered} />
      <MenuCategory
        bgImg={DessertImg}
        title={"DESSERTS"}
        subTitle={"Indulge in Sweet Temptations"}
        items={dessert}
      />
      <MenuCategory
        bgImg={PizzaImg}
        title={"Pizza"}
        subTitle={"Freshly Baked, Full of Flavor"}
        items={pizza}
      />
      <MenuCategory
        bgImg={SaladImg}
        title={"Salad"}
        subTitle={"Fresh, Crisp, and Delightfully Healthy"}
        items={salad}
      />
      <MenuCategory
        bgImg={SoupImg}
        title={"Soup"}
        subTitle={"Warm, Comforting, and Packed with Flavor"}
        items={soup}
      />
    </>
  );
}
