import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import loginImg from "../../assets/login/login.svg"
const Login = () => {
  return (
    <div className="grid md:grid-cols-2 gap-5 p-5 py-14 bg-[#010313]">
      <div className="flex justify-center items-center">
        <img className="w-full md:w-96" src={loginImg} alt="" />
      </div>

      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-[#0e0d21] ">
        <h2 className="text-3xl mt-4 font-extrabold text-center text-[#c29a4b] text-opacity-50">
          Sign In Please
        </h2>

        <form className="card-body ">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">
                Email <span className="text-red-700">*</span>
              </span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="input bg-black text-white input-bordered placeholder:text-xs"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">
                Password <span className="text-red-700">*</span>
              </span>
            </label>
            <input
              // type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter your new password"
              className="input input-bordered bg-black text-white placeholder:text-xs"
              required
            />
            <label className="label flex justify-end">
              <a
                href="#"
                className="label-text-alt link link-hover text-blue-700 hover:text-blue-900"
              >
                Forgot password?
              </a>
            </label>

            <div className="inline-flex items-center">
              <label
                className="relative flex cursor-pointer items-center rounded-full p-3"
                htmlFor="checkbox"
                data-ripple-dark="true"
              >
                <input
                  // onClick={() => setShowPassword(!showPassword)}
                  type="checkbox"
                  className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-pink-500 checked:bg-pink-500 checked:before:bg-pink-500 hover:before:opacity-10"
                  id="checkbox"
                />
                <span className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3.5 w-3.5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    stroke="currentColor"
                    // stroke-width="1"
                  >
                    <path
                      //   fill-rule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      //   clip-rule="evenodd"
                    ></path>
                  </svg>
                </span>
              </label>
              <label
                className="mt-px cursor-pointer select-none font-light text-gray-700"
                htmlFor="checkbox"
              >
                <span className="text-white">
                  Show Password
                  {/* {showPassword ? "Hide Password" : "Show Password"} */}
                </span>
              </label>
            </div>
          </div>

          <div className="form-control mt-6">
            <button
              type="submit"
              className="btn border-none text-white bg-[#2c1e6d] hover:bg-[#140d32]"
            >
              Log In
            </button>
          </div>
        </form>

        <span className="flex justify-center items-center px-9 -mt-6 mb-3">
          <div className="border border-gray-800 w-full h-0"></div>{" "}
          <span className="px-3 text-white">Or</span>{" "}
          <div className="border border-gray-800 w-full h-0"></div>
        </span>

        {/* {loginError && (
            <p className="text-red-900 text-center -mt-5 py-3">{loginError}</p>
          )} */}
        <div className="text-3xl px-7 space-y-5 mb-4">
          <button
            type="submit"
            className="btn btn-outline btn-[#140d32] w-full text-white bg-[#0e0d21] hover:bg-[#140d32]"
          >
            <FcGoogle className="transition-all text-xl hover:scale-125"></FcGoogle>
            <span className="normal-case text-xs">Sign in with Google</span>
          </button>

          <button
            type="submit"
            className="btn btn-outline btn-[#140d32] w-full text-white bg-[#0e0d21] hover:bg-[#140d32]"
          >
            <FaGithub className="text-xl transition-all hover:scale-125"></FaGithub>
            <span className="normal-case text-xs">Sign in with Github</span>
          </button>
        </div>

        <p className="mb-7 flex justify-center font-sans text-sm font-light leading-normal text-inherit antialiased">
          <span className="text-white">Do Not have an account?</span>
          <Link
            to={"/registration"}
            href="#" //signup
            className="ml-1 block font-sans text-sm font-bold leading-normal text-[#c5a35e] antialiased"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
