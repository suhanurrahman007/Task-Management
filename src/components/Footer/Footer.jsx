import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const linkStyle = (isActive, isPending) => {
    if (isPending) return "text-gray-500 bg-gray-100";
    if (isActive) return "text-blue-300 font-bold bg-[#010313]";
    return "text-white";
  };
  const commonClasses =
    "px-4  py-2 rounded-lg hover:underline hover:scale-110 hover:shadow-lg transition delay-150 duration-300 ease-in-out";

  const links = ["", "about", "blog", "activity", "help"].map((path, index) => {
    const text =
      index === 0 ? "Home" : path.charAt(0).toUpperCase() + path.slice(1);
    return (
      <NavLink
        key={path}
        to={`/${path}`}
        className={({ isActive, isPending }) =>
          `${linkStyle(isActive, isPending)} ${commonClasses}`
        }
      >
        {text}
      </NavLink>
    );
  });
  return (
    <div>
      <footer className="footer footer-center py-7 md:p-10 bg-[#0D0D21] text-white">
        <nav className="grid grid-flow-col gap-4">
          <div className="flex-1 lg:flex lg:items-center justify-center">
            <ul className="menu menu-horizontal">{links}</ul>
          </div>
        </nav>
        <nav>
          <div className="flex space-x-7">
            <a
              href="https://www.facebook.com/mohammed.suhan.359/"
              className=" text-3xl text-blue-500 hover:text-blue-700 transform hover:scale-125 transition-transform duration-300"
            >
              <FaFacebook />
            </a>
            <a
              href="#"
              className="text-3xl text-blue-500 hover:text-blue-700 transform hover:scale-125 transition-transform duration-300"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="#"
              className="text-3xl text-pink-500 hover:text-pink-700 transform hover:scale-125 transition-transform duration-300"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="text-3xl text-gray-500 hover:text-gray-700 transform hover:scale-125 transition-transform duration-300"
            >
              <FaGithub />
            </a>
            <a
              href="#"
              className="text-3xl text-blue-400 hover:text-blue-600 transform hover:scale-125 transition-transform duration-300"
            >
              <FaTwitter />
            </a>
          </div>
        </nav>
        <aside>
          <p>
            Copyright © 2023 - All right reserved by{" "}
            <span className="text-orange-700 font-bold">
              SCC Technovision Inc
            </span>
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
