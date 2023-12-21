import { Link, useLocation, useNavigate } from "react-router-dom";
import signUpImg from "../../assets/signUp/signUp.png";
import { useState } from "react";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";
const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  console.log(name, email, password, photoUrl);

  const { createUser } = useAuth();
  // console.log(createUser);
  const location = useLocation();
  const navigate = useNavigate();

  const handleRegistration = async (e) => {
    e.preventDefault();
    const passwordPatternUpper = /(?=.*?[A-Z])/;
    const passwordPatternSpecial = /(?=.*?[#?!@$%^&*-])/;

    if (password.length < 6) {
      setError("Password Should Be At Least 6 Characters");
      return;
    }

    if (!passwordPatternUpper.test(password)) {
      setError("Password Must Be One Upper Case");
      return;
    }

    if (!passwordPatternSpecial.test(password)) {
      setError("Password Must Be One Special Character");
      return;
    }

    setError("");

    try {
      const result = await createUser(email, password);
      console.log("created", result.user);

      toast.success("Successfully Sign up your account!");
      navigate(location?.state ? location.state : "/");
    } catch (error) {
      console.log(error.message);
      toast.error(`${error.message}`);
    }
  };

  return (
    <div className="grid lg:grid-cols-2 gap-5 py-14 px-5 bg-[#010313]">
      <div className="flex justify-center items-center">
        <img className="md:h-[500px]" src={signUpImg} alt="" />
      </div>

      <div className="card flex-shrink-0 w-full lg:max-w-sm shadow-2xl bg-[#0e0d21] ">
        <Link to={"/"} className="text-3xl mt-4 font-extrabold text-center text-[#c29a4b] text-opacity-50">
          Sign Up Please
        </Link>

        <form onSubmit={handleRegistration} className="card-body ">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">
                User Name <span className="text-red-700">*</span>
              </span>
            </label>
            <input
              type="text"
              onBlur={(e) => setName(e.target.value)}
              name="name"
              placeholder="Enter your full Name"
              className="input bg-black text-white input-bordered placeholder:text-xs"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">
                Email <span className="text-red-700">*</span>
              </span>
            </label>
            <input
              type="email"
              onBlur={(e) => setEmail(e.target.value)}
              name="email"
              placeholder="Enter your email"
              className="input bg-black text-white input-bordered placeholder:text-xs"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">
                Photo URL <span className="text-red-700">*</span>
              </span>
            </label>
            <input
              type="text"
              onBlur={(e) => setPhotoUrl(e.target.value)}
              name="photoUrl"
              placeholder="Enter the photo URL"
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
              type={showPassword ? "text" : "password"}
              name="password"
              onBlur={(e) => setPassword(e.target.value)}
              placeholder="Enter your new password"
              className="input input-bordered bg-black text-white placeholder:text-xs"
              required
            />

            <div className="inline-flex items-center">
              <label
                className="relative flex cursor-pointer items-center rounded-full p-3"
                htmlFor="checkbox"
                data-ripple-dark="true"
              >
                <input
                  onClick={() => setShowPassword(!showPassword)}
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
                  {showPassword ? "Hide Password" : "Show Password"}
                </span>
              </label>
            </div>
          </div>

          <div className="form-control mt-6">
            <button
              type="submit"
              className="btn border-none text-white bg-[#2c1e6d] hover:bg-[#140d32]"
            >
              Sign Up
            </button>
          </div>
        </form>

        {error && (
          <p className="text-red-900 text-center -mt-5 py-3">{error}</p>
        )}
        <p className="mb-7 flex justify-center font-sans text-sm font-light leading-normal text-inherit antialiased">
          <span className="text-white">Already have an account?</span>
          <Link
            to={"/login"}
            href="#" //signup
            className="ml-1 block font-sans text-sm font-bold leading-normal text-[#c5a35e] antialiased"
          >
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
