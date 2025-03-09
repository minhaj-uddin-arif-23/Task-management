import Task from "@/componets/Task";
import User from "@/componets/User";
import Mainlayout from "@/mainlayout/Mainlayout";
import { createBrowserRouter } from "react-router-dom";

export const routers = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout />,
    children: [
      {
        index:true,
        element: <Task />,
      },
      {
        path: 'users',
        element:<User />
      }
    ],
  },
]);
