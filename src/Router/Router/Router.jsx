import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Home from "../../Pages/Home/Home";
import About from "../../Pages/About/About";
import Blog from "../../Pages/Blog/Blog";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import Help from "../../Pages/Help/Help";
import Activity from "../../Pages/Activity/Activity";
import PrivetRouter from "../PrivetRouter/PrivetRouter";
import MyProfile from "../../Pages/Dashboard/MyProfile/MyProfile";
import Dashboard from "../../Layout/Dashboard/Dashboard";
import AddTask from "../../Pages/Dashboard/AddTask/AddTask";
import Task from "../../Pages/Dashboard/Task/Task";
import UpdateTask from "../../Pages/Dashboard/Task/UpdateTask";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "about",
        element: <About></About>,
      },
      {
        path: "blog",
        element: <Blog></Blog>,
      },
      {
        path: "activity",
        element: <Activity></Activity>,
      },
      {
        path: "help",
        element: <Help></Help>,
      },
    ],
  },

  {
    path: "/login",
    element: <Login></Login>,
  },

  {
    path: "/registration",
    element: <SignUp></SignUp>,
  },

  {
    path: "dashboard",
    element: (
      <PrivetRouter>
        <Dashboard></Dashboard>
      </PrivetRouter>
    ),
    children: [
      {
        path: "myProfile",
        element: <MyProfile></MyProfile>,
      },
      {
        path: "addTask",
        element: <AddTask></AddTask>,
      },
      {
        path: "tasklist",
        element: <Task></Task>,
      },
      {
        path: "updateTask/:id",
        element: <UpdateTask></UpdateTask>,
      },
    ],
  },
]);
export default router;
