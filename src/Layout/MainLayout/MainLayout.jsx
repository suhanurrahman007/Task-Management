import { Link, NavLink } from "react-router-dom";
import avatar from "../../assets/avatar.png";
import logo from "../../assets/logo/logo.png";

const MainLayout = ({ children }) => {
    const linkStyle = (isActive, isPending) => {
      if (isPending) return "text-gray-500 bg-gray-100";
      if (isActive) return "text-blue-300 font-bold bg-[#010313]";
      return "text-white";
    };

    const commonClasses =
      "px-4  py-2 rounded-lg hover:underline hover:scale-110 hover:shadow-lg transition delay-150 duration-300 ease-in-out";

    const links = ["", "about", "blog", "activity", "help"].map(
      (path, index) => {
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
      }
    );
  return (
    <div className="drawer">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="w-full px-5 md:px-16 lg:px-20 bg-[#0d0d21] text-white navbar flex justify-between">
          <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="px-2 mx-2 text-center">
            <Link to={"/"} className="btn btn-ghost normal-case text-xl">
              <img className="w-9 rounded-full" src={logo} />
              <span className="text-md text-blue-100">FaporBaz</span>
            </Link>
          </div>
          <div className="flex-1 hidden lg:flex lg:items-center justify-center">
            <ul className="menu menu-horizontal">{links}</ul>
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src={avatar} />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] py-2  space-y-3 px-4 bg-[#202074] text-white shadow menu menu-sm dropdown-content hover:bg-[#010313] hover:text-blue-300   rounded-md w-28"
            >
              <Link className="hover:font-bold" to={"/"}>
                Home
              </Link>
              <hr className="border-gray-800" />
              <Link className="hover:font-bold" to={"/login"}>
                Login
              </Link>
            </ul>
          </div>
        </div>
        {/* Page content here */}
        {children}
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-[#0d0d21] text-white p-4 w-60 min-h-full">
          {links}
        </ul>
      </div>
    </div>
  );
};

export default MainLayout;
