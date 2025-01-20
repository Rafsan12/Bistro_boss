import { useContext, useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  LoadCanvasTemplate,
  loadCaptchaEnginge,
  validateCaptcha,
} from "react-simple-captcha";
import SignUpImg from "../../assets/others/authentication2.png";
import { AuthContext } from "../../context";

export default function Login() {
  const captchaRef = useRef(null);
  const [loginDisabled, setLoginDisabled] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { signInUser } = useContext(AuthContext);
  useEffect(() => {
    loadCaptchaEnginge(8);
  }, []);

  const onSubmit = async (data) => {
    const { email, password } = data;
    try {
      await signInUser(email, password);
      navigate(from, { replace: true });
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
            <h1 className="text-5xl ml-24 font-bold">Login now!</h1>
            <img src={SignUpImg} alt="" />
          </div>
          <div className="card md:w-1/2 ">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
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
                {/* <button
                  onClick={handleValidateCaptcha}
                  className="btn btn-xs mt-4"
                >
                  Validate
                </button> */}
              </div>
              <div className="form-control mt-6">
                <input
                  onClick={handleValidateCaptcha}
                  // disabled={loginDisabled}
                  type="submit"
                  value="Login"
                  className="btn btn-primary"
                />
              </div>
            </form>
            <p className="text-center">
              New Here?
              <Link to="/signup">
                <span className="underline">Create a account</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
