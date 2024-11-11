import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import JarPage from "../page/JarPage";
import WsJar from "components/JarComponents/WsJar";
import JarCreate from "components/JarComponents/JarCreate";
import JarEdit from "../page/JarEdit";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/jar",
    element: <WsJar />,
    children: [
      {
        path: "create",
        element: <JarCreate />,
      },
      {
        path: "",
        element: <JarPage />,
      },
      {
        path: "edit/:id",
        element:<JarEdit />
      },
    ],
  },
]);
