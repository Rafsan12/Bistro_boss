import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import {
  LoadCanvasTemplate,
  loadCaptchaEnginge,
  validateCaptcha,
} from "react-simple-captcha";

export default function Login() {
  const captchaRef = useRef(null);
  const [loginDisabled, setLoginDisabled] = useState(true);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  useEffect(() => {
    loadCaptchaEnginge(8);
  }, []);

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
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center md:w-1/2 lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 md:w-1/2 max-w-sm  shadow-2xl">
            <form onSubmit={handleSubmit()} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
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
                  value="Login"
                  className="btn btn-primary"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
