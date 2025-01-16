import { useContext, useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import {
  LoadCanvasTemplate,
  loadCaptchaEnginge,
  validateCaptcha,
} from "react-simple-captcha";
import SignUpImg from "../../assets/others/authentication2.png";
import { AuthContext } from "../../context";

export default function SignUP() {
  const captchaRef = useRef(null);
  const [loginDisabled, setLoginDisabled] = useState(true);
  const [error, setError] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { createUser } = useContext(AuthContext);
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const onFormSubmit = async (data) => {
    const { email, password, fullName } = data;
    console.log(data);
    try {
      await createUser(email, password, fullName);
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  };

  const handleValidateCaptcha = () => {
    const user_captcha_value = captchaRef.current.value;
    if (validateCaptcha(user_captcha_value) == true) {
      alert("Captcha Matched");
      setLoginDisabled(false);
    } else {
      alert("Captcha Does Not Match");
      setLoginDisabled(true);
    }
  };
  return (
    <>
      <div className="bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center md:w-1/2 lg:text-left">
            <h1 className="text-5xl ml-24 font-bold">Sign Up Now!</h1>
            <img src={SignUpImg} alt="" />
          </div>
          <div className="card  md:w-1/2">
            <form onSubmit={handleSubmit(onFormSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">FullName</span>
                </label>
                <input
                  {...register("fullName")}
                  type="name"
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
                  {...register("email")}
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  {...register("password")}
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
              <div className="form-control">
                <label className="label text-white">
                  <LoadCanvasTemplate />
                </label>
                <input
                  type="text"
                  ref={captchaRef}
                  placeholder="Type Captcha"
                  name="password"
                  className="input input-bordered"
                  required
                />
                <button
                  onClick={handleValidateCaptcha}
                  className="btn btn-xs mt-4"
                >
                  Validate
                </button>
              </div>
              <div className="form-control mt-6">
                <input
                  disabled={loginDisabled}
                  type="submit"
                  value="Sign Up"
                  className="btn btn-primary"
                />
              </div>
            </form>
            <p className="text-center">
              Already Have a Account?
              <Link to="/login">
                <span className="underline">Go To Login</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
