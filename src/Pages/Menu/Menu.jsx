import { Helmet } from "react-helmet-async";
import MenuImg from "../../assets/menu/banner3.jpg";
import Cover from "../../components/Cover/Cover";
import PopularMenu from "../Home/PopularMenu/PopularMenu";

export default function Menu() {
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
      <PopularMenu />
    </>
  );
}
