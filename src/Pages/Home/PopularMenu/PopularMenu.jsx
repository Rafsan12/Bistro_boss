import { useEffect, useState } from "react";
import MenuItem from "../../../components/MenuItem/MenuItem";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

export default function PopularMenu() {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    const fetchMenuData = async () => {
      const response = await fetch("menu.json");
      const result = await response.json();
      const popularMenu = result.filter((item) => item.category === "popular");
      setMenu(popularMenu);
    };
    fetchMenuData();
  }, []);
  return (
    <div className="mb-12">
      <SectionTitle heading={"FROM OUR MENU"} subHeading={"Check it out"} />
      <div className="grid md:grid-cols-2 gap-12">
        {menu.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
}
