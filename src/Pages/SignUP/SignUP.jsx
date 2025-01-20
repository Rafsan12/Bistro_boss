import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import SignUpImg from "../../assets/others/authentication2.png";
import { AuthContext } from "../../context";

export default function SignUP() {
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { createUser, updateUser } = useContext(AuthContext);

  const onFormSubmit = async (data) => {
    const { email, password, fullName, photoURL } = data;
    console.log("Submitted Data:", data);
    try {
      await createUser(email, password);
      await updateUser(fullName, photoURL);
      navigate("/");
      reset();
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  };

  return (
    <>
      <div className="bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center md:w-1/2 lg:text-left">
            <h1 className="text-5xl ml-24 font-bold">Sign Up Now!</h1>
            <img src={SignUpImg} alt="Sign Up" />
          </div>
          <div className="card md:w-1/2">
            <form onSubmit={handleSubmit(onFormSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Full Name</span>
                </label>
                <input
                  {...register("fullName", { required: true })}
                  type="text"
                  placeholder="Enter Your Full Name"
                  name="fullName"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  {...register("email", { required: true })}
                  type="email"
                  placeholder="Enter Your Email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  {...register("photoURL", { required: true })}
                  placeholder="Photo URL"
                  name="photoURL"
                  className="input input-bordered"
                  required
                />
              </div>
              {errors.photoURL && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.photoURL.message}
                </p>
              )}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters",
                    },
                    pattern: {
                      value: /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#]).+$/,
                      message:
                        "Password must include an uppercase letter, a number, and a special character",
                    },
                  })}
                  type="password"
                  placeholder="Enter Your Password"
                  name="password"
                  className="input input-bordered"
                  required
                />
              </div>
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
              <div className="form-control mt-6">
                <input
                  type="submit"
                  value="Sign Up"
                  className="btn btn-primary"
                />
              </div>
            </form>
            <p className="text-center">
              Already have an account?{" "}
              <Link to="/login" className="underline">
                Go to Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
