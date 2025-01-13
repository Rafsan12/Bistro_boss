/* eslint-disable react/prop-types */
export default function FoodCard({ item }) {
  const { name, price, image, recipe } = item;
  return (
    <>
      <div className="card card-compact bg-base-100 w-96 shadow-xl">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <p className="bg-slate-900 text-white absolute right-0 mr-4 mt-4 px-4">
          ${price}
        </p>
        <div className="card-body text-center">
          <h2 className="text-2xl">{name}</h2>
          <p>{recipe}</p>
          <div className="">
            <button className="btn bg-slate-100 border-0 border-b-4 border-orange-500">
              Add To Card
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
