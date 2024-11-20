import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import JarPage from "../page/Jar/JarPage";
import WsJar from "page/Jar/WsJar";
import JarCreate from "components/JarComponents/JarCreate";
import JarEdit from "page/Jar/JarEdit";
import WsProduct from "page/Product/WsProduct";
import ProductCreate from "page/Product/ProductCreate";
import ProductPage from "page/Product/ProudctPage";
import { Layout } from "../layout";
import ProductGetOne from "page/Product/ProductGetOne";
import ProductEdit from "page/Product/ProductEdit";
import JarGetOne from "page/Jar/JarGetOne";
import DashboardPage from "page/Dashboard/DashboardPage";
import DashboardLayout from "page/Dashboard/DashboardLayout";
import WsDashboard from "page/Dashboard/WsDashboard";
import AppCreate from "page/Dashboard/AppCreate";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <WsDashboard />,
        children: [
          {
            path: "",
            element: <DashboardLayout />,
            children: [
              {
                path: "",
                element: <DashboardPage />,
              },
              {
                path: "jar",
                element: <DashboardPage />,
              },
            ],
          },
          {
            path: "app/create",
            element: <AppCreate />,
          },
        ],
      },
    ],
  },
 
  {
    path: "/jar",
    element: <Layout />,
    children: [
      {
        path: "",
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
            path: "edit",
            element: <JarGetOne />,
          },
          {
            path: "getone/:id",
            element: <JarEdit />,
          },
        ],
      },
    ],
  },
  {
    path: "/product",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <WsProduct />,
        children: [
          {
            path: "create",
            element: <ProductCreate />,
          },
          {
            path: "",
            element: <ProductPage />,
          },
          {
            path: "edit",
            element: <ProductEdit />,
          },
          {
            path: "getone/:id",
            element: <ProductGetOne />,
          },
        ],
      },
    ],
  },
]);
