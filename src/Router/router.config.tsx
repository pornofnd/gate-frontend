import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import JarPage from "../page/JarPage";
import CreateJar from "components/CreateJar";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/jar",
    element: <JarPage />,
    children: [
      // {
      //   path: "",
      //   element: <JarHome />,
      // },
      {
        path: "create",
        element: <CreateJar />,
      },
    ],
  },
]);
