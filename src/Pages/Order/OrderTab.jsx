/* eslint-disable react/prop-types */
import FoodCard from "../../components/FoodCard/FoodCard";

export default function OrderTab({ items }) {
  return (
    <>
      <div className="grid md:grid-cols-3 gap-12">
        {items.map((item) => (
          <FoodCard key={item._id} item={item} />
        ))}
      </div>
    </>
  );
}
