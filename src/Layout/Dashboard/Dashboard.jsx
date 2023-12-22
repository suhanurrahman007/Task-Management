import { FaAd, FaHome } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { SiTask } from "react-icons/si";
import { VscThreeBars } from "react-icons/vsc";
import { Link, NavLink, Outlet } from "react-router-dom";
import logo from "../../assets/logo/logo.png";
import useAuth from "../../Hooks/useAuth";
import { Helmet } from "react-helmet";

const Dashboard = () => {
    const {user, logout} = useAuth()
    const handleLogout = async () => {
      try {
        const user = await logout();
        console.log(user);
      } catch (error) {
        console.log(error.message);
      }
    };
  const UserSidebarLinks = (
    <>
      <li id="sidebar">
        <NavLink
          to="/dashboard/myProfile"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          <CgProfile></CgProfile>
          My Profile
        </NavLink>
      </li>

      <li id="sidebar">
        <NavLink
          to="/dashboard/addTask"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          <FaAd></FaAd>
          Task Form
        </NavLink>
      </li>

      <li id="sidebar">
        <NavLink
          to="/dashboard/tasklist"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          <SiTask></SiTask>
          Task List
        </NavLink>
      </li>
    </>
  );

  

  return (
    <div>
      <Helmet>
        <title>Technovision - Dashboard</title>
      </Helmet>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <div className="bg-[#0D0D21] flex justify-between items-center py-3 px-5 lg:hidden">
            <label
              htmlFor="my-drawer-2"
              className="btn w-20 bg-[#0D0D21] border-none  text-white drawer-button lg:hidden"
            >
              <span className="text-2xl">
                <VscThreeBars></VscThreeBars>
              </span>
            </label>
            <Link
              to={"/"}
              className="btn btn-ghost normal-case items-center text-xs md:text-xl"
            >
              <span>
                <img className="w-10" src={logo} alt="" />
              </span>
              <span className="text-white">Technovision</span>
            </Link>
          </div>
          {/* Page content here */}
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-72 min-h-full text-white bg-[#0D0D21] flex justify-between">
            {/* Sidebar content here */}
            <div>
              <div>
                <Link
                  to={"/"}
                  className="flex space-x-2 font-bold mt-5 normal-case items-center text-xs md:text-xl"
                >
                  <span>
                    <img
                      className="w-10"
                      src={logo}
                      alt=""
                    />
                  </span>
                  <span className="text-white">Technovision</span>
                </Link>
              </div>
              <div className="divider"></div>
              <div>{UserSidebarLinks}</div>
              <div className="divider"></div>
            </div>
            <div>
              <li id="sidebar">
                <NavLink
                  to="/"
                  className={({ isActive, isPending }) =>
                    isPending ? `pending` : isActive ? `active` : ""
                  }
                >
                  <span>
                    <FaHome></FaHome>
                  </span>
                  Home
                </NavLink>
              </li>
              <div>
                <li id="sidebar">
                  {user ? (
                    <button
                      className={({ isActive, isPending }) =>
                        isPending ? `pending` : isActive ? `active` : ""
                      }
                      onClick={handleLogout}
                    >
                      <span>
                        <MdLogout></MdLogout>
                      </span>
                      Logout
                    </button>
                  ) : (
                    ""
                  )}
                </li>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
