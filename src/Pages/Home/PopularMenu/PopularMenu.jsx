import MenuItem from "../../../components/MenuItem/MenuItem";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { UseMenu } from "../../../hooks/UseMenu";

export default function PopularMenu() {
  const [menu] = UseMenu();
  const popularMenu = menu.filter((item) => item.category === "popular");

  return (
    <div className="mb-12">
      <SectionTitle heading={"FROM OUR MENU"} subHeading={"Check it out"} />
      <div className="grid md:grid-cols-2 gap-12">
        {popularMenu.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
}
