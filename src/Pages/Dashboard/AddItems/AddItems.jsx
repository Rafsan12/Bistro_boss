import { useForm } from "react-hook-form";
import { FaUtensils } from "react-icons/fa";
import { Bounce, toast } from "react-toastify";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useAxios from "../../../hooks/useAxios";
import useAxiosOpen from "../../../hooks/useAxiosOpen";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
export default function AddItems() {
  const { register, handleSubmit, reset } = useForm();
  const axiosOpen = useAxiosOpen();
  const axiosSecure = useAxios();

  const onSubmit = async (data) => {
    console.log(data);
    const imageFile = { image: data.image[0] };
    const response = await axiosOpen.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    const result = response.data;
    if (result.success) {
      const menuItem = {
        category: data.category,
        name: data.name,
        price: parseFloat(data.price),
        recipe: data.recipe,
        image: result.data.display_url,
      };

      const menuRes = await axiosSecure.post("/menu", menuItem);
      const menuResult = menuRes.data;
      console.log(menuResult);

      if (menuResult.insertedId) {
        reset();
        toast.success(`${data.name} added in the menu`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Bounce,
        });
      }
    }
    console.log(result);
  };
  return (
    <>
      <SectionTitle subHeading={"What's new?"} heading={"ADD AN ITEM"} />
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className="form-control w-full my-6 ">
            <div className="label">
              <span className="label-text">Recipe name</span>
            </div>
            <input
              {...register("name")}
              type="text"
              placeholder="Recipe name"
              className="input input-bordered w-full"
            />
          </label>
          <div className="flex gap-6">
            {/* Category */}
            <label className="form-control w-full my-6 ">
              <div className="label">
                <span className="label-text">Category</span>
              </div>
              <select
                {...register("category")}
                className="select select-warning w-full "
              >
                <option disabled selected>
                  Category
                </option>
                <option value="salad">Salad</option>
                <option value="pizza">Pizza</option>
                <option value="soup">Soup</option>
                <option value="desserts">Desserts</option>
                <option value="drinks">Drinks</option>
              </select>
            </label>

            {/* Price */}
            <label className="form-control w-full my-6 ">
              <div className="label">
                <span className="label-text">Price</span>
              </div>
              <input
                {...register("price")}
                type="number"
                placeholder="Price"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          {/* Recipe Details */}
          <label className="form-control">
            <div className="label">
              <span className="label-text">Recipe Details*</span>
            </div>
            <textarea
              {...register("recipe")}
              className="textarea textarea-bordered h-24"
              placeholder="Recipe Details"
            ></textarea>
          </label>
          <div className="my-6">
            <input
              {...register("image")}
              type="file"
              className="file-input file-input-bordered w-full max-w-xs"
            />
          </div>
          <button className="btn">
            Add Item <FaUtensils className="ml-4" />
          </button>
        </form>
      </div>
    </>
  );
}
