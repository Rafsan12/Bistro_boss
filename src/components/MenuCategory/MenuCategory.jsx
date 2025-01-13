/* eslint-disable react/prop-types */
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
    </>
  );
}
