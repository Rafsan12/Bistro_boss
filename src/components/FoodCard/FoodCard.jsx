import { useLocation, useNavigate } from "react-router-dom";
import { Bounce, toast } from "react-toastify";
import useAuth from "../../hooks/useAuth";
import useAxios from "../../hooks/useAxios";
import useCart from "../../hooks/useCart";

/* eslint-disable react/prop-types */
export default function FoodCard({ item }) {
  const { name, price, image, recipe, _id } = item;
  const axiosSecure = useAxios();
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [, refetch] = useCart();
  const handleAddToCart = async () => {
    if (user && user.email) {
      const cartITem = {
        menuId: _id,
        email: user.email,
        name,
        price,
        image,
      };
      const response = await axiosSecure.post("/carts", cartITem);
      if (response.data.insertedId) {
        toast.success(`Your food ${name} add in the cart`, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
        refetch();
      }
      const result = response.data;

      console.log(result);
    } else {
      toast.error("Please login in your account");
      navigate("/login", { state: { from: location } });
    }
  };
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
            <button
              onClick={handleAddToCart}
              className="btn bg-slate-100 border-0 border-b-4 border-orange-500"
            >
              Add To Card
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
