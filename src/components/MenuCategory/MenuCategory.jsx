/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import Cover from "../Cover/Cover";
import MenuItem from "../MenuItem/MenuItem";

export default function MenuCategory({ items, bgImg, title, subTitle }) {
  return (
    <>
      {title && <Cover bgImg={bgImg} title={title} subTitle={subTitle} />}
      <div className="grid md:grid-cols-2 gap-12 mb-12 my-12">
        {items.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
      <div className="flex items-center justify-center">
        <Link to={`/order/${title}`}>
          <Button name={"ORDER YOUR FAVOURITE FOOD"} />
        </Link>
      </div>
    </>
  );
}
